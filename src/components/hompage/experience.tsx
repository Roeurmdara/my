"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import VolunteerExperience from "./VolunteerExperience"

type Exp = {
  role: string
  company: string
  period: string
  points: string[]
}

const timeline: Exp[] = [
  {
    role: "Spring internship",
    company: "Spring education Center",
    period: "4 months",
    points: [
      "Community development and engagement.",
      "Top 1 internship award Team. ",
      "Top 2 member award.",
    ],
  },
  {
    role: "Frontend Project ",
    company: "ISARD school",
    period: "2024 — 2025",
    points: [
      "Top 3 project award.",
      "Fullstack web application using React and Java.",
    ],
  },
  {
    role: "StackQuizz ",
    company: "ISARD school",
    period: "2024 — 2025",
    points: [
      "Top 3 project award.",
      "Fullstack web application Nextjs and Spring boot with RESTful API and Deployemwent ",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-6 border-b">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Experience title */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <p className="mt-2 text-muted-foreground">
            Roles where I shipped high-quality interfaces and systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2"
            aria-hidden
          />

          <div className="grid gap-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative md:grid md:grid-cols-2 ${
                  idx % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                {/* Date */}
                <div
                  className={`hidden md:block ${
                    idx % 2 === 0
                      ? "col-start-1 text-right"
                      : "col-start-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {item.period}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`${
                    idx % 2 === 0
                      ? "md:col-start-2"
                      : "md:col-start-1"
                  }`}
                >
                  <Card className="border-muted-foreground/10">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          {item.role}
                        </h3>
                        <Briefcase className="h-5 w-5 text-muted-foreground" />
                      </div>

                      <div className="mt-1 text-sm text-muted-foreground">
                        {item.company} •{" "}
                        <span className="md:hidden">
                          {item.period}
                        </span>
                      </div>

                      <ul className="mt-4 grid gap-2 text-sm">
                        {item.points.map((pt) => (
                          <li key={pt} className="leading-relaxed">
                            • {pt}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Dot */}
                <span
                  className="absolute left-4 top-6 inline-flex h-3 w-3 -translate-x-1/2 rounded-full border bg-background md:left-1/2"
                  aria-hidden
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ✅ Volunteer Section AFTER experience */}
        <div className="mt-24">
          <VolunteerExperience />
        </div>
      </div>
    </section>
  )
}
