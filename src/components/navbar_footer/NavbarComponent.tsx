"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"


const sections = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      const current = window.scrollY
      const pct = total > 0 ? (current / total) * 100 : 0
      setProgress(pct)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black text-white">
            R
          </span>
          <span className="hidden sm:inline">Roeurm Dara</span>
          <span className="sr-only">Home</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {s.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Roeurmdara" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/rouerm-dara-757176346/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#contact" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
      
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <div className="mt-4 grid gap-2">
                {sections.map((s) => (
                  <Button key={s.href} asChild variant="ghost" className="justify-start">
                    <a href={s.href}>{s.label}</a>
                  </Button>
                ))}
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="relative h-1 w-full bg-transparent">
        <span
          style={{ width: `${progress}%` }}
          className="absolute left-0 top-0 h-1 bg-black transition-[width]"
          aria-hidden="true"
        />
      </div>
    </header>
  )
}
