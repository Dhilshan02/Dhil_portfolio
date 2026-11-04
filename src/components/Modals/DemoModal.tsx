import React from 'react';
import { X, Play, Volume2, Maximize2, CheckCircle2 } from 'lucide-react';
import travelAppImg from '../../assets/travel_app_mockup.jpg';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel border border-cyan-500/40 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                Project Demonstration & Architecture Showcase
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                Interactive Full-Stack Platform Demo (Dhilshan Mohamed S.E.)
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

        {/* Video Player Visual Frame */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden flex items-center justify-center group">
          <img
            src={travelAppImg}
            alt="Demo Preview"
            className="w-full h-full object-cover filter brightness-75"
          />

          {/* Interactive Simulated Player Overlay */}
          <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-[0_0_30px_#00f0ff] hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <p className="text-sm font-mono text-cyan-300 font-semibold bg-slate-900/80 px-4 py-1.5 rounded-full border border-cyan-500/30">
              Click to Play Full-Stack System Architecture Demo (1080p 60fps)
            </p>
          </div>

          {/* Control Bar Mockup */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 to-transparent flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center gap-3">
              <Play className="w-4 h-4 text-cyan-400 cursor-pointer" />
              <Volume2 className="w-4 h-4 text-slate-400 cursor-pointer" />
              <span>02:45 / 05:30</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-[10px]">
                HD 60FPS
              </span>
              <Maximize2 className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Tech Highlights Footer */}
        <div className="p-4 sm:p-6 bg-slate-950/80 border-t border-slate-800 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Demonstrated Capabilities:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>React 19 + TypeScript Frontends</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Spring Boot REST Microservices</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>PostgreSQL / MySQL Data Pipelines</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
