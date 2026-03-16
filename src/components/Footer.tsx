"use client"

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-8 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 text-center">
      <p className="text-[13px] text-[var(--muted)]">
        © 2025 Nexus Software Services. Empowering businesses with technology.
      </p>
      <div className="flex gap-5">
        {["GitHub", "LinkedIn", "Twitter", "Portfolio"].map((social) => (
          <a
            key={social}
            href="#"
            className="text-[13px] text-[var(--muted)] no-underline transition-colors hover:text-[var(--text)]"
          >
            {social}
          </a>
        ))}
      </div>
    </footer>
  )
}

export { Footer }
