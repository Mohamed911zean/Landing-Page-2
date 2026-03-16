"use client"

import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"
import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-20 px-8 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(168,255,120,0.05)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[rgba(168,255,120,0.08)] border border-[rgba(168,255,120,0.2)] rounded-full px-4 py-1.5 text-[13px] text-[var(--accent)] mb-8"
        >
          <Mail className="w-4 h-4" />
          Stay Updated
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.1] tracking-[-2px] mb-6"
        >
          Join Our Newsletter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[clamp(16px,2vw,18px)] text-[var(--muted)] max-w-[600px] mx-auto leading-[1.7] mb-12"
        >
          Get the latest updates on our software development projects, industry insights, and exclusive offers delivered straight to your inbox.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
            <button
              type="submit"
              className="bg-[var(--accent)] text-[#0a0a0b] font-display text-[15px] font-bold px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-all hover:bg-[var(--accent-dim)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(168,255,120,0.2)]"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export { Newsletter }