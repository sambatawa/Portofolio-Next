'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { SiPython, SiJavascript, SiNextdotjs, SiReact, SiLaravel, SiMysql, SiFirebase, SiHtml5, SiCss3, SiTailwindcss, SiTensorflow, SiTypescript, SiMongodb, SiFlask } from 'react-icons/si';
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
              <p className="text-md text-gradient-accent font-medium">inasst@sambatawa.tech | 21 years old</p>
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
                  <div className="relative h-full w-full rounded-3xl p-6 overflow-hidden">
                    <div className="relative h-full flex items-center justify-center">
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 w-full h-full">
                        {[
                          { name: 'React', icon: <SiReact />, color: '#61DAFB', delay: 0 },
                          { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000', delay: 0.3 },
                          { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', delay: 0.6 },
                          { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4', delay: 0.9 },
                          { name: 'Python', icon: <SiPython />, color: '#3776AB', delay: 1.2 },
                          { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', delay: 1.5 },
                          { name: 'YOLO', icon: <AiOutlineRobot />, color: '#FF6B35', delay: 1.8 },
                          { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20', delay: 2.1 },
                          { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', delay: 2.4 },
                          { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', delay: 2.7 },
                          { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', delay: 3.0 },
                          { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26', delay: 3.3 },
                          { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6', delay: 3.6 },
                          { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00', delay: 3.9 },
                          { name: 'Flask', icon: <SiFlask />, color: '#000000', delay: 4.2 }
                        ].map((framework, index) => (
                          <div key={framework.name} className="flex flex-col items-center justify-center" style={{
                              animation: `slideInFromBottom 0.8s ease-out forwards`,
                              animationDelay: `${framework.delay}s`,
                              opacity: 0
                            }}>
                            <div className="relative group cursor-pointer transition-all duration-300 hover:scale-110" style={{animation: `bounce ${2 + index * 0.2}s ease-in-out infinite`, animationDelay: `${framework.delay + 0.5}s`}}>
                              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-300" style={{ backgroundColor: `${framework.color}20`, border: `2px solid ${framework.color}`, boxShadow: `0 0 20px ${framework.color}40` }}>
                                <span style={{ color: framework.color }}>
                                  {framework.icon}
                                </span>
                              </div> 
                              <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: framework.color, animation: `pulse-ring ${2 + index * 0.3}s ease-out infinite`, animationDelay: `${framework.delay}s` }} />
                            </div>
                            
                            <div className="mt-2 text-center">
                              <p className="text-white font-semibold text-xs">{framework.name}</p>
                            </div>

                            {[...Array(2)].map((_, i) => (
                              <div key={i} className="absolute w-2 h-2 rounded-full" style={{backgroundColor: framework.color, left: '50%', top: '20%', animation: `orbit-${i} ${2 + i}s linear infinite`, animationDelay: `${framework.delay + i * 0.5}s`}} />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
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
                      {["AI/ML", "Design", "Writing", "Reading", "Learn code", "3D Design CAD"].map((interest) => (
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
