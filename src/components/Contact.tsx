import React, { useState } from 'react';
import { sendContactEmail } from '../services/emailjs';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, Camera } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    sendContactEmail(formData)
      .then(
        () => {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 6000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
          setErrorMessage('Failed to send message. Please try again later.');
        }
      );
  };

  const contactLinks = [
    {
      title: "Direct Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/60"
    },
    {
      title: "LinkedIn Profile",
      value: "dhilshan-mohamed",
      href: PERSONAL_INFO.linkedin,
      icon: LinkedinIcon,
      color: "text-blue-400 border-blue-500/30 bg-blue-950/60"
    },
    {
      title: "GitHub Repositories",
      value: "github.com/Dhilshan02",
      href: PERSONAL_INFO.github,
      icon: GithubIcon,
      color: "text-purple-400 border-purple-500/30 bg-purple-950/60"
    },
    {
      title: "Facebook",
      value: "dhilshan.mhd",
      href: PERSONAL_INFO.facebook,
      icon: FacebookIcon,
      color: "text-blue-500 border-blue-500/30 bg-blue-950/60"
    },
    {
      title: "Instagram",
      value: "@dhilshan_mhd",
      href: PERSONAL_INFO.instagram,
      icon: InstagramIcon,
      color: "text-pink-400 border-pink-500/30 bg-pink-950/60"
    },
    {
      title: "Photo Studio",
      value: PERSONAL_INFO.photoStudio,
      href: PERSONAL_INFO.facebook,
      icon: Camera,
      color: "text-amber-400 border-amber-500/30 bg-amber-950/60"
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#070a13] border-t border-slate-900">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            // Initiate Connection
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you have an internship opportunity, project inquiry, or technical question — let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 items-start">
          
          {/* Quick Contact Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white font-heading mb-4">
              Direct Channels
            </h3>

            {contactLinks.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="glass-panel glass-panel-hover p-4 rounded-xl border flex items-center gap-4 transition-all group"
                >
                  <div className={`p-3 rounded-xl border ${item.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">{item.title}</span>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors font-mono">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Availability Box */}
            <div className="glass-panel p-5 rounded-xl border border-cyan-500/30 mt-6">
              <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Internship Readiness Notice
              </h4>
              <p className="text-xs text-slate-300 mt-2 font-mono leading-relaxed">
                Available for Software Engineering & Full-Stack Development internships (3rd Year, 2025-2028). Ready to contribute to backend APIs, frontend applications, and agile developer teams.
              </p>
            </div>
          </div>

          {/* Interactive Glass Contact Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white font-heading mb-2">
              Send a Transmission
            </h3>
            <p className="text-xs font-mono text-cyan-400 mb-6">
              Integrated with client validation & message dispatcher logic
            </p>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3 animate-in fade-in duration-300 font-mono">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Message Transmitted Successfully!</p>
                  <p className="text-xs text-emerald-400/80 mt-1">
                    Thank you for reaching out, Dhilshan Mohamed will reply to your email shortly.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-sm flex items-center gap-3 font-mono">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 placeholder:text-slate-500 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@techcorp.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 placeholder:text-slate-500 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineering Internship Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 placeholder:text-slate-500 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 placeholder:text-slate-500 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-linear-to-r from-cyan-500 via-teal-400 to-cyan-400 text-slate-950 font-bold font-mono text-sm uppercase tracking-wider hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Encrypting & Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
