"use client"

import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"
import { useState } from "react"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here, e.g., send to API
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 px-8 relative overflow-hidden" id="contact">
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(168,255,120,0.05)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[rgba(168,255,120,0.08)] border border-[rgba(168,255,120,0.2)] rounded-full px-4 py-1.5 text-[13px] text-[var(--accent)] mb-8"
        >
          <Mail className="w-4 h-4" />
          Let's Connect
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.1] tracking-[-2px] mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[clamp(16px,2vw,18px)] text-[var(--muted)] max-w-[600px] mx-auto leading-[1.7] mb-12"
        >
          Have a project in mind or just want to chat? I'd love to hear from you. Send me a message and let's build something amazing together.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-[var(--accent)] text-[#0a0a0b] font-display text-[15px] font-bold px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all hover:bg-[var(--accent-dim)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(168,255,120,0.2)]"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export { ContactUs }