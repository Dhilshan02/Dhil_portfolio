import React, { useEffect } from 'react';
import { X, GitCommitHorizontal } from 'lucide-react';

interface RepoWipModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

export const RepoWipModal: React.FC<RepoWipModalProps> = ({
  isOpen,
  onClose,
  projectName
}) => {
  useEffect(() => {
    if (!isOpen) return;

    // Auto-dismiss after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Repository Work In Progress"
    >
      <div className="relative w-full max-w-[340px] sm:max-w-sm rounded-2xl bg-[#09111e]/95 border border-cyan-400/60 shadow-[0_0_30px_rgba(0,240,255,0.25)] p-5 sm:p-6 backdrop-blur-md animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close notification"
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Layout */}
        <div className="flex items-center gap-3.5 sm:gap-4 pr-5">
          {/* Glowing Git Commit Badge */}
          <div className="w-12 h-12 rounded-full border border-cyan-400/80 bg-cyan-950/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.35)]">
            <GitCommitHorizontal className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]" />
          </div>

          {/* Message Text */}
          <div className="space-y-1 text-left min-w-0">
            <h4 className="text-cyan-400 font-bold text-sm sm:text-base font-heading tracking-wide">
              Work In Progress
            </h4>
            <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed">
              Currently working project – Repository will be updated soon!
            </p>
            {projectName && (
              <p className="text-[10px] font-mono text-cyan-400/70 truncate pt-0.5">
                // {projectName}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

