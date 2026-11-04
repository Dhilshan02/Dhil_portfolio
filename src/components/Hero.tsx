import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Play, ArrowDown, FileText, Sparkles, Terminal, Code2, ShieldCheck } from 'lucide-react';
import { downloadCV } from '../utils/generateCV';

interface HeroProps {
  onOpenCV: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Floating Watermark Initial 'D' */}
      <div className="watermark-initial">D</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="space-y-10">
          
          {/* TOP SECTION: Left side Profile Photo, Right side Title/Badge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Profile Banner Photo (5 Cols) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              
              {/* High Tech Reticle Banner Container */}
              <div className="relative group w-full max-w-md sm:max-w-lg lg:max-w-full">
                
                {/* Outer Pulsing Glow Aura */}
                <div className="absolute -inset-3 bg-linear-to-r from-cyan-500 via-teal-500 to-purple-600 rounded-2xl opacity-30 blur-2xl group-hover:opacity-60 transition duration-1000"></div>

                {/* High Tech Reticle Brackets on Corners */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400 z-20"></div>
                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-400 z-20"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-cyan-400 z-20"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-400 z-20"></div>

                {/* Image Frame */}
                <div className="relative w-full rounded-2xl overflow-hidden border border-cyan-500/30 glass-panel shadow-2xl z-10">
                  <img
                    src={PERSONAL_INFO.portrait}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-auto object-cover rounded-2xl filter contrast-105 brightness-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="scanline"></div>
                </div>

                {/* Floating Code Status Badge Card */}
                <div className="absolute -bottom-4 -right-2 sm:-bottom-3 sm:-right-4 glass-panel px-4 py-2 rounded-xl border border-cyan-500/40 flex items-center gap-3 shadow-xl z-20">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                  <div className="text-left font-mono text-xs">
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider">Status</p>
                    <p className="text-cyan-300 font-semibold">Available for Internships</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side: Title & University Info (7 Cols) */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span>Undergraduate @ {PERSONAL_INFO.university}</span>
              </div>

              {/* Main Role Title */}
              <div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-heading">
                  Software Engineering <span className="shimmer-text">Undergraduate</span>
                </h1>
                <p className="mt-2 text-base sm:text-lg font-mono text-cyan-400 font-medium">
                  NSBM Green University <span className="text-slate-400 text-sm">({PERSONAL_INFO.yearStatus})</span>
                </p>
              </div>

            </div>

          </div>

          {/* BOTTOM SECTION: EKG Line, Tags, Tagline Quote, Status Box & Buttons */}
          <div className="space-y-6 text-center flex flex-col items-center w-full pt-4">
            
            {/* Animated EKG Pulse Line Graphic Divider */}
            <div className="ekg-container my-2 max-w-3xl w-full">
              <svg className="w-full h-full" viewBox="0 0 600 60" fill="none" preserveAspectRatio="none">
                <path
                  d="M0 30 H180 L190 20 L200 45 L210 10 L220 50 L230 30 H260 L270 25 L275 35 L280 30 H380 L390 15 L400 48 L410 5 L420 55 L430 30 H600"
                  className="ekg-line"
                />
              </svg>
            </div>

            {/* Character Bullets / Tagline */}
            <div className="space-y-4 flex flex-col items-center">
              <div className="flex flex-wrap justify-center items-center gap-3 text-sm sm:text-base font-mono">
                <span className="px-3 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-cyan-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Innovative
                </span>
                <span className="px-3 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-purple-300 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  Analytical
                </span>
                <span className="px-3 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-emerald-300 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  Unconventional
                </span>
              </div>

              <blockquote className="text-slate-300 text-base sm:text-lg italic border-l-2 border-cyan-500/50 pl-4 py-1 max-w-2xl text-center">
                "{PERSONAL_INFO.tagline}"
              </blockquote>
            </div>

            {/* Status Callout */}
            <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 font-mono flex items-center gap-2 max-w-xl">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{PERSONAL_INFO.statusText}</span>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap justify-center gap-4 items-center">
              <button
                onClick={downloadCV}
                className="px-6 py-3.5 rounded-xl bg-linear-to-r from-cyan-500 via-teal-400 to-cyan-400 text-slate-950 font-bold text-sm font-mono uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                onClick={onOpenDemo}
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/40 text-cyan-300 font-mono text-sm uppercase tracking-wider hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-white transition-all flex items-center gap-2 group"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>

              <a
                href="#projects"
                className="px-5 py-3.5 rounded-xl text-slate-300 hover:text-cyan-400 font-mono text-sm transition-colors flex items-center gap-1.5"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
