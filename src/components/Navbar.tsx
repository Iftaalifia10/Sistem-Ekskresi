import React from 'react';
import { Activity } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onScrollToSection }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => onScrollToSection('hero')}
            className="flex items-center gap-2.5 text-left text-slate-900 group whitespace-nowrap shrink-0 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-sky-700 transition-colors">
              <Activity className="w-5 h-5 text-sky-100" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight font-['Outfit'] block leading-none text-slate-900">
                Ekskresi<span className="text-sky-600">Pedia</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 block leading-tight">
                IPA SMP Kelas 8
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => onScrollToSection('organ-explorer')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'organ-explorer'
                  ? 'border-sky-600 text-sky-700 font-semibold'
                  : 'border-transparent'
              }`}
            >
              4 Organ Utama
            </button>
            <button
              onClick={() => onScrollToSection('comparison')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'comparison'
                  ? 'border-sky-600 text-sky-700 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Tabel Komparasi
            </button>
            <button
              onClick={() => onScrollToSection('quiz')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'quiz'
                  ? 'border-sky-600 text-sky-700 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Kuis & Evaluasi
            </button>
            <button
              onClick={() => onScrollToSection('glossary')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeTab === 'glossary'
                  ? 'border-sky-600 text-sky-700 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Glosarium Istilah
            </button>
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onScrollToSection('organ-explorer')}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Mulai Belajar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
