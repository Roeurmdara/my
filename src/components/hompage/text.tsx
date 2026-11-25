"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Text({
  text,
  default_velocity = 3,
  className,
}: VelocityScrollProps) {
  function ParallaxText({ children, baseVelocity = 80, className }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 80,
      stiffness: 300,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(2);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          setRepetitions(Math.max(3, Math.ceil(containerWidth / textWidth) + 2));
        }
      };
      calculateRepetitions();
      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        className="w-full overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        <motion.div className={cn("inline-block", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <span
              key={i}
              ref={i === 0 ? textRef : null}
              className="inline-flex items-center gap-6 px-6 font-mono text-xl sm:text-2xl font-black uppercase tracking-wider text-[#090909]"
            >
              <span>{children}</span>
              <span className="h-3 w-3 bg-[#090909] rotate-45 shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="border-y-[3px] border-[#090909] bg-[#FF789D] py-3.5 shadow-[4px_4px_0px_#090909] overflow-hidden">
      <ParallaxText baseVelocity={default_velocity} className={className}>
        {text}
      </ParallaxText>
    </div>
  );
}
