"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
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
    demo: "https://hydrocabin.sambatawa.tech",
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
    line1: "Digital photobooth application with hand gesture control for taking photos directly from your browser.",
    demo: "https://siphot.sambatawa.tech",
    repo: "https://github.com/sambatawa/SiPhot",
    tools: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
    ],
  },
  {
    image: "/project/Terra.png",
    title: "Terra",
    line1: "Smart agriculture platform for Indonesian farmers eggplant leaf monitoring and AI-powered disease detection using AI, IoT, and machine learning.",
    demo: "https://terra.cervosys.app/",
    repo: "https://github.com/sambatawa/Terra",
    tools: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    ],
  },
  {
    image: "/project/Nutrimix.png",
    title: "Nutrimix",
    line1: "E-commerce and monitoring feature website for fish feed producer with premium formulas for optimal fish growth in aquaculture.",
    demo: "https://nutrimix.sambatawa.tech",
    repo: "https://github.com/sambatawa/Nutrimix",
    tools: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
    ],
  },
  {
    image: "/project/3D.png",
    title: "3D Project",
    line1: "3D modeling and design project created with Fusion 360, featuring complex mechanical components and assembly visualization.",
    demo: "https://a360.co/4qiXPr4",
    repo: "",
    tools: [
      "/project/fusion.png",
    ],
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex] ?? projects[0];

  return (
    <div className="relative min-h-[80vh] mb-6 flex flex-col justify-center">
      <div className="pointer-events-none absolute -top-10 -left-10 w-56 h-56 bg-[#4ba293]/20 blur-3xl rounded-full"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-[#4aa5f5]/20 blur-3xl rounded-full"></div>
      <div className="text-left mb-10">
        <h2 className="text-xl lg:text-3xl text-gradient-primary font-bold text-white mb-2 leading-tight pb-2">Portofolio My Projects</h2>
        <p className="text-sm xl:text-lg text-color max-w-2xl">Explore my latest work and innovative solutions that showcase technical expertise and creative problem-solving.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-55 items-start">
        <div className="flex flex-col order-2 lg:order-0 w-full h-[400px] lg:w-[140%] items-center lg:items-start relative lg:pr-8">
          <div className="absolute -z-10 inset-0 rounded-3xl blur-xl" />
          <div className="absolute -z-20 inset-0 rounded-3xl animate-pulse" />
          <Swiper className="mySwiper w-full max-w-[1000px] h-full" effect={"cards"} grabCursor={true} modules={[EffectCards, Pagination]} pagination={{ el: ".custom-pagination", clickable: true }} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
            {projects.map((p, i) => (
              <SwiperSlide className="group relative rounded-2xl bg-cover bg-center shadow-md overflow-hidden transition-all duration-500 hover:shadow-[#4ba29362]" key={i} style={{ backgroundImage: `url(${p.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                   <h3 className={`tracking-wider text-[12px] lg:text-sm font-bold drop-shadow-lg py-2 px-5 bg-gradient-to-r to-[#4ba29362] from-[#4aa5f56e] rounded-t-full rounded-r-full w-fit leading-tight  ${playfair.className}`}>{p.title}</h3>
                 </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4facfe]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#4aa5f5]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination mt-6 flex justify-center gap-2" />
        </div>
        <div className="relative glass-card justify-center rounded-3xl p-8 lg:p-10 text-white space-y-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4ba293]/10 via-[#4aa5f5]/10 to-[#4facfe]/10 animate-pulse" />
          <div className="pointer-events-none absolute -top-20 -left-16 w-56 h-56 bg-[#4ba293]/20 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 w-64 h-64 bg-[#4aa5f5]/20 blur-3xl rounded-full" />
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-4 lg:gap-0">
            <div className="flex-1">
              <h3 className={`mt-2 text-xl lg:text-2xl font-bold text-gradient-primary leading-tight ${playfair.className}`}>{active.title}</h3>
            </div>
            {active.tools && active.tools.length > 0 && (
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {active.tools.map((tool, index) => (
                <Image src={tool} className="opacity-90 hover:opacity-100 transition-transform bg-white/10 rounded-full p-1 duration-200" key={index} alt="tool logo"width={28} height={28}/>
              ))}
            </div>
          )}
          </div>
          <p className="text-[12px] lg:text-sm text-white/80 leading-relaxed">{active.line1}</p>
          <div className="lg:pt-2 text-[12px] lg:text-sm flex gap-1 lg:gap-3 flex-wrap">
            <a href={active.demo ?? "#"} target="_blank" rel="noreferrer" className="px-3 py-1 lg:px-4 lg:py-2 hover:scale-105 rounded-t-2xl rounded-r-2xl bg-gradient-primary transition-colors font-semibold shadow-lg shadow-[#4ba293]/20 flex items-center ">
            Demo
            </a>
            {active.repo && active.repo !== "" && (
              <a href={active.repo} target="_blank" rel="noreferrer" className="px-3 py-1 lg:px-4 lg:py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-semibold backdrop-blur flex items-center gap-2">
                <FaGithub />
              </a>
            )}
            <a href={`/explain?project=${encodeURIComponent(active.title)}`} className="px-3 py-1 lg:px-4 lg:py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-semibold backdrop-blur flex items-center">
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
