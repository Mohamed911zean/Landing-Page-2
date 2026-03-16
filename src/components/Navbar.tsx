"use client"

import * as React from "react"
import { cn } from "@/lib/utils"


const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] py-[18px] transition-all duration-400",
        isScrolled && "bg-[rgba(10,10,11,0.85)] border-b border-[var(--border)] backdrop-blur-[20px]"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
        <a href="#" className="font-display text-[20px] font-extrabold tracking-[-0.5px] text-[var(--text)]">
          NexusSoft
        </a>
        <ul className="hidden md:flex gap-9 list-none">
          {["Services", "Expertise", "Testimonials", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[14px] text-[var(--muted)] tracking-[0.02em] transition-colors hover:text-[var(--text)]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          id="/contact"
          className="bg-[var(--accent)] text-[#0a0a0b] font-display text-[14px] font-bold px-[22px] py-[10px] rounded-full transition-all hover:bg-[var(--accent-dim)] hover:-translate-y-[1px] cursor-pointer"
        >
          Contact Us↗
        </a>
      </div>
    </nav>
  )
}

export { Navbar }
