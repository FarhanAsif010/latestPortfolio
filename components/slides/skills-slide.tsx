"use client"

import { useEffect, useState } from "react"

interface SkillSlideProps {
  isVisible: boolean
}

const skills = [
  {
    category: "Automation Tools",
    items: [
      { name: "n8n", icon: "🔄", level: 75 },
      { name: "GoHighLevel", icon: "📈", level: 80 },
      { name: "Zapier", icon: "⚡", level: 85 },
      { name: "Make", icon: "🔗", level: 80 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️", level: 95 },
      { name: "Next.js", icon: "▲", level: 90 },
      { name: "TypeScript", icon: "📘", level: 90 },
      { name: "Tailwind CSS", icon: "🎨", level: 80 },
    ],
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Node.js", icon: "🟢", level: 85 },
      { name: "PostgreSQL", icon: "🐘", level: 80 },
      { name: "REST APIs", icon: "🔌", level: 75 },
      { name: "WordPress", icon: "📝", level: 85 },
    ],
  },
]

export default function SkillsSlide({ isVisible }: SkillSlideProps) {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isVisible, hasAnimated])

  return (
    <div className="flex h-full w-full items-center justify-center px-8 py-16 md:px-16 lg:px-24">
      <div className="max-w-6xl w-full">
        <div
          className={`mb-12 transition-all duration-1000 ${
            hasAnimated ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">Skills & Expertise</h2>
          <p className="text-xl text-white/70">Technologies and tools I work with to bring ideas to life</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className={`space-y-6 transition-all duration-1000 ${
                hasAnimated ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${(groupIndex + 1) * 150}ms` }}
            >
              <h3 className="text-2xl font-semibold text-white">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group rounded-lg border border-white/20 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{skill.icon}</span>
                        <span className="font-semibold text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm font-mono text-white/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-white transition-all duration-1000 ease-out"
                        style={{
                          width: hasAnimated ? `${skill.level}%` : "0%",
                          transitionDelay: `${(groupIndex + 1) * 150 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
