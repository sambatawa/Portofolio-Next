'use client'
import React from "react";
import {FaAward } from "react-icons/fa";

interface BaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

const OrgCert: React.FC = () => {
  const certificates: BaseItem[] = [
    {
      id: 'ccna',
      title: 'CCNA: Introduction to Networks',
      subtitle: 'Cisco Certified Network Associate',
      description: 'Learning computer networking fundamentals including OSI model, TCP/IP, addressing, and protocols.'
    },
    {
      id: 'network-security',
      title: 'Network Security',
      subtitle: 'Cisco Networking Academy',
      description: 'Learning network security concepts, threats, vulnerabilities, and mitigation techniques.'
    }
  ];

  const organizations: BaseItem[] = [
    {
      id: 'mpkmb',
      title: 'MPKMB 61 SV IPB',
      subtitle: 'Event Staff | May 2024 - August 2024',
      description: 'Assisted in designing MPKMB 61 SV IPB concept, managing competition and task planning, creating guidebooks, and serving as liaison for bearers and merchandise.'
    },
    {
      id: 'it-knowledge',
      title: 'IT Knowledge 2024',
      subtitle: 'Event Staff | April 2024 - July 2024',
      description: 'Designed and arranged competition timelines, created guidebooks, and prepared speaker documentation for UI/UX training.'
    },
    {
      id: 'pendikar',
      title: 'PENDIKAR IPB',
      subtitle: 'Event Staff | March 2024 - June 2024',
      description: 'Designed competition concepts, prepared technical requirements for online events, served as entertainment liaison, and operated zoom during events.'
    }
  ];

  return (
    <div className="px-0 mt-20 lg:mt-0 relative">
      <div className="text-center mb-10">
        <span className="text-xl xl:text-3xl font-bold text-white">
          Experience <span className="text-gradient-accent"> Certificate</span>
        </span>
        <p className="text-sm xl:text-lg text-color max-w-2xl mx-auto mt-4">
          My activities and certifications in courses
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="glass-card rounded-3xl px-5 py-8 hover:neon-glow transition-all duration-300">
          <div className="flex flex-col items-start gap-1 mb-4">
            <h4 className="text-lg lg:text-xl font-bold text-gradient-primary">Activities</h4>
            <div className="h-0.5 w-12 bg-gradient-accent rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {organizations.map((org) => (
              <div key={org.id} className="group">
                <div className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-2xl bg-gradient-dark/50 hover:bg-gradient-dark/70 transition-all duration-300">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    <div className="bg-white w-5 h-5 rounded-full flex items-center justify-center"></div>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-white text-sm lg:text-lg mb-1">{org.title}</h5>
                    <p className="text-color text-xs lg:text-sm mb-2">{org.subtitle}</p>
                    <p className="text-white/70 text-xs lg:text-sm leading-relaxed">{org.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="glass-card rounded-3xl px-5 py-8 hover:neon-glow transition-all duration-300">
          <div className="flex flex-col items-start gap-2 mb-4">
            <h4 className="text-lg lg:text-xl font-bold text-gradient-primary">Certificates</h4>
            <div className="h-0.5 w-8 bg-gradient-accent rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {certificates.map((cert) => (
              <div key={cert.id} className="group">
                <div className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-2xl bg-gradient-dark/50 hover:bg-gradient-dark/70 transition-all duration-300">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-accent rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    <FaAward className="text-white text-sm lg:text-lg"/>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-white text-sm lg:text-lg mb-1">{cert.title}</h5>
                    <p className="text-color text-xs lg:text-sm mb-2">{cert.subtitle}</p>
                    <p className="text-white/70 text-xs lg:text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrgCert;