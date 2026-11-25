"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Heart, MessageSquare } from "lucide-react";

// --- Accordion Data ---
const accordionItems = [
  { id: 1, title: "Error 404: Motivation not found", imageUrl: "/mee.jpg", color: "bg-[#FF789D]" },
  { id: 2, title: "Brain… now in slime mode", imageUrl: "/sun.jpg", color: "bg-[#C5F451]" },
  { id: 3, title: "Warning: Too much procrastination detected", imageUrl: "/meee.jpg", color: "bg-[#7950F5]" },
  { id: 4, title: "System alert: Motivation critically low… Call backup pizza", imageUrl: "/ja.jpg", color: "bg-white" },
  { id: 5, title: "Thoughts melting… consistency: squishy", imageUrl: "/ma.jpg", color: "bg-[#FF789D]" },
];

export default function HeroAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll active item into view
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeItem = container.children[activeIndex] as HTMLElement;
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <section id="about" className="scroll-mt-24" aria-label="About Me">
      <div className="border-[3px] border-[#090909] bg-white p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#090909] relative neo-grid-pattern">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-[3px] border-[#090909]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-[#FF789D] px-3 py-1 font-mono text-xs font-black uppercase text-[#090909] shadow-[2px_2px_0px_#090909]">
              <Sparkles className="h-3.5 w-3.5 text-[#090909]" />
              {"//"} ABOUT ME
            </span>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
            PERSONA &amp; PHILOSOPHY
          </span>
        </div>

        {/* Content Layout */}
        <div className="mt-8 grid gap-10 lg:grid-cols-12 items-center">
          
          {/* Left Column: Bio Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#090909]">
                ROEILM DARA
              </h2>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#555555] block mt-1">
                FULLSTACK DEVELOPER • CREATIVE ENGINEER
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#090909] font-medium leading-relaxed border-l-[3px] border-[#090909] pl-4 py-1 bg-[#F5F3ED]">
              A mix of extrovert and introvert. I love connecting with people, sharing ideas, and diving into new experiences, but I also enjoy quiet moments for reflection, learning, and recharging.
            </p>

            <div className="space-y-3 pt-2">
              <div className="border-2 border-[#090909] bg-white p-3.5 shadow-[3px_3px_0px_#090909] flex items-start gap-3">
                <div className="border-2 border-[#090909] bg-[#C5F451] p-1.5 shrink-0">
                  <Heart className="h-4 w-4 text-[#090909]" />
                </div>
                <div>
                  <span className="font-mono font-black text-xs uppercase text-[#090909] block">
                    FULLSTACK ARCHITECT
                  </span>
                  <span className="text-xs text-[#555555] leading-snug">
                    Crafting end-to-end fullstack web platforms with high performance, secure APIs, and responsive UI.
                  </span>
                </div>
              </div>

              <div className="border-2 border-[#090909] bg-white p-3.5 shadow-[3px_3px_0px_#090909] flex items-start gap-3">
                <div className="border-2 border-[#090909] bg-[#FF789D] p-1.5 shrink-0">
                  <MessageSquare className="h-4 w-4 text-[#090909]" />
                </div>
                <div>
                  <span className="font-mono font-black text-xs uppercase text-[#090909] block">
                    COMMUNITY &amp; COLLABORATION
                  </span>
                  <span className="text-xs text-[#555555] leading-snug">
                    Active mentor, youth ambassador, and technology enthusiast.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-[#090909] bg-[#7950F5] text-white font-mono font-bold text-xs uppercase px-4 py-2.5 shadow-[3px_3px_0px_#090909] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#090909] transition-all"
              >
                <span>LET&apos;S CONNECT</span>
                <ArrowRight className="h-3.5 w-3.5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Snapshot Gallery (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center justify-between font-mono text-xs font-bold uppercase text-[#555555]">
              <span>{"//"} BEHIND THE SCREENS</span>
              <span>CLICK TO EXPAND SNAPSHOT</span>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-none items-center"
            >
              {accordionItems.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-[340px] sm:h-[380px] border-[3px] border-[#090909] cursor-pointer transition-all duration-500 ease-in-out shrink-0 overflow-hidden bg-white ${
                      isActive
                        ? "w-[260px] sm:w-[340px] shadow-[6px_6px_0px_#090909] ring-2 ring-[#090909]"
                        : "w-[65px] sm:w-[75px] opacity-80 hover:opacity-100 shadow-[3px_3px_0px_#090909]"
                    }`}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 260px, 340px"
                      className="absolute inset-0 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    
                    {/* Caption */}
                    <div
                      className={`absolute border-2 border-[#090909] bg-white px-2.5 py-1.5 shadow-[2px_2px_0px_#090909] transition-all duration-300 ${
                        isActive
                          ? "bottom-3 left-3 right-3 text-center"
                          : "bottom-16 left-1/2 -translate-x-1/2 rotate-90 origin-bottom-left whitespace-nowrap"
                      }`}
                    >
                      <span className="font-mono text-xs font-black uppercase text-[#090909] line-clamp-1">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
