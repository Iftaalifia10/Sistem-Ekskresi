import React, { useState } from 'react';
import {
  EXCRETION_ORGANS,
  ExcretionOrgan,
  OrganPart,
  ExcretionMechanismStep,
  Disease,
} from '../data/excretionData';
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Info,
  Layers,
  Sparkles,
  Stethoscope,
  TestTube,
  Shield,
  Lightbulb,
  HelpCircle,
  Eye,
} from 'lucide-react';

interface OrganExplorerProps {
  selectedOrganId: 'ginjal' | 'kulit' | 'paru_paru' | 'hati';
  onSelectOrgan: (id: 'ginjal' | 'kulit' | 'paru_paru' | 'hati') => void;
  searchFilter?: string;
}

export const OrganExplorer: React.FC<OrganExplorerProps> = ({
  selectedOrganId,
  onSelectOrgan,
  searchFilter = '',
}) => {
  const [activeTab, setActiveTab] = useState<'anatomi' | 'mekanisme' | 'zat_sisa' | 'penyakit' | 'tips'>('anatomi');
  const [selectedPart, setSelectedPart] = useState<OrganPart | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [diseaseCategoryFilter, setDiseaseCategoryFilter] = useState<string>('Semua');

  const organ = EXCRETION_ORGANS.find((o) => o.id === selectedOrganId) || EXCRETION_ORGANS[0];

  React.useEffect(() => {
    if (organ.parts.length > 0) {
      setSelectedPart(organ.parts[0]);
    }
    setActiveStepIndex(0);
  }, [selectedOrganId]);

  const filteredDiseases = organ.diseases.filter((d) => {
    const matchesCategory = diseaseCategoryFilter === 'Semua' || d.category === diseaseCategoryFilter;
    const matchesSearch =
      !searchFilter ||
      d.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      d.cause.toLowerCase().includes(searchFilter.toLowerCase()) ||
      d.symptoms.some((s) => s.toLowerCase().includes(searchFilter.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="organ-explorer" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            <span>Materi Pembelajaran IPA Kelas 8</span>
            <span aria-hidden="true">·</span>
            <span>4 Organ Ekskresi Manusia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit']">
            Eksplorasi Lengkap 4 Organ Ekskresi
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Pelajari struktur bagian organ, fungsinya, mekanisme ekskresi dengan bahasa yang mudah dipahami anak SMP, zat sisa yang dikeluarkan, dan kemungkinan penyakitnya.
          </p>
        </div>

        {/* 4 Organ Main Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-slate-100 rounded-xl mb-8">
          {EXCRETION_ORGANS.map((item) => {
            const isActive = item.id === selectedOrganId;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectOrgan(item.id);
                  setActiveTab('anatomi');
                }}
                className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all flex flex-col items-center justify-center cursor-pointer text-center ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <span className="font-bold">{item.name}</span>
                <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                  Zat: <strong className="text-slate-700">{item.mainWaste.split('(')[0].trim()}</strong>
                </span>
              </button>
            );
          })}
        </div>

        {/* Organ Brief Header Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-medium text-sky-400 mb-1">
                <span>Organ Ekskresi: {organ.name} ({organ.latinName})</span>
                <span aria-hidden="true">·</span>
                <span>IPA SMP Kelas 8</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-white">
                Organ {organ.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                {organ.roleSummary}
              </p>
            </div>

            {/* Waste Highlight Tag */}
            <div className="p-4 bg-slate-800/90 border border-slate-700 rounded-xl shrink-0 self-start md:self-auto min-w-[240px]">
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                Zat Sisa yang Dikeluarkan:
              </span>
              <div className="text-base font-extrabold text-white font-['Outfit']">
                {organ.mainWaste}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">
                Sesuai Kurikulum IPA Kelas 8
              </span>
            </div>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-6 border-b border-slate-200">
          {[
            { id: 'anatomi', label: '1. Bagian Organ (Bahasa Indonesia)', icon: Layers },
            { id: 'zat_sisa', label: '2. Zat Sisa yang Dikeluarkan', icon: TestTube },
            { id: 'mekanisme', label: '3. Mekanisme Ekskresi (Mudah Dipahami)', icon: Activity },
            { id: 'penyakit', label: '4. Kemungkinan Penyakit', icon: Stethoscope },
            { id: 'tips', label: '5. Fakta & Tips Kesehatan', icon: Lightbulb },
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isCurrent
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Anatomi & Bagian Organ (Dalam Bahasa Indonesia) */}
        {activeTab === 'anatomi' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual Diagram with Interactive Hotspot Pins & Indonesian Labels */}
              <div className="lg:col-span-7 bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Gambar Anatomi Organ {organ.name} (Bahasa Indonesia)
                  </span>
                  <span className="text-xs text-slate-500">
                    Klik pin angka untuk menelaah bagian
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-slate-900 shadow-md aspect-[4/3]">
                  <img
                    src={organ.image}
                    alt={`Anatomi Organ ${organ.name} Bahasa Indonesia`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />

                  {/* Hotspot Pins */}
                  {organ.parts.map((part, idx) => {
                    const isSelected = selectedPart?.name === part.name;
                    return (
                      <button
                        key={part.name}
                        onClick={() => setSelectedPart(part)}
                        style={{
                          left: `${part.xPercent}%`,
                          top: `${part.yPercent}%`,
                        }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-md cursor-pointer focus:outline-none ${
                          isSelected
                            ? 'bg-sky-500 text-white ring-4 ring-white scale-125 z-20'
                            : 'bg-slate-900/90 text-white hover:bg-sky-600 hover:scale-110 border border-white/60 z-10'
                        }`}
                        title={part.name}
                        aria-label={`Bagian: ${part.name}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Legend badges in Bahasa Indonesia */}
                <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                  {organ.parts.map((part, idx) => {
                    const isSelected = selectedPart?.name === part.name;
                    return (
                      <button
                        key={part.name}
                        onClick={() => setSelectedPart(part)}
                        className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-sky-600 text-white font-semibold shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="font-mono text-[10px] opacity-80">{idx + 1}.</span>
                        <span>{part.name.split('(')[0].trim()}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Part Inspector */}
              <div className="lg:col-span-5 space-y-4">
                {selectedPart ? (
                  <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200 shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 mb-1">
                      <span>Bagian Terpilih (Bahasa Indonesia)</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 font-['Outfit']">
                      {selectedPart.name}
                    </h4>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                      {selectedPart.description}
                    </p>
                    <div className="mt-4 p-3 bg-white rounded-xl border border-sky-200 text-xs text-sky-950 font-medium">
                      <strong className="text-sky-900 font-semibold block mb-0.5">Fungsi / Peran Bagian:</strong>
                      {selectedPart.role}
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-500 text-sm">
                    Pilih salah satu bagian organ untuk membaca keterangannya.
                  </div>
                )}

                {/* List of all parts */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Semua Bagian Organ {organ.name}:
                  </h4>
                  <div className="space-y-1.5 max-h-[320px] overflow-y-auto pr-1">
                    {organ.parts.map((p, idx) => {
                      const isSelected = selectedPart?.name === p.name;
                      return (
                        <button
                          key={p.name}
                          onClick={() => setSelectedPart(p)}
                          className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                            isSelected
                              ? 'bg-sky-50 border-sky-400 text-slate-900 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 ${
                            isSelected ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {idx + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 truncate">
                              {p.name}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {p.role}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 self-center" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Functions Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Fungsi Ekskresi Utama Organ {organ.name}</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {organ.functions.primaryExcretory.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-600 font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-3">
                  <Shield className="w-4 h-4" />
                  <span>Fungsi Biologis Tambahan bagi Tubuh</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {organ.functions.secondaryPhysiological.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Zat Sisa yang Dikeluarkan */}
        {activeTab === 'zat_sisa' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-900 to-indigo-900 text-white shadow-sm">
              <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block mb-1">
                Ketetapan Materi IPA SMP Kelas 8
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
                {organ.wasteExplanation.title}
              </h3>
              <p className="mt-2 text-sm text-slate-200 leading-relaxed max-w-3xl">
                {organ.wasteExplanation.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Komposisi */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-base font-bold text-slate-900 font-['Outfit'] flex items-center gap-2">
                  <TestTube className="w-5 h-5 text-sky-600" />
                  <span>Kandungan / Komposisi Zat yang Dikeluarkan:</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {organ.wasteExplanation.composition.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="font-medium text-slate-800">{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Asal-Usul & Bahaya */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600">
                    Asal-Usul Pembentukan dalam Tubuh:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {organ.wasteExplanation.origin}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Bahaya Apabila Zat Ini Tertahan (Tidak Dikeluarkan):</span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                    {organ.wasteExplanation.dangerIfRetained}
                  </p>
                </div>
              </div>
            </div>

            {/* Ringkasan 4 Organ Zat Sisa */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-3">
                Kunci Hafalan Zat Sisa 4 Organ Ekskresi IPA SMP:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-sky-200">
                  <span className="font-bold text-sky-900 block mb-0.5">1. Ginjal</span>
                  <span className="text-sky-700 font-semibold">Urine</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-amber-200">
                  <span className="font-bold text-amber-900 block mb-0.5">2. Kulit</span>
                  <span className="text-amber-700 font-semibold">Keringat (urea dan air)</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-rose-200">
                  <span className="font-bold text-rose-900 block mb-0.5">3. Paru-Paru</span>
                  <span className="text-rose-700 font-semibold">Karbon dioksida & uap air</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-emerald-200">
                  <span className="font-bold text-emerald-900 block mb-0.5">4. Hati</span>
                  <span className="text-emerald-700 font-semibold">Urea</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Mekanisme Ekskresi (Mudah Dipahami & Gambar Tahapan Urine Ginjal) */}
        {activeTab === 'mekanisme' && (
          <div className="space-y-8">
            {/* Friendly Analogy & Concept Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-50 border border-amber-200 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Lightbulb className="w-5 h-5 text-amber-100" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                    Konsep Mudah Dipahami (Materi IPA SMP)
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit'] mt-0.5">
                    Cara Mudah Memahami Cara Kerja {organ.name}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {organ.mechanism.smpConcept}
                  </p>
                </div>
              </div>
            </div>

            {/* KHUSUS GINJAL: GAMBAR & TAHAPAN PROSES PEMBENTUKAN URINE */}
            {organ.id === 'ginjal' && organ.mechanism.diagramImage && (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs font-bold text-sky-700 uppercase tracking-wide">
                      Gambar Penampang Nefron Ginjal
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                      Tahapan Proses Pembentukan Urine pada Ginjal
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-lg border border-slate-200 self-start sm:self-auto font-medium">
                    Klik nomor tahap untuk melihat lokasinya
                  </span>
                </div>

                {/* 16:9 Educational Nephron Diagram */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-md aspect-[16/9] border border-slate-300">
                  <img
                    src={organ.mechanism.diagramImage}
                    alt="Gambar Proses Pembentukan Urine pada Nefron Ginjal IPA SMP"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />

                  {/* Hotspot Markers for Nephron Stages */}
                  {/* Step 1: Glomerulus */}
                  <button
                    onClick={() => setActiveStepIndex(0)}
                    className={`absolute translate-x-[-50%] translate-y-[-50%] transition-all cursor-pointer p-1 rounded-full ${
                      activeStepIndex === 0
                        ? 'bg-rose-500 text-white ring-4 ring-white scale-110 z-20'
                        : 'bg-slate-900/90 text-white border border-white/60 hover:scale-105 z-10'
                    }`}
                    style={{ left: '29%', top: '27%' }}
                    title="Tahap 1: Filtrasi (Glomerulus & Kapsul Bowman)"
                  >
                    <div className="px-2.5 py-1 text-xs font-bold flex items-center gap-1">
                      <span>1</span>
                      <span className="hidden sm:inline text-[11px]">Filtrasi</span>
                    </div>
                  </button>

                  {/* Step 2: Reabsorpsi */}
                  <button
                    onClick={() => setActiveStepIndex(1)}
                    className={`absolute translate-x-[-50%] translate-y-[-50%] transition-all cursor-pointer p-1 rounded-full ${
                      activeStepIndex === 1
                        ? 'bg-emerald-500 text-white ring-4 ring-white scale-110 z-20'
                        : 'bg-slate-900/90 text-white border border-white/60 hover:scale-105 z-10'
                    }`}
                    style={{ left: '46%', top: '35%' }}
                    title="Tahap 2: Reabsorpsi (Tubulus Proksimal & Lengkung Henle)"
                  >
                    <div className="px-2.5 py-1 text-xs font-bold flex items-center gap-1">
                      <span>2</span>
                      <span className="hidden sm:inline text-[11px]">Reabsorpsi</span>
                    </div>
                  </button>

                  {/* Step 3: Augmentasi */}
                  <button
                    onClick={() => setActiveStepIndex(2)}
                    className={`absolute translate-x-[-50%] translate-y-[-50%] transition-all cursor-pointer p-1 rounded-full ${
                      activeStepIndex === 2
                        ? 'bg-sky-500 text-white ring-4 ring-white scale-110 z-20'
                        : 'bg-slate-900/90 text-white border border-white/60 hover:scale-105 z-10'
                    }`}
                    style={{ left: '60%', top: '22%' }}
                    title="Tahap 3: Augmentasi (Tubulus Distal & Kolektivus)"
                  >
                    <div className="px-2.5 py-1 text-xs font-bold flex items-center gap-1">
                      <span>3</span>
                      <span className="hidden sm:inline text-[11px]">Augmentasi</span>
                    </div>
                  </button>
                </div>

                {/* Indonesian Nephron Flow Summary Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div
                    onClick={() => setActiveStepIndex(0)}
                    className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                      activeStepIndex === 0
                        ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-200'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 block">
                      Tahap 1: Filtrasi
                    </span>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">
                      Glomerulus → Urine Primer
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Menyaring darah, menahan sel darah & protein
                    </div>
                  </div>

                  <div
                    onClick={() => setActiveStepIndex(1)}
                    className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                      activeStepIndex === 1
                        ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-200'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Tahap 2: Reabsorpsi
                    </span>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">
                      Tubulus Proksimal → Urine Sekunder
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Menyerap kembali glukosa, asam amino, air
                    </div>
                  </div>

                  <div
                    onClick={() => setActiveStepIndex(2)}
                    className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                      activeStepIndex === 2
                        ? 'bg-sky-50 border-sky-400 ring-2 ring-sky-200'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block">
                      Tahap 3: Augmentasi
                    </span>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">
                      Tubulus Distal → Urine Sebenarnya
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Menambah zat sisa sisa obat, amonia, ion H+
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Stepper Selector for Current Organ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {organ.mechanism.steps.map((st, idx) => {
                const isSelected = activeStepIndex === idx;
                return (
                  <button
                    key={st.stepNumber}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-50 border-sky-400 ring-2 ring-sky-200 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        Tahap {st.stepNumber}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-1 line-clamp-1">
                      {st.title}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {st.location.split('(')[0].trim()}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Detailed Card with Simple SMP Language */}
            {organ.mechanism.steps[activeStepIndex] && (
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                      Tahap {organ.mechanism.steps[activeStepIndex].stepNumber} dari {organ.mechanism.steps.length}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                      {organ.mechanism.steps[activeStepIndex].title}
                    </h3>
                  </div>
                  <div className="text-xs text-slate-700 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-lg font-semibold self-start sm:self-auto">
                    📍 Tempat Terjadi: {organ.mechanism.steps[activeStepIndex].location}
                  </div>
                </div>

                {/* Everyday SMP Analogy Box */}
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                  <span className="text-xl shrink-0">💡</span>
                  <div className="text-xs sm:text-sm text-amber-950">
                    <strong className="font-bold block text-amber-900 mb-0.5">
                      Analogi Sehari-hari (Mudah Diingat):
                    </strong>
                    {organ.mechanism.steps[activeStepIndex].analogy}
                  </div>
                </div>

                {/* Input vs Output Pipeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1">
                      Zat Awal / Masukan:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      {organ.mechanism.steps[activeStepIndex].input}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block mb-1">
                      Zat Hasil / Produk Akhir Tahap Ini:
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-semibold">
                      {organ.mechanism.steps[activeStepIndex].output}
                    </p>
                  </div>
                </div>

                {/* Process Description */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    Penjelasan Proses yang Terjadi:
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {organ.mechanism.steps[activeStepIndex].process}
                  </p>
                </div>

                {/* Key Insights */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-2">
                    <Info className="w-4 h-4 text-sky-600" />
                    <span>Catatan Penting untuk Ujian Sekolah & Asesmen IPA SMP:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {organ.mechanism.steps[activeStepIndex].keyDetails.map((kd, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">•</span>
                        <span>{kd}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Next Step Control */}
                <div className="flex justify-between items-center pt-2">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      activeStepIndex === 0
                        ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    ← Tahap Sebelumnya
                  </button>

                  <button
                    disabled={activeStepIndex === organ.mechanism.steps.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(organ.mechanism.steps.length - 1, prev + 1))}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeStepIndex === organ.mechanism.steps.length - 1
                        ? 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-400'
                        : 'bg-sky-600 text-white hover:bg-sky-700 shadow-xs'
                    }`}
                  >
                    Tahap Selanjutnya →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Kemungkinan Penyakit */}
        {activeTab === 'penyakit' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-['Outfit']">
                  Penyakit & Gangguan pada Organ {organ.name}
                </h4>
                <p className="text-sm text-slate-600 mt-0.5">
                  Daftar gangguan kesehatan yang dapat timbul beserta penyebab, gejala, dan cara pencegahannya.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto overflow-x-auto no-scrollbar">
                {['Semua', 'Infeksi', 'Gaya Hidup', 'Degeneratif', 'Struktural/Bawaan'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setDiseaseCategoryFilter(cat)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      diseaseCategoryFilter === cat
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {filteredDiseases.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500">
                Tidak ada penyakit yang cocok dengan filter yang dipilih.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredDiseases.map((dis) => (
                  <div
                    key={dis.name}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-base font-bold text-slate-900 font-['Outfit']">
                            {dis.name}
                          </h4>
                          {dis.alias && (
                            <span className="text-xs text-slate-500 italic block">
                              Nama lain: {dis.alias}
                            </span>
                          )}
                        </div>
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                          dis.severity === 'Serius/Kritis'
                            ? 'bg-rose-100 text-rose-800'
                            : dis.severity === 'Sedang'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {dis.severity}
                        </span>
                      </div>

                      <div className="text-xs text-slate-500 mb-3">
                        Kategori: <span className="font-semibold text-slate-700">{dis.category}</span>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                            Penyebab Penyakit:
                          </span>
                          <p className="text-slate-700 mt-0.5">{dis.cause}</p>
                        </div>

                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                            Gejala yang Ditimbulkan:
                          </span>
                          <ul className="mt-1 space-y-1">
                            {dis.symptoms.map((s, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-slate-700 text-xs">
                                <span className="text-rose-500 font-bold">•</span>
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 bg-emerald-50/50 p-3 rounded-xl">
                      <div className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div className="text-xs text-emerald-950 leading-relaxed">
                          <strong className="font-semibold block text-emerald-900">Cara Pencegahan & Pengobatan:</strong>
                          {dis.prevention}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 5: Fakta & Tips Kesehatan */}
        {activeTab === 'tips' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fakta Biologi */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-50 to-white border border-amber-200">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-base mb-4">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <span>Fakta Biologi Menarik {organ.name}</span>
                </div>
                <div className="space-y-3">
                  {organ.funFacts.map((fact, i) => (
                    <div key={i} className="p-3.5 bg-white/80 rounded-xl border border-amber-100 text-xs sm:text-sm text-slate-800 leading-relaxed flex items-start gap-2.5 shadow-xs">
                      <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Sehat */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-50 to-white border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base mb-4">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>Cara Menjaga Kesehatan Organ {organ.name}</span>
                </div>
                <div className="space-y-3">
                  {organ.healthyTips.map((tip, i) => (
                    <div key={i} className="p-3.5 bg-white/80 rounded-xl border border-emerald-100 text-xs sm:text-sm text-slate-800 leading-relaxed flex items-start gap-2.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
