
'use client';

import * as motion from 'motion/react-client';
import HeroSection from './_components/hero-section';
import FeaturedProjectsSection from './_components/featured-projects-section';
import AdditionalProjectsSection from './_components/additional-projects-section';
import { featuredProjects, additionalProjects } from './_components/projects-data';
import { MagneticButton } from '@/app/_components/common/magnetic-button';

export default function Projects() {
  return (
    <main className="min-h-screen text-white bg-(--color-text)">
      <HeroSection />

      {/* Projects Container */}
      <div className="container mx-auto px-4 pb-20">
        <FeaturedProjectsSection projects={featuredProjects} />
        <AdditionalProjectsSection projects={additionalProjects} />
      </div>

      {/* Get In Touch Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Content Card */}
            <div className="relative  rounded-2xl p-8 md:p-12  text-center">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold bg-linear-to-r from-sky-600 via-sky-400 to-gray-400 bg-clip-text text-transparent mb-4"
              >
                Like What You See?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-300  text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Let's collaborate and bring your ideas to life. I'm available for freelance projects and full-time opportunities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <MagneticButton to="/contact" className="text-white p-4 text-lg">
                  Get In Touch
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
