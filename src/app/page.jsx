"use client";

import { AnimatedLine } from "./_components/animations/animated-line";
import { StaggeredSlideUp } from "./_components/animations/staggered-slide-up";
import { MagneticButton } from "./_components/common/magnetic-button";
import TechVisual from "./_components/tech-visual";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-(--gray-light) via-[#5c7796] to-[#7a8287] flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        <AnimatedLine />
      </svg>
      <div className="grid mt-10 lg:mt-0 lg:grid-cols-2  lg:gap-16 items-center z-10">
        {/* Left side - Text Content */}
        <StaggeredSlideUp staggerDelay={0.15} initialDelay={0.2}>
          <div className="text-center lg:text-left">
              <div className="mb-6">
                <p className="text-lg text-gray-300 mb-2">Hello, I'm</p>
                <div className="relative inline-block">
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 block">
                    Abdulrahman
                  </h1>
                  {/* Animated light line under Abdulrahman */}
                  <div className="absolute bottom-4 left-0 w-full h-0.5 overflow-hidden">
                    <div className="h-full bg-linear-to-r from-transparent via-white to-transparent opacity-80 animate-[slideLight_3s_ease-in-out_infinite_1.5s]"></div>
                  </div>
                </div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 -mt-3 block">
                  Nasser
                </h1>
                <h3 className="text-xl  lg:text-2xl text-gray-300 font-light mb-4 tracking-wide">
                  Frontend Developer
                </h3>
              </div>

              {/* CSS for sliding light animation */}
              <style jsx>{`
                @keyframes slideLight {
                  0% {
                    transform: translateX(-100%);
                    opacity: 0;
                  }
                  10% {
                    opacity: 1;
                  }
                  90% {
                    opacity: 1;
                  }
                  100% {
                    transform: translateX(100%);
                    opacity: 0;
                  }
                }
              `}</style>

              {/* Buttons */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <MagneticButton
                  to="/projects"
                  variant="outline"
                  className="text-white p-4"
                >
                  View My Work
                </MagneticButton>
                <MagneticButton to="/contact" className="text-white p-4">
                  Get In Touch
                </MagneticButton>
              </div>
          </div>
        </StaggeredSlideUp>

        {/* Right side - Animated Tech Visual */}
        <StaggeredSlideUp staggerDelay={0.15} initialDelay={0.8}>
          <TechVisual />
        </StaggeredSlideUp>
      </div>
    </main>
  );
}
