"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { MdConnectWithoutContact } from "react-icons/md";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const sections = [
  { id: "About", label: "About Me" },
  { id: "Projects", label: "Projects" },
  { id: "Contact", label: "Contact" },
];

const icons = [
  { link: "https://github.com/sambatawa", label: "sambatawa", icon: Github, newTab: true },
  { link: "https://www.instagram.com/sambatawa_/profilecard/?igsh=MTdzdmlpZmtsa3BrbQ==", label: "@sambatawa_", icon: Instagram, newTab: true },
  { link: "https://www.linkedin.com/in/inas-samara-taqia", label: "Inas Samara Taqia", icon: Linkedin },
  { link: "mailto:inassamarataqia@gmail.com", label: "Email", icon: Mail },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const container = document.querySelector(".scroll-container");
    const handleScroll = () => {
      let tempat = "";
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        for (const section of sections) {
          const link = document.getElementById(section.id);
          if (link) {
            const rect = link.getBoundingClientRect();
            const sectionTop = rect.top - containerTop;
            const sectionHeight = rect.height;
            if (sectionTop <= containerHeight / 2 && sectionTop + sectionHeight >= containerHeight / 2) {
              tempat = section.id;
              break
            }
          }
        }
      }
      setActive(tempat);
    };
    
    const handleContainerScroll = () => {handleScroll()};
    handleScroll()
    
    if (container) {container.addEventListener("scroll", handleContainerScroll)}
    return () => {
      if (container) {container.removeEventListener("scroll", handleContainerScroll)}
    };
  }, []);

  const [animateNavbar, setAnimateNavbar] = useState(false);
  useEffect(() => {
    setAnimateNavbar(true);
  }, []);


  return (
    <nav className={`fixed m-8 w-[90vw] ml-0 left-1/2 -translate-x-1/2 px-2 py-3  rounded-full flex items-center justify-between bg-white/10 backdrop-blur-xl z-100 shadow transition-all ${animateNavbar? 'animate-slide-down' : 'opacity-0'}`}>        
      <div className={`${playfair.className} px-4 sm:px-6`}>
          <span className="text-transparent bg-clip-text bg-gradient-2 font-bold text-[20px] md:text-[27px]">
              Sambatawa.com
          </span>
      </div>       
      <div className="hidden 2xl:flex items-center">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className={`relative font-medium text-[16px] md:text-[20px] text-color flex items-center justify-center rounded-[50px] px-4 md:px-6 transition-all animate-slide-in duration-300 ${active === section.id? "p-2 bg-[#D9D9D9]/10 border border-[#D9D9D9]/20 scale-120 mx-4": ""}`}>
            {section.label}
            <div className={`w-40 h-1 absolute -bottom-2 left-[50%] -translate-x-[50%] rounded-full transition ${active === section.id ? "opacity-100" : "opacity-0"}`}></div>
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4 2xl:gap-6">
        <div className="hidden 2xl:flex gap-4 items-center">
          {icons.map(({ link, label, icon: Icon, newTab }) => (
            <a key={label} href={link} target={newTab ? "_blank" : "_self"} rel="noopener noreferrer" aria-label={label} className="text-color border border-white rounded-full p-3 bounce transition">
              <Icon size={20} />
            </a>
          ))}
      </div>
      <div className="border-3 border-white/30 px-3 2xl:px-7 py-3 rounded-full bg-gradient-3 bg-opacity-20 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#3c2143] hover:to-[#2f5b5e] hover:border-white/70 transition z-10">
        <span className="hidden 2xl:flex text-[#3642aeff] font-semibold text-[20px] md:text-[20px] hover:text-white transition">Connect Me </span>
        <MdConnectWithoutContact size={24} className="2xl:hidden text-white"/>
      </div> 
      <div className="2xl:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-color text-[28px] focus:outline-none p-2">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      </div>
        {menuOpen && (
            <div className="absolute top-25 right-0 w-[90vw] bg-gradient-to-br from-[#2f5b5e] to-[#3c2143] backdrop-blur-2xl flex flex-col items-center gap-5 py-20 px-10 rounded-br-[70px] rounded-bl-[70px] rounded-tl-[100px] shadow-lg 2xl:hidden z-50 animate-slide-down duration-300">
            {sections.map((section) => (
                <a onClick={() => setMenuOpen(false)} key={section.id} href={`#${section.id}`}
                className={`font-medium text-[25px] text-white py-2 px-6 w-full text-center ${active === section.id? "font-bold bg-[#D9D9D9]/10 border border-[#D9D9D9]/30 rounded-l-[50px]": ""}`}>
                {section.label}
                </a>
            ))}
            <div className="flex gap-2 sm:gap-5 mt-6">
                {icons.map(({ link, label, icon: Icon, newTab }) => (
                <a key={label} href={link} target={newTab ? "_blank" : "_self"} rel="noopener noreferrer" aria-label={label} className="text-white text-[25px] border-2 group relative border-white/30 p-3 rounded-[10px] hover:text-gray-300 transition">
                    <Icon size={24} />
                    <span className="absolute bottom-full mb-2 px-2 py-1 text-sm text-white bg-black/80 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-[-2px] transition-all duration-200 whitespace-nowrap">
                        {label}
                    </span>
                </a>
                ))}
            </div>
            </div>
        )}
    </nav>
  );
};

export default Navbar;
