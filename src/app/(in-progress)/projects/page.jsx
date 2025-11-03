
'use client';

import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const featuredProjects = [
  {
    id: 1,
    title: 'Netflix Clone',
    subtitle: 'Full-Stack Streaming Platform',
    description: 'A modern, responsive Netflix clone built with React and Laravel, featuring user authentication, personalized watchlists, and real-time movie data from TMDB API',
  image: '/projects/project-netlifx.png',
    liveUrl: 'https://netflix-clone-abdulrahman-nasser.vercel.app/',
    githubUrl: 'https://github.com/Abdulrahman-Nasser0/netflix-clone',
    techStack: ['React', 'Vite', 'TailwindCSS', 'Laravel', 'MySQL', 'Zustand', 'Cypress', 'TMDB API'],
    features: [
      'Browse trending movies and TV shows',
      'Search functionality and category filtering',
      'User authentication system',
      'Personal watchlist management',
      'Fully responsive design',
      'E2E testing with Cypress'
    ],
    development: '~15 days collaborative project',
    challenges: 'Complex API integration between backend and TMDB, state management with Zustand migration from Context API, authentication flow with CORS/token management',
    gradient: 'from-red-600 to-red-900'
  },
  {
    id: 2,
    title: 'Turistoe',
    subtitle: 'Travel Booking Platform',
    description: 'A modern, responsive travel booking platform with multi-step booking flow, destination browsing, and client testimonials',
  image: '/projects/project-turistoe.png',
    liveUrl: 'https://turistoe.vercel.app/',
    githubUrl: 'https://github.com/Abdulrahman-Nasser0/turistoe',
    techStack: ['React 19', 'Vite', 'TailwindCSS 4', 'React Router', 'Lucide React', 'Radix UI'],
    features: [
      'Browse destinations with beautiful imagery',
      '4-step booking process',
      'Guest counter for adults/children',
      'Package selection (Standard, Premium, Luxury)',
      'Room type selection',
      'Form validation throughout',
      'Customer testimonials carousel'
    ],
    development: 'Figma-to-Code challenge - pixel-perfect implementation',
    gradient: 'from-cyan-600 to-blue-900'
  }
];

const additionalProjects = [
  {
    id: 3,
    title: 'Space Tourism Website',
    description: 'Modern React application showcasing space tourism destinations, crew members, and cutting-edge technology',
  image: '/projects/project-space-tourism.png',
  liveUrl: 'https://space-tourism-website-abdulrahman-nasser.vercel.app/',
  githubUrl: 'https://github.com/Abdulrahman-Nasser0/space-tourism-website',
  techStack: ['React 19', 'Tailwind CSS 4', 'Vite 7'],
  features: [
      'Interactive navigation with seamless SPA',
      'Destination explorer & crew profiles',
      'Performance optimized',
      'Modern UI with glass-morphism effects'
    ],
    gradient: 'from-purple-600 to-indigo-900'
  },
  {
    id: 4,
    title: 'Personal Productivity Hub',
    description: 'Full-stack web application for personal productivity with task management, note-taking, habit tracking, and calendar integration',
  image: '/projects/project-personal-productivity-hub.png',
  githubUrl: 'https://github.com/Abdulrahman-Nasser0/Personal-Productivity-Hub',
  techStack: ['Flask', 'HTML', 'CSS', 'JavaScript', 'SQLite', 'Docker'],
  features: [
      'Secure user authentication',
      'Task management with CRUD',
      'Note-taking & habit tracking',
      'Calendar integration',
      'Dockerized deployment'
    ],
    development: 'Collaborative team project (6 developers, 80-110 hours)',
    gradient: 'from-green-600 to-emerald-900'
  },
  {
    id: 5,
    title: 'Natours Landing Page',
    description: 'Modern landing page for fictional travel company with advanced CSS animations',
    liveUrl: 'https://natours-abdulrahman-nasser.vercel.app/',
    githubUrl: 'https://github.com/Abdulrahman-Nasser0/natours',
    techStack: ['HTML5', 'SASS', 'JavaScript'],
    features: [
      'Clean modern UI',
      'Advanced CSS animations',
      'Responsive design'
    ],
    development: 'Built as part of Advanced CSS and Sass course',
    gradient: 'from-teal-600 to-cyan-900'
  }
];

export default function Projects() {
  const [featuredInView, setFeaturedInView] = useState(false);
  const [additionalInView, setAdditionalInView] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const featuredRef = useRef(null);
  const additionalRef = useRef(null);

  useEffect(() => {
    const featuredObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturedInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const additionalObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAdditionalInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (featuredRef.current) {
      featuredObserver.observe(featuredRef.current);
    }

    if (additionalRef.current) {
      additionalObserver.observe(additionalRef.current);
    }

    return () => {
      if (featuredRef.current) {
        featuredObserver.unobserve(featuredRef.current);
      }
      if (additionalRef.current) {
        additionalObserver.unobserve(additionalRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen text-white bg-[var(--color-text)] animate-bgEnter">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 md:pt-28 pb-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto opacity-80">
            A collection of my recent work, showcasing full-stack development, modern UI/UX design, and problem-solving skills
          </p>
        </div>

        {/* Featured Projects */}
        <section ref={featuredRef} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-800/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                style={{
                  opacity: featuredInView ? 1 : 0,
                  transform: featuredInView ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 0.6s ease-out ${index * 200}ms`
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Image/Preview */}
                  <div className="relative h-64 md:h-auto overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Title Overlay - Hidden by default, slides up on hover */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="w-full text-center z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">{project.title}</h3>
                        <p className="text-base md:text-lg opacity-90 drop-shadow-md">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 md:p-8">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features Toggle */}
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="text-sm text-blue-400 hover:text-blue-300 mb-3 transition-colors"
                    >
                      {expandedProject === project.id ? '− Hide Details' : '+ View Features & Details'}
                    </button>

                    {/* Expanded Features */}
                    {expandedProject === project.id && (
                      <div className="mb-4 space-y-3 bg-gray-900/30 rounded-lg p-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                            {project.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        {project.development && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-1">Development:</h4>
                            <p className="text-sm text-gray-300">{project.development}</p>
                          </div>
                        )}
                        {project.challenges && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-1">Challenges Overcome:</h4>
                            <p className="text-sm text-gray-300">{project.challenges}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-4 mt-6">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </Link>
                      )}
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Projects Grid */}
        <section ref={additionalRef}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            More Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  opacity: additionalInView ? 1 : 0,
                  transform: additionalInView ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 0.6s ease-out ${index * 150}ms`
                }}
              >
                {/* Project Header */}
                <div className="relative h-48 overflow-hidden group">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Title - Hidden by default, slides up on hover */}
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="w-full text-center z-10">
                          <h3 className="text-xl font-bold drop-shadow-lg">{project.title}</h3>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6`}>
                      <h3 className="text-2xl font-bold text-center">{project.title}</h3>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="text-xs text-blue-400 hover:text-blue-300 mb-3 transition-colors"
                  >
                    {expandedProject === project.id ? '− Hide Features' : '+ View Features'}
                  </button>

                  {expandedProject === project.id && (
                    <div className="mb-4 bg-gray-900/30 rounded-lg p-3">
                      <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      {project.development && (
                        <p className="text-xs text-gray-400 mt-2 italic">{project.development}</p>
                      )}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm flex-1 justify-center"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </Link>
                    )}
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm flex-1 justify-center"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
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
