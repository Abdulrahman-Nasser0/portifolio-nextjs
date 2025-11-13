
'use client';

import HeroSection from './_components/hero-section';
import FeaturedProjectsSection from './_components/featured-projects-section';
import AdditionalProjectsSection from './_components/additional-projects-section';
import { featuredProjects, additionalProjects } from './_components/projects-data';

export default function Projects() {
  return (
    <main className="min-h-screen text-white bg-(--color-text) animate-bgEnter">
      <HeroSection />

      {/* Projects Container */}
      <div className="container mx-auto px-4 pb-20">
        <FeaturedProjectsSection projects={featuredProjects} />
        <AdditionalProjectsSection projects={additionalProjects} />
      </div>

      <style jsx>{`
        @keyframes bgEnter {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-bgEnter {
          animation: bgEnter 0.8s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
