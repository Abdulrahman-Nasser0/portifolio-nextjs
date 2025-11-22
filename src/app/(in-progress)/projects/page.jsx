
'use client';

import HeroSection from './_components/hero-section';
import FeaturedProjectsSection from './_components/featured-projects-section';
import AdditionalProjectsSection from './_components/additional-projects-section';
import { featuredProjects, additionalProjects } from './_components/projects-data';

export default function Projects() {
  return (
    <main className="min-h-screen text-white bg-(--color-text)">
      <HeroSection />

      {/* Projects Container */}
      <div className="container mx-auto px-4 pb-20">
        <FeaturedProjectsSection projects={featuredProjects} />
        <AdditionalProjectsSection projects={additionalProjects} />
      </div>
    </main>
  );
}
