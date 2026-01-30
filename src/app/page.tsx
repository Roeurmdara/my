"use client"

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
    <main className="py-12">
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
        text="Learning, growing, and enjoying the journey."
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-6xl md:leading-[5rem] pointer-events-auto"
      />
      <SmoothCursor />
    </main>
  );
}
