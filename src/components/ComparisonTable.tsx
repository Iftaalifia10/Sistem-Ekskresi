import React, { useState } from 'react';
import { EXCRETION_ORGANS } from '../data/excretionData';

export const ComparisonTable: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<'all' | 'ginjal' | 'kulit' | 'paru_paru' | 'hati'>('all');

  return (
    <section id="comparison" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              <span>Tabel Ringkasan</span>
              <span aria-hidden="true">·</span>
              <span>Materi IPA SMP Kelas 8</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit']">
              Tabel Perbandingan 4 Organ Ekskresi Manusia
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Matriks komparasi ringkas untuk mempermudah belajar ulangan harian: bagian organ, zat sisa yang dikeluarkan, mekanisme, dan penyakit yang ditimbulkan.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: 'Semua Organ' },
              { id: 'ginjal', label: 'Ginjal' },
              { id: 'kulit', label: 'Kulit' },
              { id: 'paru_paru', label: 'Paru-Paru' },
              { id: 'hati', label: 'Hati' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedHighlight(f.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedHighlight === f.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* The Matrix Table */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="py-4 px-4 font-bold font-['Outfit'] text-xs uppercase tracking-wider w-36">
                    Nama Organ
                  </th>
                  <th className="py-4 px-4 font-bold font-['Outfit'] text-xs uppercase tracking-wider min-w-[200px]">
                    Bagian-Bagian Organ
                  </th>
                  <th className="py-4 px-4 font-bold font-['Outfit'] text-xs uppercase tracking-wider min-w-[210px] bg-slate-800">
                    Zat Sisa yang Dikeluarkan
                  </th>
                  <th className="py-4 px-4 font-bold font-['Outfit'] text-xs uppercase tracking-wider min-w-[260px]">
                    Mekanisme Ekskresi
                  </th>
                  <th className="py-4 px-4 font-bold font-['Outfit'] text-xs uppercase tracking-wider min-w-[210px]">
                    Kemungkinan Penyakit
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {EXCRETION_ORGANS.filter((o) => selectedHighlight === 'all' || o.id === selectedHighlight).map((organ) => (
                  <tr
                    key={organ.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    {/* Organ */}
                    <td className="py-4 px-4 align-top bg-slate-50/50">
                      <div className="font-bold text-slate-900 text-base font-['Outfit']">
                        {organ.name}
                      </div>
                      <div className="text-xs text-slate-500 italic mt-0.5">
                        {organ.latinName}
                      </div>
                    </td>

                    {/* Bagian Utama */}
                    <td className="py-4 px-4 align-top">
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {organ.parts.map((p, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-sky-600 font-bold">•</span>
                            <span>{p.name}</span>
                          </li>
                        ))}
                      </ul>
                    </td>

                    {/* Zat Sisa Dikeluarkan (Highlighted) */}
                    <td className="py-4 px-4 align-top bg-sky-50/40">
                      <div className="font-bold text-sky-950 text-sm mb-1.5">
                        {organ.mainWaste}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {organ.wasteExplanation.description}
                      </p>
                    </td>

                    {/* Mekanisme */}
                    <td className="py-4 px-4 align-top">
                      <p className="text-xs text-slate-700 leading-relaxed font-medium mb-2">
                        {organ.mechanism.summary}
                      </p>
                      <div className="space-y-1">
                        {organ.mechanism.steps.map((st) => (
                          <div
                            key={st.stepNumber}
                            className="text-xs p-1.5 rounded bg-slate-100 text-slate-800"
                          >
                            <strong>Tahap {st.stepNumber}:</strong> {st.title}
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Penyakit */}
                    <td className="py-4 px-4 align-top">
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {organ.diseases.slice(0, 4).map((d, idx) => (
                          <li key={idx} className="flex items-start justify-between gap-1">
                            <span className="font-medium text-slate-900">• {d.name}</span>
                            <span className="text-[10px] text-slate-500 font-medium shrink-0">
                              ({d.category})
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
