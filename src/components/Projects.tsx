"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    tag: "Full Stack",
    title: "Enterprise E-commerce Platform",
    desc: "A comprehensive online store with advanced product management, secure payment integration, and seamless user experience. Delivered to a retail client, increasing sales by 40%.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    className: "col-span-12 md:col-span-7",
    visual: (
      <div className="mt-5 bg-[var(--bg3)] rounded-xl border border-[var(--border)] p-4 h-[120px] flex items-end gap-2 overflow-hidden">
        {[60, 80, 55, 90, 70, 95, 65].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="flex-1 bg-gradient-to-t from-[rgba(168,255,120,0.6)] to-[rgba(168,255,120,0.1)] rounded-t-sm"
          />
        ))}
      </div>
    )
  },
  {
    tag: "API Development",
    title: "Custom REST API Suite",
    desc: "Scalable API architecture with authentication, data validation, and comprehensive documentation. Served 500+ concurrent users for a fintech startup.",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    className: "col-span-12 md:col-span-5 flex flex-col justify-between",
    extra: (
      <div className="mt-6 pt-6 border-t border-[var(--border)]">
        <div className="font-display text-[52px] font-extrabold tracking-[-3px] leading-none text-[var(--accent)] mb-2">50+</div>
        <div className="text-[14px] text-[var(--muted)] leading-[1.5]">endpoints deployed &<br/>optimized for performance</div>
      </div>
    )
  },
  {
    tag: "Data Analytics",
    title: "Business Intelligence Dashboard",
    desc: "Real-time data visualization platform with interactive charts and predictive analytics. Helped a logistics company reduce costs by 25%.",
    stack: ["React", "D3.js", "Python", "AWS"],
    className: "col-span-12 md:col-span-4"
  },
  {
    tag: "Productivity",
    title: "Enterprise Task Management System",
    desc: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting. Adopted by 200+ teams.",
    stack: ["React", "Firebase", "Material-UI", "TypeScript"],
    className: "col-span-12 md:col-span-8"
  }
]

const Projects = () => {
  return (
    <section id="work" className="max-w-[1200px] mx-auto mb-[100px] px-8">
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)] mb-5"
        >
          Selected work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-2px] leading-[1.05] mb-[18px]"
        >
          Projects Delivered.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[17px] text-[var(--muted)] max-w-[500px] mx-auto mb-16 leading-[1.7]"
        >
          Successful software solutions crafted for clients. From concept to deployment, we deliver quality and innovation.
        </motion.p>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-16">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "group bg-[var(--bg2)] border border-[var(--border)] rounded-[20px] p-7 transition-all duration-300 overflow-hidden relative",
              "hover:border-[rgba(168,255,120,0.2)] hover:-translate-y-0.5",
              "before:content-[''] before:absolute before:inset-0 before:rounded-[20px] before:bg-[radial-gradient(circle_at_30%_30%,rgba(168,255,120,0.04),transparent_60%)] before:opacity-0 before:transition-opacity before:duration-400 before:pointer-events-none hover:before:opacity-100",
              project.className
            )}
          >
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] bg-[rgba(168,255,120,0.08)] border border-[rgba(168,255,120,0.15)] rounded-full px-3 py-1 mb-4">
                {project.tag}
              </span>
              <h3 className="font-display text-[22px] font-bold mb-2.5 tracking-[-0.5px]">
                {project.title}
              </h3>
              <p className="text-[14px] text-[var(--muted)] leading-[1.7] mb-5">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((pill) => (
                  <span key={pill} className="text-[12px] text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.05)] border border-[var(--border)] rounded-full px-3 py-1">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            {project.visual}
            {project.extra}
            <a href="#" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)] no-underline mt-5 transition-[gap] hover:gap-2.5">
              View project <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export { Projects }
