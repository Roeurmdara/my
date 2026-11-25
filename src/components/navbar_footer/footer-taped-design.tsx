"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t-[3px] border-[#090909] bg-[#F5F3ED] py-10 px-4 sm:px-6 lg:px-8 mt-16 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <Link
            href="#home"
            className="inline-block border-2 border-[#090909] bg-[#C5F451] px-3 py-1 font-mono font-black text-sm uppercase text-[#090909] shadow-[2px_2px_0px_#090909]"
          >
            ROEURM DARA
          </Link>
          <p className="font-mono text-xs font-bold text-[#555555] uppercase mt-1">
            FULLSTACK DEVELOPER &bull; CRAFTING BOLD EXPERIENCES
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs font-bold uppercase text-[#090909]">
          <a href="#projects" className="hover:underline underline-offset-4">
            PROJECTS
          </a>
          <a href="#skills" className="hover:underline underline-offset-4">
            SKILLS
          </a>
          <a href="#experience" className="hover:underline underline-offset-4">
            EXPERIENCE
          </a>
          <a href="#education" className="hover:underline underline-offset-4">
            EDUCATION
          </a>
          <a href="#certifications" className="hover:underline underline-offset-4">
            CERTS
          </a>
          <a href="#contact" className="hover:underline underline-offset-4">
            CONTACT
          </a>
        </div>

        {/* Right Actions & Back-to-Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Roeurmdara"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="border-2 border-[#090909] bg-white p-2 text-[#090909] shadow-[2px_2px_0px_#090909] hover:bg-[#C5F451] transition-colors"
          >
            <Github className="h-4 w-4 text-[#090909]" />
          </a>
          <a
            href="https://www.linkedin.com/in/rouerm-dara-757176346/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="border-2 border-[#090909] bg-white p-2 text-[#090909] shadow-[2px_2px_0px_#090909] hover:bg-[#FF789D] transition-colors"
          >
            <Linkedin className="h-4 w-4 text-[#090909]" />
          </a>
          <a
            href="#contact"
            aria-label="Contact Dara"
            className="border-2 border-[#090909] bg-white p-2 text-[#090909] shadow-[2px_2px_0px_#090909] hover:bg-[#7950F5] hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4 text-[#090909]" />
          </a>

          <button
            onClick={scrollToTop}
            className="border-2 border-[#090909] bg-[#C5F451] p-2 text-[#090909] shadow-[2px_2px_0px_#090909] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#090909] active:translate-x-[1px] active:translate-y-[1px] transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 text-[#090909]" />
          </button>
        </div>

      </div>

      <div className="mt-8 text-center font-mono text-[11px] font-bold text-[#555555] uppercase">
        <span>© {new Date().getFullYear()} ROEURM DARA. ALL RIGHTS RESERVED. NEO-BRUTALIST FULLSTACK EDITION.</span>
      </div>
    </footer>
  );
}
