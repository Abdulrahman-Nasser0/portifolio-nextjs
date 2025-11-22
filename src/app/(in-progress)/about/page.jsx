'use client';

import { useState, useEffect, useRef } from 'react';
import * as motion from 'motion/react-client';
import { Mail, MapPin, Linkedin, Github, GraduationCap, Calendar } from 'lucide-react';
import { MagneticButton } from '@/app/_components/common/magnetic-button';

export default function About() {
  const [skillsInView, setSkillsInView] = useState(false);
  const skillsRef = useRef(null);

  const programmingLanguages = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "C++",
    "Java",
    "Python",
  ];

  const frameworks = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "SASS",
    "Flask",
    "React Router",
    "Mocha",
  ];

  const tools = [
    "Git",
    "GitHub",
    "Docker",
    "NPM",
    "VS Code",
    "Command Line",
  ];

  const competencies = [
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming",
    "Test-Driven Development",
    "REST APIs",
    "Responsive Design",
    "State Management",
    "Version Control"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  return (
    <main className="min-h-screen text-white bg-(--color-text)">
      {/* Hero Section */}
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
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            {/* Animated Visual Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/3 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Rotating Border */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    rotate: 360,
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
                  }}
                />
                
                {/* Inner Circle */}
                <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center">
                  {/* Code Brackets Animation */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                      className="text-6xl md:text-7xl lg:text-8xl font-bold text-white/90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.span
                        animate={{ x: [-5, 0, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-blue-400"
                      >
                        {'<'}
                      </motion.span>
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="text-white mx-2"
                      >
                        /
                      </motion.span>
                      <motion.span
                        animate={{ x: [5, 0, 5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-sky-400"
                      >
                        {'>'}
                      </motion.span>
                    </motion.div>
                    
                    {/* Floating Particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/50 rounded-full"
                        style={{
                          top: `${50 + 35 * Math.sin((i * Math.PI) / 4)}%`,
                          left: `${50 + 35 * Math.cos((i * Math.PI) / 4)}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.25,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-linear-to-r from-sky-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
              </div>
            </motion.div>

            {/* Text Section */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
              >
                <div className="h-px w-12 bg-linear-to-r from-sky-500 to-blue-500"></div>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">About</span>
              </motion.div>

              

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base md:text-lg text-gray-300 leading-relaxed mb-4"
              >
                Junior Front-End developer specializing in <span className="font-semibold text-white">Next.js, React, and TailwindCSS</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg text-gray-300 leading-relaxed"
              >
                Currently a senior Computer Science student at Assiut University, pursuing a Bachelor's Degree with a GPA of <span className="font-semibold text-white">3.41/4.0</span>. My coursework includes Data Structures, Algorithms, Object-Oriented Programming, etc.
              </motion.p>

              {/* Contact Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-4 mt-6"
              >
                <a
                  href="mailto:abdulrahman.nasserx@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-gray-600 rounded-lg transition-all duration-300 text-sm text-gray-300 hover:text-white group"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulrahman-nasser0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700/50 hover:border-blue-500/50 rounded-lg transition-all duration-300 text-sm text-gray-300 hover:text-blue-400 group"
                >
                  <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Abdulrahman-Nasser0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-sky-600/20 border border-gray-700/50 hover:border-sky-500/50 rounded-lg transition-all duration-300 text-sm text-gray-300 hover:text-sky-400 group"
                >
                  <Github size={16} className="group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                <div className="flex items-center gap-2 px-4 py-2   text-sm text-gray-400">
                  <MapPin size={16} />
                  <span>Assiut, Egypt</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Education Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-linear-to-r from-gray-600 to-gray-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-800/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                    <GraduationCap size={32} className="text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">Bachelor's Degree, Computer Science</h3>
                      <span className="flex items-center gap-2 text-gray-400 mt-2 sm:mt-0 text-sm">
                        <Calendar size={16} />
                        Oct 2022 – Jul 2026
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium mb-3">Assiut University • Assiut, Egypt</p>
                    <div className="space-y-2 text-gray-300">
                      <p><span className="text-gray-400">Major:</span> Software Engineering</p>
                      <p><span className="text-gray-400">GPA:</span> <span className="font-semibold text-white">3.41/4.0</span></p>
                      <p><span className="text-gray-400">Relevant Coursework:</span> Data Structures, Algorithms, Object-Oriented Programming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="h-px flex-1 ml-6 bg-linear-to-r from-gray-600 to-transparent"></div>
          </div>

          {/* Programming Languages */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-400">•</span>
              Programming Languages
            </h3>
            <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {programmingLanguages.map((skill, index) => (
                <SkillCard key={skill} skill={skill} index={index} inView={skillsInView} />
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-sky-400">•</span>
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {frameworks.map((skill, index) => (
                <SkillCard key={skill} skill={skill} index={index} inView={skillsInView} />
              ))}
            </div>
          </div>

          {/* Developer Tools */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-green-400">•</span>
              Developer Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {tools.map((skill, index) => (
                <SkillCard key={skill} skill={skill} index={index} inView={skillsInView} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Competencies */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Technical Competencies
            </h2>
            <div className="h-px flex-1 ml-6 bg-linear-to-r from-gray-600 to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 backdrop-blur-sm hover:bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 hover:border-sky-500/30 transition-all duration-300 hover:scale-105 text-center group cursor-default"
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {competency}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-Curricular Activities & Competitions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
               Competitions & Activities
            </h2>
            <div className="h-px flex-1 ml-6 bg-linear-to-r from-gray-600 to-transparent"></div>
          </div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></div>
              <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">ICPC Competition (ECPC 2023)</h3>
                  <span className="text-gray-400 mt-2 md:mt-0 px-4 py-1.5 text-sm">Mar 2023 - Aug 2023</span>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-sky-400 mt-1 shrink-0">•</span>
                    <span>Enhanced proficiency in algorithm optimization and complex problem-solving by solving over <span className="font-semibold text-white">900+</span> coding problems.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-400 mt-1 shrink-0">•</span>
                    <span>Led a team of three colleagues, achieving <span className="font-semibold text-white">#58</span> place among 300+ teams in Egypt.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></div>
              <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Leadership Development Camp</h3>
                  <span className="text-gray-400 mt-2 md:mt-0 px-4 py-1.5 text-sm">Jul 2023 - Sep 2023</span>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-sky-400 mt-1 shrink-0">•</span>
                    <span>Led a team of four colleagues from different universities to develop a startup idea.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-400 mt-1 shrink-0">•</span>
                    <span>Organized the development process and pitched the startup concept to judges.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sky-400 mt-1 shrink-0">•</span>
                    <span>Achieved <span className="font-semibold text-white">11th</span> place out of 50+ competing ideas.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
            {/* Background Glow */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-20"></div>
            
            {/* Content Card */}
            <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-800/50 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold bg-linear-to-r from-sky-400 to-white bg-clip-text text-transparent mb-4"
              >
                Let's Work Together
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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

function SkillCard({ skill }) {
  return (
    <div className="bg-gray-800/30 hover:bg-gray-800/50 rounded-lg px-4 py-3 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 text-center">
      <span className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
        {skill}
      </span>
    </div>
  );
}
