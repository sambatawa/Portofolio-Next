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
      const response = await fetch("/api", {
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
    <div className={`flex flex-col items-center justify-center gap-10 ${poppins.className}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 tracking-wide mt-28 "> Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[80vw] mx-auto px-10">
          <div className="space-y-3 p-2 flex flex-col gap-3 items-center">
            <h3 className="text-3xl font-semibold text-gray-100">Get in Touch</h3>
            <p className="text-lg"> Feel free to reach out through social media or send me a direct message using the form.</p>
            <div className="justify-start items-start w-full px-10 py-5">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="bg-[#8ed5dd] rounded-full p-2">
                    <FaMapMarkerAlt className="text-white" size={20}/>
                  </span>
                  <div>
                    <span className="font-semibold text-white/80">Address</span>
                    <div className="text-gray-400 text-sm">Bogor, Indonesia</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-[#8ed5dd] rounded-full p-2"><FaPhoneAlt className="text-white" size={20}/></span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white/80">Phone Number</span>
                    <div className="text-gray-400 text-sm">+628...</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-[#8ed5dd] rounded-full p-2"><FaEnvelope className="text-white" size={20}/></span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-white/80">E-Mail</span>
                    <div className="text-gray-400 text-sm">inassamarataqia@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-gradient-to-br from-[#0abcd42a] to-black/30 border-t-4 border-[#8ed5dd] p-4 rounded-lg">              
              <div className="grid grid-cols-3 gap-4 mt-4"> 
                <div className="flex flex-col items-center hover:text-white gap-1">
                  <FaGithub size={30} />
                  <a href="https://github.com/sambatawa" target="_blank" rel="noopener noreferrer" className="text-sm">
                    sambatawa
                  </a>
                </div>
                <div className="flex flex-col items-center hover:text-white gap-1">
                  <FaLinkedinIn size={30} />
                  <a href="https://www.linkedin.com/in/inas-samara-taqia" target="_blank" rel="noopener noreferrer" className="text-sm">Inas Samara Taqia</a>
                </div>
                <div className="flex flex-col items-center hover:text-white gap-1">
                  <FaInstagram size={30}/>
                  <a href="https://www.instagram.com/sambatawa_/" target="_blank" rel="noopener noreferrer" className="text-sm">@sambatawa_</a>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={Submit} className="space-y-6 p-5 py-10 bg-gradient-to-tr from-[#0abcd460] to-black/30 rounded-r-[100px] shadow-md"> 
              <p className="text-xl font-semibold">Or send me a message directly:</p>           
              <div className="space-y-3 p-2 flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="text-lg text-[#cae7eb] mb-1 mr-4">Name</span>
                  <input className="w-full p-2 rounded-lg bg-[#0abcd460] border-l-2 border-[#8ed5dd] focus:outline-none focus:ring-2 focus:ring-[#8ed5dd]" type="text" name="name" placeholder="Your Name" value={form.name} onChange={Change} required/>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg text-[#cae7eb] mb-1 mr-4">Email</span>
                  <input className="w-full p-2 rounded-lg bg-[#0abcd460] border-l-2 border-[#8ed5dd] focus:outline-none focus:ring-2 focus:ring-[#8ed5dd]" type="email" name="email" placeholder="example@email.com" value={form.email} onChange={Change} required/>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg text-[#cae7eb] mb-1 mr-4">Subject</span>
                  <select className="w-full p-2 rounded-lg bg-[#0abcd460] border-l-2 border-[#8ed5dd] focus:outline-none focus:ring-2 focus:ring-[#8ed5dd]" name="subject" value={form.subject} onChange={Change} required>
                    <option value="" className="hidden w-full">Select subject</option>
                    <option value="Collab" className="w-full">Collab</option>
                    <option value="Work" className="w-full">Work</option>
                    <option value="Personal" className="w-full">Personal</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg text-[#cae7eb] mb-1 mr-4">Message</span>
                  <textarea className="w-full p-2 rounded-lg bg-[#0abcd460] border-l-2 border-[#8ed5dd] focus:outline-none focus:ring-2 focus:ring-[#8ed5dd] h-32 resize-none text-start" name="message" placeholder="Your Message" value={form.message} onChange={Change} required/>
                </div>
                <div className="flex justify-end mt-3">
                  <button className="w-[10vw] flex justify-center bg-white font-semibold text-[#3ebcca] p-3 rounded-full hover:bg-[#3ebcca] hover:text-white active:scale-105 transition-colors duration-300">Send Message</button>
                </div>
              </div>
            </form>
          
        </div>
        <div className="w-screen h-[500px] bg-gray-300 flex items-center justify-center">
            
        </div>
    </div>
  )
}

export default Contact