'use client';

import { useState, useRef, useEffect } from 'react';
import * as motion from 'motion/react-client';
import AdditionalProjectCard from './additional-project-card';

export default function AdditionalProjectsSection({ projects }) {
  const [inView, setInView] = useState(false);
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
    <section ref={sectionRef}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          More Projects
        </h2>
        <div className="h-px flex-1 ml-6 bg-gradient-to-r from-gray-600 to-transparent"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <AdditionalProjectCard
            key={project.id}
            project={project}
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
}
