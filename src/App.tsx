import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OrganExplorer } from './components/OrganExplorer';
import { ComparisonTable } from './components/ComparisonTable';
import { QuizSection } from './components/QuizSection';
import { GlossarySection } from './components/GlossarySection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedOrganId, setSelectedOrganId] = useState<'ginjal' | 'kulit' | 'paru_paru' | 'hati'>('ginjal');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNavTab, setActiveNavTab] = useState<string>('organ-explorer');

  const scrollToSection = (sectionId: string) => {
    setActiveNavTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectOrgan = (organId: 'ginjal' | 'kulit' | 'paru_paru' | 'hati') => {
    setSelectedOrganId(organId);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeNavTab}
        setActiveTab={setActiveNavTab}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onSelectOrgan={handleSelectOrgan}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onScrollToSection={scrollToSection}
        />

        {/* 4 Organ Deep-Dive Explorer (Bahasa Indonesia & Exact Wastes) */}
        <OrganExplorer
          selectedOrganId={selectedOrganId}
          onSelectOrgan={handleSelectOrgan}
          searchFilter={searchQuery}
        />

        {/* Comparison Matrix Table */}
        <ComparisonTable />

        {/* Evaluation Quiz */}
        <QuizSection />

        {/* Glossary of Terms */}
        <GlossarySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
