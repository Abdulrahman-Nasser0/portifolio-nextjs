"use client";

import Image from 'next/image';

export default function TechVisual() {
  return (
    <div className="flex justify-center lg:justify-end mt-6 md:mt-10">
      <div className="relative">
        {/* Main container */}
        <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl p-5 md:p-8 flex flex-col justify-center items-center">
          {/* Code Window Header */}
          <div className="w-full bg-black/30 rounded-lg mb-6 border border-white/10">
            <Image 
              src="/blackBoardInfo.png" 
              alt="Code Editor Header" 
              width={400}
              height={200}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
          {/* <div className="w-full bg-black/30 rounded-lg p-4 mb-6 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-blue-300 text-sm font-mono">const</span>
                <span className="text-white text-sm font-mono">developer</span>
                <span className="text-gray-300 text-sm font-mono">=</span>
                <span className="text-green-300 text-sm font-mono">'Abdulrahman'</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-pink-300 text-sm font-mono">passion</span>
                <span className="text-gray-300 text-sm font-mono">:</span>
                <span className="text-green-300 text-sm font-mono">'Frontend'</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-300 text-sm font-mono">skills</span>
                <span className="text-gray-300 text-sm font-mono">:</span>
                <span className="text-yellow-300 text-sm font-mono">['React', 'TailwindCSS']</span>
              </div>
            </div>
          </div> */}
          {/* Tech Icons Grid */}
          <div className="grid grid-cols-3 gap-4 w-full">
           <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Image 
                src="/tech-icons/react-logo.svg" 
                alt="React" 
                width={32}
                height={32}
                className="w-15 h-15"
              />
            </div>
            <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Image 
                src="/tech-icons/javascript-logo.svg" 
                alt="JavaScript" 
                width={32}
                height={32}
                className="w-15 h-15"
              />
            </div>
            
            <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Image 
                src="/tech-icons/tailwind-logo.svg" 
                alt="Tailwind CSS" 
                width={32}
                height={32}
                className="w-15 h-15 filter-sky-blue"
                style={{ filter: 'brightness(0) saturate(100%) invert(70%) sepia(90%) saturate(2000%) hue-rotate(180deg) brightness(100%) contrast(100%)' }}
              />
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -top-8 -right-2 w-16 h-16 bg-blue-400/20 rounded-full border border-blue-400/30 backdrop-blur-sm"></div>
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm"></div>
        <div className="absolute top-1/2 -left-8 w-8 h-8 bg-purple-400/20 rounded-full border border-purple-400/30 backdrop-blur-sm"></div>
      </div>
    </div>
  );
}