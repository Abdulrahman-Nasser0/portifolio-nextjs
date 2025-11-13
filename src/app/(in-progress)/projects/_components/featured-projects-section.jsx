'use client';

import { useState, useRef, useEffect } from 'react';
import * as motion from 'motion/react-client';
import FeaturedProjectCard from './featured-project-card';

export default function FeaturedProjectsSection({ projects }) {
  const [inView, setInView] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="h-px flex-1 ml-6 bg-linear-to-r from-gray-600 to-transparent"></div>
      </div>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            index={index}
            inView={inView}
            isExpanded={expandedProject === project.id}
            onToggleExpand={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
          />
        ))}
      </div>
    </section>
  );
}
