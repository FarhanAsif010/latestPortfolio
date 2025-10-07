'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectsSlideProps {
  isVisible: boolean;
}

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management',
    image: '/modern-ecommerce-dashboard.png',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'GoHighLevel Funnel & Automation',
    description:
      'GoHighLevel Funnel & automated client services for Roofing & Construction Business',
    image: '/roofing5.jpg',
    tags: ['GoHighLevel', 'Automated Client Services'],
    github: '#',
    live: '#',
  },
  {
    title: 'Job Listing Website',
    description: 'Website  that scrapes jobs and list with CRUD functionality',
    image: '/Joblisting.png',
    tags: ['React', 'PostgreSQL', 'Python'],
    github: '#',
    live: '#',
  },
];

export default function ProjectsSlide({ isVisible }: ProjectsSlideProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto px-8 py-16 md:px-16 lg:px-24">
      <div className="max-w-6xl w-full">
        <div
          className={`mb-12 transition-all duration-1000 ${
            hasAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group transition-all duration-1000 ${
                hasAnimated
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="overflow-hidden rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
                <div className="relative aspect-video overflow-hidden bg-white/5">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
