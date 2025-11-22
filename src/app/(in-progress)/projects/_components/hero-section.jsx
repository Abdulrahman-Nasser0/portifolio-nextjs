'use client';

import * as motion from 'motion/react-client';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 md:pt-40 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-linear-to-r from-sky-500 to-blue-500"></div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Portfolio</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-linear-to-r from-sky-600 via-sky-400 to-gray-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8"
          >
            A collection of my recent projects, showcasing expertise in frontend development, 
            modern UI/UX design, responsive interfaces, and interactive user experiences.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-8"
          >
            <StatItem color="blue" number="5+" label="Projects" />
            <StatItem color="sky" number="10+" label="Technologies" />
            <StatItem color="cyan" number="100%" label="Passion" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function StatItem({ color, number, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full bg-${color}-500 animate-pulse`}></div>
      <div>
        <div className="text-2xl font-bold text-white">{number}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
}
