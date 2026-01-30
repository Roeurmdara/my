"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export default function ContactUsHero() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-b"
      aria-label="Contact Us"
    >
 
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 pb-20 pt-16 md:grid-cols-2 md:gap-10 md:px-6 md:pb-28 md:pt-24">
        {/* Left side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 flex flex-col "
        >
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                Have a question or want to work together? I’d love to hear from you!
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-3 mt-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="flex gap-4">
              <Button type="submit" size="lg" className="gap-2">
                Send Message 
              </Button>
             
            </div>
          </form>
        </motion.div>

        {/* Right side: Illustration / Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
            <motion.img
              src="https://i.pinimg.com/1200x/f9/7d/cc/f97dcc1f4c7d2e4ceb47b57dc13060c1.jpg"
              alt="Contact illustration"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,250,250,0.0),rgba(0,0,0,0.3))]"
              animate={{ opacity: [0.4, 0.25, 0.4] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
