import React, { useState, useEffect } from 'react';
import { Menu, X, Search, FileText, Palette } from 'lucide-react';
import dLogo from '../assets/d-logo.png';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [theme, setTheme] = useState<'cyber' | 'emerald'>(() => {
    return (localStorage.getItem('portfolio-theme') as 'cyber' | 'emerald') || 'cyber';
  });

  useEffect(() => {
    if (theme === 'emerald') {
      document.documentElement.setAttribute('data-theme', 'emerald');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'cyber' ? 'emerald' : 'cyber'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a13]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <img src={dLogo} alt="D Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-white tracking-wider group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                DHILSHAN <span className="text-cyan-400">MOHAMED</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                theme === 'emerald'
                  ? 'bg-[#091A13] border-[#C5A36A]/50 text-[#C5A36A] hover:border-[#C5A36A]'
                  : 'bg-slate-900/80 border-cyan-500/30 text-cyan-400 hover:border-cyan-400'
              }`}
              title={`Switch to ${theme === 'cyber' ? 'Emerald & Gold' : 'Cyber Neon'} Theme`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{theme === 'emerald' ? 'Gold' : 'Cyber'}</span>
            </button>

            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono transition-all"
              title="Quick Search (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* CV Download / View Trigger */}
            <button
              onClick={onOpenCV}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border text-xs font-mono transition-all ${
                theme === 'emerald'
                  ? 'bg-[#091A13] border-[#C5A36A]/50 text-[#C5A36A]'
                  : 'bg-slate-900 border-cyan-500/30 text-cyan-400'
              }`}
              title="Toggle Theme"
            >
              <Palette className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-cyan-500/60">#</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border text-xs font-mono transition-all ${
                theme === 'emerald'
                  ? 'bg-[#091A13] border-[#C5A36A]/50 text-[#C5A36A]'
                  : 'bg-slate-900 border-cyan-500/30 text-cyan-400'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Theme: {theme === 'emerald' ? 'Emerald & Champagne Gold' : 'Cyber Neon'}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm font-mono uppercase tracking-wider"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
