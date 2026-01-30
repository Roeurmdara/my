"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Edu = {
  degree: string;
  school: string;
  location?: string;
  period: string;
  gpa?: string;
  highlights: string[];
  logo?: string;
};

const education: Edu[] = [

  {
    degree: "High School Diploma",
    school: "sovannaphumi school",
    location: "poipet",
    period: "2022",
    highlights: ["B+", "Good student", "1st Rank"],
    logo: "https://i.pinimg.com/1200x/b8/03/28/b80328dc483c1e6c5f04c72530153b95.jpg",
  },
  {
    degree: "Information Technology Engineering",
    school: "Royal University of Phnom Penh",
    location: "Phnom Penh",
    period: "2024",
    highlights: ["3.68 GPA", "Software Development", "sophomore"],
    logo: "https://i.pinimg.com/1200x/31/9e/62/319e62c33e1ec7cdd296fae8b488bc44.jpg",
  },
   {
    degree: "Full Stack Development",
    school: "Institute of Science and Technology Advanced Development  ",
    location: "Phnom Penh",
    period: "2024",
    highlights: ["good", "full stack developer", "1st generation"],
    logo: "/OIP.jpg",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-16 border-b border-1 ">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold">Education</h2>
          <p className="mt-2 text-muted-foreground">
            Foundations that inform my design and engineering decisions.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-border border-1 md:left-1/2"
            aria-hidden
          />
          <div className="grid gap-8">
            {education.map((e, idx) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative md:grid md:grid-cols-2 ${
                  idx % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div
                  className={`hidden md:block ${
                    idx % 2 === 0 ? "col-start-1 text-right" : "col-start-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {e.period}
                  </div>
                </div>

                <div
                  className={`${
                    idx % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                  }`}
                >
                  <Card className="border-muted-foreground/10">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="hidden shrink-0 rounded-lg border  bg-white p-2 md:inline-flex">
                        <div className="relative h-12 w-12">
                          <Image
                            src={
                              e.logo ||
                              "/placeholder.svg?height=72&width=72&query=school+logo"
                            }
                            alt={`${e.school} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-semibold">{e.degree}</h3>
                          <GraduationCap className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {e.school} •{" "}
                          <span className="md:hidden">{e.period}</span>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                          {e.location && (
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {e.location}
                            </span>
                          )}
                          {e.gpa && (
                            <Badge
                              variant="secondary"
                              className="border bg-background/60"
                            >
                              GPA {e.gpa}
                            </Badge>
                          )}
                        </div>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {e.highlights.map((h) => (
                            <Badge
                              key={h}
                              variant="secondary"
                              className="border bg-background/60 px-2 py-1 text-xs backdrop-blur"
                            >
                              {h}
                            </Badge>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <span
                  className="absolute left-4 top-6 inline-flex h-3 w-3 -translate-x-1/2 rounded-full border bg-background md:left-1/2"
                  aria-hidden
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
