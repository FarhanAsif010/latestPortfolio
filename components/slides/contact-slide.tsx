"use client"

import { useEffect, useState } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactSlideProps {
  isVisible: boolean
}

export default function ContactSlide({ isVisible }: ContactSlideProps) {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isVisible, hasAnimated])

  const contactLinks = [
    {
      name: "Email",
      value: "khawajafarhan010@gmail.com",
      href: "mailto:khawajafarhan010@gmail.com",
      icon: Mail,
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/asif-farhan",
      href: "https://linkedin.com/in/asif-farhan",
      icon: Linkedin,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "GitHub",
      value: "github.com/Farhanasif010",
      href: "https://github.com/Farhanasif010",
      icon: Github,
      color: "hover:text-white",
    },
  ]

  return (
    <div className="flex h-full w-full items-center justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl w-full">
        <div
          className={`space-y-12 transition-all duration-1000 ${
            hasAnimated ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="space-y-6 text-center">
            <h2 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Let's Work <span className="text-white/90">Together</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/70">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
              want to say hi, feel free to reach out!
            </p>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 ${
              hasAnimated ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between rounded-lg border border-white/20 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 ${
                    hasAnimated ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white/10 p-3 transition-colors group-hover:bg-white/20">
                      <Icon className={`h-6 w-6 text-white transition-colors ${link.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/60">{link.name}</p>
                      <p className="text-lg font-semibold text-white">{link.value}</p>
                    </div>
                  </div>
                  <Send className="h-5 w-5 text-white/60 transition-all group-hover:translate-x-1 group-hover:text-white" />
                </a>
              )
            })}
          </div>

          <div
            className={`flex justify-center pt-8 transition-all duration-1000 ${
              hasAnimated ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <Button
              size="lg"
              className="gap-2 bg-white px-8 py-6 text-lg font-semibold text-black hover:bg-white/90"
              asChild
            >
              <a href="mailto:khawajafarhan010@gmail.com">
                <Mail className="h-5 w-5" />
                Send me an email
              </a>
            </Button>
          </div>

          <div
            className={`text-center transition-all duration-1000 ${hasAnimated ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "800ms" }}
          >
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Farhan Asif. Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
