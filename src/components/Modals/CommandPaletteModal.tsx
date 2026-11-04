import React, { useState, useEffect } from 'react';
import { Search, Folder, FileText, Play, ArrowRight } from 'lucide-react';
import { PROJECTS, SKILLS } from '../../data/portfolioData';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCV: () => void;
  onOpenDemo: () => void;
  onOpenCaseStudy: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onOpenCV,
  onOpenDemo,
  onOpenCaseStudy
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredSkills = SKILLS.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = (href: string) => {
    onClose();
    window.location.hash = href;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel border border-cyan-500/40 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
        
        {/* Input Bar */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/90 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search projects, skills, CV..."
            autoFocus
            className="w-full bg-transparent text-white placeholder-slate-500 font-mono text-sm focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-xs bg-slate-800 border border-slate-700 rounded font-mono text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Quick Action Commands */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          
          {/* Direct Actions */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider px-2">
              Quick Actions
            </span>

            <button
              onClick={() => { onClose(); onOpenCV(); }}
              className="w-full p-2.5 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent text-left flex items-center justify-between text-slate-200 font-mono text-xs transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View & Download Dhilshan Mohamed's CV</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>

            <button
              onClick={() => { onClose(); onOpenDemo(); }}
              className="w-full p-2.5 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent text-left flex items-center justify-between text-slate-200 font-mono text-xs transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Play className="w-4 h-4 text-teal-400" />
                <span>Watch Full-Stack Project Demo Video</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>

            <button
              onClick={() => { onClose(); onOpenCaseStudy(); }}
              className="w-full p-2.5 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent text-left flex items-center justify-between text-slate-200 font-mono text-xs transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Folder className="w-4 h-4 text-purple-400" />
                <span>Open Goodreads UI/UX Case Study Carousel</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>

          {/* Projects Results */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider px-2">
                Projects ({filteredProjects.length})
              </span>
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleNavigate('#projects')}
                  className="w-full p-2.5 rounded-xl hover:bg-white/5 border border-transparent text-left flex items-center justify-between text-slate-300 font-sans text-xs transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Folder className="w-4 h-4 text-cyan-400" />
                    <div>
                      <p className="font-bold text-white font-heading">{p.title}</p>
                      <p className="text-[11px] font-mono text-slate-400">{p.techStack.slice(0, 3).join(', ')}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                    {p.category}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Skills Results */}
          {filteredSkills.length > 0 && (
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider px-2">
                Skills ({filteredSkills.length})
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {filteredSkills.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleNavigate('#skills')}
                    className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-left font-mono text-xs text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 flex items-center justify-between"
                  >
                    <span>{s.name}</span>
                    <span className="text-[10px] text-cyan-400 font-bold">{s.level}%</span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
