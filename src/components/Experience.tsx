import React from 'react';
import { TIMELINE } from '../data/portfolioData';
import { GraduationCap, Award, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-cyber-grid bg-[#070a13]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            // Experience & Academic Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Education & <span className="text-cyan-400">Timeline</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Academic milestones, technical diplomas, and practical software project achievements.
          </p>
        </div>

        {/* Vertical Cyber Timeline */}
        <div className="mt-16 relative">
          
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-teal-400 to-purple-600 transform -translate-x-1/2 shadow-[0_0_15px_#00f0ff]" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Glowing Node Marker */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center shadow-[0_0_20px_#00f0ff]">
                    {idx === 0 ? (
                      <GraduationCap className="w-5 h-5 text-cyan-400" />
                    ) : idx === 1 ? (
                      <Award className="w-5 h-5 text-purple-400" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-teal-400" />
                    )}
                  </div>

                  {/* Card Container (Takes 5/12 width) */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-cyan-500/20 space-y-4">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>

                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
                            Current Student
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-sm font-mono text-cyan-400">
                          <span>{item.institution}</span>
                          <span>•</span>
                          <span className="text-slate-400 text-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-1.5 pt-2">
                        <span className="text-xs font-mono text-slate-400 font-semibold uppercase">Highlights:</span>
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {item.skills.map((sk, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
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
