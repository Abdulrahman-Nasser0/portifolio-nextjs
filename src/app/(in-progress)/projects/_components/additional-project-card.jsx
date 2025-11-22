'use client';

import * as motion from 'motion/react-client';
import { ExternalLink, Github, GitBranch, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdditionalProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Card Glow */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></div>
      
      <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-500 h-full flex flex-col">
        {/* Project Image */}
        <ProjectImage project={project} />

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          <ProjectHeader project={project} />
          
          {/* Project Stats */}
          <ProjectStats stats={project.stats} />

          {/* Tech Stack */}
          <TechStack techStack={project.techStack} inView={inView} index={index} />

          {/* Action Buttons */}
          <ProjectActions liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectImage({ project }) {
  return (
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
            <div className="absolute inset-0 bg-linear-to-br from-sky-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </>
        ) : (
          <div className={`h-full bg-linear-to-br ${project.gradient} flex items-center justify-center p-6`}>
            <h3 className="text-2xl font-bold text-center">{project.title}</h3>
          </div>
        )}
      </motion.div>
      
      {/* Floating Badge */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
        {project.stats.type}
      </div>
    </div>
  );
}

function ProjectHeader({ project }) {
  return (
    <>
      <h3 className="text-xl font-bold mb-2 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-sky-200 group-hover:to-blue-200 transition-all duration-500">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
        {project.description}
      </p>
    </>
  );
}

function ProjectStats({ stats }) {
  return (
    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 pb-4 border-b border-gray-800">
      <div className="flex items-center gap-1.5">
        <Users size={14} className="text-green-400" />
        <span>{stats.team}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <GitBranch size={14} className="text-sky-400" />
        <span>{stats.type}</span>
      </div>
    </div>
  );
}

function TechStack({ techStack, inView, index }) {
  return (
    <div className="mb-5">
      <div className="flex flex-wrap gap-2">
        {techStack.slice(0, 4).map((tech, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 }}
            className="px-3 py-1 bg-linear-to-r from-gray-800 to-gray-800/50 border border-gray-700/50 rounded-lg text-xs text-gray-300 hover:border-sky-500/50 hover:text-sky-300 transition-all duration-300"
          >
            {tech}
          </motion.span>
        ))}
        {techStack.length > 4 && (
          <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-lg text-xs text-gray-400">
            +{techStack.length - 4}
          </span>
        )}
      </div>
    </div>
  );
}

function ProjectActions({ liveUrl, githubUrl }) {
  return (
    <div className="flex gap-3">
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-xl transition-all duration-300 text-sm font-medium group/link hover:shadow-lg hover:shadow-sky-500/50"
        >
          <ExternalLink size={14} className="group-hover/link:rotate-45 transition-transform duration-300" />
          <span>Demo</span>
        </Link>
      )}
      <Link
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-xl transition-all duration-300 text-sm font-medium group/link"
      >
        <Github size={14} className="group-hover/link:rotate-12 transition-transform duration-300" />
        <span>Code</span>
      </Link>
    </div>
  );
}
