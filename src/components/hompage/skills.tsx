"use client";

import { Cpu, Users, Code, Sparkles, CheckCircle2 } from "lucide-react";

/* =======================
   DATA
======================= */
const technicalSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "FastAPI",
  "Django",
  "Python",
  "Spring Boot",
  "Java",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "WebSockets",
  "REST APIs",
  "RSC & Server Actions",
];

const socialSkills = [
  "Computer",
  "Design",
  "Public Speaking",
  "Critical Thinking",
  "Time Management",
  "Adaptability",
  "Leadership",
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24" aria-label="Skills">
      <div className="border-[3px] border-[#090909] bg-white p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#090909] relative neo-grid-pattern">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-[3px] border-[#090909]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-[#C5F451] px-3 py-1 font-mono text-xs font-black uppercase text-[#090909] shadow-[2px_2px_0px_#090909]">
              <Cpu className="h-3.5 w-3.5 text-[#090909]" />
              {"//"} SKILLS &amp; CAPABILITIES
            </span>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
            FULLSTACK ENGINEERING &amp; SOFT SKILLS
          </span>
        </div>

        <div className="mt-8 mb-8">
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#090909]">
            FULLSTACK TECH STACK &amp; TOOLBOX
          </h2>
          <p className="mt-2 text-sm text-[#555555] font-medium leading-relaxed max-w-2xl">
            A comprehensive toolbox I leverage to turn ambitious ideas into polished, performant, and accessible products across the full stack.
          </p>
        </div>

        {/* Two Neo-Brutalist Sub-Panels */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Panel 1: Technical Stack */}
          <div className="border-[3px] border-[#090909] bg-[#F5F3ED] p-6 shadow-[5px_5px_0px_#090909] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-[#090909]">
                <div className="flex items-center gap-2">
                  <div className="border-2 border-[#090909] bg-[#C5F451] p-1.5 shadow-[2px_2px_0px_#090909]">
                    <Code className="h-4 w-4 text-[#090909]" />
                  </div>
                  <h3 className="font-mono font-black text-sm uppercase text-[#090909]">
                    FULLSTACK &amp; ARCHITECTURE
                  </h3>
                </div>
                <span className="border-2 border-[#090909] bg-white px-2 py-0.5 font-mono text-[10px] font-bold">
                  {technicalSkills.length} SKILLS
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-white px-3 py-1.5 font-mono text-xs font-bold uppercase text-[#090909] shadow-[3px_3px_0px_#090909] hover:bg-[#C5F451] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-default"
                  >
                    <CheckCircle2 className="h-3 w-3 text-[#090909]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#090909] flex items-center justify-between font-mono text-[11px] font-bold text-[#555555] uppercase">
              <span>FRONTEND &bull; BACKEND &bull; DATABASE &bull; APIS</span>
              <span className="text-[#090909]">PRODUCTION READY</span>
            </div>
          </div>

          {/* Panel 2: Soft & Professional Skills */}
          <div className="border-[3px] border-[#090909] bg-[#F5F3ED] p-6 shadow-[5px_5px_0px_#090909] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-[#090909]">
                <div className="flex items-center gap-2">
                  <div className="border-2 border-[#090909] bg-[#FF789D] p-1.5 shadow-[2px_2px_0px_#090909]">
                    <Users className="h-4 w-4 text-[#090909]" />
                  </div>
                  <h3 className="font-mono font-black text-sm uppercase text-[#090909]">
                    EXPERTISE &amp; SOFT SKILLS
                  </h3>
                </div>
                <span className="border-2 border-[#090909] bg-white px-2 py-0.5 font-mono text-[10px] font-bold">
                  {socialSkills.length} AREAS
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {socialSkills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-white px-3 py-1.5 font-mono text-xs font-bold uppercase text-[#090909] shadow-[3px_3px_0px_#090909] hover:bg-[#FF789D] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-default"
                  >
                    <Sparkles className="h-3 w-3 text-[#090909]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#090909] flex items-center justify-between font-mono text-[11px] font-bold text-[#555555] uppercase">
              <span>LEADERSHIP &bull; TEAMWORK</span>
              <span className="text-[#090909]">HIGH IMPACT</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
