import React from 'react';
import { Search, ArrowRight, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onSelectOrgan: (organId: 'ginjal' | 'kulit' | 'paru_paru' | 'hati') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectOrgan,
  searchQuery,
  setSearchQuery,
  onScrollToSection,
}) => {
  const quickCards = [
    {
      id: 'ginjal' as const,
      name: 'Ginjal',
      sub: 'Filtrasi, Reabsorpsi, Augmentasi',
      waste: 'Urine',
      color: 'border-sky-300 hover:border-sky-500 bg-sky-50/50',
      tagColor: 'text-sky-700',
    },
    {
      id: 'kulit' as const,
      name: 'Kulit',
      sub: 'Termoregulasi & Glandula Sudorifera',
      waste: 'Keringat (urea dan air)',
      color: 'border-amber-300 hover:border-amber-500 bg-amber-50/50',
      tagColor: 'text-amber-700',
    },
    {
      id: 'paru_paru' as const,
      name: 'Paru-Paru',
      sub: 'Difusi Gas Melintasi Alveolus',
      waste: 'Karbon dioksida & uap air',
      color: 'border-rose-300 hover:border-rose-500 bg-rose-50/50',
      tagColor: 'text-rose-700',
    },
    {
      id: 'hati' as const,
      name: 'Hati',
      sub: 'Siklus Ornitin & Perombakan Sel Darah Merah',
      waste: 'Urea',
      color: 'border-emerald-300 hover:border-emerald-500 bg-emerald-50/50',
      tagColor: 'text-emerald-700',
    },
  ];

  return (
    <section id="hero" className="relative pt-8 pb-12 overflow-hidden bg-gradient-to-b from-slate-100/80 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curated Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-3">
          <span className="text-sky-700 font-semibold">Kurikulum IPA SMP Kelas 8</span>
          <span aria-hidden="true">·</span>
          <span>Sistem Ekskresi Manusia</span>
          <span aria-hidden="true">·</span>
          <span>Kulit, Ginjal, Paru-Paru, dan Hati</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-3xl mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit'] leading-tight [text-wrap:balance]">
            Sistem Ekskresi Manusia: <br className="hidden sm:inline" />
            <span className="text-sky-600">Kulit, Ginjal, Paru-Paru, dan Hati</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Materi lengkap IPA SMP Kelas 8 mengenai struktur bagian organ, fungsinya, mekanisme ekskresi, zat sisa yang dikeluarkan, serta kemungkinan penyakit yang dapat ditimbulkan.
          </p>
        </div>

        {/* Search & Action Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-2xl mb-8">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari materi: misal 'Nefron', 'Urea', 'Stratum Korneum', 'Alveolus'..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-xs"
            />
          </div>
          <button
            onClick={() => onScrollToSection('organ-explorer')}
            className="px-5 py-2.5 bg-sky-600 text-white text-sm font-semibold rounded-lg hover:bg-sky-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Pelajari Materi Organ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Organ Quick Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickCards.map((organ) => (
            <button
              key={organ.id}
              onClick={() => {
                onSelectOrgan(organ.id);
                onScrollToSection('organ-explorer');
              }}
              className={`p-4 rounded-xl border text-left transition-all hover:shadow-md cursor-pointer ${organ.color} flex flex-col justify-between`}
            >
              <div>
                <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${organ.tagColor}`}>
                  Organ Ekskresi
                </span>
                <h2 className="text-lg font-bold text-slate-900 font-['Outfit']">
                  {organ.name}
                </h2>
                <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                  {organ.sub}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60">
                <span className="text-[11px] text-slate-500 block">Zat yang Dikeluarkan:</span>
                <span className="text-xs font-bold text-slate-900 line-clamp-1">
                  {organ.waste}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
