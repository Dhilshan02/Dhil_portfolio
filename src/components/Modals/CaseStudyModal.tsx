import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Target, CheckCircle2 } from 'lucide-react';
import { FigmaIcon } from '../Icons';
import goodreadsImg from '../../assets/goodreads_ui_mockup.jpg';
import travelImg from '../../assets/travel_app_mockup.jpg';
import recruitImg from '../../assets/recruitsphere_ai_mockup.jpg';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: "Goodreads Mobile App Redesign — UX Research & Screen Flow",
      subtitle: "Personalized Discovery & Voice Search Integration",
      image: goodreadsImg,
      description: "Complete UI/UX overhaul of Goodreads mobile app solving unintuitive navigation, cluttered visual hierarchy, and slow book tracking."
    },
    {
      title: "Interactive Reading Dashboard & Bookshelf Layout",
      subtitle: "Dark Glassmorphism HCI Design System",
      image: travelImg,
      description: "Clean shelf categorization, live reading goal metrics, and instant voice-prompted search suggestions."
    },
    {
      title: "Design System Tokens & Prototype Components",
      subtitle: "Figma Tokens, Typography & Micro-Interactions",
      image: recruitImg,
      description: "High-fidelity Figma prototypes with custom icons, color tokens (Neon Cyan & Obsidian), and touch accessibility testing."
    }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel border border-cyan-500/40 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-400">
              <FigmaIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Goodreads Mobile App Redesign
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                UI/UX Case Study by Dhilshan Mohamed
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Image Container */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden flex items-center justify-center">
          <img
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Overlay Details */}
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent space-y-1">
            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
              Slide 0{activeSlide + 1} of 0{slides.length} — {slides[activeSlide].subtitle}
            </span>
            <h4 className="text-lg font-bold text-white font-heading">
              {slides[activeSlide].title}
            </h4>
            <p className="text-xs text-slate-300 font-sans">
              {slides[activeSlide].description}
            </p>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Case Study Details Section */}
        <div className="p-6 sm:p-8 space-y-8 bg-[#070a13]">
          
          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-5 rounded-xl border border-rose-500/20 bg-rose-950/10">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm font-heading mb-2">
                <Target className="w-4 h-4" />
                <span>The UX Challenge</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                The legacy Goodreads app presents cognitive overload: multi-step navigation to track books, lack of personalized voice search, and cluttered UI layouts that deter active readers.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-heading mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Redesign Solution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Streamlined bottom navigation bar with 4 core tabs, 1-tap reading status toggles, personalized recommendations carousel, and AI-assisted voice book lookup.
              </p>
            </div>
          </div>

          {/* Research Breakdown */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white font-heading">
              Key Design System & UX Principles Applied:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                <span className="text-cyan-400 font-bold block mb-1">01. Fitts's Law</span>
                Primary CTA targets (e.g. "Continue Reading") placed at bottom-thumb ergonomic zones.
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                <span className="text-purple-400 font-bold block mb-1">02. Glassmorphism UI</span>
                High contrast dark background (#0b0f19) with glowing neon cyan accents for enhanced readability.
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                <span className="text-teal-400 font-bold block mb-1">03. Voice Search</span>
                Natural language voice query support for hands-free book title & author exploration.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
