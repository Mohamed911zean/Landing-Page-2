import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/Marquee"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Testimonials } from "@/components/Testimonials"
import { CTA } from "@/components/CTA"
import { ContactUs } from "@/components/ContactUs"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="noise-overlay min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Skills />
        <Projects />
        <Testimonials />
        <CTA />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
