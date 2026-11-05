import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SystemicViewSection } from './components/SystemicViewSection';
import { PainPointsSection } from './components/PainPointsSection';
import { MethodologySection } from './components/MethodologySection';
import { PracticalExperienceSection } from './components/PracticalExperienceSection';
import { EducationSection } from './components/EducationSection';
import { KnowledgeMaterialsSection } from './components/KnowledgeMaterialsSection';
import { EcosystemNorteSection } from './components/EcosystemNorteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-stone-900 selection:bg-orange-600/15 selection:text-orange-950 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <SystemicViewSection />
        <PainPointsSection />
        <MethodologySection />
        <PracticalExperienceSection />
        <EducationSection />
        <KnowledgeMaterialsSection />
        <EcosystemNorteSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
