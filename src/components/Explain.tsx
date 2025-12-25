"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaGithub, FaArrowLeft, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import CustomCursor from "./CustomCursor";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const projectDetails = {
  HydroCabin: {
    title: "HydroCabin",
    category: "Web Development - IoT",
    description: "Plant monitoring system based on IoT with parameters of temperature, humidity, and pressure.",
    explanation: "HydroCabin is an IoT-based plant monitoring system I built to help anyone easily track and manage plant health in real time. It uses multiple sensors to measure temperature, humidity, and pressure, then sends all data wirelessly to a user-friendly web dashboard. You get instant access to your plant's condition, plus visual alerts and notifications if anything goes outside your chosen safe range.",
    explanation1: "The core system uses ESP32 microcontrollers and BME280 sensors for accurate monitoring. LED indicators and a buzzer provide immediate feedback for different alert levels. All sensor data is sent via WiFi to Firebase, so you can check your plants from anywhere on any device. The web dashboard lets you see live and historical data, set custom thresholds, and even get watering suggestions based on trends. With features like secure session management and responsive design, HydroCabin is practical for both home gardeners and professionals who want peace of mind and better harvests.",
    explanation2: "",
    explanation3: "",
    frameworks: ["Tailwind CSS", "Firebase", "Laravel", "PHP", "MySQL", "MQTT", "ESP32", "BME280"],
    images: ["/project/HydroCabin.png", "/project/HydroCabin1.png"],
    demo: "https://hydrocabin.sambatawa.tech",
    repo: "https://github.com/sambatawa/HydroCabin",
    video: "https://drive.google.com/file/d/1Sb9pYUFMdUi9i_gp3oCDw_mXO3Wb4bTb/view?usp=sharing"
  },
  SiPhot: {
    title: "SiPhot",
    category: "Web Development",
    description: "Digital photobooth application with hand gesture control for taking photos directly from your browser.",
    explanation: "SiPhot is a digital photobooth app I built personally to deliver a fun and modern photo experience. With this app, users can take photos directly from their browser, pick from various cool frames, and set their own timer. Everything runs in real-time and is super easy to access—just open the provided demo link, no complicated setup required.",
    explanation1: "The main highlight of SiPhot is its gesture-based interface—just move your finger in front of the camera to navigate menus or take a photo, no mouse or keyboard needed. The system detects your hand position and movements using the webcam, then translates them into app commands. This is all made possible by Python Flask, OpenCV, and MediaPipe for hand detection, plus PyAutoGUI for automating clicks. The result is a practical, safe, and enjoyable digital photobooth, perfect for personal documentation or fun with friends and family.",
    explanation2: "",
    explanation3: "",
    frameworks: ["Flask", "OpenCV", "MediaPipe", "PyAutoGUI", "HTML5", "CSS3", "JavaScript", "NumPy"],
    images: ["/project/SiPhot.png", "/project/SiPhot1.png"],
    demo: "https://siphot.sambatawa.tech",
    repo: "https://github.com/sambatawa/SiPhot",
    video: ""
  },
  Terra: {
    title: "Terra",
    category: "Web Development - Machine Learning",
    description: "Monitoring dan AI Detection Disease menggunakan Eggplant Leaf - Platform pertanian cerdas dengan teknologi AI, IoT, dan machine learning.",
    explanation: "Terra is an integrated smart agriculture platform designed to support farmers through the combination of Internet of Things (IoT), web-based information systems, and artificial intelligence. The platform focuses on monitoring environmental conditions and detecting plant diseases to assist decision-making in crop management. By integrating real-time sensor data, machine learning-based disease detection, and centralized data storage, Terra enables efficient monitoring, control, and analysis within a single web-based ecosystem.",
    explanation1: "The disease detection module in Terra is powered by a YOLO-based deep learning model implemented on a Python backend using FastAPI. The model processes plant images to identify disease classes and confidence scores, with evaluation results showing strong performance in terms of precision, recall, and mAP. Based on comprehensive evaluation against 388 validation images with 491 detected objects, the model demonstrates exceptional performance with precision of 0.832, recall of 0.781, mAP@50 of 0.85, and mAP@50-95 of 0.727. The system achieves real-time processing capabilities with an average inference time of approximately 4.3 ms per image. Per-class analysis reveals that Leaf Wilt (Layu) disease shows the highest performance with mAP@50 of 0.94, followed by Cercospora (Bercak Daun) with mAP@50 of 0.86, while TMV (Virus) class exhibits lower recall at 0.693. Detection results are stored in Firebase along with environmental sensor data, enabling seamless integration with the web dashboard and historical analysis features.",
    explanation2: "Environmental monitoring in Terra is achieved through IoT sensors that collect real-time data such as air temperature, air humidity, and light intensity. These sensor readings are transmitted to Firebase as a cloud-based real-time database and visualized on the web interface built with Laravel, TailwindCSS, and JavaScript. In addition, control commands such as automated irrigation can be issued through the web interface and processed by the backend API, allowing responsive interaction between users and connected devices.",
    explanation3: "The use case diagram illustrates the interactions between various actors and the Terra system, which functions as a disease and damage detection system for purple eggplant leaves. There are five main actors in the system: Petani (Farmers), Penjual (Sellers), Penyuluh (Agricultural Extension Officers), Teknisi/Admin (Technicians/Administrators), and Guest users, each with different access rights and functions according to their roles. All actors, except Guest, must go through the login process as the main use case before accessing system features, while Guest users have limited access. Petani actors serve as the primary users of the monitoring and detection system. Petani can view products, manage purchases, and manage plant condition monitoring which includes viewing sensor data, disease detection results, and plant health status. Petani can also manage device control, such as monitoring and controlling movement or irrigation systems, as well as manage historical data of detection results. Additionally, petani have features for submitting problem reports when system issues or plant condition problems are found. Penjual actors focus on marketplace features. Penjual can manage accounts, including adding, changing, and deleting profile data and accounts. Additionally, penjual can manage products including adding products, changing product details, deleting products, as well as viewing sales data and managing sales. All these activities are connected to the login system as an access prerequisite. Penyuluh actors play roles in communication and user assistance aspects. Penyuluh can manage community forums, view discussion forums, and manage responses or replies to questions and discussions submitted by users. This feature enables two-way interaction between petani and penyuluh to provide education, recommendations, and solutions to agricultural problems. Teknisi or Admin actors have the highest access rights in the system. Admin is responsible for managing the entire system, including managing user data, viewing user data, changing access rights, roles, and user status, as well as deleting users if necessary. Additionally, admin is also responsible for managing problem submissions submitted by petani, receiving reports, and providing responses or solutions to those reports.",
    frameworks: ["Laravel", "JavaScript", "Python", "Firebase", "MySQL", "Fast API", "TensorFlow"],
    images: ["/project/Terra.png", "/project/Terra1.png", "/project/Terra2.png", "/project/Terra3.png"],
    demo: "https://terra.cervosys.app/",
    repo: "https://github.com/sambatawa/Terra",
    video: ""
  },
  Nutrimix: {
    title: "Nutrimix",
    category: "IoT - Web Development",
    description: "E-commerce and monitoring feature website for fish feed producer with premium formulas for optimal fish growth in aquaculture.",
    explanation: "Nutrimix is an e-commerce website for fish feed producers, offering premium pellets with specialized formulas for optimal aquaculture fish growth. The platform combines advanced e-commerce functionality with sophisticated monitoring systems to help businesses optimize their fish feed production and distribution processes. Built as a comprehensive online solution for selling fish feed products with integrated payment systems and modern web technologies.",
    explanation1: "The technology stack features Next.js 16 and React 19 for the frontend framework, providing modern React capabilities with server-side rendering. TailwindCSS handles styling with utility-first CSS approach. Authentication is implemented through Firebase for secure user access. The payment gateway uses Midtrans in sandbox mode for development and testing, while Framer Motion provides smooth animations and interactions. Chart visualization is powered by both ApexCharts and Chart.js for comprehensive data representation.",
    explanation2: "Key features include a complete e-commerce system for fish feed products with integrated Midtrans payment gateway in sandbox mode for development and testing. User authentication is secured through Firebase. The dashboard provides comprehensive data visualization using charts and graphs. Contact forms are powered by Nodemailer for communication, while reCAPTCHA ensures security against bots. The landing page includes Hero, About, Product, and FAQ sections with a custom cursor and responsive design. The platform is specifically designed to sell fish feed products online with a fully integrated payment system.",
    explanation3: "",
    frameworks: ["Next.js 16", "React 19", "TailwindCSS", "Firebase", "Midtrans", "Framer Motion", "ApexCharts", "Chart.js", "Nodemailer", "reCAPTCHA"],
    images: ["/project/Nutrimix.png", "/project/Nutrimix1.png", "/project/Nutrimix2.png"],
    demo: "https://nutrimix.sambatawa.tech",
    repo: "https://github.com/sambatawa/Nutrimix",
    video: ""
  },
  "3D Project": {
    title: "3D Modeling Project",
    category: "3D Design - Engineering",
    description: "3D modeling and design project created with Fusion 360, featuring complex mechanical components and assembly visualization.",
    explanation: "This 3D modeling project showcases advanced mechanical design capabilities using Autodesk Fusion 360. The project demonstrates expertise in creating complex assemblies, parametric modeling, and engineering documentation for real-world manufacturing applications. The assembly design utilizes constraint-based relationships to ensure proper component interaction. Each part is modeled with precise dimensional accuracy and includes parametric features for easy modification. The assembly contains over 50 individual components with complex motion mechanisms and interlocking parts. Finite element analysis validates structural integrity under various load conditions. The analysis includes stress distribution, deformation analysis, and safety factor calculations. Technical drawings with GD&T annotations provide manufacturing specifications with tolerance requirements and surface finish details.",
    explanation1: "",
    explanation2: "",
    explanation3: "",
    frameworks: ["Fusion 360", "Autodesk Inventor", "SolidWorks", "KeyShot", "Cura", "AutoCAD"],
    images: ["/project/3D.png"],
    demo: "https://a360.co/4qiXPr4",
    repo: "",
    video: ""
  }
};

