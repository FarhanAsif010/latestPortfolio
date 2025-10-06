"use client"

import { useEffect, useRef, useState } from "react"
import AboutSlide from "@/components/slides/about-slide"
import SkillsSlide from "@/components/slides/skills-slide"
import ProjectsSlide from "@/components/slides/projects-slide"
import ContactSlide from "@/components/slides/contact-slide"

export default function PortfolioSlider() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(index)
            }
          })
        },
        {
          threshold: 0.3,
        },
      )

      observer.observe(section)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative h-screen w-full overflow-y-scroll overflow-x-hidden bg-black snap-y snap-proximity scroll-smooth">
      {/* Section 1: About */}
      <section
        ref={(el) => {
          sectionsRef.current[0] = el
        }}
        className="min-h-screen w-full snap-start"
      >
        <AboutSlide isVisible={activeSection === 0} />
      </section>

      {/* Section 2: Skills */}
      <section
        ref={(el) => {
          sectionsRef.current[1] = el
        }}
        className="min-h-screen w-full snap-start"
      >
        <SkillsSlide isVisible={activeSection === 1} />
      </section>

      {/* Section 3: Projects */}
      <section
        ref={(el) => {
          sectionsRef.current[2] = el
        }}
        className="min-h-screen w-full snap-start"
      >
        <ProjectsSlide isVisible={activeSection === 2} />
      </section>

      {/* Section 4: Contact */}
      <section
        ref={(el) => {
          sectionsRef.current[3] = el
        }}
        className="min-h-screen w-full snap-start"
      >
        <ContactSlide isVisible={activeSection === 3} />
      </section>

      {/* Vertical Navigation Dots */}
      <div className="fixed right-8 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`h-3 w-3 rounded-full border-2 border-white transition-all duration-300 ${
              index === activeSection ? "scale-125 bg-white" : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Section Counter */}
      <div className="fixed left-8 top-8 z-50 font-mono text-sm text-white/60">
        <span className="text-lg text-white">{String(activeSection + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>04</span>
      </div>
    </div>
  )
}
