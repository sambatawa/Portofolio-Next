"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const Change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const Submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!captchaToken) {
        alert("Harap verifikasi reCAPTCHA terlebih dahulu!");
        return;
      }
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValid.test(form.email)) {
        alert("Format email tidak valid!");
        return;
      }
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          token: captchaToken
        })
      })
      const data = await response.json();
      if (data.success) {
        alert("Pesan berhasil dikirim!")
        setForm({ name: "", email: "", subject: "", message: "" })
        setCaptchaToken(null)
      } else {
        alert(`Gagal mengirim pesan: ${data.message}`)
      }
    } catch (err) {
      console.error("Error:", err)
      alert("Coba lagi dah")
    } 
  }

  return (
    <div>
      <div className="py-10">
        <div className="text-center mb-12 mx-auto">
          <h2 className="text-xl xl:text-3xl font-bold text-white mb-4">
            Let&apos;s Build Something
            <span className="text-gradient-primary"> Amazing Together</span>
          </h2>
          <p className="text-color text-sm lg:text-lg ">Ready to turn your ideas into reality? Let&apos;s create exceptional digital experiences.</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <div className="space-y-5">
            <div className="rounded-tr-full p-0 lg:p-8 hover:neon-glow transition-all duration-300">
              <div className="flex flex-col items-start gap-1 mb-6">
                <h3 className="text-lg lg:text-xl font-bold text-gradient-primary">Contact Information</h3>
                <div className="h-0.5 w-30 bg-gradient-accent rounded-full"></div>
              </div>
              <p className="text-color mb-6 text-sm lg:text-md leading-relaxed">I&apos;m always excited to work on new projects. Let&apos;s discuss how we can bring your vision to life.</p>
              <div className="space-y-6 ml-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-primary rounded-b-full flex items-center justify-center transition-all duration-300 shadow-lg">
                    <FaMapMarkerAlt className="text-white text-md"/>
                  </div>
                  <div className="rounded-r-full md:px-5 py-1">
                    <span className="font-semibold text-white text-sm lg:text-lg block">Location</span>
                    <span className="text-color text-sm">Bogor, Indonesia</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg">
                    <FaEnvelope className="text-white text-lg"/>
                  </div>
                  <div className="rounded-r-full md:px-5 py-1">
                    <span className="font-semibold text-white text-sm lg:text-lg block">Email</span>
                    <span className="text-color text-sm">inasst@sambatawa.tech</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
                    <FaEnvelope className="text-white text-lg"/>
                  </div>
                  <div className="rounded-r-full md:px-5 py-1">
                    <span className="font-semibold text-white text-sm lg:text-lg block">Email 2</span>
                    <span className="text-color text-sm">inassaqia@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-tr-full p-0 lg:p-8 hover:neon-glow transition-all duration-300">
              <div className="flex flex-col items-start gap-1 mb-6">
                <h3 className="text-lg lg:text-xl font-bold text-gradient-primary">Follow Me</h3>
                <div className="h-0.5 w-10 bg-gradient-accent rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <a href="https://github.com/sambatawa" className="group glass-button rounded-bl-4xl p-3 text-center transition-all duration-300 hover:scale-105 hover:neon-glow" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl lg:text-2xl text-color group-hover:text-white mx-auto mb-1 transition-colors"/>
                  <span className="text-[10px] lg:text-md text-color group-hover:text-white font-medium">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/inas-samara-taqia" className="group glass-button p-3 text-center transition-all duration-300 hover:scale-105 hover:neon-glow-accent" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-xl lg:text-2xl text-color group-hover:text-white mx-auto mb-1 transition-colors"/>
                  <span className="text-[10px] lg:text-md text-color group-hover:text-white font-medium">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/inassamarr" className="group glass-button rounded-br-4xl p-3 text-center transition-all duration-300 hover:scale-105 hover:neon-glow" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-xl lg:text-2xl text-color group-hover:text-white mx-auto mb-1 transition-colors"/>
                  <span className="text-[10px] lg:text-md text-color group-hover:text-white font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-b-4xl p-4 lg:p-8 hover:neon-glow transition-all duration-300">
            <div className="flex items-start flex-col gap-1 mb-6">
              <h3 className="text-lg lg:text-xl font-bold text-gradient-accent">Or Send Message:</h3>
              <div className="h-0.5 w-20 bg-gradient-accent rounded-full"></div>

            </div>
            <form onSubmit={Submit} className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] lg:text-sm font-semibold text-color uppercase tracking-wide">Full Name</label>
                  <input className="w-full p-3 lg:p-4 glass-button rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm lg:text-base" placeholder="Your Name" type="text" name="name" value={form.name} onChange={Change} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] lg:text-sm font-semibold text-color uppercase tracking-wide">Email Address</label>
                  <input className="w-full p-3 lg:p-4 glass-button rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm lg:text-base" placeholder="your@email.com" type="email" name="email" value={form.email} onChange={Change} required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] lg:text-sm font-semibold text-color uppercase tracking-wide">Project Type</label>
                <select className="w-full p-3 lg:p-4 glass-button rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15 hover:neon-glow-accent cursor-pointer text-sm lg:text-base" name="subject" value={form.subject} onChange={Change} required>
                  <option value="" className="bg-gray-800 hidden">Project type</option>
                  <option value="Collab" className="bg-gray-700 text-white hover:bg-gray-600 hover:neon-glow-accent">Collaboration</option>
                  <option value="Work" className="bg-gray-700 text-white hover:bg-gray-600 hover:neon-glow-accent">Work Opportunity</option>
                  <option value="Personal" className="bg-gray-700 text-white hover:bg-gray-600 hover:neon-glow-accent">Personal Project</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] lg:text-sm font-semibold text-color uppercase tracking-wide">Project Details</label>
                <textarea className="w-full p-3 lg:p-4 glass-button rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 h-24 lg:h-32 resize-none hover:bg-white/15 text-sm lg:text-base" name="message" placeholder="Tell me about your project, timeline, and goals Or your story..." value={form.message} onChange={Change} required />
              </div>
              <div className="pt-2">
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} onChange={(token: string | null) => setCaptchaToken(token)}/>
              </div>
              <button className="w-full bg-gradient-primary hover:bg-gradient-accent text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl transition-all duration-300 hover:neon-glow active:scale-95 relative overflow-hidden group text-sm lg:text-base" type="submit">
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