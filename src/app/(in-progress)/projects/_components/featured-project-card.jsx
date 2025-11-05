'use client';

import * as motion from 'motion/react-client';
import { ExternalLink, Github, Star, GitBranch, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProjectCard({ project, index, inView, isExpanded, onToggleExpand }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-1000`}></div>
      
      <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
        <div className="grid lg:grid-cols-[45%_55%]">
          {/* Project Image */}
          <ProjectImage project={project} />

          {/* Project Details */}
          <div className="p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Title and Description */}
              <ProjectHeader project={project} />
              
              {/* Tech Stack */}
              <TechStack techStack={project.techStack} inView={inView} index={index} />

              {/* Features Toggle */}
              <button
                onClick={onToggleExpand}
                className="text-sm text-blue-400 hover:text-blue-300 mb-4 transition-colors flex items-center gap-2 group/btn"
              >
                <motion.span
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▶
                </motion.span>
                {isExpanded ? 'Hide Details' : 'View Features & Details'}
              </button>

              {/* Expanded Features */}
              <ExpandedDetails isExpanded={isExpanded} project={project} />
            </div>

            {/* Action Buttons */}
            <ProjectActions liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectImage({ project }) {
  return (
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
  );
}

function ProjectHeader({ project }) {
  return (
    <>
      <h3 className={`text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
        {project.title}
      </h3>
      <p className="text-gray-400 text-lg mb-4">{project.subtitle}</p>
      <p className="text-gray-300 mb-6 leading-relaxed">
        {project.description}
      </p>
    </>
  );
}

function TechStack({ techStack, inView, index }) {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
        <Star size={14} className="text-yellow-400" />
        Tech Stack
      </h4>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
            className="px-4 py-1.5 bg-gradient-to-r from-gray-800 to-gray-800/50 hover:from-gray-700 hover:to-gray-700/50 border border-gray-700/50 rounded-full text-xs font-medium text-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function ExpandedDetails({ isExpanded, project }) {
  return (
    <motion.div
      initial={false}
      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
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
  );
}

function ProjectActions({ liveUrl, githubUrl }) {
  return (
    <div className="flex gap-4 mt-8">
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl transition-all duration-300 font-medium group/link transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
        >
          <ExternalLink size={18} className="group-hover/link:rotate-45 transition-transform duration-300" />
          <span>Live Demo</span>
        </Link>
      )}
      <Link
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-xl transition-all duration-300 font-medium group/link transform hover:scale-105"
      >
        <Github size={18} className="group-hover/link:rotate-12 transition-transform duration-300" />
        <span>Source Code</span>
      </Link>
    </div>
  );
}
