'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { FaGlobe, FaRobot, FaServer, FaChartBar } from "react-icons/fa";
import { SiPython, SiJavascript, SiNextdotjs, SiReact, SiNodedotjs } from 'react-icons/si';
import { AiOutlineRobot } from "react-icons/ai";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const LandingPage = () => {
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
      <section id="Page1" className="relative min-h-screen top-20 flex flex-col items-center justify-center z-40 px-4 2xl:px-0">
        <div className="w-[90vw] 2xl:w-[80vw] h-[90vh] 2xl:h-[70vh] flex flex-col 2xl:flex-row gap-10 2xl:gap-0 animate-slide-up transition-all duration-300">
          <div className="w-[90vw] 2xl:w-[60vw] flex flex-col items-center text-center 2xl:text-start 2xl:items-start justify-center px-5 xl:px-20">
            <div className="glass-card p-6 mb-8 animate-slide-left rounded-r-full">
              <h2 className="text-sm xl:text-lg border-r-3 border-l-3 border-white/60 px-3 py-2 rounded-full text-gradient-accent font-semibold tracking-wider uppercase">
              Machine Learning and Web Enthusiast
              </h2>
            </div>
            <h1 className="text-4xl 2xl:text-7xl font-bold text-white mt-2 py-1 gradient-text animate-slide-left">
              I&apos;m Inas Samara Taqia
            </h1>
            <p className="text-xl text-color mt-7 max-w-2xl animate-slide-left">
              Building the future of web applications with AI/ML integration and Web3 technologies. 
              Passionate about creating intelligent, decentralized solutions that push the boundaries of what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8 2xl:mt-20 animate-slide-left">
              <a href="#Contact" className="group relative px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 neon-glow">
                <span className="relative z-10">Let&apos;s Collaborate</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#About" className="glass-button px-8 py-4 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                View Resume
              </a>
            </div>
          </div>
          <div className="order-first 2xl:order-none w-full 2xl:w-[40vw] h-[500px] 2xl:h-full relative overflow-hidden z-49 animate-slide-right">
            <div className="glass-card h-full p-8 flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-dark opacity-50 rounded-2xl"></div>
              <Image src="/foto.jpg" className="object-cover rounded-2xl" sizes="(min-width: 1536px) 40vw, 90vw" priority={false} alt="Profile" fill />
              <div className="relative z-10 text-center">
                <span className={`${poppins.className} text-white text-[50px] lg:text-[80px] font-bold text-gradient-glow`}>Sambatawa</span> 
                <div className="mt-4 px-6 py-3 glass-card rounded-full">
                  <span className="text-white text-xl lg:text-2xl font-medium">Bogor, Indonesia</span>        
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
      <div id="Page2" className="scroll-container flex flex-col h-[80vh] 2xl:h-[80vh] w-full max-w-[80vw] mx-auto my-auto mt-40 mb-10 overflow-y-auto overflow-x-hidden bg-gradient-dark scroll-smooth snap-y snap-mandatory rounded-4xl animate-slide-up duration-300">
        <section id="About" className="scroll-mt-28 p-10 px-30 w-full max-w-[80vw] mx-auto snap-start flex flex-col gap-8 text-white mb-25">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-sm font-semibold text-gradient-accent uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Who is 
              <span className="text-gradient-primary"> Sambatawa?</span>
            </h2>
            <div className="glass-card rounded-b-3xl p-4 inline-block">
              <p className="text-lg text-gradient-accent font-medium">inassamarataqia@gmail.com | 21 years old</p>
            </div>
          </div>
          
          <div className="mb-15 animate-fade-in">
            <p className="text-xl leading-relaxed text-color text-center mx-auto">
              Hi, I&apos;m Inas Samara Taqia, a passionate developer building the next generation of web applications. 
              I specialize in creating intelligent, responsive interfaces that seamlessly integrate AI/ML capabilities with modern web technologies.
              My journey spans from frontend development to backend architecture, with a deep focus on how machine learning can revolutionize user experiences and create more intuitive, personalized digital solutions.
            </p>
          </div>
          <div className="grid grid-rows-1 lg:grid-rows-2 gap-20 w-full">
            <div className="h-fit pb-30 glass-card rounded-3xl p-8 space-y-6 hover:neon-glow transition-all duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-accent rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gradient-primary">Technical Skills</h3>
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
                        { label: 'Python', x: 80, color: '#f59e0b', icon: <SiPython /> },
                        { label: 'JS',     x: 140, color: '#eab308', icon: <SiJavascript /> },
                        { label: 'Next',   x: 200, color: '#6b7280', icon: <SiNextdotjs />},
                        { label: 'React',  x: 260, color: '#06b6d4', icon: <SiReact /> },
                        { label: 'Node',   x: 320, color: '#10b981', icon: <SiNodedotjs /> },
                        { label: 'AI',     x: 380, color: '#8b5cf6', icon: <AiOutlineRobot /> },
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
                        d="M 80,117.5 Q 110,100 140,125 Q 170,150 200,137.5 Q 230,125 260,137.5 Q 290,150 320,143.75 Q 350,137.5 380,150"
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
                        { label: 'Python', persen: 85, x: 80, color: '#f59e0b' },
                        { label: 'JavaScript', persen: 80, x: 140, color: '#eab308' },
                        { label: 'Next.js', persen: 75, x: 200, color: '#6b7280' },
                        { label: 'React', persen: 70, x: 260, color: '#06b6d4' },
                        { label: 'Node.js', persen: 65, x: 320, color: '#10b981' },
                        { label: 'AI/ML', persen: 60, x: 380, color: '#8b5cf6' },
                      ].map(({label, persen, x, color}, index) => {
                        const y = 200 - (persen * 1.5);
                        return (
                          <g key={label}>
                            <circle className="animate-ping" fill={color} cx={x} cy={y} r="8" opacity="0.3"
                              style={{animationDelay: `${index * 0.3}s`}}/>
                            <circle className="transition-all duration-300 hover:r-8 hover:stroke-4" fill={color} stroke="white" strokeWidth="2" cx={x} cy={y} r="6"
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
                            {index < 5 && (
                              <line x1={x} y1={y} 
                                x2={[
                                  { x: 80, y: 200 - (85 * 1.5) },
                                  { x: 140, y: 200 - (80 * 1.5) },
                                  { x: 200, y: 200 - (75 * 1.5) },
                                  { x: 260, y: 200 - (70 * 1.5) },
                                  { x: 320, y: 200 - (65 * 1.5) },
                                  { x: 380, y: 200 - (60 * 1.5) },
                                ][index + 1].x} 
                                y2={[
                                  { x: 80, y: 200 - (85 * 1.5) },
                                  { x: 140, y: 200 - (80 * 1.5) },
                                  { x: 200, y: 200 - (75 * 1.5) },
                                  { x: 260, y: 200 - (70 * 1.5) },
                                  { x: 320, y: 200 - (65 * 1.5) },
                                  { x: 380, y: 200 - (60 * 1.5) },
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
                <div className="space-y-8 px-20">
                  <div className="text-left">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-8 bg-gradient-accent rounded-full"></div>
                        <h3 className="text-2xl font-bold text-gradient-primary mb-6">Education</h3>
                      </div>
                    <div className="flex gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:neon-glow">
                        <FaChartBar className="text-white/60 text-lg"/>
                      </div>
                      <div className="text-left">
                        <span className="font-semibold text-white text-lg block">Computer Engineering</span>
                        <span className="text-color">IPB University</span>
                        <span className="text-sm text-gray-400 block">Vocational School Program</span>
                      </div>
                    </div>
                </div>
                  <div className="text-left">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-8 bg-gradient-accent rounded-full"></div>
                      <h3 className="text-2xl font-bold text-gradient-primary mb-6">Hobby and Interests</h3>
                      </div>
                    <div className="flex flex-wrap gap-3 justify-between">
                      {["Web3", "AI/ML", "Blockchain", "Music", "Design", "Travel", "Writing", "Reading", "Learn code", "3D Design CAD"].map((interest) => (
                        <span key={interest} className="px-4 py-2 rounded-full bg-gradient-dark text-white/80 text-sm font-medium hover:scale-105 transition-all duration-300 cursor-pointer"> {interest} </span>))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-center mb-16">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-gradient-accent uppercase tracking-wider">What I Build</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                  Creating 
                  <span className="text-gradient-primary"> Digital Solutions</span>
                </h3>
                <p className="text-lg text-color max-w-2xl mx-auto">
                  Transforming ideas into powerful, scalable applications that drive innovation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                  <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => {
                      const left = (i * 8.7) % 100;
                      const top = (i * 13.2) % 100;
                      const delay = (i * 0.4) % 3;
                      const duration = 2 + (i * 0.15) % 2;
                      return (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                          style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`
                          }}
                        />
                      );
                    })}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50">
                          <FaGlobe className="text-white text-3xl" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <h4 className="text-white text-2xl font-bold mb-2 group-hover:text-gradient-primary transition-colors duration-300">
                          Web Applications
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="text-blue-400 text-sm font-medium">Full Stack Development</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-color leading-relaxed mb-6">
                      Modern, responsive web applications built with cutting-edge technologies, 
                      optimized for performance and user experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 p-8 hover:from-purple-500/20 hover:via-pink-500/20 hover:to-red-500/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-red-500/5 animate-pulse"></div>
                  <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => {
                      const left = (i * 9.1) % 100;
                      const top = (i * 14.5) % 100;
                      const delay = (i * 0.5) % 3;
                      const duration = 2 + (i * 0.2) % 2;
                      
                      return (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
                          style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`
                          }}
                        />
                      );
                    })}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/50">
                          <FaRobot className="text-white text-3xl" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <h4 className="text-white text-2xl font-bold mb-2 group-hover:text-gradient-accent transition-colors duration-300">
                          AI Integration
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                          <span className="text-purple-400 text-sm font-medium">Machine Learning</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-color leading-relaxed mb-6">
                      Intelligent features powered by machine learning algorithms, 
                      creating smarter and more intuitive user experiences.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['TensorFlow', 'Python', 'OpenAI', 'ML Models'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 p-8 hover:from-green-500/20 hover:via-emerald-500/20 hover:to-teal-500/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-teal-500/5 animate-pulse"></div>
                  <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => {
                      const left = (i * 10.3) % 100;
                      const top = (i * 15.8) % 100;
                      const delay = (i * 0.6) % 3;
                      const duration = 2 + (i * 0.25) % 2;
                      
                      return (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-pulse"
                          style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`
                          }}
                        />
                      );
                    })}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-green-500/50">
                          <FaServer className="text-white text-3xl" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <h4 className="text-white text-2xl font-bold mb-2 group-hover:text-gradient-secondary transition-colors duration-300">
                          Backend Systems
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-sm font-medium">Server Architecture</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-color leading-relaxed mb-6">
                      Scalable APIs and server architectures designed for high performance, 
                      reliability, and seamless integration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express', 'MongoDB', 'Docker'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 p-8 hover:from-orange-500/20 hover:via-red-500/20 hover:to-pink-500/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5 animate-pulse"></div>
                  <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => {
                      const left = (i * 11.5) % 100;
                      const top = (i * 17.2) % 100;
                      const delay = (i * 0.7) % 3;
                      const duration = 2 + (i * 0.3) % 2;
                      
                      return (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
                          style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`
                          }}
                        />
                      );
                    })}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-orange-500/50">
                          <FaChartBar className="text-white text-3xl" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <h4 className="text-white text-2xl font-bold mb-2 group-hover:text-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 transition-colors duration-300">
                          Data Solutions
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          <span className="text-orange-400 text-sm font-medium">Analytics & Visualization</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-color leading-relaxed mb-6">
                      Advanced data analysis and visualization tools that transform 
                      complex information into actionable business insights.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Jupyter'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Projects" className="scroll-mt-28 p-10 w-full max-w-[80vw] mx-auto snap-start flex flex-col items-center justify-center text-white">    
          <Project />
        </section>
        <section id="Contact" className="scroll-mt-28 p-10 w-full max-w-[80vw] mx-auto snap-start flex flex-col items-center justify-center text-white">
          <Contact />
        </section>
      </div>
    </>
  )
}

export default LandingPage;
