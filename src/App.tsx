import { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Code-split modals so their assets & DOM are loaded only on demand
const DemoModal = lazy(() => import('./components/Modals/DemoModal').then(m => ({ default: m.DemoModal })));
const CaseStudyModal = lazy(() => import('./components/Modals/CaseStudyModal').then(m => ({ default: m.CaseStudyModal })));
const CVModal = lazy(() => import('./components/Modals/CVModal').then(m => ({ default: m.CVModal })));
const CommandPaletteModal = lazy(() => import('./components/Modals/CommandPaletteModal').then(m => ({ default: m.CommandPaletteModal })));

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200 w-full max-w-[100vw] overflow-x-hidden overflow-x-clip">
      
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="w-full max-w-[100vw] overflow-x-hidden overflow-x-clip">
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

      {/* Interactive Modals (Loaded dynamically on-demand) */}
      {isDemoModalOpen && (
        <Suspense fallback={null}>
          <DemoModal
            isOpen={isDemoModalOpen}
            onClose={() => setIsDemoModalOpen(false)}
          />
        </Suspense>
      )}

      {isCaseStudyModalOpen && (
        <Suspense fallback={null}>
          <CaseStudyModal
            isOpen={isCaseStudyModalOpen}
            onClose={() => setIsCaseStudyModalOpen(false)}
          />
        </Suspense>
      )}

      {isCVModalOpen && (
        <Suspense fallback={null}>
          <CVModal
            isOpen={isCVModalOpen}
            onClose={() => setIsCVModalOpen(false)}
          />
        </Suspense>
      )}

      {isCommandPaletteOpen && (
        <Suspense fallback={null}>
          <CommandPaletteModal
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
            onOpenCV={() => setIsCVModalOpen(true)}
            onOpenDemo={() => setIsDemoModalOpen(true)}
            onOpenCaseStudy={() => setIsCaseStudyModalOpen(true)}
          />
        </Suspense>
      )}

    </div>
  );
}

export default App;
