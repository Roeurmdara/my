"use client";

import { GraduationCap } from "lucide-react";
import Image from "next/image";

type Edu = {
  id: number;
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
  rank?: string;
  badge: string;
  badgeBg: string;
  highlights: string[];
  logo: string;
  summary: string;
  keySubjects: string[];
};

const educationData: Edu[] = [
  {
    id: 1,
    degree: "Information Technology Engineering",
    school: "Royal University of Phnom Penh",
    location: "Phnom Penh, Cambodia",
    period: "2024",
    gpa: "3.68",
    rank: "Sophomore Excellence",
    badge: "GPA 3.68 / 4.00",
    badgeBg: "bg-[#C5F451]",
    highlights: ["3.68 GPA", "Software Development", "Sophomore"],
    logo: "https://i.pinimg.com/1200x/31/9e/62/319e62c33e1ec7cdd296fae8b488bc44.jpg",
    summary:
      "Core undergraduate degree in IT Engineering focusing on data structures, algorithms, object-oriented software engineering, database systems, and web architecture.",
    keySubjects: [
      "Data Structures & Algorithms",
      "OOAD & Software Engineering",
      "Database Systems",
      "Web Architecture",
    ],
  },
  {
    id: 2,
    degree: "Full Stack Development",
    school: "Institute of Science and Technology Advanced Development (ISTAD)",
    location: "Phnom Penh, Cambodia",
    period: "2024",
    rank: "1st Generation Fellow",
    badge: "Full Stack Developer",
    badgeBg: "bg-[#FF789D]",
    highlights: ["Good Standing", "Full Stack Developer", "1st Generation"],
    logo: "/OIP.jpg",
    summary:
      "Intensive professional engineering covering production fullstack web platforms, microservices architecture, cloud deployment pipelines, Next.js, and Spring Boot.",
    keySubjects: [
      "Next.js & React 18/19",
      "Spring Boot & Java",
      "PostgreSQL & Supabase",
      "CI/CD & Cloud Deployment",
    ],
  },
  {
    id: 3,
    degree: "High School Diploma",
    school: "Sovannaphumi School",
    location: "Poipet, Cambodia",
    period: "2022",
    rank: "1st Rank",
    badge: "Grade B+ Honors",
    badgeBg: "bg-[#7950F5] text-white",
    highlights: ["Grade B+", "Good Student", "1st Rank"],
    logo: "https://i.pinimg.com/1200x/b8/03/28/b80328dc483c1e6c5f04c72530153b95.jpg",
    summary:
      "Graduated top of class with Grade B+ honors. Built strong mathematical problem solving, analytical thinking, and student council leadership.",
    keySubjects: [
      "Advanced Mathematics",
      "Natural Sciences",
      "English Proficiency",
      "Student Leadership",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24" aria-label="Education">
      <div className="border-[3px] border-[#090909] bg-white p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#090909] relative neo-grid-pattern">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-[3px] border-[#090909]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-[#7950F5] text-white px-3 py-1 font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#090909]">
              <GraduationCap className="h-3.5 w-3.5 text-white" />
              {"//"} ACADEMIC FOUNDATION
            </span>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
            QUALIFICATIONS &amp; SCHOLARSHIP
          </span>
        </div>

        <div className="mt-8 mb-8">
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#090909]">
            EDUCATION &amp; ACADEMICS
          </h2>
          <p className="mt-2 text-sm text-[#555555] font-medium leading-relaxed max-w-2xl">
            Formal engineering foundations combined with accelerated software development fellowship training.
          </p>
        </div>

        {/* 3 Institution Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="border-[3px] border-[#090909] bg-[#F5F3ED] p-5 sm:p-6 shadow-[6px_6px_0px_#090909] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#090909] transition-all flex flex-col justify-between"
            >
              <div>
                {/* School Logo & Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="relative h-12 w-12 shrink-0 border-2 border-[#090909] bg-white p-1 shadow-[2px_2px_0px_#090909]">
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      fill
                      sizes="48px"
                      className="object-contain p-1"
                    />
                  </div>
                  <span className={`border-2 border-[#090909] px-2.5 py-1 font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#090909] ${edu.badgeBg}`}>
                    {edu.badge}
                  </span>
                </div>

                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#555555] block">
                  {edu.period} • {edu.location}
                </span>

                <h3 className="mt-1 font-sans font-black text-lg uppercase text-[#090909]">
                  {edu.degree}
                </h3>

                <p className="font-mono text-xs font-bold text-[#555555] mt-0.5 uppercase">
                  {edu.school}
                </p>

                <p className="mt-3 text-xs text-[#555555] font-medium leading-relaxed">
                  {edu.summary}
                </p>
              </div>

              {/* Key Subjects */}
              <div className="mt-6 pt-4 border-t-2 border-[#090909]">
                <span className="font-mono text-[10px] font-black text-[#555555] uppercase tracking-wider block mb-2">
                  {"//"} FOCUS AREAS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.keySubjects.map((subject) => (
                    <span
                      key={subject}
                      className="border-2 border-[#090909] bg-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-[#090909] shadow-[1px_1px_0px_#090909]"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
