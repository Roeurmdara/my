"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const tools = [
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
  { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg" },
  { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
]

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...tools, ...tools]
  return (
    <motion.div
      initial={{ x: reverse ? 0 : 0 }}
      animate={{ x: reverse ? "-50%" : "-50%" }}
      transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
      className="flex shrink-0 min-w-[200%] gap-6"
      aria-hidden
    >
      {items.map((t, i) => (
        <div
          key={`${t.name}-${i}`}
          className="inline-flex items-center gap-3 rounded-lg border bg-background/70 px-3 py-2 text-sm text-muted-foreground backdrop-blur"
        >
          <span className="relative h-6 w-6 overflow-hidden rounded">
            <Image
              src={t.logo || "/placeholder.svg"}
              alt={`${t.name} logo`}
              fill
              sizes="24px"
              className="object-contain"
            />
          </span>
          {t.name}
        </div>
      ))}
    </motion.div>
  )
}

export default function LogosMarquee() {
  return (
    <section aria-label="Tools and platforms" className="relative border-t py-8">
      <div className="mx-auto max-w-6xl overflow-hidden px-4 md:px-6">
        <div className="relative">
          <Row />
        </div>
      </div>
    </section>
  )
}
