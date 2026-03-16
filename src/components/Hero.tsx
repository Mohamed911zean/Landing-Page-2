"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageSquare } from "lucide-react"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-[120px] pb-20 relative overflow-hidden">
      <div className="absolute w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(168,255,120,0.08)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-[rgba(168,255,120,0.08)] border border-[rgba(168,255,120,0.2)] rounded-full px-4 py-1.5 text-[13px] text-[var(--accent)] mb-8"
      >
        <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" />
        Available for freelance & full-time roles
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[clamp(52px,8vw,100px)] font-extrabold leading-[1.0] tracking-[-3px] mb-6"
      >
        Building the web{" "}
        <span className="block shimmer-text">that converts.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-[clamp(16px,2vw,20px)] text-[var(--muted)] max-w-[560px] leading-[1.7] mb-11"
      >
        I'm Mohamed — a self-taught MERN stack developer from Mansoura, Egypt. I craft fast, beautiful digital products that users actually love.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#work"
          className="bg-[var(--accent)] text-[#0a0a0b] font-display text-[15px] font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all hover:bg-[var(--accent-dim)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(168,255,120,0.2)]"
        >
          View my work
          <ArrowRight size={16} strokeWidth={2.5} />
        </a>
        <a
          href="#contact"
          className="bg-transparent text-[var(--text)] font-display text-[15px] font-semibold px-8 py-[13px] rounded-full border border-[var(--border)] inline-flex items-center gap-2 transition-all hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5"
        >
          <MessageSquare size={16} />
          Let's talk
        </a>
      </motion.div>
    </section>
  )
}

export { Hero }
