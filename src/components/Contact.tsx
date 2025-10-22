"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const Change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const Submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValid.test(form.email)) {
        alert("Format email tidak valid!");
        return;
      }
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.success) {
        alert("Pesan berhasil dikirim!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(`Gagal mengirim pesan: ${data.message}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Coba lagi dah");
    }
  };

  return (
    <div className={`${poppins.className} py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-35">
          <div className="inline-block">
            <span className="text-sm font-semibold text-gradient-accent uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-5xl grid grid-cols-1 md:text-6xl font-bold text-white mt-4 mb-6 leading-tight pb-2">
            Let&apos;s Build Something
            <span className="text-gradient-primary">Amazing Together</span>
          </h2>
          <p className="text-xl text-color max-w-3xl mx-auto leading-relaxed"> Ready to turn your ideas into reality? I&apos;m here to help you create exceptional digital experiences.</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8 hover:neon-glow transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-accent rounded-full"></div>
                <h3 className="text-2xl font-bold text-gradient-primary">Contact Information</h3>
              </div>
              <p className="text-color text-lg mb-8 leading-relaxed">I&apos;m always excited to work on new projects. Let&apos;s discuss how we can bring your vision to life.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:neon-glow">
                    <FaMapMarkerAlt className="text-white text-lg"/>
                  </div>
                  <div>
                    <span className="font-semibold text-white text-lg block">Location</span>
                    <span className="text-color">Bogor, Indonesia</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:neon-glow-accent">
                    <FaEnvelope className="text-white text-lg"/>
                  </div>
                  <div>
                    <span className="font-semibold text-white text-lg block">Email</span>
                    <span className="text-color">inassamarataqia@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:neon-glow">
                    <FaPhoneAlt className="text-white text-lg"/>
                  </div>
                  <div>
                    <span className="font-semibold text-white text-lg block">Phone</span>
                    <span className="text-color">Available on request</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-8 hover:neon-glow-accent transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-secondary rounded-full"></div>
                <h3 className="text-2xl font-bold text-gradient-accent">Follow Me</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <a href="https://github.com/sambatawa" className="group glass-button rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:neon-glow" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-3xl text-color group-hover:text-white mx-auto mb-3 transition-colors"/>
                  <span className="text-sm text-color group-hover:text-white font-medium">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/inas-samara-taqia" className="group glass-button rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:neon-glow-accent" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-3xl text-color group-hover:text-white mx-auto mb-3 transition-colors"/>
                  <span className="text-sm text-color group-hover:text-white font-medium">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/sambatawa_/" className="group glass-button rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:neon-glow" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl text-color group-hover:text-white mx-auto mb-3 transition-colors"/>
                  <span className="text-sm text-color group-hover:text-white font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-3xl p-8 hover:neon-glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
              <h3 className="text-2xl font-bold text-gradient-accent">Send Message</h3>
            </div>
            <form onSubmit={Submit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-color uppercase tracking-wide">Full Name</label>
                  <input className="w-full p-4 glass-button rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15" placeholder="Your Name" type="text" name="name" value={form.name} onChange={Change} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-color uppercase tracking-wide">Email Address</label>
                  <input className="w-full p-4 glass-button rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15" placeholder="your@email.com" type="email" name="email" value={form.email} onChange={Change} required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-color uppercase tracking-wide">Project Type</label>
                <select className="w-full p-4 glass-button rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15" name="subject" value={form.subject} onChange={Change} required>
                  <option value="" className="bg-gray-800 hidden">Select project type</option>
                  <option value="Collab" className="bg-gray-800">Collaboration</option>
                  <option value="Work" className="bg-gray-800">Work Opportunity</option>
                  <option value="Personal" className="bg-gray-800">Personal Project</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-color uppercase tracking-wide">Project Details</label>
                <textarea className="w-full p-4 glass-button rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 h-32 resize-none hover:bg-white/15" name="message" placeholder="Tell me about your project, timeline, and goals Or your story..." value={form.message} onChange={Change} required />
              </div>
              <button className="w-full bg-gradient-primary hover:bg-gradient-accent text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:neon-glow active:scale-95 relative overflow-hidden group">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact