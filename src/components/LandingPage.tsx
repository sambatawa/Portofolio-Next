'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { SiPython, SiJavascript, SiNextdotjs, SiReact} from 'react-icons/si';
import { AiOutlineRobot } from "react-icons/ai";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import OrgCert from "@/components/OrgCert";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const LandingPage = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const texts = [
    "Web Developer", 
    "Machine Learning Engineer",
    "Full Stack Developer",
    "AI Engineer"
  ];
  
  const currentText = texts[charIndex % texts.length];
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText === currentText) {
          setIsDeleting(true);
        } else {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCharIndex(charIndex + 1);
        } else {
          setDisplayText(displayText.slice(0, -1));
        }
      }
    }, displayText === currentText && !isDeleting ? pauseDuration : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentText, charIndex]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()

        const href = link.getAttribute('href');
        if (href){
          const page2Element = document.getElementById('Page2');
          if (page2Element) {
            page2Element.scrollIntoView({behavior: 'smooth' })

              if (href !== '#Page2') {
              setTimeout(() => {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                  const container = document.querySelector('.scroll-container');
                  if (container) {
                    const targetRect = targetElement.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const scrollTop = container.scrollTop + targetRect.top - containerRect.top;
                    container.scrollTo({
                      top: scrollTop,
                      behavior: 'smooth'
                    });
                  }
                }
              }, 500);
            }
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <section id="Page1" className="relative min-h-screen top-20 lg:top-10 flex flex-col items-center justify-center z-40 px-4 2xl:px-0">
        <div className="w-[90vw] 2xl:w-[70vw] h-[90vh] 2xl:h-[70vh] flex flex-col 2xl:flex-row gap-10 2xl:gap-0 animate-slide-up transition-all duration-300">
          <div className="w-[90vw] 2xl:w-[60vw] flex flex-col items-center text-center 2xl:text-start 2xl:items-start justify-center px-5 xl:px-20">
            <div className="glass-card py-2 px-3 mb-5 animate-slide-left rounded-r-full rounded-t-full">
              <h2 className="text-sm border-r-3 border-white/60 px-2 rounded-r-full text-gradient-accent font-semibold tracking-wider uppercase">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            </div>
            <h1 className="text-4xl 2xl:text-5xl font-bold text-white mt-2 py-1 gradient-text animate-slide-left">
              I&apos;m Inas Samara Taqia
            </h1>
            <p className="text-xl text-color mt-5 max-w-2xl animate-slide-left">
              Building the future of web applications with AI/ML integration. 
              Passionate about creating intelligent, decentralized solutions that push the boundaries of what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8 2xl:mt-20 animate-slide-left border-b-2 border-t border-white/60 py-2 px-2 rounded-3xl lg:rounded-full">
              <a href="#Contact" className="group relative px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-102 neon-glow-accent">
                <div className="relative px-15 z-10">Let&apos;s Collaborate</div>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="/resume" className="glass-button px-8 py-4 text-white font-semibold rounded-full hover:scale-102 transition-all duration-300">
                View Resume
              </a>
            </div>
          </div>
          <div className="order-first 2xl:order-none w-full 2xl:w-[40vw] h-[500px] 2xl:h-[65vh] relative overflow-hidden z-49 animate-slide-right">
            <div className="glass-card h-full p-8 flex flex-col items-center justify-center relative rounded-t-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-dark opacity-50 rounded-2xl glass-backdrop "></div>
              <Image src="/foto.jpg" className="object-cover" sizes="(min-width: 1536px) 40vw, 90vw" priority={false} alt="Profile" fill />
              <div className="relative z-10 text-center">
                <span className={`${poppins.className} text-white text-[40px] lg:text-[50px] mx-5 font-bold text-gradient-glow `}>Sambatawa</span> 
                <div className="mt-20 md:mt-60 lg:mt-80 mx-7 px-6 py-3 glass-card rounded-full">
                  <span className="text-white text-xl lg:text-2xl font-medium">Bogor, Indonesia</span>        
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
      <div id="Page2" className="scroll-container flex flex-col h-[80vh] 2xl:h-[80vh] w-full max-w-[80vw] mx-auto my-auto mt-40 mb-10 overflow-y-auto overflow-x-hidden bg-gradient-dark scroll-smooth rounded-4xl animate-slide-up border-2 border-[#2984a879] duration-300">
        <section id="About" className="scroll-mt-28 p-10 px-10 lg:px-50 w-full max-w-[80vw] mx-auto flex flex-col gap-8 text-white mb-25">
          <div className="text-center mb-10">
            <div className="inline-block">
              <span className="text-sm font-semibold text-gradient-accent uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="text-3xl font-bold text-white mt-3 mb-4">
              Who is 
              <span className="text-gradient-primary"> Sambatawa?</span>
            </h2>
            <div className="glass-card rounded-b-3xl p-4 inline-block">
              <p className="text-md text-gradient-accent font-medium">inassaqia@gmail.com | 21 years old</p>
            </div>
          </div>
          
          <div className="mb-5 lg:mb-10 animate-fade-in">
            <p className="text-lg leading-relaxed text-color text-center mx-auto">
              Hi, I&apos;m Inas Samara Taqia, a passionate developer building the next generation of web applications. 
              I specialize in creating intelligent, responsive interfaces that seamlessly integrate AI/ML capabilities with modern web technologies.
              My journey spans from frontend development to backend architecture, with a deep focus on how machine learning can revolutionize user experiences and create more intuitive, personalized organization and certificate.
            </p>
          </div>
          <div className="grid grid-rows-1 lg:grid-rows-2 w-full">
            <div className="h-fit pb-20 mb-6 glass-card rounded-3xl p-8 space-y-6 hover:neon-glow transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-4">
                <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-accent rounded-full"></div>
                  <h3 className="text-xl font-bold text-gradient-primary">Technical Skills</h3>
                </div>
                  <div className="relative h-full w-full bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>  
                    <div className="absolute inset-0">
                      {[...Array(20)].map((_, i) => {
                        const left = (i * 7.3) % 100;
                        const top = (i * 11.7) % 100;
                        const delay = (i * 0.3) % 3;
                        const duration = 2 + (i * 0.1) % 2;
                        
                        return (
                          <div className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse" key={i}
                            style={{
                              left: `${left}%`,
                              top: `${top}%`,
                              animationDelay: `${delay}s`,
                              animationDuration: `${duration}s`
                            }} />
                        );
                      })}
                    </div>
                    <svg className="w-full h-full relative z-10" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f59e0b" />
                          <stop offset="20%" stopColor="#eab308" />
                          <stop offset="40%" stopColor="#6b7280" />
                          <stop offset="60%" stopColor="#06b6d4" />
                          <stop offset="80%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      <g opacity="0.3">
                        {[0, 25, 50, 75, 100].map((value, i) => (
                          <g key={value}>
                            <line className="animate-pulse"
                              x1="50" y1={200 - (value * 1.5)} 
                              x2="350" y2={200 - (value * 1.5)} 
                              stroke="url(#chartGradient)" 
                              strokeWidth="1"
                              strokeDasharray="5,5"
                              style={{animationDelay: `${i * 0.2}s`}} />
                            <text className="font-semibold"
                              x="45" y={205 - (value * 1.5)} 
                              fill="rgba(255,255,255,0.7)" 
                              fontSize="12" 
                              textAnchor="end" >
                              {value}%
                            </text>
                          </g>
                        ))}
                      </g>
                      
                      {[
                        { label: 'Python', x: 100, color: '#f59e0b', icon: <SiPython /> },
                        { label: 'JS',     x: 160, color: '#eab308', icon: <SiJavascript /> },
                        { label: 'Next',   x: 220, color: '#6b7280', icon: <SiNextdotjs />},
                        { label: 'React',  x: 280, color: '#06b6d4', icon: <SiReact /> },
                        { label: 'AI/ML',     x: 340, color: '#8b5cf6', icon: <AiOutlineRobot /> },
                      ].map(({label, x, icon}) => (
                        <g key={label}>
                          <text className="font-medium text-white text-sm" fill="rgba(255,255,255,0.8)" x={x} y="240" textAnchor="middle" >
                            {icon}
                          </text>
                          <text className="font-medium text-[10px]" fill="rgba(255,255,255,0.6)" x={x} y="255" textAnchor="middle" >
                            {label}
                          </text>
                        </g>
                      ))}
                      
                      <path
                        fill="none"
                        stroke="url(#chartGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#glow)"
                        className="animate-pulse"
                        style={{
                          strokeDasharray: "1000",
                          strokeDashoffset: "1000",
                          animation: "drawLine 3s ease-in-out forwards"
                        }}
                      />
                      {[
                        { label: 'Python', persen: 85, x: 100, color: '#f59e0a' },
                        { label: 'JavaScript', persen: 80, x: 160, color: '#eab308' },
                        { label: 'Next.js', persen: 75, x: 220, color: '#6b7280' },
                        { label: 'React', persen: 70, x: 280, color: '#06b6d4' },
                        { label: 'AI/ML', persen: 60, x: 340, color: '#8b5cf6' },
                      ].map(({label, persen, x, color}, index) => {
                        const y = 200 - (persen * 1.5);
                        return (
                          <g key={label}>
                            <circle className="transition-all duration-300 hover:r-2" fill={color} stroke="white" strokeWidth="2" cx={x} cy={y} r="6"
                              filter="url(#glow)"
                              style={{
                                animationDelay: `${index * 0.3}s`,
                                animation: "bounceIn 0.6s ease-out forwards"
                              }}/>
                            <text className="drop-shadow-lg font-bold text-sm" fill={color} textAnchor="middle" x={x} y={y - 15} 
                              style={{
                                animationDelay: `${index * 0.3}s`,
                                animation: "fadeInUp 0.8s ease-out forwards"
                              }}>
                              {persen}%
                            </text>
                            {index < 4 && (
                              <line x1={x} y1={y} 
                                x2={[
                                  { x: 100, y: 200 - (85 * 1.5) },
                                  { x: 160, y: 200 - (80 * 1.5) },
                                  { x: 220, y: 200 - (75 * 1.5) },
                                  { x: 280, y: 200 - (70 * 1.5) },
                                  { x: 340, y: 200 - (60 * 1.5) },
                                ][index + 1].x} 
                                y2={[
                                  { x: 100, y: 200 - (85 * 1.5) },
                                  { x: 160, y: 200 - (80 * 1.5) },
                                  { x: 220, y: 200 - (75 * 1.5) },
                                  { x: 280, y: 200 - (70 * 1.5) },
                                  { x: 340, y: 200 - (60 * 1.5) },
                                ][index + 1].y}
                                stroke={color} 
                                strokeWidth="3" 
                                strokeLinecap="round"
                                filter="url(#glow)"
                                className="transition-all duration-500"
                                style={{
                                  strokeDasharray: "100",
                                  strokeDashoffset: "100",
                                  animationDelay: `${index * 0.2}s`,
                                  animation: "drawLine 1s ease-out forwards"
                                }}
                              />
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>
                <div className="space-y-6 px-0 lg:px-20">
                  <div className="text-left">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-8 bg-gradient-accent rounded-full"></div>
                        <h3 className="text-xl font-bold text-gradient-primary">Education</h3>
                      </div>
                    <div className="flex gap-4 group cursor-pointer">
                      <div className="text-left">
                        <span className="font-semibold text-white text-lg block">Computer Engineering</span>
                        <span className="text-color">IPB University</span>
                        <span className="text-sm text-gray-400 block">Vocational School | August 2023 - Present</span>
                      </div>
                    </div>
                    <div className="flex gap-4 group cursor-pointer mt-4">
                      <div className="text-left">
                        <span className="font-semibold text-white text-lg block">Science</span>
                        <span className="text-color">SMAN 6 Kabupaten Tangerang</span>
                        <span className="text-sm text-gray-400 block">July 2019 - May 2022</span>
                      </div>
                    </div>
                </div>
                  <div className="text-left ">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-8 bg-gradient-accent rounded-full"></div>
                      <h3 className="text-xl font-bold text-gradient-primary">Hobby and Interests</h3>
                      </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {["AI/ML", "Music", "Design", "Travel", "Writing", "Reading", "Learn code", "3D Design CAD"].map((interest) => (
                        <span key={interest} className="px-4 py-2 rounded-full bg-gradient-dark text-white/80 text-sm font-medium hover:scale-105 transition-all duration-300 cursor-pointer"> {interest} </span>))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <OrgCert />
          </div>
        </section>
        <section id="Projects" className="scroll-mt-5 p-10 px-10 lg:px-50 py-10 w-full max-w-[80vw] mx-auto flex flex-col items-center justify-center text-white">    
          <Project />
        </section>
        <section id="Contact" className="scroll-mt-5 p-10 px-10 lg:px-50 py-10 w-full max-w-[80vw] mx-auto flex flex-col items-center justify-center text-white">
          <Contact />
        </section>
      </div>
    </>
  )
}

export default LandingPage;
