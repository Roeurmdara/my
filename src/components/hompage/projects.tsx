"use client";

import Image from "next/image";
import { FolderGit2, Github, ArrowUpRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links?: { github?: string; demo?: string };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Stack Quiz",
    description: "Real-time quiz application with WebSocket integration and live participant scoreboard.",
    image: "/00.png",
    tags: ["Next.js", "WebSockets", "Spring Boot"],
    links: {
      github: "https://github.com/FSWD-GEN-01/stack-quiz-frontend",
      demo: "https://stackquiz-admin.vercel.app/login",
    },
  },
  {
    id: 2,
    title: "READata",
    description: "Real-time data visualization dashboard for monitoring key operational metrics.",
    image: "/ren.png",
    tags: ["Tailwind CSS", "Java", "JavaScript"],
    links: {
      demo: "https://reandata-g4vercelapp-eight.vercel.app/",
      github: "https://github.com/Panharoth06/Reandata-G4",
    },
  },
  {
    id: 3,
    title: "Cambotrip",
    description: "Web application offering curated travel packages, booking, and destinations across Cambodia.",
    image: "/c.png",
    tags: ["Next.js", "Supabase", "TypeScript"],
    links: {
      demo: "https://cambotrip-opal.vercel.app/",
      github: "https://github.com/Roeurmdara/Cambotrip?tab=readme-ov-file",
    },
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Personal developer portfolio website showcasing projects, skills, and interactive UI engineering.",
    image: "/mee.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: {
      demo: "https://me-n6g61kfss-roeurmdaras-projects.vercel.app/",
      github: "https://github.com/Roeurmdara/my",
    },
  },
  {
    id: 5,
    title: "OOAD Project",
    description: "School LMS platform to manage student assignments, academic grading, and teacher portal.",
    image: "/LMS.png",
    tags: ["Next.js", "Supabase", "TypeScript"],
    links: {
      demo: "https://ooads.netlify.app/",
      github: "https://github.com/Devvfong/ooad",
    },
  },
  {
    id: 6,
    title: "Recipe App",
    description: "Recipe application allowing users to explore curated meal recipes and innovative cooking ideas.",
    image: "/m.png",
    tags: ["Java", "Android Studio", "Supabase"],
    links: {
      demo: "#",
      github: "https://github.com/Roeurmdara/RecipeApp",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24" aria-label="Projects">
      <div className="border-[3px] border-[#090909] bg-white p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#090909] relative neo-grid-pattern">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-[3px] border-[#090909]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-[#FF789D] px-3 py-1 font-mono text-xs font-black uppercase text-[#090909] shadow-[2px_2px_0px_#090909]">
              <FolderGit2 className="h-3.5 w-3.5 text-[#090909]" />
              {"//"} FEATURED WORK
            </span>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555]">
            {projects.length} SHIPPED BUILDS
          </span>
        </div>

        <div className="mt-8 mb-8">
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#090909]">
            PROJECTS &amp; PRODUCTION PLATFORMS
          </h2>
          <p className="mt-2 text-sm text-[#555555] font-medium leading-relaxed max-w-2xl">
            Selected applications showcasing fullstack architecture, responsive UI components, real-time communications, and database systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="border-[3px] border-[#090909] bg-[#F5F3ED] p-4 sm:p-5 shadow-[6px_6px_0px_#090909] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[9px_9px_0px_#090909] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Neo-Brutalist Border */}
                <div className="relative aspect-video w-full overflow-hidden border-2 border-[#090909] bg-white shadow-[3px_3px_0px_#090909]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 border-2 border-[#090909] bg-[#C5F451] px-2 py-0.5 font-mono text-[10px] font-black uppercase shadow-[1px_1px_0px_#090909]">
                    PRJ-0{idx + 1}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-[#090909] bg-white px-2 py-0.5 font-mono text-[10px] font-black uppercase text-[#090909] shadow-[2px_2px_0px_#090909]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="mt-3 font-sans font-black text-lg sm:text-xl uppercase text-[#090909]">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#555555] font-medium leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t-2 border-[#090909] flex items-center justify-between gap-2">
                <div>
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-white px-3 py-1.5 font-mono text-xs font-bold uppercase text-[#090909] shadow-[2px_2px_0px_#090909] hover:bg-[#E6E6E6] active:translate-x-[1px] active:translate-y-[1px] transition-all"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>CODE</span>
                    </a>
                  )}
                </div>

                {project.links?.demo && project.links.demo !== "#" && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-[#C5F451] px-3.5 py-1.5 font-mono text-xs font-black uppercase text-[#090909] shadow-[2px_2px_0px_#090909] hover:bg-[#FF789D] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#090909] transition-all"
                  >
                    <span>DEMO</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
