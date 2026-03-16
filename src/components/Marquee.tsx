"use client"

const Marquee = () => {
  const techs = [
    { name: "React", color: "#61dafb22" },
    { name: "Next.js", color: "#00d8ff22" },
    { name: "TypeScript", color: "#3178c622" },
    { name: "Tailwind CSS", color: "#06b6d422" },
    { name: "Node.js", color: "#68a63a22" },
    { name: "Express", color: "#f05032aa" },
    { name: "MongoDB", color: "#4db33d22" },
    { name: "Mongoose", color: "#880000aa" },
    { name: "React Native", color: "#5a29e422" },
    { name: "JavaScript", color: "#f7df1e22" },
    { name: "HTML5", color: "#e34c2622" },
    { name: "CSS3", color: "#1572b622" },
  ]

  return (
    <div className="overflow-hidden border-t border-b border-[var(--border)] py-[18px] bg-[var(--bg2)] mt-20">
      <div className="flex gap-12 w-max animate-[marquee_20s_linear_infinite]">
        {/* Triple copy for smooth loop */}
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 font-display text-[13px] font-semibold tracking-[0.05em] uppercase text-[var(--muted)] whitespace-nowrap"
          >
            <span
              className="w-[18px] h-[18px] rounded-[4px] flex-shrink-0"
              style={{ backgroundColor: tech.color }}
            />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export { Marquee }
