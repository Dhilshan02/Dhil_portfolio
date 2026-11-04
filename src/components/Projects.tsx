import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { BookOpen, Eye, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  onOpenCaseStudy: () => void;
  onOpenDemo: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<string>('All Projects');

  const tabs = ['All Projects', 'Full-Stack', 'AI & Cloud', 'UI/UX Design'];

  const filteredProjects = activeTab === 'All Projects'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative bg-[#070a13] border-t border-slate-900">
      
      {/* Glow */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            // Featured Portfolio Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real software applications, enterprise backends, and UI/UX case studies built with high engineering standards.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] border border-cyan-400'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-cyan-500/20 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0d1321] via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  {project.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 text-xs font-mono font-semibold shadow-lg">
                      {project.badge}
                    </div>
                  )}

                  {/* Quick Action Overlay Buttons */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    {project.hasCaseStudy ? (
                      <button
                        onClick={onOpenCaseStudy}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 shadow-lg hover:brightness-110"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>
                    ) : (
                      <button
                        onClick={onOpenDemo}
                        className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-mono text-xs flex items-center gap-1.5 hover:bg-cyan-500/20 shadow-lg"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Watch Demo</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white font-heading mt-1 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>View GitHub Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-500 italic">Private Design Case Study</span>
                )}

                {project.hasCaseStudy && (
                  <button
                    onClick={onOpenCaseStudy}
                    className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Read UX Process</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
