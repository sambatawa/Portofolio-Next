'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { FaGlobe, FaRobot, FaServer, FaChartBar } from "react-icons/fa";
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
        <div className="w-[90vw] 2xl:w-[80vw] h-[90vh] 2xl:h-[70vh] flex flex-col 2xl:flex-row gap-10 2xl:gap-0 animate-slide-down transition-all duration-300">
          <div className="w-[90vw] 2xl:w-[60vw] flex flex-col items-center text-center 2xl:text-start 2xl:items-start justify-center px-5 xl:px-20 2xl:border-b 2xl:border-white/50 ">
            <h2 className="text-sm xl:text-xl text-color font-semibold pl-5 pr-5 py-3 border-r-3 border-l-3  animate-slide-down transition-all duration-300">Machine Learning and Web Enthusiast</h2>
            <h1 className="text-4xl 2xl:text-6xl font-bold text-white mt-2 py-1 gradient-text animate-slide-down transition-all duration-300">I&apos;m Inas Samara Taqia</h1>
            <p className="text-xl xl:text-2xl text-color mt-7 animate-slide-down transition-all duration-300">A tech enthusiast focused on machine learning and web development (specifically in backend area). Interested in building intelligent applications that integrate predictive models with responsive web platforms.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 2xl:mt-20 sm:border-t sm:border-r sm:border-white justify-center items-center py-4 sm:pr-10 rounded-full animate-slide-down transition-all duration-300">
              <a href="#Contact" className="whitespace-nowrap text-2xl font-medium mt-6 px-6 md:px-30 py-3 bg-gradient-to-r from-[#D9D9D9] to-[#F2F2F2] text-black rounded-full hover:scale-105 hover:shadow-[inset_0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300">
                Collab yuk
              </a>
              <a href="#About" className="whitespace-nowrap text-2xl mt-6 px-4 py-2 bg-transparent border-white border text-color rounded-full hover:scale-105 hover:border-3 transition-all duration-300">
                CV
              </a>
            </div>
          </div>
          <div className="order-first 2xl:order-none rounded-b-3xl 2xl:rounded-l-none 2xl:rounded-r-3xl w-full 2xl:w-[40vw] h-[500px] 2xl:h-full relative overflow-hidden z-49 animate-slide-down transition-all duration-300">
            <Image src="/foto.jpg" priority={false} alt="Foto" fill sizes="(min-width: 1536px) 40vw, 90vw" style={{ objectFit: "cover", objectPosition: "center"}}/>
            <span className={`${poppins.className} italic relative inset-0 flex items-center justify-center z-50 text-white text-[50px] lg:text-[80px] px-10 font-bold`}>Sambatawa</span> 
            <span className="absolute left-0 right-0 bottom-0 h-[100px] flex items-center justify-center z-50 text-white text-3xl lg:text-4xl border border-t-3 bg-gradient-2 font-medium">
              Bogor, Indonesia
            </span>        
          </div>
        </div>
      </section>   
      <div
        id="Page2"
        className="scroll-container flex flex-col h-[80vh] 2xl:h-[80vh] w-full max-w-[80vw] mx-auto my-auto mt-40 mb-auto overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory bg-gradient-to-br from-[#000000]/30 to-[#3a3a3a]/30 rounded-3xl animate-slide-up duration-300">
        <section id="About" className="scroll-mt-28 p-10 px-30 w-full max-w-[80vw] mx-auto h-full snap-start flex flex-col gap-8 text-white">
          <h2 className="text-4xl md:text-5xl text-center font-bold ">Who is Sambatawa?</h2>
          <div className="w-full gap-8 items-center">
            <div className="space-y-5">
              <div>
                <p className="text-lg text-gray-300 text-center">inassamarataqia@gmail.com | 21 now</p>
              </div>
              <p className="text-xl leading-relaxed text-center justify-between text-gray-200">Hi, I&apos;m Inas Samara Taqia as web developer learning and experimenting to build responsive and accessible interfaces.
                While most of my experience has been in front-end with some frameworks/libraries, depending on project. I&apos;m excited about integrating AI/ML features into my projects with exploring how machine learning can improve user interactions, personalization, and functionality. 
                I&apos;m also picking up backend fundamentals along the way, and right now my passion is combining backend and AI/ML to create smart, intuitive web experiences.
              </p>
              <div className="flex items-center gap-3 justify-center text-gray-300">
                <span className="h-px w-30 bg-gray-500" />
                <span className="h-px w-60 bg-gray-500" />
                <span className="h-px w-90 bg-gray-500" />               
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="space-y-3">
              <h3 className="text-3xl font-semibold tracking-wide text-gray-100">Software Skills</h3>
              {[
                { label: 'Python', persen: '85%' },
                { label: 'Javascript', persen: '70%' },
                { label: 'Next.js', persen: '65%' },
                { label: 'Tailwind CSS', persen: '60%' },
                { label: 'Other', persen: '10%' },
              ].map(({label, persen}) => (
                <div key={label} className="space-y-1">
                  <div className="flex items-center justify-between text-xl text-gray-300">
                    <span>{label}</span>
                    <span>{persen}</span>
                  </div>
                  <div className="h-5 w-full rounded bg-gray-700/70">
                    <div className="h-5 rounded bg-blue-300" style={{ width: persen }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-3xl font-semibold tracking-wide text-gray-100">Education</h3>
                <p className="text-xl text-gray-300">Computer Engineering in Vocational School</p>
                <p className="text-lg text-gray-400">IPB University</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold tracking-wide text-gray-100">Personal Skills</h3>
                <ul className="grid grid-cols-2 gap-2 text-xl text-gray-300">
                  <li>Creativity</li>
                  <li>Problem Solving</li>
                  <li>Teamwork</li>
                  <li>Communication</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-semibold tracking-wide text-gray-100">Hobbies and Interests</h3>
                <div className="flex flex-wrap gap-4">
                  {["Music", "Writing", "Reading", "Travel", "Learn code", "3D Design CAD"].map((h) => (
                    <span key={h} className="px-3 py-1 rounded-full border border-white/20 text-lg text-gray-200">{h}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="space-y-2">
                <h3 className="text-3xl font-semibold tracking-wide text-gray-100">What Can I Do?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-white/50 transition-all">
                      <div className="flex flex-col items-center gap-3 mb-3 hover:sc">
                        <div className="w-8 h-5 bg-blue-300 rounded-lg flex items-center justify-center">
                          <FaGlobe className="text-[#157fb1] w-4 h-4" />
                        </div>
                        <h4 className="text-white text-xl font-semibold">Web Development</h4>
                      </div>
                      <p className="text-gray-300 text-sm">Creating responsive, performant web applications.</p>
                    </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-white/50 transition-all">
                    <div className="flex flex-col items-center gap-3 mb-3">
                      <div className="w-8 h-5 bg-blue-300 rounded-lg flex items-center justify-center">
                        <FaRobot className="text-[#157fb1] w-4 h-4" />
                      </div>
                      <h4 className="text-white font-semibold text-xl">AI/ML Integration</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Integrating AI/ML for enhanced web experiences.</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-white/50 transition-all">
                    <div className="flex flex-col items-center gap-3 mb-3">
                      <div className="w-8 h-5 bg-blue-300 rounded-lg flex items-center justify-center">
                        <FaServer className="text-[#157fb1] w-4 h-4" />
                      </div>
                      <h4 className="text-white font-semibold text-xl">Backend</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Developing backend, APIs, and databases web applications.</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-white/50 transition-all">
                    <div className="flex flex-col items-center gap-3 mb-3">
                      <div className="w-8 h-5 bg-blue-300 rounded-lg flex items-center justify-center">
                        <FaChartBar className="text-[#157fb1] w-4 h-4" />
                      </div>
                      <h4 className="text-white font-semibold text-xl">Data Scientist</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Building models and algorithms to analyze and interpret data for insights.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Projects" className="scroll-mt-28 p-10 h-screen w-screen max-w-[80vw] mx-auto snap-start flex flex-col items-center justify-center text-white">    
          <Project />
        </section>
        <section id="Contact" className="scroll-mt-28 w-full max-w-[80vw] mx-auto snap-start flex flex-col items-center justify-center text-white">
          <Contact />
        </section>
      </div>
    </>
  )
}

export default LandingPage;
