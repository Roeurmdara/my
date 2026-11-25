"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  { name: "REACT", logo: "/React.png" },
  { name: "TYPESCRIPT", logo: "/typescript.webp" },
  { name: "POSTGRESQL", logo: "/postgre.png" },
  { name: "NEXT.JS", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "SPRING BOOT", logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
  { name: "JAVA", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
  { name: "FASTAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
  { name: "DJANGO", logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
  { name: "TAILWIND CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  { name: "VERCEL", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
  { name: "GITHUB", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
];

function MarqueeRow() {
  const items = [...tools, ...tools, ...tools];
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-33.333%" }}
      transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      className="flex shrink-0 min-w-[300%] gap-4 sm:gap-6"
      aria-hidden
    >
      {items.map((t, i) => (
        <div
          key={`${t.name}-${i}`}
          className="inline-flex items-center gap-2.5 border-2 border-[#090909] bg-white px-3.5 py-1.5 font-mono text-xs font-black uppercase tracking-wider text-[#090909] shadow-[3px_3px_0px_#090909]"
        >
          <span className="relative h-5 w-5 shrink-0 overflow-hidden flex items-center justify-center">
            <Image
              src={t.logo || "/placeholder.svg"}
              alt={`${t.name} logo`}
              fill
              sizes="20px"
              className="object-contain"
            />
          </span>
          <span>{t.name}</span>
        </div>
      ))}
    </motion.div>
  );
}

export default function LogosMarquee() {
  return (
    <section aria-label="Tools and platforms">
      <div className="border-[3px] border-[#090909] bg-[#C5F451] p-3 sm:p-4 shadow-[6px_6px_0px_#090909] overflow-hidden">
        <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-[#090909]">
          <span className="font-mono text-xs font-black uppercase tracking-widest text-[#090909]">
            {"//"} TECH STACK &amp; DEVELOPER TOOLBOX
          </span>
          <span className="font-mono text-[11px] font-bold uppercase text-[#090909] hidden sm:inline">
            FULLSTACK CAPABLE
          </span>
        </div>
        <div className="relative overflow-hidden py-1">
          <MarqueeRow />
        </div>
      </div>
    </section>
  );
}
