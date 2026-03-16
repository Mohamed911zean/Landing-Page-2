"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const Skills = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [28, 12])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.88, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0])

  return (
    <section ref={containerRef} id="skills" className="max-w-[1000px] mx-auto my-[100px] px-8 text-center">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)] mb-5"
      >
        Our Expertise
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-2px] leading-[1.05] mb-[18px]"
      >
        Solutions that Scale.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[17px] text-[var(--muted)] max-w-[500px] mx-auto mb-16 leading-[1.7]"
      >
        From enterprise applications to cloud-based systems — we build robust, scalable software that meets your business needs.
      </motion.p>

      <div className="relative mac-tilt group">
        <motion.div
          style={{ rotateX, scale, y }}
          className="w-full max-w-[780px] mx-auto origin-top transition-all duration-600 group-hover:!rotate-x-0 group-hover:!scale-100"
        >
          <div className="bg-gradient-to-br from-[#2a2a2e] to-[#1a1a1d] rounded-t-[16px] border border-[rgba(255,255,255,0.08)] p-4 relative after:content-[''] after:absolute after:top-2.5 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-[rgba(255,255,255,0.06)] after:rounded-full">
            <div className="bg-[#0d1117] rounded-[8px] overflow-hidden aspect-[16/10] border border-[rgba(255,255,255,0.06)] relative">
              <div className="w-full h-full bg-gradient-to-br from-[#0d1117] via-[#0f1923] to-[#0d1117] flex flex-col">
                <div className="flex items-center gap-1.5 px-3.5 pt-2.5 pb-2 border-b border-[rgba(255,255,255,0.05)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="text-[11px] color-[#555] ml-2.5 font-mono">server.js — portfolio-api</span>
                </div>
                <div className="font-mono text-[11px] leading-[1.8] text-left p-6 text-[#c9d1d9]">
                  <p className="text-[#8b949e">// Mohamed's Express API — clean & modular</p>
                  <p><span className="text-[#ff7b72]">import</span> <span className="text-[#ffa657]">express</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'express'</span></p>
                  <p><span className="text-[#ff7b72]">import</span> <span className="text-[#ffa657]">mongoose</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'mongoose'</span></p>
                  <p><span className="text-[#ff7b72]">import</span> <span className="text-[#ffa657]">dotenv</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'dotenv'</span></p>
                  <p><span className="text-[#ff7b72]">import</span> <span className="text-[#ffa657]">projectRoutes</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'./routes/projects.js'</span></p>
                  <p>&nbsp;</p>
                  <p><span className="text-[#ffa657]">dotenv</span>.<span className="text-[#79c0ff]">config</span>()</p>
                  <p><span className="text-[#ff7b72]">const</span> <span className="text-[#ffa657]">app</span> = <span className="text-[#79c0ff]">express</span>()</p>
                  <p><span className="text-[#ffa657]">app</span>.<span className="text-[#79c0ff]">use</span>(<span className="text-[#ffa657]">express</span>.<span className="text-[#79c0ff]">json</span>())</p>
                  <p>&nbsp;</p>
                  <p><span className="text-[#ff7b72]">await</span> <span className="text-[#ffa657]">mongoose</span>.<span className="text-[#79c0ff]">connect</span>(<span className="text-[#ffa657]">process</span>.env.<span className="text-[#ffa657]">MONGO_URI</span>)</p>
                  <p><span className="text-[#ffa657]">app</span>.<span className="text-[#79c0ff]">use</span>(<span className="text-[#a5d6ff]">'/api/projects'</span>, <span className="text-[#ffa657]">projectRoutes</span>)</p>
                  <p>&nbsp;</p>
                  <p><span className="text-[#ffa657]">app</span>.<span className="text-[#79c0ff]">listen</span>(<span className="text-[#ffa657]">process</span>.env.<span className="text-[#ffa657]">PORT</span>, () =&gt; {"{"}</p>
                  <p>&nbsp;&nbsp;<span className="text-[#ffa657]">console</span>.<span className="text-[#79c0ff]">log</span>(<span className="text-[#a5d6ff]">`🚀 Server running`</span>)</p>
                  <p>{"}"})</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#252528] to-[#1c1c1f] h-6 rounded-b-[20px] border border-[rgba(255,255,255,0.06)] border-t-0 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[200px] after:h-3.5 after:bg-[rgba(0,0,0,0.4)] after:rounded-b-[12px]" />
        </motion.div>
        <div className="w-4/5 h-5 bg-[rgba(0,0,0,0.5)] rounded-[50%] mx-auto blur-[18px] scale-y-[0.5]" />
      </div>
    </section>
  )
}

export { Skills }
