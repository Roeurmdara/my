"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, X } from "lucide-react";

type Volunteer = {
  id: number;
  role: string;
  organization: string;
  category: "all" | "tech" | "community" | "festivals";
  period: string;
  image: string;
  description: string;
  skills: string[];
  impactHighlight: string;
};

const volunteers: Volunteer[] = [
  {
    id: 1,
    role: "Career talent & Passion in Technology age",
    organization: "ទFestival",
    category: "festivals",
    period: "2024",
    image: "/tech.jpg",
    description: "Created digital content, managed social media posts, and supported event coverage for youth in technology.",
    skills: ["Media", "Design", "Photography"],
    impactHighlight: "Engaged 1,000+ youth participants across digital media and live sessions.",
  },
  {
    id: 2,
    role: "Bring me hope",
    organization: "PUC",
    category: "community",
    period: "2023",
    image: "/bring.jpg",
    description: "Logistics and technical equipment setup for charitable community workshops and student events.",
    skills: ["Organization", "Technical Support"],
    impactHighlight: "Coordinated audio/visual infrastructure and logistical support for community outreach.",
  },
  {
    id: 3,
    role: "Capture The Flag Volunteer",
    organization: "AUPP",
    category: "tech",
    period: "2023",
    image: "/CTF.jpg",
    description: "Assisted in organizing cybersecurity competitions and workshops for university students.",
    skills: ["Cybersecurity", "Event Management"],
    impactHighlight: "Facilitated collegiate CTF challenges in cryptography, reverse engineering, and network security.",
  },
  {
    id: 4,
    role: "Mountain Festival Volunteer",
    organization: "ទFestival",
    category: "festivals",
    period: "2024",
    image: "/phnom.jpg",
    description: "Assisted in organizing and managing festival activities, cultural stages, and eco-initiatives.",
    skills: ["Event Management", "Coordination"],
    impactHighlight: "Managed on-site crowd flow, volunteer logistics, and environmental protection guidelines.",
  },
  {
    id: 5,
    role: "Spring Internship",
    organization: "Spring Education",
    category: "community",
    period: "2024",
    image: "/intern.jpg",
    description: "Assisted in creating educational content and supporting online classes with top distinction.",
    skills: ["Education", "Content Creation", "Top 2 Member"],
    impactHighlight: "Honored with Top 2 member distinction for curriculum authoring and student mentoring.",
  },
  {
    id: 6,
    role: "Local youth ambassador",
    organization: "ASEAN Youth Organization",
    category: "community",
    period: "2024",
    image: "/AYO.jpg",
    description: "Promoted youth engagement and community service initiatives across the ASEAN network.",
    skills: ["Youth Leadership", "Community Service", "Ambassador"],
    impactHighlight: "Represented local youth cohorts in regional sustainability and digital literacy programs.",
  },
];

const categories = [
  { id: "all", label: "ALL" },
  { id: "tech", label: "TECH" },
  { id: "community", label: "COMMUNITY" },
  { id: "festivals", label: "FESTIVALS" },
];

export default function VolunteerExperience() {
  const [filter, setFilter] = useState<string>("all");
  const [activeModalVol, setActiveModalVol] = useState<Volunteer | null>(null);

  const filteredVolunteers =
    filter === "all"
      ? volunteers
      : volunteers.filter(
          (v) =>
            v.category === filter ||
            (filter === "tech" && (v.category === "tech" || v.skills.includes("Technical Support")))
        );

  return (
    <div className="mt-12 pt-8 border-t-[3px] border-[#090909]">
      {/* Header & Category Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-[#090909]" />
            <h3 className="font-sans font-black text-xl uppercase text-[#090909]">
              VOLUNTEER &amp; COMMUNITY INITIATIVES
            </h3>
          </div>
          <p className="font-mono text-xs text-[#555555] mt-0.5 uppercase">
            COMMUNITY BUILDING &bull; HACKATHONS &bull; YOUTH LEADERSHIP
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`border-2 border-[#090909] px-3.5 py-1 font-mono text-xs font-black uppercase transition-all ${
                filter === c.id
                  ? "bg-[#C5F451] shadow-[2px_2px_0px_#090909] translate-x-[-1px] translate-y-[-1px]"
                  : "bg-white hover:bg-[#E6E6E6] text-[#090909]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Volunteer Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredVolunteers.map((vol) => (
          <div
            key={vol.id}
            onClick={() => setActiveModalVol(vol)}
            className="border-[3px] border-[#090909] bg-white p-4 shadow-[5px_5px_0px_#090909] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#090909] cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              {/* Photo Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden border-2 border-[#090909] bg-[#F5F3ED] shadow-[2px_2px_0px_#090909]">
                <Image
                  src={vol.image || "/placeholder.svg"}
                  alt={vol.role}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 border-2 border-[#090909] bg-[#FF789D] px-2 py-0.5 font-mono text-[10px] font-black uppercase shadow-[1px_1px_0px_#090909]">
                  {vol.period}
                </div>
              </div>

              {/* Organization & Title */}
              <span className="font-mono text-[10px] font-black text-[#555555] uppercase tracking-wider block mt-3">
                {vol.organization}
              </span>
              <h4 className="font-sans font-black text-base uppercase text-[#090909] line-clamp-1 mt-0.5">
                {vol.role}
              </h4>
              <p className="mt-1 text-xs text-[#555555] font-medium leading-relaxed line-clamp-2">
                {vol.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-[#090909] flex items-center justify-between font-mono text-[11px] font-bold">
              <span className="text-[#555555] uppercase">{vol.skills[0]}</span>
              <span className="text-[#090909] uppercase underline underline-offset-2">
                VIEW DETAILS &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {activeModalVol && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg border-[3px] border-[#090909] bg-[#F5F3ED] p-6 shadow-[10px_10px_0px_#090909] animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setActiveModalVol(null)}
              className="absolute top-4 right-4 border-2 border-[#090909] bg-white p-1 text-[#090909] hover:bg-[#FF789D] shadow-[2px_2px_0px_#090909]"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden border-2 border-[#090909] bg-white mb-4 shadow-[3px_3px_0px_#090909]">
              <Image
                src={activeModalVol.image || "/placeholder.svg"}
                alt={activeModalVol.role}
                fill
                className="object-cover"
              />
            </div>

            <span className="font-mono text-xs font-black text-[#555555] uppercase tracking-wider">
              {activeModalVol.organization} • {activeModalVol.period}
            </span>
            <h3 className="font-sans font-black text-xl uppercase text-[#090909] mt-1">
              {activeModalVol.role}
            </h3>
            <p className="text-sm text-[#090909] font-medium leading-relaxed mt-2">
              {activeModalVol.description}
            </p>

            <div className="mt-4 p-3 border-2 border-[#090909] bg-[#C5F451] font-mono text-xs text-[#090909] shadow-[2px_2px_0px_#090909]">
              <span className="font-black block mb-0.5">{"//"} IMPACT HIGHLIGHT:</span>
              <span className="font-bold">{activeModalVol.impactHighlight}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {activeModalVol.skills.map((s) => (
                <span
                  key={s}
                  className="border-2 border-[#090909] bg-white px-2.5 py-1 font-mono text-xs font-bold uppercase text-[#090909] shadow-[1px_1px_0px_#090909]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
