import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DemoModal } from './components/Modals/DemoModal';
import { CaseStudyModal } from './components/Modals/CaseStudyModal';
import { CVModal } from './components/Modals/CVModal';
import { CommandPaletteModal } from './components/Modals/CommandPaletteModal';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        <Hero
          onOpenCV={() => setIsCVModalOpen(true)}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        <About />

        <Skills />

        <Projects
          onOpenCaseStudy={() => setIsCaseStudyModalOpen(true)}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        <Experience />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <CaseStudyModal
        isOpen={isCaseStudyModalOpen}
        onClose={() => setIsCaseStudyModalOpen(false)}
      />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenCV={() => setIsCVModalOpen(true)}
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenCaseStudy={() => setIsCaseStudyModalOpen(true)}
      />

    </div>
  );
}

export default App;
