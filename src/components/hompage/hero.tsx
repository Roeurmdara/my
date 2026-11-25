"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowUpRight, MapPin } from "lucide-react";

const stats = [
  { label: "EXPERIENCE", value: "2+ YEARS", bg: "bg-[#C5F451]" },
  { label: "CORE PROJECTS", value: "6+ SHIPPED", bg: "bg-[#FF789D]" },
  { label: "CREDENTIALS", value: "10+ CERTS", bg: "bg-[#7950F5]", text: "text-white" },
  { label: "RUPP GPA", value: "3.68 / 4.0", bg: "bg-white" },
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24" aria-label="Hero">
      <div className="border-[3px] border-[#090909] bg-white p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#090909] neo-grid-pattern relative">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          
          {/* Left Column: Intro & Headline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 border-2 border-[#090909] bg-[#C5F451] px-3 py-1 font-mono text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#090909]">
                <span className="h-2 w-2 rounded-full bg-[#090909] animate-pulse" />
                AVAILABLE FOR WORK
              </span>

              <span className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#090909]">
                <MapPin className="h-3.5 w-3.5 text-[#090909]" />
                PHNOM PENH, KH
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.95] text-[#090909]">
                HI, I&apos;M <br />
                <span className="inline-block bg-[#FF789D] border-[3px] border-[#090909] px-3 py-1 mt-1 shadow-[4px_4px_0px_#090909]">
                  ROEURM DARA
                </span>
              </h1>
              <p className="mt-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#555555]">
                {"//"} FULLSTACK DEVELOPER &amp; CREATIVE ENGINEER
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#090909] leading-relaxed max-w-xl font-medium border-l-[3px] border-[#090909] pl-4 py-1 bg-[#F5F3ED]/70">
              Fullstack developer focused on robust architectures, performant interfaces, fluid motion, and accessible web systems. Proficient across Next.js, React, Node.js, Spring Boot, and database engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 border-[3px] border-[#090909] bg-[#7950F5] text-white font-mono font-bold text-xs uppercase px-5 py-3 shadow-[4px_4px_0px_#090909] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#090909] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#090909] transition-all"
              >
                <span>VIEW PROJECTS</span>
                <ArrowUpRight className="h-4 w-4 text-white" />
              </Link>

              <a
                href="/Cv.png"
                download="Roeurm-Dara-CV.png"
                className="inline-flex items-center gap-2 border-[3px] border-[#090909] bg-white text-[#090909] font-mono font-bold text-xs uppercase px-5 py-3 shadow-[4px_4px_0px_#090909] hover:bg-[#C5F451] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#090909] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#090909] transition-all"
              >
                <Download className="h-4 w-4 text-[#090909]" />
                <span>DOWNLOAD CV</span>
              </a>
            </div>

            {/* Tech Badges */}
            <div className="pt-3 border-t-2 border-[#090909] flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] font-black uppercase text-[#555555] mr-1">
                STACK:
              </span>
              {["NEXT.JS", "SPRING BOOT", "FASTAPI", "DJANGO", "TYPESCRIPT", "TAILWIND", "JAVA", "SUPABASE"].map((tag, i) => (
                <span
                  key={tag}
                  className={`border-2 border-[#090909] px-2.5 py-0.5 font-mono text-[11px] font-bold shadow-[2px_2px_0px_#090909] ${
                    i === 0 ? "bg-[#C5F451]" : i === 1 ? "bg-[#FF789D]" : i === 2 ? "bg-[#C5F451]" : i === 3 ? "bg-[#FF789D]" : i === 4 ? "bg-[#7950F5] text-white" : "bg-white text-[#090909]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Layered Visual Graphic (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Offset Decorative Backing Card */}
              <div className="absolute -top-3 -right-3 w-full h-full bg-[#FF789D] border-[3px] border-[#090909] shadow-[8px_8px_0px_#090909]" />
              
              {/* Primary Image Container */}
              <div className="relative aspect-square w-full border-[3px] border-[#090909] bg-white overflow-hidden z-10">
                <Image
                  src="/me.jpg"
                  alt="Roeurm Dara"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 380px"
                  className="object-cover"
                />
                
                {/* Floating Bottom Label */}
                <div className="absolute bottom-3 left-3 right-3 border-2 border-[#090909] bg-white p-2.5 shadow-[3px_3px_0px_#090909] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#090909] animate-pulse" />
                    <span className="font-mono font-black text-xs uppercase text-[#090909]">
                      DARA // FULLSTACK DEV
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#555555] uppercase">
                    RUPP &bull; 2026
                  </span>
                </div>
              </div>

              {/* Floating Geometric Stickers */}
              <div className="absolute -bottom-4 -left-4 z-20 border-2 border-[#090909] bg-[#C5F451] px-3 py-1 font-mono font-black text-xs uppercase shadow-[3px_3px_0px_#090909] -rotate-3 text-[#090909]">
                FULLSTACK DEV
              </div>
              <div className="absolute -top-4 -left-4 z-20 border-2 border-[#090909] bg-[#7950F5] text-white px-3 py-1 font-mono font-black text-xs uppercase shadow-[3px_3px_0px_#090909] rotate-3">
                100% PASSION
              </div>
            </div>

            {/* Metrics Bar below image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-sm mt-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`border-2 border-[#090909] p-2.5 text-center shadow-[3px_3px_0px_#090909] ${s.bg} ${s.text || "text-[#090909]"}`}
                >
                  <span className="font-mono font-black text-xs sm:text-sm block">
                    {s.value}
                  </span>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider opacity-80 block mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
