import React, { useState } from 'react';
import { GLOSSARY_ITEMS, GlossaryItem } from '../data/excretionData';
import { Search, BookMarked, Filter } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterOrgan, setFilterOrgan] = useState<string>('Semua');

  const filteredItems = GLOSSARY_ITEMS.filter((item) => {
    const matchesFilter = filterOrgan === 'Semua' || item.organ === filterOrgan;
    const matchesSearch =
      !searchTerm ||
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="glossary" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              <span>Kamus Biologi</span>
              <span aria-hidden="true">·</span>
              <span>Kosakata Penting IPA 8</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit']">
              Glosarium Istilah Sistem Ekskresi
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Daftar definisi istilah ilmiah dan latin yang sering muncul dalam materi sistem ekskresi manusia.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari kata kunci istilah..."
                className="pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full sm:w-56"
              />
            </div>

            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto no-scrollbar">
              {['Semua', 'Ginjal', 'Kulit', 'Paru-Paru', 'Hati'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilterOrgan(tag)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    filterOrgan === tag
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Glossary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.term}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                    {item.term}
                  </h3>
                  <span className="text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                    {item.organ}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.definition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
