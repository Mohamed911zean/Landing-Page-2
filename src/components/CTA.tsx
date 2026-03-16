"use client"

import { motion } from "framer-motion"
import { ArrowRight, Linkedin } from "lucide-react"

const CTA = () => {
  return (
    <section id="contact" className="max-w-[900px] mx-auto mb-[120px] px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[var(--bg2)] border border-[var(--border)] rounded-[28px] py-18 px-12 relative overflow-hidden"
      >
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(168,255,120,0.08),transparent_70%)] pointer-events-none" />
        
        <h2 className="text-[clamp(36px,5vw,60px)] font-extrabold tracking-[-2px] mb-[18px]">
          Ready to Transform<br/>Your Business?
        </h2>
        <p className="text-[17px] text-[var(--muted)] max-w-[480px] mx-auto mb-9 leading-[1.7]">
          Let's discuss how our expert software development services can help you achieve your goals and drive innovation.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            id="/contact"
            className="bg-[var(--accent)] text-[#0a0a0b] font-display text-[15px] font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all hover:bg-[var(--accent-dim)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(168,255,120,0.2)]"
          >
            Get in Touch
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-[var(--text)] font-display text-[15px] font-semibold px-8 py-[13px] rounded-full border border-[var(--border)] inline-flex items-center gap-2 transition-all hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5"
          >
            <Linkedin size={16} />
            Our Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export { CTA }
