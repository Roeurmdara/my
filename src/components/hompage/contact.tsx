"use client";

import { Mail, MapPin, Send, Github, Linkedin, Clock } from "lucide-react";

export default function ContactUsHero() {
  return (
    <section id="contact" className="scroll-mt-24" aria-label="Contact Dara">
      <div className="border-[3px] border-[#090909] bg-[#7950F5] p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#090909] text-white relative">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-[3px] border-[#090909]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 border-2 border-[#090909] bg-[#C5F451] px-3 py-1 font-mono text-xs font-black uppercase text-[#090909] shadow-[2px_2px_0px_#090909]">
              <Mail className="h-3.5 w-3.5 text-[#090909]" />
              {"//"} GET IN TOUCH
            </span>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white/90">
            AVAILABLE FOR FREELANCE &amp; FULL-TIME
          </span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="font-sans text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                LET&apos;S BUILD SOMETHING <br />
                <span className="inline-block bg-[#FF789D] text-[#090909] border-[3px] border-[#090909] px-3 py-0.5 mt-1 shadow-[4px_4px_0px_#090909]">
                  BOLD TOGETHER
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-xl">
                Have an inquiry, project idea, or job opportunity? Send me a direct note and I will get back to you shortly.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message has been received.");
                }}
                className="mt-6 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-bold uppercase text-white">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      required
                      className="w-full border-[3px] border-[#090909] bg-white px-3.5 py-2.5 font-mono text-sm text-[#090909] placeholder-[#888888] shadow-[3px_3px_0px_#090909] focus:outline-none focus:bg-[#F5F3ED]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-bold uppercase text-white">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className="w-full border-[3px] border-[#090909] bg-white px-3.5 py-2.5 font-mono text-sm text-[#090909] placeholder-[#888888] shadow-[3px_3px_0px_#090909] focus:outline-none focus:bg-[#F5F3ED]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-bold uppercase text-white">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project, timeline, and goals..."
                    required
                    className="w-full border-[3px] border-[#090909] bg-white p-3.5 font-mono text-sm text-[#090909] placeholder-[#888888] shadow-[3px_3px_0px_#090909] focus:outline-none focus:bg-[#F5F3ED] resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 border-[3px] border-[#090909] bg-[#C5F451] text-[#090909] font-mono font-black text-sm uppercase px-6 py-3 shadow-[4px_4px_0px_#090909] hover:bg-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_#090909] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#090909] transition-all"
                  >
                    <Send className="h-4 w-4 text-[#090909]" />
                    <span>SEND MESSAGE</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-[3px] border-[#090909] bg-[#F5F3ED] text-[#090909] p-6 shadow-[6px_6px_0px_#090909]">
            <div className="space-y-4">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[#555555] block">
                {"//"} DIRECT CHANNELS
              </span>

              <div className="space-y-3">
                <div className="border-2 border-[#090909] bg-white p-3 shadow-[2px_2px_0px_#090909] flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[#090909] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#555555] uppercase block">EMAIL ADDRESS</span>
                    <a
                      href="mailto:roeurmdara@gmail.com"
                      className="font-mono text-xs font-bold text-[#090909] hover:underline"
                    >
                      roeurmdara@gmail.com
                    </a>
                  </div>
                </div>

                <div className="border-2 border-[#090909] bg-white p-3 shadow-[2px_2px_0px_#090909] flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#090909] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#555555] uppercase block">LOCATION</span>
                    <span className="font-mono text-xs font-bold text-[#090909]">
                      PHNOM PENH, CAMBODIA
                    </span>
                  </div>
                </div>

                <div className="border-2 border-[#090909] bg-white p-3 shadow-[2px_2px_0px_#090909] flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[#090909] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#555555] uppercase block">RESPONSE WINDOW</span>
                    <span className="font-mono text-xs font-bold text-[#090909]">
                      TYPICALLY WITHIN 24 HOURS
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="p-3 border-2 border-[#090909] bg-[#C5F451] font-mono text-xs font-black uppercase text-[#090909] shadow-[2px_2px_0px_#090909] flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#090909] animate-pulse shrink-0" />
                <span>OPEN TO NEW FULL-TIME &amp; CONTRACT ROLES</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-6 pt-4 border-t-2 border-[#090909] flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-[#555555]">PROFILES</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Roeurmdara"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 border-2 border-[#090909] bg-white px-3 py-1 font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#090909] hover:bg-[#C5F451] transition-colors"
                >
                  <Github className="h-3.5 w-3.5 text-[#090909]" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rouerm-dara-757176346/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 border-2 border-[#090909] bg-white px-3 py-1 font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#090909] hover:bg-[#FF789D] transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5 text-[#090909]" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
