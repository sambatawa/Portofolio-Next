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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something
            <span className="text-gradient-primary"> Amazing Together</span>
          </h2>
          <p className="text-color max-w-lg mx-auto">Ready to turn your ideas into reality? Let&apos;s create exceptional digital experiences.</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <div className="space-y-5">
            <div className="rounded-tr-full p-8 hover:neon-glow transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-accent rounded-full"></div>
                <h3 className="text-xl font-bold text-gradient-primary">Contact Information</h3>
              </div>
              <p className="text-color text-md leading-relaxed">I&apos;m always excited to work on new projects.</p>
              <p className="mb-6 text-color text-md leading-relaxed">Let&apos;s discuss how we can bring your vision to life.</p>
              <div className="space-y-6 ml-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-primary rounded-b-full flex items-center justify-center transition-all duration-300 shadow-lg">
                    <FaMapMarkerAlt className="text-white text-md"/>
                  </div>
                  <div className="rounded-r-full px-5 py-1">
                    <span className="font-semibold text-white text-lg block">Location</span>
                    <span className="text-color">Bogor, Indonesia</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg">
                    <FaEnvelope className="text-white text-lg"/>
                  </div>
                  <div className="rounded-r-full px-5 py-1">
                    <span className="font-semibold text-white text-lg block">Email</span>
                    <span className="text-color">inasst@sambatawa.tech</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
                    <FaEnvelope className="text-white text-lg"/>
                  </div>
                  <div className="rounded-r-full px-5 py-1">
                    <span className="font-semibold text-white text-lg block">Email 2</span>
                    <span className="text-color">inassaqia@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-b-xxl px-8 py-2 hover:neon-glow-accent transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-accent rounded-full"></div>
                <h3 className="text-xl font-bold text-gradient-primary">Follow Me</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <a href="https://github.com/sambatawa" className="group glass-button rounded-bl-4xl p-3 text-center transition-all duration-300 hover:scale-105 hover:neon-glow" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl text-color group-hover:text-white mx-auto mb-1 transition-colors"/>
                  <span className="text-sm text-color group-hover:text-white font-medium">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/inas-samara-taqia" className="group glass-button p-3 text-center transition-all duration-300 hover:scale-105 hover:neon-glow-accent" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-2xl text-color group-hover:text-white mx-auto mb-1 transition-colors"/>
                  <span className="text-sm text-color group-hover:text-white font-medium">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/inassamarr" className="group glass-button rounded-br-4xl p-3 text-center transition-all duration-300 hover:scale-105 hover:neon-glow" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-color group-hover:text-white mx-auto mb-1 transition-colors"/>
                  <span className="text-sm text-color group-hover:text-white font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-b-4xl p-8 hover:neon-glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
              <h3 className="text-xl font-bold text-gradient-accent">Or Send Message:</h3>
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
                <select className="w-full p-4 glass-button rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15 hover:neon-glow-accent cursor-pointer" name="subject" value={form.subject} onChange={Change} required>
                  <option value="" className="bg-gray-800 hidden">Project type</option>
                  <option value="Collab" className="bg-gray-700 text-white hover:bg-gray-600 hover:neon-glow-accent">Collaboration</option>
                  <option value="Work" className="bg-gray-700 text-white hover:bg-gray-600 hover:neon-glow-accent">Work Opportunity</option>
                  <option value="Personal" className="bg-gray-700 text-white hover:bg-gray-600 hover:neon-glow-accent">Personal Project</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-color uppercase tracking-wide">Project Details</label>
                <textarea className="w-full p-4 glass-button rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 h-32 resize-none hover:bg-white/15" name="message" placeholder="Tell me about your project, timeline, and goals Or your story..." value={form.message} onChange={Change} required />
              </div>
              <div className="pt-2">
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} onChange={(token: string | null) => setCaptchaToken(token)}/>
              </div>
              <button className="w-full bg-gradient-primary hover:bg-gradient-accent text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:neon-glow active:scale-95 relative overflow-hidden group" type="submit">
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