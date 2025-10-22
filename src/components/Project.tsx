"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {Playfair_Display} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
});

const projects = [
  {
    image: "/project/HydroCabin.png",
    title: "HydroCabin",
    line1: "Plant monitoring system based on IoT with parameters of temperature, humidity, and pressure.",
    demo: "https://hydrocabin-demo.vercel.app",
    repo: "https://github.com/sambatawa/HydroCabin",
    tools: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    ],
  },
  {
    image: "/project/SiPhot.png",
    title: "SiPhot",
    line1: "Web-based photo booth app with gesture control using hand detection.",
    demo: "https://siphot-demo.vercel.app",
    repo: "https://github.com/sambatawa/SiPhot",
    tools: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
    ],
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex] ?? projects[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-30 relative">
      <div className="pointer-events-none absolute -top-10 -left-10 w-56 h-56 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="text-left mb-16">
        <h2 className="text-4xl text-gradient-primary md:text-5xl font-bold text-white mb-2 leading-tight pb-2">Portofolio My Projects</h2>
        <p className="text-lg text-color max-w-2xl">Explore my latest work and innovative solutions that showcase technical expertise and creative problem-solving.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="flex flex-col items-center relative">
          <div className="absolute -z-10 inset-0 rounded-3xl blur-xl" />
          <div className="absolute -z-20 inset-0 rounded-3xl animate-pulse" />
          <Swiper className="mySwiper w-full max-w-[860px] h-[400px] md:h-[480px]" effect={"cards"} grabCursor={true} modules={[EffectCards, Pagination]} pagination={{ el: ".custom-pagination", clickable: true }} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
            {projects.map((p, i) => (
              <SwiperSlide className="group relative h-[400px] rounded-3xl bg-cover bg-center shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-rotate-[0.5deg] hover:shadow-cyan-500/25" key={i} style={{ backgroundImage: `url(${p.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="absolute inset-0">
                   {[...Array(8)].map((_, particleIndex) => {
                     const left = (particleIndex * 12.5) % 100;
                     const top = (particleIndex * 18.7) % 100;
                     const delay = (particleIndex * 0.8) % 3;
                     const duration = 2 + (particleIndex * 0.35) % 2;
                     
                     return (
                       <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" key={particleIndex}
                         style={{
                           left: `${left}%`,
                           top: `${top}%`,
                           animationDelay: `${delay}s`,
                           animationDuration: `${duration}s`
                         }}/>
                     );
                   })}
                 </div>
                 <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                   <div className="flex items-center gap-2 mb-3">
                     <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                     <span className="text-cyan-400 text-sm font-medium">Featured Project</span>
                   </div>
                   <h3 className={`text-3xl font-bold drop-shadow-lg leading-tight pb-1 ${playfair.className}`}>{p.title}</h3>
                 </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination mt-6 flex justify-center gap-2" />
        </div>
        <div className="relative glass-card rounded-3xl p-8 lg:p-10 text-white space-y-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
          <div className="pointer-events-none absolute -top-20 -left-16 w-56 h-56 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 w-64 h-64 bg-pink-500/20 blur-3xl rounded-full" />
          <div>
            <span className="text-sm font-semibold text-gradient-accent uppercase tracking-wider">The Project</span>
             <h3 className={`mt-2 text-3xl font-bold leading-tight pb-1 ${playfair.className}`}>{active.title}</h3>
          </div>
          <p className="text-lg text-white/80 leading-relaxed">{active.line1}</p>
          <div>
            <h4 className="text-white/90 font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {active.tools.map((tool, index) => (
                <Image src={tool} className="opacity-90 hover:opacity-100 transition-transform bg-white/10 rounded-full p-1 hover:scale-110 duration-200" key={index} alt="tool logo"width={28} height={28}/>
              ))}
            </div>
          </div>

          <div className="pt-2 flex gap-3 flex-wrap">
            <a href={active.demo ?? "#"} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-colors font-semibold shadow-lg shadow-cyan-500/20 flex items-center gap-2">
              <FaExternalLinkAlt /> Demo
            </a>
            <a href={active.repo ?? "#"} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-semibold backdrop-blur flex items-center gap-2">
              <FaGithub /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
