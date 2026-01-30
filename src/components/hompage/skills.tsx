"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

/* =======================
   DATA
======================= */
const technicalSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Framer Motion",
  "Tailwind CSS",
  "Node.js",
  "Web Accessibility",
  "RSC + Server Actions",
  "Three.js",
  "Vite",
  "GraphQL",
  "Testing",
]

const socialSkills = [
  "Computer ",
  "Design ",
  "public Speaking",
  "Critical Thinking",
  "Time Management",
  "Adaptability",
  "Leadership",
]

/* Color styles for social skills */
const socialColors = [
  "border-emerald-400/60 text-emerald-600 bg-emerald-400/10 hover:bg-emerald-400/20",
  "border-rose-400/60 text-rose-600 bg-rose-400/10 hover:bg-rose-400/20",
  "border-sky-400/60 text-sky-600 bg-sky-400/10 hover:bg-sky-400/20",
  "border-violet-400/60 text-violet-600 bg-violet-400/10 hover:bg-violet-400/20",
  "border-amber-400/60 text-amber-600 bg-amber-400/10 hover:bg-amber-400/20",
  "border-teal-400/60 text-teal-600 bg-teal-400/10 hover:bg-teal-400/20",
]

/* =======================
   BACKGROUND EFFECTS
======================= */
function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-0 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-rose-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
      <div className="absolute -right-40 top-20 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-emerald-400/20 via-teal-400/10 to-transparent blur-3xl" />
    </div>
  )
}

function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute left-10 top-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-rose-500/20 blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

/* =======================
   MAIN COMPONENT
======================= */
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 border-t bg-white py-16"
    >
      <AuroraBackground />
      <FloatingBlobs />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <p className="mt-2 max-w-md mx-auto text-muted-foreground sm:mx-0">
            A toolbox I use to turn ideas into polished products.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-10">
          <h3 className="mb-4 text-lg font-medium">Technical</h3>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.05 },
              },
            }}
            className="flex flex-wrap gap-3"
          >
            {technicalSkills.map((skill) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Badge
                  variant="secondary"
                  className="cursor-default border border-border/50 bg-background/60 px-3 py-1 backdrop-blur-sm transition-transform hover:scale-105"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Social Skills */}
        <div>
          <h3 className="mb-4 text-lg font-medium">Expertis & Soft Skills</h3>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.05 },
              },
            }}
            className="flex flex-wrap gap-3"
          >
            {socialSkills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Badge
                  className={`
                    cursor-default
                    px-3 py-1
                    border
                    transition-all
                    hover:scale-105
                    ${socialColors[index % socialColors.length]}
                  `}
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
