"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    initials: "LA",
    name: "Leslie Alexander",
    role: "Startup Founder",
    text: "Mohamed's attention to UI detail is outstanding for someone his age. He built our landing page and it looks better than anything our agency has made. Delivered on time, no back and forth."
  },
  {
    initials: "JJ",
    name: "Jacob Jones",
    role: "Tech Lead",
    text: "He doesn't just build what you ask — he thinks about what you actually need. The REST API he built for us was clean, modular and easy for our team to extend. Rare skill.",
    highlight: true
  },
  {
    initials: "JW",
    name: "Jenny Wilson",
    role: "Product Designer",
    text: "Hired Mohamed for a React project and he nailed the component architecture from the start. Clean code, great communication, and delivered a beautiful UI. Will definitely work together again."
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
          Social proof
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-2px] leading-[1.05] mb-[18px]"
        >
          People who trust my work.
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
