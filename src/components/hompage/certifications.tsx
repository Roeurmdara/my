"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

type Cert = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  image?: string;
  description: string;
  tags: string[];
};

const certs: Cert[] = [
  {
    id: 1,
    title: "Build your AI App",
    issuer: "FlutterFlow",
    date: "2025",
    credentialId: "ABC-123-UX",
    verifyUrl: "#",
    image: "flutter.jpg",
    description: "Comprehensive program covering AI app development, UX design principles, and prototyping using FlutterFlow.",
    tags: ["UX Design", "Prototyping", "FlutterFlow", "AI Integration"],
  },
  {
    id: 2,
    title: "ASEAN Data Science Explorer",
    issuer: "NICC",
    date: "2024",
    credentialId: "AWS-CLF-001",
    verifyUrl: "#",
    image: "photo_2026-01-30_17-03-46.jpg",
    description: "Certification focusing on data science concepts, tools, and applications in the ASEAN region.",
    tags: ["Cloud Computing", "Data Science", "Security"],
  },
  {
    id: 3,
    title: "Climate and Environment Policy 101",
    issuer: "ASEAN Youth Organization",
    date: "2025",
    credentialId: "AWS-CSA-002",
    verifyUrl: "#",
    image: "Ayoe.jpg",
    description: "Advanced certification demonstrating knowledge of climate and environment policy in ASEAN countries.",
    tags: ["Climate Policy", "Environment", "ASEAN", "Sustainability"],
  },
  {
    id: 4,
    title: "កីឡាជាតិ",
    issuer: "Rupp",
    date: "2025",
    credentialId: "ABC-123-DA",
    verifyUrl: "#",
    image: "phonon.jpg",
    description: "លិខិតថ្លែង សម្រាប់ការប្រកួតកីឡាជាតិឆ្នាំ2025។",
    tags: ["Sports", "National Games", "Rupp", "Athletics"],
  },
  {
    id: 5,
    title: "Spring InternShip Program ",
    issuer: "Spring Education",
    date: "2024",
    credentialId: "ABC-123-PM",
    verifyUrl: "#",
    image: "presentation.jpg",
    description: "Internship program focused on project management principles, tools, and best practices.",
    tags: ["Project Management", "Internship", "Spring Education","Top 2 menber"],
  },
  {
    id: 6,
    title: "Deploma",
    issuer: "Ministry of Education Youth and Sport",
    date: "2023",
    credentialId: "META-FE-001",
    verifyUrl: "#",
    image: "b.jpg",
    description: "Grede B Deploma from Ministry of Education Youth and Sport in Cambodia.",
    tags: ["Deploma", "Education", "Ministry of Education" ],
  },
  {
    id: 7,
    title: "Local youth ambassador",
    issuer: "ASEAN Youth Organization",
    date: "2024",
    credentialId: "AZ-900",
    verifyUrl: "#",
    image: "AYO.jpg",
    description: "Local youth ambassador certification from ASEAN Youth Organization.",
    tags: ["Youth Ambassador", "ASEAN", "Leadership", "Community Service"],
  },
   {
    id: 8,
    title: "Startup Camp ",
    issuer: "NICC",
    date: "2024",
    credentialId: "AZ-900",
    verifyUrl: "#",
    image: "startup.jpg",
    description: "Certification in startup development, business modeling, and entrepreneurial skills.",
    tags: ["Startup", "Entrepreneurship", "Business Modeling", "Innovation"],
  },
   {
    id: 9,
    title: "Engineering Day",
    issuer: "Rupp",
    date: "2024",
    credentialId: "AZ-900",
    verifyUrl: "#",
    image: "rupp.jpg",
    description: "Certification in engineering principles and practices at Rupp University.",
    tags: ["Engineering", "Rupp", "Principles", "Top 3 project"],
  },
   {
    id: 10,
    title: "Full Stack Web Development",
    issuer: "ISARD",
    date: "2024",
    credentialId: "AZ-900",
    verifyUrl: "#",
    image: "fullstarck.jpg",
    description: "Foundational certification covering full stack web development concepts, tools, and best practices.",
    tags: ["Web Development", "Full Stack", "Programming", "ISARD"],
  },
];

// Create infinite loop by duplicating the entire certs array 3 times
const infiniteCerts = [...certs, ...certs, ...certs];

// Group the infinite certs into slides of 3
const groupedCerts: Cert[][] = [];
for (let i = 0; i < infiniteCerts.length; i += 3) {
  groupedCerts.push(infiniteCerts.slice(i, i + 3));
}

// Calculate how many slides in one complete set
const slidesPerSet = Math.ceil(certs.length / 3);

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(slidesPerSet); // Start at middle set
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle infinite loop logic after transition
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // Reset to middle set when reaching boundaries (without transition)
      if (currentIndex >= slidesPerSet * 2) {
        setCurrentIndex(slidesPerSet);
      } else if (currentIndex < slidesPerSet) {
        setCurrentIndex(slidesPerSet * 2 - 1);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
        resetAutoPlay();
      }
      if (e.key === "ArrowRight") {
        handleNext();
        resetAutoPlay();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isTransitioning]);

  const handleDragStart = (clientX: number) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    const resistance = 0.5;
    setDragOffset(diff * resistance);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 80;
    const velocity = dragOffset;

    if (velocity > threshold) {
      handlePrev();
    } else if (velocity < -threshold) {
      handleNext();
    }

    setDragOffset(0);
    resetAutoPlay();
  };

  // Get display index for dots (loop within original range)
  const getDisplayIndex = () => {
    return currentIndex % slidesPerSet;
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Calculate the target index in the middle set
    const targetIndex = slidesPerSet + index;
    setCurrentIndex(targetIndex);
    resetAutoPlay();
  };

  if (!isClient) return null;

  return (
    <section className="py-32 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-black dark:text-white">
            Certifications
          </h2>
          <p className="text-gray-500 dark:text-gray-300 font-light">
            Professional credentials and achievements
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Cards Slider */}
          <div
            ref={sliderRef}
            className={`flex ${
              isDragging ? "" : isTransitioning ? "transition-transform duration-600 ease-out" : ""
            } cursor-grab active:cursor-grabbing select-none`}
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              handleDragStart(e.clientX);
            }}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            {groupedCerts.map((slideGroup, slideIdx) => (
              <div key={slideIdx} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                  {slideGroup.map((cert, certIdx) => (
                    <div key={`${slideIdx}-${cert.id}-${certIdx}`} className="group">
                      {/* Image */}
                      <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-lg">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                          draggable="false"
                        />
                      </div>

                      {/* Content */}
                      <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                        {cert.issuer} · {cert.date}
                      </p>
                      <h3 className="text-2xl font-light text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition mb-3">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light line-clamp-2 mb-4">
                        {cert.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.tags.slice(0, 3).map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-xs text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Verify Link */}
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          Verify Credential
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => {
              handlePrev();
              resetAutoPlay();
            }}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:scale-110 active:scale-95 shadow-lg z-10"
            aria-label="Previous certification"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={() => {
              handleNext();
              resetAutoPlay();
            }}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:scale-110 active:scale-95 shadow-lg z-10"
            aria-label="Next certification"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-16">
          {Array.from({ length: slidesPerSet }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                getDisplayIndex() === idx
                  ? "bg-black dark:bg-white w-8"
                  : "bg-gray-300 dark:bg-gray-700 w-1.5 hover:bg-gray-400 dark:hover:bg-gray-600 hover:w-4"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}