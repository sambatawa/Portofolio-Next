"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination } from "swiper/modules";
import Image from "next/image";
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
    tools: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
    ],
  },
];

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] min-h-screen gap-10">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-100 tracking-wide">My Project</h2>
      <Swiper effect={"cards"} className="mySwiper w-[323px] h-[185px] 2xl:w-[843px] 2xl:h-[497px]" grabCursor={true} modules={[EffectCards, Pagination]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}>
        {projects.map((p, i) => (
          <SwiperSlide className="relative rounded-xl bg-cover bg-center shadow-xl border-b-5 border-gray-400 overflow-hidden" style={{backgroundImage: `url(${p.image})`}} key={i}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h3 className={`text-3xl font-semibold mb-2 drop-shadow-lg ${playfair.className}`}>{p.title}</h3>
              <p className="text-xl opacity-90">{p.line1}</p>
              <div className="flex flex-row mt-5 gap-4 items-center">
                {p.tools.map((tool, index) => (
                  <Image className="hover:opacity-100 transition-transform bg-white/20 rounded-full p-1 hover:scale-110 duration-200" key={index} src={tool} alt="tool logo" width={36} height={36}/>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex justify-center gap-2"></div>
    </div>
  );
};

export default Project;
