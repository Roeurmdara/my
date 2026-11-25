"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Download,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "#home", label: "OVERVIEW" },
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#education", label: "EDUCATION" },
  { href: "#certifications", label: "CERTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of [...navItems].reverse()) {
        const id = item.href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b-[3px] border-[#090909] bg-[#F5F3ED] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <Link
            href="#home"
            className="flex items-center gap-2 border-2 border-[#090909] bg-[#C5F451] px-3 py-1 shadow-[2px_2px_0px_#090909] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#090909] transition-all"
          >
            <span className="font-mono font-black text-xs sm:text-sm tracking-wider text-[#090909]">
              ROEURM DARA
            </span>
          </Link>
          <span className="hidden md:inline-block font-mono text-[11px] font-bold text-[#555555] uppercase tracking-wider">
            / FULLSTACK DEV
          </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Desktop Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`font-mono text-xs font-bold tracking-wider px-2.5 py-1.5 transition-all ${
                  isActive
                    ? "bg-[#C5F451] text-[#090909] border-2 border-[#090909] shadow-[2px_2px_0px_#090909]"
                    : "text-[#090909] hover:bg-[#E6E6E6] hover:border-2 hover:border-[#090909] border-2 border-transparent"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Availability, Resume & Social */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden xl:inline-flex items-center gap-1.5 border-2 border-[#090909] bg-white px-2.5 py-1 text-[11px] font-mono font-bold shadow-[2px_2px_0px_#090909]">
            <span className="h-2 w-2 rounded-full bg-[#090909] animate-pulse" />
            <span>AVAILABLE</span>
          </div>

          <a
            href="/Cv.png"
            download="Roeurm-Dara-CV.png"
            className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-[#7950F5] text-white font-mono font-bold text-xs uppercase px-3 py-1.5 shadow-[3px_3px_0px_#090909] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#090909] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#090909] transition-all"
          >
            <Download className="h-3.5 w-3.5 text-white" />
            <span>CV</span>
          </a>

          <div className="hidden sm:flex items-center gap-1.5">
            <a
              href="https://github.com/Roeurmdara"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="border-2 border-[#090909] bg-white p-1.5 text-[#090909] shadow-[2px_2px_0px_#090909] hover:bg-[#C5F451] transition-colors"
            >
              <Github className="h-4 w-4 text-[#090909]" />
            </a>
            <a
              href="https://www.linkedin.com/in/rouerm-dara-757176346/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="border-2 border-[#090909] bg-white p-1.5 text-[#090909] shadow-[2px_2px_0px_#090909] hover:bg-[#FF789D] transition-colors"
            >
              <Linkedin className="h-4 w-4 text-[#090909]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden border-2 border-[#090909] bg-white p-1.5 shadow-[2px_2px_0px_#090909] text-[#090909]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-[#090909]" /> : <Menu className="h-5 w-5 text-[#090909]" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-[3px] border-[#090909] bg-[#F5F3ED] px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-mono text-xs font-bold text-center py-2 border-2 border-[#090909] shadow-[2px_2px_0px_#090909] transition-all ${
                    isActive ? "bg-[#C5F451]" : "bg-white hover:bg-[#E6E6E6]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t-2 border-[#090909] flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#555555]">
              ROEURM DARA © 2026
            </span>
            <div className="flex gap-2">
              <a
                href="https://github.com/Roeurmdara"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#090909] bg-white p-1.5 shadow-[2px_2px_0px_#090909]"
              >
                <Github className="h-4 w-4 text-[#090909]" />
              </a>
              <a
                href="https://www.linkedin.com/in/rouerm-dara-757176346/"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#090909] bg-white p-1.5 shadow-[2px_2px_0px_#090909]"
              >
                <Linkedin className="h-4 w-4 text-[#090909]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
