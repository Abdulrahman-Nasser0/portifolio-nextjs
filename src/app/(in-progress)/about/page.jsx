'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [skillsInView, setSkillsInView] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: "Next.js", level: 88, color: "from-cyan-400 to-green-500" },
    { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-900" },
    { name: "HTML5", level: 95, color: "from-orange-500 to-orange-600" },
    { name: "CSS3", level: 96, color: "from-blue-400 to-blue-500" },
    { name: "TailwindCSS", level: 92, color: "from-teal-400 to-teal-500" },
    { name: "SASS", level: 85, color: "from-pink-500 to-pink-600" },
    { name: "C++", level: 85, color: "from-blue-500 to-blue-600" },
    { name: "Python", level: 75, color: "from-green-500 to-green-600" },
    { name: "Git", level: 95, color: "from-orange-600 to-orange-700" },
    { name: "GitHub", level: 95, color: "from-gray-700 to-gray-800" },
    { name: "Docker", level: 70, color: "from-blue-600 to-blue-700" },
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
    <main className="min-h-screen text-white bg-[var(--color-text)] animate-bgEnter">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 pt-[7rem] md:pt-[10rem] min-h-screen">
        {/* Photo Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/about-me-photo.jpg"
            alt="Abdulrahman Nasser"
            width={400}
            height={400}
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 336px, 384px"
            className="rounded-full w-64 h-64 md:w-84 md:h-84 lg:w-96 lg:h-96 object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-2/3 text-center lg:text-left ">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About Me</h1>
          <p className="text-base leading-normal opacity-80 hover:opacity-100 transition-opacity duration-300 max-w-2xl">
            Junior Front-End developer specializing in <span className="font-bold">Next.js, React, and TailwindCSS</span>.         
         </p>
         
          <p className="text-base leading-normal opacity-80 mt-3 hover:opacity-100 transition-opacity duration-300 max-w-xl">
            Currently a senior Computer Science student at Assiut University, pursuing a Bachelor's Degree with a GPA of <span className="font-bold">3.41/4.0</span>. My coursework includes Data Structures, Algorithms, Object-Oriented Programming, etc.         
         </p>
        </div>
      </div>

      {/* Skills Section */}
      <section className=" py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Skills Overview</h2>
          <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-800/50 hover:bg-gray-800/80 rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">{skill.name}</span>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-lg`}
                    style={{ 
                      width: skillsInView ? '0%' : '0%',
                      animation: skillsInView ? `fillWidth 1.5s ease-out ${index * 100}ms forwards` : 'none',
                      '--skill-level': `${skill.level}%`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className=" py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-700/50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">ICPC Competition (ECPC 2023)</h3>
                <span className="text-gray-400 mt-2 md:mt-0 px-3 py-1 bg-gray-600/50 rounded-full text-sm">Mar 2023 – Aug 2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Enhanced proficiency in algorithm optimization and complex problem-solving by solving over <span className="font-bold">900+</span> coding problems.</li>
                <li>Led a team of three colleagues, achieving <span className="font-bold">#58</span> place among 300+ teams in Egypt.</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Leadership Development Camp</h3>
                <span className="text-gray-400 mt-2 md:mt-0 px-3 py-1 bg-gray-600/50 rounded-full text-sm">Jul 2023 – Sep 2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Led a team of four colleagues from different universities to develop a startup idea.</li>
                <li>Organized the development process and pitched the startup concept to judges.</li>
                <li>Achieved <span className="font-bold">11th</span> place out of 50+ competing ideas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bgEnter {
          0% {
            background-position: bottom;
            opacity: 0;
          }
          100% {
            background-position: center;
            opacity: 1;
          }
        }

        @keyframes fillWidth {
          0% {
            width: 0%;
          }
          100% {
            width: var(--skill-level);
          }
        }

        .animate-bgEnter {
          animation: bgEnter 1s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
