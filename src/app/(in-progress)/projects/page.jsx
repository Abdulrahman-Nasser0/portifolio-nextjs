
'use client';

import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, GitBranch, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'motion/react-client';

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
    gradient: 'from-red-600 to-red-900',
    stats: { duration: '15 days', team: 'Collaborative', type: 'Full-Stack' }
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
    gradient: 'from-cyan-600 to-blue-900',
    stats: { duration: '1 week', team: 'Solo', type: 'Frontend' }
  }
];

  const additionalProjects = [
    {
      id: 'space-tourism',
      title: 'Space Tourism Website',
      description: 'A multi-page space tourism website with interactive destinations, crew, and technology sections. Features smooth page transitions and responsive design.',
      image: '/projects/project-space-tourism.png',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      features: [
        'Multi-page website with navigation',
        'Interactive tabs for destinations and crew',
        'Smooth animations and transitions',
        'Fully responsive across all devices'
      ],
      development: 'Focused on creating an immersive space-themed experience with careful attention to typography, spacing, and interactive elements.',
      liveUrl: 'https://abdulrahman-space-tourism-website.netlify.app/',
      githubUrl: 'https://github.com/Abdulrahman-02/space-tourism-website',
      stats: { type: 'Frontend', team: 'Solo' }
    },
    {
      id: 'personal-hub',
      title: 'Personal Productivity Hub',
      description: 'An all-in-one productivity dashboard combining notes, tasks, and pomodoro timer. Built to streamline personal workflow management.',
      image: '/projects/project-personal-productivity-hub.png',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Router'],
      features: [
        'Note-taking with rich text editing',
        'Task management with priorities',
        'Pomodoro timer for focus sessions',
        'Dark/light theme support'
      ],
      development: 'Developed to solve personal productivity needs, combining multiple tools into one cohesive application.',
      liveUrl: 'https://abdulrahman-personal-productivity-hub.netlify.app/',
      githubUrl: 'https://github.com/Abdulrahman-02/personal-productivity-hub',
      stats: { type: 'Full-Stack', team: 'Solo' }
    },
    {
      id: 'natours',
      title: 'Natours Landing Page',
      description: 'A beautiful and modern landing page for a fictional nature tour company. Showcases advanced CSS animations and effects.',
      image: '/projects/project-natours-landing.png',
      gradient: 'from-green-500 via-lime-500 to-emerald-500',
      techStack: ['HTML5', 'SCSS', 'CSS Grid', 'Animations'],
      features: [
        'Custom CSS animations',
        'Advanced SCSS architecture',
        'Responsive grid layouts',
        'Modern UI design patterns'
      ],
      development: 'Created as a showcase of advanced CSS techniques including animations, transforms, and modern layout methods.',
      liveUrl: 'https://natours-css-abdulrahman.netlify.app/',
      githubUrl: 'https://github.com/Abdulrahman-02/Natours',
      stats: { type: 'Frontend', team: 'Solo' }
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
        <section ref={featuredRef} className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-px flex-1 ml-6 bg-gradient-to-r from-gray-600 to-transparent"></div>
          </div>
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-1000`}></div>
                
                <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
                  <div className="grid lg:grid-cols-[45%_55%]">
                    {/* Project Image with Hover Effect */}
                    <div className="relative h-80 lg:h-auto overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                        {/* Gradient Overlay on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      </motion.div>

                      {/* Stats Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex gap-4 text-sm">
                          {project.stats.duration && (
                            <div className="flex items-center gap-2 text-gray-300">
                              <Calendar size={16} className="text-blue-400" />
                              <span>{project.stats.duration}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-gray-300">
                            <Users size={16} className="text-green-400" />
                            <span>{project.stats.team}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <GitBranch size={16} className="text-purple-400" />
                            <span>{project.stats.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        {/* Title with Gradient */}
                        <h3 className={`text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-lg mb-4">{project.subtitle}</p>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack with Animation */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                            <Star size={14} className="text-yellow-400" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={featuredInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                                className="px-4 py-1.5 bg-gradient-to-r from-gray-800 to-gray-800/50 hover:from-gray-700 hover:to-gray-700/50 border border-gray-700/50 rounded-full text-xs font-medium text-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Features Toggle */}
                        <button
                          onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                          className="text-sm text-blue-400 hover:text-blue-300 mb-4 transition-colors flex items-center gap-2 group/btn"
                        >
                          <motion.span
                            animate={{ rotate: expandedProject === project.id ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            ▶
                          </motion.span>
                          {expandedProject === project.id ? 'Hide Details' : 'View Features & Details'}
                        </button>

                        {/* Expanded Features with Animation */}
                        <motion.div
                          initial={false}
                          animate={{ height: expandedProject === project.id ? 'auto' : 0, opacity: expandedProject === project.id ? 1 : 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                              <ul className="space-y-2">
                                {project.features.map((feature, i) => (
                                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {project.challenges && (
                              <div>
                                <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenges Overcome:</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">{project.challenges}</p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 mt-8">
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl transition-all duration-300 font-medium group/link transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                          >
                            <ExternalLink size={18} className="group-hover/link:rotate-45 transition-transform duration-300" />
                            <span>Live Demo</span>
                          </Link>
                        )}
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-xl transition-all duration-300 font-medium group/link transform hover:scale-105"
                        >
                          <Github size={18} className="group-hover/link:rotate-12 transition-transform duration-300" />
                          <span>Source Code</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Projects Grid */}
        <section ref={additionalRef}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              More Projects
            </h2>
            <div className="h-px flex-1 ml-6 bg-gradient-to-r from-gray-600 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={additionalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></div>
                
                <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-500 h-full flex flex-col">
                  {/* Project Image with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="h-full"
                    >
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </>
                      ) : (
                        <div className={`h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6`}>
                          <h3 className="text-2xl font-bold text-center">{project.title}</h3>
                        </div>
                      )}
                    </motion.div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                      {project.stats.type}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-500">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 pb-4 border-b border-gray-800">
                      <div className="flex items-center gap-1.5">
                        <Users size={14} className="text-green-400" />
                        <span>{project.stats.team}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GitBranch size={14} className="text-purple-400" />
                        <span>{project.stats.type}</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={additionalInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 }}
                            className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-800/50 border border-gray-700/50 rounded-lg text-xs text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-lg text-xs text-gray-400">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl transition-all duration-300 text-sm font-medium group/link hover:shadow-lg hover:shadow-purple-500/50"
                        >
                          <ExternalLink size={14} className="group-hover/link:rotate-45 transition-transform duration-300" />
                          <span>Demo</span>
                        </Link>
                      )}
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-xl transition-all duration-300 text-sm font-medium group/link"
                      >
                        <Github size={14} className="group-hover/link:rotate-12 transition-transform duration-300" />
                        <span>Code</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
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
