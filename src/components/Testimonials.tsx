"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    initials: "SA",
    name: "Sarah Anderson",
    role: "CEO, RetailCorp",
    text: "Nexus Software Services transformed our online presence with a robust e-commerce platform. Their team's expertise in full-stack development and attention to detail exceeded our expectations."
  },
  {
    initials: "MJ",
    name: "Michael Johnson",
    role: "CTO, FinTech Solutions",
    text: "The custom API suite they built for us handles thousands of transactions daily. Their scalable architecture and security measures have been crucial for our growth.",
    highlight: true
  },
  {
    initials: "EW",
    name: "Emily Wilson",
    role: "Operations Director, LogiTrans",
    text: "Their business intelligence dashboard provided us with actionable insights that reduced our operational costs significantly. Professional, reliable, and innovative."
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="max-w-[1200px] mx-auto mb-[100px] px-8">
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)] mb-5"
        >
          Client Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-2px] leading-[1.05] mb-[18px]"
        >
          What Our Clients Say.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[17px] text-[var(--muted)] max-w-[500px] mx-auto mb-16 leading-[1.7]"
        >
          Real feedback from real clients and collaborators.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
        {testimonials.map((testi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-[var(--bg2)] border border-[var(--border)] rounded-[20px] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[rgba(255,255,255,0.14)] hover:-translate-y-0.5 ${
              testi.highlight ? "border-[rgba(168,255,120,0.15)]" : ""
            }`}
          >
            <div>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#fdb241] text-[#fdb241]" />
                ))}
              </div>
              <p className="text-[15px] leading-[1.7] text-[rgba(240,237,232,0.8)] mb-6">
                "{testi.text}"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--bg3)] to-[rgba(168,255,120,0.2)] border border-[var(--border)] flex items-center justify-center font-display text-[13px] font-bold text-[var(--accent)] flex-shrink-0">
                {testi.initials}
              </div>
              <div>
                <div className="font-display text-[14px] font-bold mb-0.5">{testi.name}</div>
                <div className="text-[12px] text-[var(--muted)]">{testi.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export { Testimonials }
