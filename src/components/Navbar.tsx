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
  { link: "https://www.instagram.com/inassamarr", label: "@sambatawa_", icon: Instagram, newTab: true },
  { link: "https://www.linkedin.com/in/inas-samara-taqia", label: "Inas Samara Taqia", icon: Linkedin },
  { link: "mailto:inasst@sambatawa.tech", label: "Email", icon: Mail },
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
    <nav className={`fixed m-8 w-[90vw] lg:w-[80vw] h-[6vh] ml-0 left-1/2 -translate-x-1/2 px-4 md:px-8 py-4 rounded-full flex items-center justify-between glass-card z-100 transition-all ${animateNavbar? 'animate-slide-up' : 'opacity-0'}`}>        
      <div className={`${playfair.className} px-2 sm:px-6`}>
          <span className="text-gradient-primary font-bold text-sm lg:text-xl">
              sambatawa.tech
          </span>
      </div>       
      <div className="hidden 2xl:flex items-center gap-2">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className={`relative font-medium text-[15px] text-color flex items-center justify-center rounded-full px-6 py-2 transition-all duration-300 hover:text-white group ${active === section.id? "glass-button neon-glow": "hover:glass-button"}`}>
            {section.label}
            {active === section.id && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-accent rounded-full"></div>
            )}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4 2xl:gap-6">
        <div className="hidden 2xl:flex gap-3 items-center">
          {icons.map(({ link, label, icon: Icon, newTab }, index) => (
            <a key={label} href={link} target={newTab ? "_blank" : "_self"} rel="noopener noreferrer" aria-label={label} className="glass-button p-2 rounded-full text-color hover:text-white hover:neon-glow transition-all duration-100 group bounce" style={{ animationDelay: `${index * 0.2}s` }}>
              <Icon size={10} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
      </div>
      <a href="#Contact" className="glass-button px-3 py-1 rounded-full flex items-center justify-center hover:neon-glow transition-all duration-300 group">
        <span  className="hidden 2xl:flex text-gradient-dark font-semibold text-sm hover:text-white transition hover:neon-glow">Connect</span>
        <MdConnectWithoutContact size={20} className="2xl:hidden text-gradient-accent group-hover:text-white transition-colors"/>
      </a> 
      <div className="2xl:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full text-color hover:text-white transition-all duration-300">
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      </div>
        {menuOpen && (
          <div className="absolute top-10 md:top-15 right-0 w-[90vw] bg-[#1b236d] mt-5 flex flex-col items-center gap-6 py-12 px-8 rounded-3xl shadow-lg 2xl:hidden z-50 animate-slide-up duration-300">
            {sections.map((section) => (
                <a onClick={() => setMenuOpen(false)} key={section.id} href={`#${section.id}`}
                className={`font-medium text-sm lg:text-xl text-color py-2 px-8 w-full text-center rounded-full transition-all duration-300 ${active === section.id? "glass-button neon-glow text-white": "hover:glass-button"}`}>
                {section.label}
                </a>
            ))}
            <div className="flex gap-4 mt-6">
                {icons.map(({ link, label, icon: Icon, newTab }, index) => (
                <a key={label} href={link} target={newTab ? "_blank" : "_self"} rel="noopener noreferrer" aria-label={label} className="glass-button p-3 rounded-full text-color hover:text-white hover:neon-glow transition-all duration-300 group bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                ))}
            </div>
            </div>
        )}
    </nav>
  );
};

export default Navbar;
