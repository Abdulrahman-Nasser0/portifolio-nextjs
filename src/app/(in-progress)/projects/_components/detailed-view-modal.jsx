"use client";

import * as motion from "motion/react-client";
import {
  ExternalLink,
  Github,
  Star,
  GitBranch,
  Users,
  Calendar,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function DetailedViewModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  // Prevent wheel event from reaching body
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modalElement = modalRef.current;

    const handleWheel = (e) => {
      e.stopPropagation();
    };

    modalElement.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      modalElement.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-9999 overflow-y-auto overflow-x-hidden"
      style={{ overscrollBehavior: "contain" }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-md -z-10" />

      {/* Modal Content - Centered with spacing */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8 pt-26 sm:pt-10 pb-8">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl"
        >
          {/* Glow Effect */}
          <div
            className={`absolute -inset-1 bg-linear-to-r ${project.gradient} rounded-3xl blur-xl opacity-30`}
          ></div>

          {/* Modal Card */}
          <div className="relative bg-linear-to-b from-gray-900 to-gray-950 rounded-3xl border border-gray-800/80 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 bg-gray-800/90 hover:bg-gray-700 rounded-full transition-all duration-300 group/close hover:scale-110 hover:rotate-90"
            >
              <X
                size={20}
                className="text-gray-300 group-hover/close:text-white transition-colors"
              />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-12 space-y-8 sm:space-y-10">
              {/* Header */}
              <div className="pr-8 sm:pr-12">
                <h3
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-linear-to-r ${project.gradient} bg-clip-text text-transparent`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base sm:text-lg mb-3 sm:mb-4">
                  {project.subtitle}
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Image */}
              <div className="relative h-48 sm:h-64 lg:h-150 rounded-2xl overflow-hidden ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                />
              </div>

              {/* Gallery Images */}
              {project.galleryImages && project.galleryImages.length > 0 && (
                <div className="space-y-6">
                  
                  <div className="grid grid-cols-1 gap-6">
                    {project.galleryImages.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="relative h-64 sm:h-80 lg:h-150 rounded-xl overflow-hidden border border-gray-800/50">
                          <Image
                            src={img.src}
                            alt={img.caption || `Screenshot ${i + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                          />
                        </div>
                        {img.caption && (
                          <p className="text-gray-400 text-sm text-center italic">
                            {img.caption}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {project.stats.duration && (
                  <div className="flex items-center gap-3 p-4 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                    <Calendar size={20} className="text-blue-400 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm text-gray-200 font-medium">
                        {project.stats.duration}
                      </p>
                    </div>
                  </div>
                )}
                {project.stats.team && (
                  <div className="flex items-center gap-3 p-4 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                    <Users size={20} className="text-green-400 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Team</p>
                      <p className="text-sm text-gray-200 font-medium">
                        {project.stats.team}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 p-4 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                  <GitBranch size={20} className="text-sky-400 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Type</p>
                    <p className="text-sm text-gray-200 font-medium">
                      {project.stats.type}
                    </p>
                  </div>
                </div>
              </div>

              {/* Collaboration Context - Show before features if note format exists */}
              {project.collaboration && project.collaboration.note && (
                <div className="pt-4 border-t border-gray-800">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    Collaboration Context
                  </h4>
                  <div className="space-y-4">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {project.collaboration.note}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm italic">
                      See more details about the collaboration on the GitHub repository.
                    </p>
                    {project.collaboration.backendRepo && (
                      <Link
                        href={project.collaboration.backendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 text-sm transition-colors"
                      >
                        <Github size={16} />
                        <span>Backend Repository (.NET Team)</span>
                        <ExternalLink size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              )}

              {/* Features Section */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  Key Features
                </h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-base leading-relaxed"
                    >
                      <span className="text-blue-400 mt-0.5 sm:mt-1 text-base sm:text-lg shrink-0">
                        •
                      </span>
                      <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Project Structure */}
              {project.projectStructure && (
                <div className="bg-[#1a1d23] rounded-xl border border-gray-800 overflow-hidden">
                  <div className="bg-[#24282f] px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                    <span className="text-2xl">📂</span>
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {project.projectStructure.title}
                    </h4>
                  </div>
                  <div className="p-2 sm:p-4 font-mono text-[0.6rem] sm:text-[0.75rem]">
                    <div className="text-gray-400">
                      {project.id === 1 ? 'techzone/' : project.id === 2 ? 'netflix-clone/' :  'turistoe/'}
                    </div>
                    {project.projectStructure.structure.map((item, i) => {
                      const isLast = i === project.projectStructure.structure.length - 1;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.03 }}
                          className="flex items-start"
                        >
                          <span className="text-gray-600 select-none">
                            {isLast ? '└── ' : '├── '}
                          </span>
                          <span className="text-gray-300">
                            {item.name}
                          </span>
                          <span className="text-gray-600 ml-4">
                            # {item.description}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Development Journey */}
              {project.developmentJourney && (
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    {project.developmentJourney.title}
                  </h4>
                  <div className="space-y-5">
                    {project.developmentJourney.sections.map((section, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                        className="border-l-2 border-gray-700 pl-4 space-y-2"
                      >
                        <h5 className="text-base sm:text-lg font-semibold text-gray-200">
                          {section.challenge}
                        </h5>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                          {section.description}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          <span className="text-gray-400 font-medium">💡 Learning: </span>
                          {section.learning}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges Section */}
              {project.challenges && !project.developmentJourney && (
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    Challenges Overcome
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {/* Technical Highlights */}
              {project.technicalHighlights && (
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    Technical Highlights
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {project.technicalHighlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-base leading-relaxed"
                      >
                        <span className="text-gray-500 mt-1 shrink-0">•</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Collaboration Info - Only show here for old format (frontend/backend grid) */}
              {project.collaboration && !project.collaboration.note && (
                <div className="pt-4 border-t border-gray-800">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    Team
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.collaboration.frontend && (
                      <div>
                        <p className="text-gray-500 text-xs sm:text-sm mb-1">Frontend Development</p>
                        <p className="text-gray-200 text-sm sm:text-base font-medium">{project.collaboration.frontend}</p>
                      </div>
                    )}
                    {project.collaboration.backend && (
                      <div>
                        <p className="text-gray-500 text-xs sm:text-sm mb-1">Backend Development</p>
                        <p className="text-gray-200 text-sm sm:text-base font-medium">{project.collaboration.backend}</p>
                      </div>
                    )}
                  </div>
                  {project.collaboration.backendRepo && (
                    <Link
                      href={project.collaboration.backendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 text-sm transition-colors mt-4"
                    >
                      <Github size={16} />
                      <span>Backend Repository</span>
                      <ExternalLink size={14} />
                    </Link>
                  )}
                </div>
              )}

              {/* Design Credit */}
              {project.designCredit && (
                <div className="pt-4 border-t border-gray-800">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    Design Credit
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {project.designCredit}
                  </p>
                </div>
              )}

              {/* Tech Stack Section */}
              <div className="pt-4 border-t border-gray-800">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="px-4 py-2 bg-linear-to-r from-gray-800 to-gray-800/50 hover:from-gray-700 hover:to-gray-700/50 border border-gray-700/50 rounded-full text-xs sm:text-sm font-medium text-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 select-none"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl transition-all duration-300 font-medium group/link transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    <ExternalLink
                      size={18}
                      className="group-hover/link:rotate-45 transition-transform duration-300"
                    />
                    <span className="text-sm sm:text-base">View Live Demo</span>
                  </Link>
                )}
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-xl transition-all duration-300 font-medium group/link transform hover:scale-[1.02]"
                >
                  <Github
                    size={18}
                    className="group-hover/link:rotate-12 transition-transform duration-300"
                  />
                  <span className="text-sm sm:text-base">View Source Code</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
