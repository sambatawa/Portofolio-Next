'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const FullCurriculumVitae: React.FC = () => {
  useEffect(() => {
    const disablePrint = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        e.stopPropagation();
        alert('Maaf silahkan hubungi contact saya jika ingin CV saya ya');
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
      alert('Maaf silahkan hubungi contact saya jika ingin CV saya ya');
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

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 font-serif leading-tight">
      <div className="max-w-4xl mx-auto border border-gray-100 shadow-sm px-8 md:px-12">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <FaArrowLeft className="text-lg" />
            <span className="text-sm font-medium">Kembali</span>
          </Link>
        </div>  
        <header className="mb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="w-35 h-50 mx-auto md:mx-0 bg-gray-200 rounded-lg overflow-hidden shadow-sm relative">
                <Image src="/fotocv.jpg" alt="Profile Photo" fill className="object-cover" />
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-2xl font-bold tracking-wide uppercase mb-2">INAS SAMARA TAQIA</h1>
              <div className="text-[10px] md:text-xs flex flex-wrap justify-center md:justify-start gap-x-1 gap-y-1 text-gray-800 mb-6">
                <span>Bogor, Indonesia</span>
                <span>|</span>
                <span>inassaqia@gmail.com</span>
                <span>|</span>
                <a href="https://www.linkedin.com/in/inas-samara-taqia">linkedin.com/in/inas-samara-taqia</a>
                <span>|</span>
                <span>@inassamarr</span>
                <span>|</span>
                <a href="https://www.sambatawa.tech">sambatawa.tech</a>
              </div>
              <div>
                <p className="text-[11px] md:text-xs text-justify leading-normal">
                  Mahasiswa aktif  Teknologi Rekayasa Komputer yang memiliki minat penuh di bidang data, machine learning, AI dan automation digital. Memiliki pengalaman dalam pengoperasian IoT dan perangkat lunak website dalam beberapa proyek tugas kuliah. Merupakan pribadi yang analitis berdasarkan data, komunikatif secara internal  dan mampu bekerja secara kolaboratif dalam tim maupun kelompok untuk mencapai target proyek.
                </p>
              </div>
            </div>
          </div>
        </header>
        <section className="mb-5">
          <h2 className="text-sm font-bold border-b border-black mb-2 uppercase tracking-tighter">PENDIDIKAN</h2>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>IPB University</span>
              <span>Agustus 2022—Sekarang</span>
            </div>
            <p className="text-[11px] md:text-xs">Teknologi Rekayasa Komputer, Sekolah Vokasi</p>
          </div>
          <div>
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>SMAN 6 Kabupaten Tangerang</span>
              <span>Juli 2019—Mei 2022</span>
            </div>
            <p className="text-[11px] md:text-xs">IPA</p>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="text-sm font-bold border-b border-black mb-2 uppercase tracking-tighter">PENGALAMAN PROYEK</h2>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>Nutrimix</span>
              <span>Oktober 2025—Desember 2025</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Proyek Mata Kuliah Sistem Tertanam</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Berkontribusi dalam pengembangan platform website untuk alat pellet ikan dalam tugas mata kuliah dengan 6 menu yang mendukung sistem penjualan, pemantauan, dan pemasukan input 1 dari 6 menu yang ada, dengan arsitektur model yang menggunakan Next Js dengan Realtime Database Firebase yang dapat dilihat pada link nutrimix.sambatawa.tech.</li>
              <li>Mengelola database dengan menggunakan Firebase Realtime Database guna menyimpan riwayat data input yang masuk melalui web atau manual alat yang data akan ditampilkan pada halaman dashboard pemantauan realtime.</li>
              <li>Mengelola sistem penjualan dengan keranjang bagi pemilik akun yang diizinkan dengan berbasis sistem pembayaran menggunakan sandbox midtrans untuk saat ini.</li>
            </ul>
          </div>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>Terra</span>
              <span>September 2025—Desember 2025</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Proyek Gabungan 4 Mata Kuliah</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Berkontribusi dalam pengembangan model end-to-end computer vision pipeline untuk deteksi penyakit tanaman terung ungu berbasis YOLOv8 dengan menggunakan 1.390 data gambar yang di label menggunakan Roboflow dan melalui proses dataset preparation, model training, evaluation, dan deployment-ready optimization dengan menghasilkan akurasi 0.724.</li>
              <li>Mengimplementasikan client-side inference dengan ONNX runtime web (WASM) sehingga sistem AI bisa berjalan tanpa server.</li>
              <li>Berkontribusi juga dalam pengembangan arsitektur backend platform website pemantauan berbasis REST API menggunakan Laravel dengan fokus pada scalability dan maintainability yang dapat dilihat melalui link terra.cercosys.app.</li>
              <li>Mengintegrasikan FastAPI sebagai AI inference service untuk manajemen request model, validasi data, dan komunikasi antar layanan (service-to-service communication).</li>
              <li>Mengelola database design dan data flow menggunakan MySQL untuk data terstruktur dan Firebase Realtime Database untuk kebutuhan real-time data streaming, dengan mengimplementasikan authentication, authorization, dan role-based access control (RBAC)</li>
              <li>Berkontribusi juga dalam pembuatan dokumentasi teknis rancangan konsep project yang mencakup 3 dokumen (SKPL, DUPL dan DPPL) yang didalamnya berisi rancangan alur sistem, metode, dan fitur-fitur yang dikembangkan setiap minggu melalui penggambaran 4 diagram alur (activity diagram, class diagram, use case diagram, dan ERD).</li>
              <li>Berkontribusi juga dalam mendesain 3D robot menggunakan Fusion 360 sesuai beberapa referensi jurnal model 3D untuk area pertanian, mencakup 3D modelling, gambar teknik dan analisis kebutuhan secara mekanik dan elektronik.</li>
            </ul>
          </div>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>HydroCabin</span>
              <span>Maret 2025—Mei 2025</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Proyek Gabungan 2 Mata Kuliah</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Berkontribusi dalam pengembangan sistem pemantauan lingkungan berbasis IoT menggunakan mikrokontroler ESP32 dan sensor lingkungan (BME280) untuk pengambilan data suhu, kelembapan, dan tekanan.</li>
              <li>Merancang sistem pengelompokkan kondisi sesuai ambang batas dengan 4 level indikator notifikasi berupa LED (merah, kuning, hijau, putih) dan buzzer sebagai peringatan jarak jauh.</li>
              <li>Berkontribusi juga dalam pengembangan platform website menggunakan Laravel yang mencakup integrasi dengan IoT, dan pengelolaan alur data real-time menggunakan Firebase realtime database sebagai media penyimpanan dan sinkronisasi data secara real-time, dengan mekanisme pembaruan data otomatis setiap 5 detik dari perangkat IoT ke dashboard.</li>
              <li>Mengintegrasikan Bot Telegram sebagai real-time alert system, sehingga ketika data melewati nilai ambang batas notifikasi otomatis terkirim ke pengguna.</li>
            </ul>
          </div>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>Tekom Machine Coffee</span>
              <span>September 2024—Desember 2024</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Proyek Mata Kuliah Perancangan Sistem Digital</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Membangun konsep rancangan desain logika dalam meracik 8 varian rasa kopi melalui diagram state.</li>
              <li>Membuat program WinCUPL yang akan diaplikasikan ke dalam IC GAL 16V8 sebagai sistem utama membentuk racikan kopi.</li>
            </ul>
          </div>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>Maximalist</span>
              <span>Maret 2024—Juni 2024</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Proyek Mata Kuliah Rangkaian Logika dan Teknik Digital</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Berkontribusi dalam perancangan dan pengembangan rangkaian stopwatch digital berbasis rangkaian logika menggunakan IC NE555 sebagai clock generator dan IC 4026 sebagai decade counter untuk menampilkan waktu pada 7-segment display common cathode.</li>
              <li>Merancang counter bertingkat dengan mekanisme carry-out antar IC 4026 untuk perhitungan waktu satuan dan puluhan.</li>
              <li>Mengimplementasikan kontrol start, stop, dan reset menggunakan push button yang terintegrasi pada jalur clock dan reset.</li>
            </ul>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="text-sm font-bold border-b border-black mb-2 uppercase tracking-tighter">PENGALAMAN ORGANISASI</h2>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>MPKMB 61 SV IPB</span>
              <span>Mei 2024—Agustus 2024</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Staff Acara</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Berkontribusi dalam perencanaan, perancangan, dan persiapan perlombaan dan penugasan mahasiswa baru sekitar 2.700+, sesuai dengan ketentuan dan persetujuan SOC MPKMB 61 IPB.</li>
              <li>Menyusun buku panduan penugasan dan perlombaan sebagai acuan resmi bagi mahasiswa baru, dan memproduksi video panduan pengisian penugasan untuk meminimalkan kesalahan teknis.</li>
              <li>Bertindak sebagai narahubung pada penugasan Aksa Acitya dan perlombaan bagi mahasiswa baru, juri dan panitia internal guna memastikan komunikasi berjalan sesuai.</li>
              <li>Menyiapkan dan mengelola dokumen kebutuhan juri MoU, TOR, dan data spreadsheet peserta perlombaan untuk penilaian.</li> 
              <li>Mengkoordinasikan pembawa baki dan membantu divisi relasi dalam pemberian merchandise selama pelaksanaan Hari-H MPKMB.</li>
            </ul>
          </div>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>IT Knowledge 2024</span>
              <span>April 2024—Juli 2024</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Staff Acara</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Berkontribusi dalam pengelolaan administrasi acara, termasuk penyusunan Term of Reference (TOR), perancangan timeline perlombaan dan penyusunan rundown kegiatan.</li>
              <li>Membantu menyusun beberapa bagian buku panduan perlombaan sebagai panduan acara perlobaan bagi peserta selama kegiatan berlangsung.</li>
              <li>Menyiapkan dan mengelola dokumen kebutuhan narasumber mencakup surat kesediaan (MoU), dan kelengkapan administrasi untuk kegiatan pelatihan dan workshop UI/UX.</li>
            </ul>
          </div>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>PENDIKAR IPB</span>
              <span>Maret 2024—Juni 2024</span>
            </div>
            <p className="text-[11px] md:text-xs font-bold mb-1">Staff Acara</p>
            <ul className="list-disc list-outside ml-5 text-[10.5px] md:text-[11px] space-y-0.5">
              <li>Berkontribusi dalam perancangan konsep perlombaan dan mengoordinasikan tema acara bersama tim desain, dan menyusun kebutuhan teknis pelaksanaan acara.</li>
              <li>Menyiapkan kebutuhan teknis pelaksanaan lomba daring yang mencakup platform Zoom, perangkat pendukung dan jaringan untuk 5 kategori lomba selama 4 hari.</li>
              <li>Bertindak sebagai narahubung bagian hiburan untuk rangkaian penutupan acara, dan menjalankan peran sebagai operator Zoom selama acara berlangsung.</li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-sm font-bold border-b border-black mb-2 uppercase tracking-tighter">SERTIFIKASI</h2>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>Network Security</span>
              <span>Desember 2025</span>
            </div>
            <p className="text-[11px] md:text-xs mb-1">Cisco Networking Academy</p>
          </div>
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[11px] md:text-xs">
              <span>CCNAv7: Introduction to Networks</span>
              <span>Desember 2023</span>
            </div>
            <p className="text-[11px] md:text-xs mb-1">Cisco Networking Academy</p>
          </div>
        </section>
        <section>
          <h2 className="text-sm font-bold border-b border-black mb-2 uppercase tracking-tighter">SKILL</h2>
          <div className="text-[11px] md:text-xs space-y-1">
            <p><span className="font-bold tracking-tighter">Soft Skills:</span> Perencanaan proyek dan manajemen waktu, kolaborasi antar tim, problem solving dan analytical thinking, komunikasi teknis, administrasi dokumen, dan koordinasi.</p>
            <p><span className="font-bold tracking-tighter">Hard Skills:</span> Machine learning, computer vision, model training dan evaluation, REST API development, full-stack web development dasar, sistem IoT dan integrasi perangkat, real-time data processing, database design dan data flow management, 3D modeling dan engineering drawing, dan administrasi dokumen.</p>
            <p><span className="font-bold tracking-tighter">Tools:</span> Python, PHP (Laravel), JavaScript, Next JS, YOLOv8, FastAPI, Firebase Realtime Database, MySQL, Fusion 360, dan Figma.</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FullCurriculumVitae;