"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react"; // ArrowRight removed
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "../ScrollReveal";

const MotionImage = motion(Image);

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden" aria-label="Hero">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-20 pt-16 md:grid-cols-2 md:gap-10 md:px-6 md:pb-28 md:pt-24">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Available for freelance
          </div>

          <ScrollReveal
            size="xl"
            align="left"
            variant="default"
            enableBlur
            baseOpacity={0.15}
            staggerDelay={0.08}
            threshold={0.3}
            containerClassName="mt-4"
            textClassName="font-bold tracking-tight"
          >
            Hi! I&apos;m Dara .
          </ScrollReveal>

          <ScrollReveal
            size="md"
            align="left"
            variant="muted"
            enableBlur
            baseOpacity={0.1}
            staggerDelay={0.04}
            threshold={0.4}
            containerClassName="mt-4"
          >
            Frontend engineer focused on performant interfaces, creative motion, and accessible design. Currently exploring React Server Components, streaming UIs, and 3D on the web.
          </ScrollReveal>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="group">
              <Link href="#projects">
                View Projects
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/Cv.png" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-6 flex gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-emerald-500/10 px-2 py-1">Next.js</span>
            <span className="rounded-full bg-rose-500/10 px-2 py-1">Framer Motion</span>
            <span className="rounded-full bg-amber-500/10 px-2 py-1">TypeScript</span>
            <span className="rounded-full bg-blue-500/40 border-blue-500/40 border text-blue-500/100 px-2 py-1">Native Khmer</span>
            <span className="rounded-full bg-violet-500/40 border-violet-500/40 border text-violet-500/100 px-2 py-1">Advanced English</span>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
          <MotionImage
  src="/me.jpg"
  alt="Abstract portrait"
  fill
  className="absolute inset-0 object-cover"
  initial={{ scale: 1.05 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.2 }}
/>
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,250,250,0.0),rgba(0,0,0,0.3))]"
              animate={{ opacity: [0.4, 0.25, 0.4] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
