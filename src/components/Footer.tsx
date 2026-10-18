import React from 'react';
import { Activity, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-base">
                <Activity className="w-4 h-4 text-sky-100" />
              </div>
              <span className="font-bold text-lg text-white font-['Outfit']">
                Ekskresi<span className="text-sky-400">Pedia</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Media edukasi materi Sistem Ekskresi Manusia Ilmu Pengetahuan Alam (IPA) SMP Kelas 8. Membahas secara komprehensif organ Kulit, Ginjal, Paru-paru, dan Hati beserta bagian organ, fungsinya, mekanisme ekskresi, zat sisa, dan kemungkinan penyakitnya.
            </p>
          </div>

          {/* Materi 4 Organ */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Materi 4 Organ
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#organ-explorer" className="hover:text-white transition-colors">
                  Ginjal : Urine
                </a>
              </li>
              <li>
                <a href="#organ-explorer" className="hover:text-white transition-colors">
                  Kulit : Keringat (urea dan air)
                </a>
              </li>
              <li>
                <a href="#organ-explorer" className="hover:text-white transition-colors">
                  Paru-Paru : Karbon dioksida & uap air
                </a>
              </li>
              <li>
                <a href="#organ-explorer" className="hover:text-white transition-colors">
                  Hati : Urea
                </a>
              </li>
            </ul>
          </div>

          {/* Fitur Belajar */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#organ-explorer" className="hover:text-white transition-colors">
                  Eksplorasi Bagian & Mekanisme Organ
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  Tabel Komparasi 4 Organ
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-white transition-colors">
                  Kuis Evaluasi 8 Soal
                </a>
              </li>
              <li>
                <a href="#glossary" className="hover:text-white transition-colors">
                  Glosarium Kosakata Biologi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} EkskresiPedia IPA SMP Kelas 8. Standar Kurikulum Merdeka & Kurikulum 2013.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
