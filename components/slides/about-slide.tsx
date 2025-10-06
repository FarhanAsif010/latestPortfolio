'use client';

import { useEffect, useState } from 'react';

interface AboutSlideProps {
  isVisible: boolean;
}

export default function AboutSlide({ isVisible }: AboutSlideProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div className="flex h-full w-full items-center justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <div
          className={`space-y-12 transition-all duration-1000 ${
            hasAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-mono text-sm tracking-wider text-white/50">
                PORTFOLIO 2025
              </p>
              <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#556B2F] via-[#6B8E23] to-[#A3B18A] bg-clip-text text-transparent ">
                    Farhan
                  </span>
                  <span className="absolute bottom-2 left-0 h-3 w-full bg-white/20 blur-sm"></span>
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
              <div className="h-px w-12 bg-white/30"></div>
              <p className="text-xl font-light leading-relaxed text-white/70 md:text-2xl">
                Automation Enthusiast & Full-Stack Workflow Architect
              </p>
            </div>
          </div>
          {/* </CHANGE> */}

          <div
            className={`space-y-8 transition-all duration-1000 ${
              hasAnimated
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="max-w-3xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
              I build smart systems that automate, integrate, and scale
              businesses — from no-code workflows to custom full-stack web apps.
              My focus is on saving time, reducing errors, and creating seamless
              digital experiences that help teams grow faster.
            </p>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold tracking-wide text-white/90">
                What I Do
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="group rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10">
                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-white">
                    Business Automation
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    Designing and implementing workflows that automate
                    repetitive business processes
                  </p>
                </div>
                <div className="group rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10">
                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-white">
                    Full-Stack Development
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    Building dynamic web applications from backend logic to
                    intuitive user interfaces
                  </p>
                </div>
                <div className="group rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10">
                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-white">
                    Workflow Optimization
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    Streamlining operations to maximize efficiency and
                    productivity
                  </p>
                </div>
                <div className="group rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10">
                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-white">
                    Custom Software Solutions
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    Developing tailored applications that solve real business
                    problems and scale with growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
