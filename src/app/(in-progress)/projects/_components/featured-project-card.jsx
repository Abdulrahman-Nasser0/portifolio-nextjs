"use client";

import * as motion from "motion/react-client";
import {
  ExternalLink,
  Github,
  Star,
  GitBranch,
  Users,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DetailedViewModal from "./detailed-view-modal";
import { MagneticButton } from "@/app/_components/common/magnetic-button";

export default function FeaturedProjectCard({
  project,
  index,
  inView,
  isExpanded,
  onToggleExpand,
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="group relative"
      >
        {/* Glow Effect */}
        <div
          className={`absolute -inset-0.5 bg-linear-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-1000`}
        ></div>

        <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
          <div className="grid lg:grid-cols-[45%_55%]">
            {/* Project Image */}
            <ProjectImage project={project} />

            {/* Project Details */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Title and Description */}
                <ProjectHeader project={project} />

                <TechStack
                  techStack={project.techStack}
                  inView={inView}
                  index={index}
                />

                {/* Features Toggle */}
                <motion.button
                  onClick={onToggleExpand}
                  className="p-6 w-fit cursor-pointer mb-4"
                  animate={{
                    x: [0, -8, 8, -8, 8, 0],
                    scale: [1, 1.02, 1.02, 1.02, 1.02, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  
                  <span className="text-lg whitespace-nowrap">
                    ▶ View Full Details
                  </span>
                </motion.button>
              </div>

              {/* Action Buttons */}
              <ProjectActions
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal Popup */}
      <DetailedViewModal
        project={project}
        isOpen={isExpanded}
        onClose={onToggleExpand}
      />
    </>
  );
}

function ProjectImage({ project }) {
  return (
    <div className="relative h-80 lg:h-auto lg:min-h-100 overflow-hidden">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </motion.div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
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
            <GitBranch size={16} className="text-sky-400" />
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
      <h3
        className={`text-3xl lg:text-4xl font-bold mb-2 bg-linear-to-r ${project.gradient} bg-clip-text text-transparent`}
      >
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
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
            className="px-4 py-1.5 bg-linear-to-r from-gray-800 to-gray-800/50 hover:from-gray-700 hover:to-gray-700/50 border border-gray-700/50 rounded-full text-xs font-medium text-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 select-none"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function ProjectActions({ liveUrl, githubUrl }) {
  return (
    <div className="flex gap-4  ">
      {liveUrl && (
        <MagneticButton
          onClick={() => window.open(liveUrl, '_blank', 'noopener,noreferrer')}
          variant="primary"
          size="default"
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30"
        >
          <ExternalLink
            size={24}
            className="group-hover/link:rotate-45 transition-transform duration-300"
          />
        </MagneticButton>
      )}
      <MagneticButton
        onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
        variant="outline"
        size="default"
        className="w-16 h-16 rounded-full flex items-center justify-center border-gray-700 hover:border-gray-600"
      >
        <Github
          size={24}
          className="group-hover/link:rotate-12 transition-transform duration-300"
        />
      </MagneticButton>
    </div>
  );
}
