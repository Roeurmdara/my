"use client";

import {
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import VolunteerExperience from "./VolunteerExperience";

type Exp = {
  id: number;
  role: string;
  company: string;
  period: string;
  award: string;
  awardBg: string;
  points: string[];
  scope: string;
  techTags: string[];
};

const timeline: Exp[] = [
  {
    id: 1,
    role: "Spring Internship",
    company: "Spring Education Center",
    period: "4 Months",
    award: "TOP 1 TEAM • TOP 2 MEMBER",
    awardBg: "bg-[#C5F451]",
    points: [
      "Community development and engagement initiatives across student cohorts.",
      "Awarded Top 1 Internship Team honors for project delivery excellence.",
      "Recognized with Top 2 Member Award out of all cohort participants.",
    ],
    scope: "Community Management & Technical Education Support",
    techTags: [
      "Community Leadership",
      "Youth Mentoring",
      "Project Management",
      "Event Coordination",
    ],
  },
  {
    id: 2,
    role: "Frontend Project",
    company: "ISARD School",
    period: "2024 — 2025",
    award: "TOP 3 PROJECT AWARD",
    awardBg: "bg-[#FF789D]",
    points: [
      "Secured Top 3 project award in competitive departmental showcase.",
      "Engineered fullstack web application architecture utilizing React and Java.",
      "Designed responsive component library with accessible state management.",
    ],
    scope: "Fullstack Architecture, Frontend UX & Java Integration",
    techTags: [
      "React.js",
      "Java",
      "REST APIs",
      "Tailwind CSS",
      "UI/UX Engineering",
    ],
  },
  {
    id: 3,
    role: "StackQuizz",
    company: "ISARD School",
    period: "2024 — 2025",
    award: "TOP 3 PROJECT AWARD",
    awardBg: "bg-[#7950F5] text-white",
    points: [
      "Earned Top 3 project award for high-performance interactive quiz platform.",
      "Built fullstack web application using Next.js and Spring Boot with RESTful APIs.",
      "Configured automated deployment pipelines and production cloud hosting.",
    ],
    scope: "Next.js Fullstack Engineering & Spring Boot Cloud Deployment",
    techTags: [
      "Next.js 15",
      "Spring Boot",
      "WebSockets",
      "Cloud Deployment",
      "Microservices",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24" aria-label="Experience">
      <div className="border-[3px] border-[#090909] bg-white p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#090909] relative neo-grid-pattern">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-[3px] border-[#090909]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-[#C5F451] px-3 py-1 font-mono text-xs font-black uppercase text-[#090909] shadow-[2px_2px_0px_#090909]">
              <Briefcase className="h-3.5 w-3.5 text-[#090909]" />
              {"//"} CAREER &amp; ACHIEVEMENTS
            </span>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
            MILESTONES &amp; IMPACT
          </span>
        </div>

        <div className="mt-8 mb-8">
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#090909]">
            EXPERIENCE &amp; TIMELINE
          </h2>
          <p className="mt-2 text-sm text-[#555555] font-medium leading-relaxed max-w-2xl">
            Hands-on software development experience, high-distinction hackathons, and institutional project showcases.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {timeline.map((exp) => (
            <div
              key={exp.id}
              className="border-[3px] border-[#090909] bg-[#F5F3ED] p-5 sm:p-6 shadow-[5px_5px_0px_#090909] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#090909] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-[#090909]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-sans font-black text-lg uppercase text-[#090909]">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs font-bold text-[#555555] uppercase">
                      @ {exp.company}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#555555] uppercase mt-0.5 block">
                    {exp.period} • {exp.scope}
                  </span>
                </div>

                <div className={`border-2 border-[#090909] px-3 py-1 font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#090909] self-start sm:self-center ${exp.awardBg}`}>
                  <span>{exp.award}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-3 space-y-2">
                {exp.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#090909] font-medium leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-[#090909] mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="mt-5 pt-3 border-t-2 border-[#090909] flex flex-wrap gap-1.5">
                {exp.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-[#090909] bg-white px-2 py-0.5 font-mono text-[10px] font-black uppercase text-[#090909] shadow-[1px_1px_0px_#090909]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer & Community Leadership Sub-Section */}
        <VolunteerExperience />

      </div>
    </section>
  );
}
