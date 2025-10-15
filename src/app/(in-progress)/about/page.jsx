'use client';

export default function About() {
  return (
    <main className="min-h-screen text-white bg-[var(--color-text)] animate-bgEnter">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 pt-[7rem] md:pt-[10rem] min-h-screen">
        {/* Photo Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/about-me-photo.jpg"
            alt="Abdulrahman Nasser"
            className="rounded-full w-64 h-64 md:w-84 md:h-84 lg:w-96 lg:h-96 object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            Hi, I'm Abdulrahman, a passionate frontend developer with a knack for creating visually stunning and user-friendly web applications. I specialize in React and TailwindCSS, and I love bringing ideas to life through code.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            When I'm not coding, you can find me exploring new technologies, reading about design trends, or enjoying a good cup of coffee.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I am currently pursuing a Bachelor's Degree in Computer Science at Assiut University, with a GPA of 3.41/4.0. My coursework includes Data Structures, Algorithms, and Object-Oriented Programming.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Skills Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "C++",
              "Java",
              "JavaScript",
              "HTML5",
              "CSS3",
              "SASS",
              "Python",
              "React",
              "Flask",
              "TailwindCSS",
              "Vite",
              "React Router",
              "Mocha",
              "Git",
              "GitHub",
              "Docker",
              "Visual Studio Code",
              "Command Line",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 text-white py-4 px-6 rounded-lg shadow-md text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">ICPC Competition (ECPC 2023)</h3>
              <p className="text-gray-400">Mar 2023 – Aug 2023</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Enhanced proficiency in algorithm optimization and complex problem-solving by solving over 900 coding problems.</li>
                <li>Led a team of three colleagues, achieving 58th place among 300+ teams in Egypt.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Leadership Development Camp</h3>
              <p className="text-gray-400">Jul 2023 – Sep 2023</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Led a team of four colleagues from different universities to develop a startup idea.</li>
                <li>Organized the development process and pitched the startup concept to judges.</li>
                <li>Achieved 11th place out of 50+ competing ideas.</li>
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
        .animate-bgEnter {
          animation: bgEnter 1s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