const ProjectContent = () => {
  useEffect(() => {
    const disablePrint = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        e.stopPropagation();
        alert('Maaf tidak boleh dulu ya');
      }
    };

    const disableCopy = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
        e.stopPropagation();
        alert('Maaf salinan dimatikan dulu ya');
      }
    };

    const disableSelectAll = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const disableTextSelection = (e: Event) => {
      e.preventDefault();
    };

    const originalPrint = window.print;
    window.print = () => {
      alert('Maaf ya');
    };

    document.addEventListener('keydown', disablePrint);
    document.addEventListener('keydown', disableCopy);
    document.addEventListener('keydown', disableSelectAll);
    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('selectstart', disableTextSelection);
    document.addEventListener('dragstart', disableTextSelection);

    return () => {
      document.removeEventListener('keydown', disablePrint);
      document.removeEventListener('keydown', disableCopy);
      document.removeEventListener('keydown', disableSelectAll);
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('selectstart', disableTextSelection);
      document.removeEventListener('dragstart', disableTextSelection);
      window.print = originalPrint;
    };
  }, []);

  const searchParams = useSearchParams();
  const [selectedProject, setSelectedProject] = useState<string>("loading");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const projectParam = searchParams.get('project');
    if (projectParam) {
      const projectKey = Object.keys(projectDetails).find(key => 
        projectDetails[key as keyof typeof projectDetails].title.toLowerCase() === projectParam.toLowerCase() ||
        key.toLowerCase() === projectParam.toLowerCase()
      );
      if (projectKey) setSelectedProject(projectKey);
    }
  }, [searchParams]);

  const project = projectDetails[selectedProject as keyof typeof projectDetails];

  if (!project || selectedProject === "loading") return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p className="text-xl text-cyan-300 font-semibold">Memproses...</p>
      </div>
    </div>
  );

  return (
    <>
      <CustomCursor />
      <section className="relative min-h-screen flex flex-col items-center px-4 py-12 bg-slate-950 text-white">
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="inline-flex glass-card p-3 rounded-full text-cyan-400 hover:text-cyan-300 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="w-full max-w-[80vw] mt-10 z-40">
        <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-12 shadow-2xl">
          <header className="mb-8">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-gradient-accent text-[8px] lg:text-sm font-medium uppercase tracking-widest">
                <span>{project.category}</span>
              </div>
              <h1 className={`text-2xl lg:text-4xl font-bold text-gradient-primary leading-tight ${playfair.className}`}>{project.title}</h1>
            </div>
          </header>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-8 group bg-black/20">
            <Image src={project.images[currentImageIndex]} alt={project.title} fill className="object-cover transition-opacity duration-500" priority />
            <button onClick={() => setCurrentImageIndex(prev => (prev === 0 ? project.images.length - 1 : prev - 1))} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <FaChevronLeft />
            </button>
            <button onClick={() => setCurrentImageIndex(prev => (prev === project.images.length - 1 ? 0 : prev + 1))} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <FaChevronRight />
            </button>
          </div>

          <div className="pt-2 flex gap-3 flex-wrap mb-12">
            <a href={project.demo} target="_blank" rel="noreferrer" className="px-5 py-2 hover:scale-105 rounded-t-2xl rounded-r-2xl bg-gradient-primary transition-colors font-semibold shadow-lg shadow-cyan-500/20 flex items-center">
              Demo
            </a>
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-semibold backdrop-blur flex items-center gap-2">
                <FaGithub />
              </a>
            )}
            {project.video && (
              <a href={project.video} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-semibold backdrop-blur flex items-center gap-2">
                <FaPlay />
              </a>
            )}
          </div>

          <div className="space-y-8">
            <section>
                <h2 className={`text-lg lg:text-2xl font-bold mb-4 text-gradient-accent tracking-wider ${playfair.className}`}>Overview</h2>
                <div className="py-4 pt-0">
                    <p className="text-white leading-loose text-sm lg:text-lg">{project.explanation}</p>
                    <div className="relative w-full lg:w-[60%] h-50 lg:h-95 rounded-xl overflow-hidden mx-auto">
                        <Image src={project.images[0]} alt={`${project.title} overview`} fill className="object-cover" />
                    </div>
                </div>
                {project.images[1] && (
                <div className="py-4">
                    <p className="text-white leading-loose text-sm lg:text-lg">{project.explanation1}</p>
                    <div className="relative w-full lg:w-[60%] h-50 lg:h-95 rounded-xl overflow-hidden mx-auto">
                        <Image src={project.images[1]} alt={`${project.title} overview`} fill className="object-cover" />
                    </div>
                </div>
                )}
                {project.images[2] && (
                <div className="py-4">
                    <p className="text-white leading-loose text-sm lg:text-lg">{project.explanation2}</p>
                    <div className="relative w-full lg:w-[60%] h-50 lg:h-95 rounded-xl overflow-hidden mx-auto">
                        <Image src={project.images[2]} alt={`${project.title} overview`} fill className="object-cover" />
                    </div>
                </div>
                )}
                {project.images[3] && project.explanation3 && (
                <div className="py-4">
                    <p className="text-white leading-loose text-sm lg:text-lg">{project.explanation3}</p>
                    <div className="relative w-full lg:w-[60%] h-50 lg:h-95 rounded-xl overflow-hidden mx-auto">
                        <Image src={project.images[3]} alt={`${project.title} analytics`} fill className="object-cover" />
                    </div>
                </div>
                )}
            </section>

            <section>
              <div>
                <h2 className={`text-lg lg:text-2xl font-bold mb-4 text-gradient-accent tracking-wider ${playfair.className}`}>Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {(project.frameworks as string[]).map((tech: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-white/10 border border-white/10 rounded-b-2xl text-sm text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>

    </section>
    </>
  );
};

const Explain = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading project details...</div>}>
      <ProjectContent />
    </Suspense>
  );
};

export default Explain;