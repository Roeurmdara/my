"use client";

import { useRef } from "react";
import Image from "next/image";
import { Award, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

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
    image: "/flutter.jpg",
    description:
      "Comprehensive program covering AI app development, UX design principles, and prototyping using FlutterFlow.",
    tags: ["UX Design", "Prototyping", "FlutterFlow", "AI Integration"],
  },
  {
    id: 2,
    title: "ASEAN Data Science Explorer",
    issuer: "NICC",
    date: "2024",
    credentialId: "AWS-CLF-001",
    verifyUrl: "#",
    image: "/photo_2026-01-30_17-03-46.jpg",
    description:
      "Certification focusing on data science concepts, tools, and applications in the ASEAN region.",
    tags: ["Cloud Computing", "Data Science", "Security"],
  },
  {
    id: 3,
    title: "Climate and Environment Policy 101",
    issuer: "ASEAN Youth Organization",
    date: "2025",
    credentialId: "AWS-CSA-002",
    verifyUrl: "#",
    image: "/Ayoe.jpg",
    description:
      "Advanced certification demonstrating knowledge of climate and environment policy in ASEAN countries.",
    tags: ["Climate Policy", "Environment", "ASEAN", "Sustainability"],
  },
  {
    id: 4,
    title: "កីឡាជាតិ",
    issuer: "RUPP",
    date: "2025",
    credentialId: "ABC-123-DA",
    verifyUrl: "#",
    image: "/phonon.jpg",
    description: "លិខិតថ្លែងអំណរគុណ សម្រាប់ការប្រកួតកីឡាជាតិឆ្នាំ2025។",
    tags: ["Sports", "National Games", "RUPP", "Athletics"],
  },
  {
    id: 5,
    title: "Spring InternShip Program",
    issuer: "Spring Education",
    date: "2024",
    credentialId: "ABC-123-PM",
    verifyUrl: "#",
    image: "/presentation.jpg",
    description: "Internship program focused on project management principles, tools, and best practices.",
    tags: ["Project Management", "Internship", "Top 2 Member"],
  },
  {
    id: 6,
    title: "Diploma",
    issuer: "Ministry of Education Youth and Sport",
    date: "2023",
    credentialId: "META-FE-001",
    verifyUrl: "#",
    image: "/B.jpg",
    description: "Grade B Diploma from Ministry of Education Youth and Sport in Cambodia.",
    tags: ["Diploma", "Education", "Ministry Honors"],
  },
  {
    id: 7,
    title: "Local youth ambassador",
    issuer: "ASEAN Youth Organization",
    date: "2024",
    credentialId: "AZ-900",
    verifyUrl: "#",
    image: "/AYO.jpg",
    description:
      "Local youth ambassador certification from ASEAN Youth Organization.",
    tags: ["Youth Ambassador", "ASEAN", "Leadership", "Community Service"],
  },
  {
    id: 8,
    title: "Startup Camp",
    issuer: "NICC",
    date: "2024",
    credentialId: "AZ-900",
    verifyUrl: "#",
    image: "/startup.jpg",
    description:
      "Certification in startup development, business modeling, and entrepreneurial skills.",
    tags: ["Startup", "Entrepreneurship", "Innovation"],
  },
  {
    id: 9,
    title: "Engineering Day",
    issuer: "RUPP",
    date: "2024",
    credentialId: "AZ-900",
    verifyUrl: "#",
    image: "/rupp.jpg",
    description:
      "Certification in engineering principles and practices at RUPP University.",
    tags: ["Engineering", "RUPP", "Top 3 Project"],
  },
  {
    id: 10,
    title: "Full Stack Web Development",
    issuer: "ISARD",
    date: "2024",
    credentialId: "AZ-900",
    verifyUrl: "#",
    image: "/fullstarck.jpg",
    description:
      "Foundational certification covering full stack web development concepts, tools, and best practices.",
    tags: ["Web Development", "Full Stack", "ISARD"],
  },
];

export default function Certifications() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="certifications" className="scroll-mt-24" aria-label="Certifications">
      <div className="border-[3px] border-[#090909] bg-white p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#090909] relative neo-grid-pattern">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-[3px] border-[#090909]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-[#C5F451] px-3 py-1 font-mono text-xs font-black uppercase text-[#090909] shadow-[2px_2px_0px_#090909]">
              <Award className="h-3.5 w-3.5 text-[#090909]" />
              {"//"} ACCREDITATIONS &amp; HONORS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase text-[#555555] mr-2">
              {certs.length} CREDENTIALS
            </span>
            <button
              onClick={() => scroll("left")}
              className="border-2 border-[#090909] bg-white p-2 shadow-[2px_2px_0px_#090909] hover:bg-[#C5F451] active:translate-x-[1px] active:translate-y-[1px] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="border-2 border-[#090909] bg-white p-2 shadow-[2px_2px_0px_#090909] hover:bg-[#C5F451] active:translate-x-[1px] active:translate-y-[1px] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#090909]">
            CERTIFICATIONS &amp; ACHIEVEMENTS
          </h2>
          <p className="mt-2 text-sm text-[#555555] font-medium leading-relaxed max-w-2xl">
            Continuous development through hackathons, international workshops, engineering showcases, and specialized training programs.
          </p>
        </div>

        {/* Carousel Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto pb-5 pt-1 scroll-smooth scrollbar-none"
        >
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="w-[280px] sm:w-[320px] shrink-0 border-[3px] border-[#090909] bg-[#F5F3ED] p-4 shadow-[5px_5px_0px_#090909] flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-[#090909] bg-white shadow-[2px_2px_0px_#090909]">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 border-2 border-[#090909] bg-[#FF789D] px-2 py-0.5 font-mono text-[10px] font-black uppercase shadow-[1px_1px_0px_#090909]">
                    {cert.date}
                  </div>
                </div>

                {/* Issuer & Title */}
                <div className="mt-3 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase text-[#555555]">
                  <Building2 className="h-3 w-3" />
                  <span>{cert.issuer}</span>
                </div>

                <h3 className="mt-1 font-sans font-black text-sm uppercase text-[#090909] line-clamp-1">
                  {cert.title}
                </h3>

                <p className="mt-1.5 text-xs text-[#555555] font-medium leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-4 pt-3 border-t-2 border-[#090909] flex flex-wrap gap-1">
                {cert.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-[#090909] bg-white px-2 py-0.5 font-mono text-[10px] font-black uppercase shadow-[1px_1px_0px_#090909]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
