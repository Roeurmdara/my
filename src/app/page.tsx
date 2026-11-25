"use client";

import Hero from "@/components/hompage/hero";
import Skills from "@/components/hompage/skills";
import Projects from "@/components/hompage/projects";
import LogosMarquee from "@/components/hompage/logos-marquee";
import Education from "@/components/hompage/education";
import Experience from "@/components/hompage/experience";
import Certifications from "@/components/hompage/certifications";
import SmoothCursor from "@/components/SmoothCursor";
import Me from "@/components/hompage/me";
import Text from "@/components/hompage/text";
import ContactPage from "@/components/hompage/contact";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      <Hero />
      <LogosMarquee />
      <Me />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Experience />
      <ContactPage />
      <Text
        text="LEARNING • GROWING • BUILDING RETRO EDITORIAL WEB EXPERIENCES"
        className="font-mono text-center text-xl sm:text-2xl font-black uppercase tracking-widest text-[#090909] pointer-events-auto"
      />
      <SmoothCursor />
    </main>
  );
}
