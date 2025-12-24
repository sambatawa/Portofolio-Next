'use client'
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const FullCurriculumVitae: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 font-serif leading-tight">
      <div className="max-w-4xl mx-auto border border-gray-100 shadow-sm px-8 md:px-12">
        <div className="mb-6">
          <a href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <FaArrowLeft className="text-lg" />
            <span className="text-sm font-medium">Kembali</span>
          </a>
        </div>  
        <header className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="w-30 h-40 mx-auto md:mx-0 bg-gray-200 rounded-lg overflow-hidden shadow-sm">
                <img src="/fotocv.jpg" alt="Profile Photo" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-2xl font-bold tracking-widest uppercase mb-2">INAS SAMARA TAQIA</h1>
              <div className="text-[10px] md:text-xs flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1 text-gray-800 mb-6">
                <span>Bogor, Indonesia</span>
                <span>|</span>
                <span>082211511345</span>
                <span>|</span>
                <a href="mailto:inassamara@email.com" className="underline">inassaqia@email.com</a>
                <span>|</span>
                <a href="#" className="underline">linkedin.com/in/inas-samara-taqia</a>
                <span>|</span>
                <span>@inassamara</span>
                <span>|</span>
                <a href="#" className="underline">github.com/sambatawa/</a>
              </div>
              <div>
                <p className="text-[11px] md:text-xs text-justify leading-normal">
                  Mahasiswa aktif Teknologi Rekayasa Komputer di IPB University dengan pengalaman dalam pengembangan <span className="italic">website</span>, integrasi IoT, dan implementasi <span className="italic">machine learning</span> berbasis web, terbiasa bekerja dalam tim proyek, menyusun dokumentasi teknis, dan mengelola platform digital. Memiliki minat kuat pada AI, deep learning, dan pengembangan sistem berbasis cloud.
                </p>
              </div>
            </div>
          </div>
        </header>
        <section className="mb-6">
          <h2 className="text-sm font-bold border-b border-black mb-2 uppercase tracking-tighter">PENDIDIKAN</h2>
          <div className="mb-2">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>IPB University</span>
              <span>Agustus 2022—Sekarang</span>
            </div>
            <p className="text-[11px] md:text-xs">Teknologi Rekayasa Komputer, Sekolah Vokasi | GPA 3.34 dari 4.00</p>
          </div>
          <div>
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>SMAN 6 Kabupaten Tangerang</span>
              <span>Juli 2019—Mei 2022</span>
            </div>
            <p className="text-[11px] md:text-xs">IPA</p>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-sm font-bold border-b border-black mb-2 uppercase tracking-tighter">PENGALAMAN PROYEK</h2>
          <div className="mb-4">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>Nutrimix</span>
              <span>Oktober 2025—Desember 2025</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold italic mb-1">Proyek Mata Kuliah Sistem Tertanam</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Membangun platform website Nutrimix sebagai pendukung alat pembuat pelet ikan berbasis embedded system.</li>
              <li>Merancang arsitektur model yang akan diintegrasikan menggunakan Next.js dengan database Firebase untuk dapat menampilkan data nutrisi, status perangkat, dan data pemrosesan secara <span className="italic text-black font-bold">real time</span>.</li>
              <li>Membangun dan mengembangkan fitur <span className="italic font-bold">marketplace</span> berbasis pembayaran QRIS menggunakan midtrans.</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>Terra</span>
              <span>September 2025—Desember 2025</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold italic mb-1">Proyek Gabungan 4 Mata Kuliah</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Membangun platform pemantauan kesehatan terung ungu melalui parameter Daun dengan integrasi <span className="italic font-bold">machine learning</span> dan <span className="italic font-bold">website</span> yang dapat dilihat melalui terra.cervosys.app.</li>
              <li>Menerapkan model YOLOv8 dan ONNX Runtime Web (WASM) sehingga inferensi dapat berjalan langsung di browser.</li>
              <li>Merancang arsitektur model yang akan diintegrasikan menggunakan Laravel, FastAPI dengan database Firebase <span className="italic font-bold">realtime database</span> dan MySQL.</li>
              <li>Mengelola dokumentasi teknis mingguan (SKPL, DUPL, DPPL) dan merancang alur integrasi sistem, metode, dan fitur-fitur yang digunakan.</li>
              <li>Membuat dan mengembangkan desain 3D robot terra menggunakan Fusion 360, membuat gambar teknik, dan merancang skema rangkaian serta analisis kebutuhan komponen yang diperlukan dalam sistem integrasi IoT.</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>HydroCabin</span>
              <span>Maret 2025—Mei 2025</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold italic mb-1">Proyek Mata Kuliah Pemrograman Web dan Aplikasi Mobile</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Membuat sistem IoT dengan microcontroller ESP32 dan BME 280 yang menghasilkan 4 indikator notifikasi berupa LED merah, hijau, kuning, dan putih, serta buzzer sebagai penanda dengar jarak jauh.</li>
              <li>Menampilkan monitoring dalam bentuk website dengan tampilan interface laptop dan mobile menggunakan Laravel secara realtime database dengan Firebase. Data yang masuk akan terupdate otomatis setiap 5 detik sekali.</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>Tekom Machine Coffee</span>
              <span>September 2024—Desember 2024</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold italic mb-1">Proyek Mata Kuliah Perancangan Sistem Digital</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Membangun konsep rancangan desain logika dalam meracik 8 varian rasa kopi melalui diagram state.</li>
              <li>Membuat program WinCUPL yang akan diaplikasikan ke dalam IC GAL 16V8 sebagai sistem utama membentuk racikan kopi.</li>
            </ul>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-sm font-bold border-b border-black mb-2 uppercase tracking-tighter">PENGALAMAN ORGANISASI</h2>
          
          <div className="mb-4">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>MPKMB 61 SV IPB</span>
              <span>Mei 2024—Agustus 2024</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Staff Acara</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Membantu merancang konsep MPKMB 61 SV IPB yang terdiri dari 3 tahapan Pre-MPKMB, Hari-H MPKMB, dan Pra-MPKMB.</li>
              <li>Mengelola perencanaan, perancangan, dan persiapan dari perlombaan dan penugasan yang diberikan kepada maba SV IPB.</li>
              <li>Membuat buku panduan penugasan-perlombaan, video panduan pengisian penugasan, dan mengelola data peserta lomba.</li>
              <li>Narahubung pembawa baki dan <span className="italic">merchandise</span> selama Hari-H berlangsung.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>IT Knowledge 2024</span>
              <span>April 2024—Juli 2024</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Staff Acara</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Merancang dan menyusun timeline perlombaan dan rundown kegiatan selama hari H.</li>
              <li>Menyiapkan dokumen kebutuhan 2 narasumber pada pelatihan dan workshop UI/UX.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>PENDIKAR IPB</span>
              <span>Maret 2024—Juni 2024</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Staff Acara</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Merancang konsep acara perlombaan dengan mendiskusikan konsep tema bersama tim desain dan menyiapkan teknis keperluan acara daring.</li>
              <li>Narahubung bagian hiburan untuk pembuka-penutup dan menjadi operator zoom selama acara berlangsung.</li>
            </ul>
          </div>
        </section>

        {/* SKILL (Gambar 2) */}
        <section>
          <h2 className="text-sm font-bold border-b border-black mb-2 uppercase tracking-tighter">SKILL</h2>
          <div className="text-[11px] md:text-xs space-y-1">
            <p><span className="font-bold uppercase tracking-tighter">Soft Skills:</span> Manajemen waktu, kerja tim, riset dan analisis, dan Berorientasi pada detail.</p>
            <p><span className="font-bold uppercase tracking-tighter">Hard Skills:</span> IoT, manajemen proyek dan pengembangan.</p>
            <p><span className="font-bold uppercase tracking-tighter">Tools:</span> Next Js, Laravel, Fusion 360, Proteus, Python, MySQL, Firebase, Microsoft tools.</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FullCurriculumVitae;