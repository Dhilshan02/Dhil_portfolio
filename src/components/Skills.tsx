import React, { useState, useMemo } from 'react';
import { SKILLS } from '../data/portfolioData';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Server,
  Zap,
  Palette,
  FileCode2,
  Layout,
  Grid,
  Atom,
  Network,
  HardDrive,
  GitBranch,
  Send,
  type LucideIcon
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  FileCode2,
  Code: Code2,
  Terminal,
  Database,
  Layout,
  Atom,
  Zap,
  Palette,
  Grid,
  Server,
  Cpu,
  Network,
  HardDrive,
  GitBranch,
  Send,
};

const CATEGORIES = ['Languages', 'Frontend', 'Backend', 'Databases & Tools'];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Languages');

  const filteredSkills = useMemo(
    () => SKILLS.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="skills" className="py-24 relative bg-cyber-grid bg-[#070a13]">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none transform translate-z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            // Tech Stack & Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Technical <span className="text-cyan-400">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Categorized technologies, frameworks, and database engines utilized across my projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] border border-cyan-400'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = ICON_MAP[skill.iconName] || Code2;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border border-cyan-500/15 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white font-heading">{skill.name}</h3>
                        <span className="text-[11px] font-mono text-cyan-400/80">{skill.category}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mt-3 font-sans">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/60">
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-cyan-500 via-teal-400 to-blue-500 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_#00f0ff]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
