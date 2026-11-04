import React from 'react';
import { STATS } from '../data/portfolioData';
import { Server, Cpu, Database, Layers, CheckCircle2, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const competencies = [
    {
      title: "Full-Stack Architecture",
      icon: Layers,
      description: "Designing end-to-end applications connecting modern React/TypeScript frontends with enterprise microservice backends.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Spring Boot Enterprise",
      icon: Server,
      description: "Developing robust Java REST APIs, JPA/Hibernate data access layers, and JWT authentication services.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "ASP.NET Core 8 & C#",
      icon: Cpu,
      description: "Building scalable C# Web APIs, Entity Framework ORM integration, and clean modular code architectures.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Database Engineering",
      icon: Database,
      description: "Proficient in PostgreSQL, MySQL, and SQL Server schema design, indexing, and complex query performance tuning.",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#070a13] border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            // About & Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Turning Coursework Into <span className="text-cyan-400">Shipped Software.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Software Engineering Undergraduate at NSBM Green University with a focus on building resilient, maintainable, and user-centric applications.
          </p>
        </div>

        {/* Live Stat Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-cyan-500/20 text-center relative overflow-hidden group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-cyan-400 cyan-glow-text">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm font-semibold text-white mt-2 font-heading">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-mono">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Story & Competencies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 items-stretch">
          
          {/* Detailed Bio Card (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">Engineering Journey</h3>
                  <p className="text-xs font-mono text-cyan-400">Dhilshan Mohamed S.E.</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                As a 3rd-year Software Engineering student at NSBM Green University (2025–2028), I view coding not just as a set of assignments, but as an opportunity to build solutions that solve real-world problems.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                My primary expertise lies in **Java Spring Boot**, **ASP.NET Core 8**, and modern **React with TypeScript**. Whether architecting relational databases or refining UI micro-interactions, I focus on write-once, scale-forever code.
              </p>
            </div>

            {/* Quick Highlights List */}
            <div className="space-y-2 pt-4 border-t border-slate-800/80 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Focus: Scalable Enterprise Backends & Modern Web UIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Methodology: Agile, Clean Code, CI/CD Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Creative Venture: Founder & Lead @ DD PHOTOGRAPHY 95</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Goal: Full-Stack Internship in Software Engineering</span>
              </div>
            </div>
          </div>

          {/* Competency Cards Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {competencies.map((comp, idx) => {
              const IconComp = comp.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-cyan-500/15 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl bg-linear-to-r ${comp.color} text-slate-950 shadow-md`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white mt-4 font-heading">
                      {comp.title}
                    </h4>

                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {comp.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                    <span>Verified Skill</span>
                    <span>100% Core</span>
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
