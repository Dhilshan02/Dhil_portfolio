import React, { useState, useMemo } from 'react';
import { TIMELINE } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Camera,
  Sparkles,
  Layers
} from 'lucide-react';
import type { TimelineItem } from '../types';

type FilterCategory = 'all' | 'education' | 'ventures';

export const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredTimeline = useMemo(() => {
    return TIMELINE.filter((item) => {
      if (activeFilter === 'education') {
        return item.type === 'education' || item.type === 'diploma';
      }
      if (activeFilter === 'ventures') {
        return item.type === 'venture' || item.type === 'experience';
      }
      return true;
    });
  }, [activeFilter]);

  const getItemIcon = (type?: TimelineItem['type']) => {
    switch (type) {
      case 'venture':
        return <Camera className="w-5 h-5 text-cyan-400" />;
      case 'diploma':
        return <Award className="w-5 h-5 text-cyan-400" />;
      case 'experience':
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
      case 'education':
      default:
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative bg-cyber-grid bg-[#070a13] overflow-hidden w-full max-w-full">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-cyan-500/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-cyan-500/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            // Academic Track & Practical Ventures
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Education & <span className="text-cyan-400">Timeline</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Academic milestones, technical diplomas, and entrepreneurial leadership as Studio Owner of DD Photography 95 alongside software engineering projects.
          </p>

          {/* Interactive Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Milestones ({TIMELINE.length})</span>
            </button>

            <button
              onClick={() => setActiveFilter('education')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                activeFilter === 'education'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education & Qualifications (2)</span>
            </button>

            <button
              onClick={() => setActiveFilter('ventures')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                activeFilter === 'ventures'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40'
              }`}
            >
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
              <span>Studio & Practical Experience (2)</span>
            </button>
          </div>
        </div>

        {/* Vertical Cyber Timeline */}
        <div className="mt-16 relative">
          
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-teal-400 to-cyan-400 transform -translate-x-1/2 shadow-[0_0_15px_#00f0ff]" />

          <div className="space-y-12">
            {filteredTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Glowing Node Marker */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-400 shadow-[0_0_20px_#00f0ff] items-center justify-center transition-transform hover:scale-110">
                    {getItemIcon(item.type)}
                  </div>

                  {/* Card Container (Takes 5/12 width) */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 space-y-4">
                      
                      {/* Top Badges Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="md:hidden p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                            {getItemIcon(item.type)}
                          </div>
                          <span className="px-3 py-1 rounded-full bg-slate-950/90 border border-slate-700/80 text-slate-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            {item.period}
                          </span>

                          {item.badge && (
                            <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-semibold flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-cyan-400" />
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Active
                          </span>
                        )}
                      </div>

                      {/* Role & Institution */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                          {item.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-mono text-cyan-400">
                          <span className="font-semibold text-white/90">{item.institution}</span>
                          <span>•</span>
                          <span className="text-slate-400 text-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Main Description */}
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Spotlight Box */}
                      {item.spotlight && (
                        <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-2.5 text-xs text-slate-300 font-sans leading-relaxed">
                          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-cyan-400 font-mono block mb-0.5">
                              Studio Synergy & Creative Vision:
                            </span>
                            <span>{item.spotlight}</span>
                          </div>
                        </div>
                      )}

                      {/* Key Achievements & Responsibilities */}
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider block">
                          Key Highlights & Contributions:
                        </span>
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-cyan-400" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {item.skills.map((sk, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300 text-[11px] font-mono hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
