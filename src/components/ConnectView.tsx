import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Instagram, Youtube, MapPin, 
  Clock, Download, Copy, Check, QrCode, Globe, Sparkles 
} from 'lucide-react';

interface ConnectViewProps {
  isDarkMode: boolean;
}

export default function ConnectView({ isDarkMode }: ConnectViewProps) {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  // Live local UTC time clock updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mrunali.kale.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResumeDownload = () => {
    // Elegant download simulation sequence without invasive alert() blocking the iframe
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
    
    // Create a client-side text-based mock resume to let them actually download a clean file
    const resumeContent = `MRUNALI KALE - RESUME (SIMULATED PAYLOAD)\nEmail: mrunali.kale.dev@gmail.com\nProfile: Computer Science Student & Developer\nURL: https://github.com/mrunali-kale\n\n[Education]\nBS in Computer Science (Ongoing)\n\n[Projects]\n1. PulseDB - Lightweight Local Vector Database\n2. AuroraCompiler - Custom Subset C-to-Assembly Compiler\n3. SwissNotes - Hierarchical Canvas Note Manager`;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Mrunali_Kale_Resume.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactCards = [
    {
      name: 'Secure Mail',
      value: 'mrunali.kale.dev@gmail.com',
      desc: 'For academic inquiries, collaborative engineering scopes, and student team ups.',
      icon: <Mail className="w-5 h-5 text-indigo-400" />,
      actionLabel: 'Copy Address',
      action: handleCopyEmail,
      copyIcon: copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />
    },
    {
      name: 'LinkedIn Network',
      value: 'linkedin.com/in/mrunali-kale',
      desc: 'For professional networking, academic publications, and university updates.',
      icon: <Linkedin className="w-5 h-5 text-sky-400" />,
      actionLabel: 'Visit Profile',
      action: () => window.open('https://linkedin.com', '_blank')
    },
    {
      name: 'GitHub Repositories',
      value: 'github.com/mrunali-kale',
      desc: 'Active study repository code structures, lab assignments, and student contributions.',
      icon: <Github className={`w-5 h-5 ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`} />,
      actionLabel: 'Review Repositories',
      action: () => window.open('https://github.com', '_blank')
    }
  ];

  const socialNetworkCards = [
    {
      name: 'Academic Study Logbook',
      value: 'YouTube channel',
      desc: 'Video journals on algorithm mechanics, runtime structures, and system modeling labs.',
      metric: 'Study Log',
      icon: <Youtube className="w-5 h-5 text-rose-500" />
    },
    {
      name: 'Creative Logbook',
      value: 'Instagram Grid',
      desc: 'Urban design snapshots, custom keyboard schematics, and study setups.',
      metric: 'Creative Log',
      icon: <Instagram className="w-5 h-5 text-pink-500" />
    }
  ];

  return (
    <div className="space-y-16 animate-fadeIn max-w-4xl mx-auto">
      
      {/* Page Header */}
      <div className="space-y-3">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">04 • Connected Nodes</span>
        <h2 className={`text-3xl font-display font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>The Communication Terminal</h2>
        <p className={`text-sm leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
          Access my primary networks directly. Use the digital business cards below to copy secure endpoints, retrieve my resume payload, or review active study logs.
        </p>
      </div>

      {/* 1. DIGITAL BUSINESS CARD & QR CODE Bento block */}
      <section className={`grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-sm'
      }`}>
        
        {/* Profile Card details */}
        <div className="md:col-span-2 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded-full font-semibold border ${
                isDarkMode 
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                  : 'bg-emerald-50 border-emerald-200 text-emerald-600'
              }`}>
                ● Active Student & Developer
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className={`text-2xl font-display font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Mrunali Kale</h3>
              <p className={`text-xs font-mono transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600 font-semibold'}`}>Computer Science Student & Full-Stack Developer</p>
            </div>

            <div className={`space-y-2 text-xs transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              <div className="flex items-center gap-2 text-[11px]">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>San Francisco Bay Area, CA (Student Placement)</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span>Local Chrono: {timeStr || 'Fetching...'}</span>
              </div>
            </div>
          </div>

          <div className={`flex flex-wrap gap-2.5 pt-4 border-t transition-colors ${isDarkMode ? 'border-zinc-900/60' : 'border-zinc-100'}`}>
            <button
              onClick={handleResumeDownload}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
                isDarkMode 
                  ? 'bg-white text-zinc-950 hover:bg-zinc-100' 
                  : 'bg-zinc-950 text-white hover:bg-zinc-850 shadow-xs'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>{downloaded ? 'Payload Generated!' : 'Download Resume TXT'}</span>
            </button>
            <button
              onClick={handleCopyEmail}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
                isDarkMode 
                  ? 'bg-zinc-900 hover:bg-zinc-850 text-white border-zinc-800' 
                  : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-850 border-zinc-200 shadow-2xs'
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-500" />}
              <span>{copied ? 'Email Copied!' : 'Copy Direct Email'}</span>
            </button>
          </div>
        </div>

        {/* Real-time styled QR Code block */}
        <div className={`border rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-4 transition-all ${
          isDarkMode ? 'bg-[#0b0b0b] border-zinc-900' : 'bg-zinc-50/50 border-zinc-200'
        }`}>
          <div className="p-3 bg-white rounded-lg inline-block shadow-2xs border border-zinc-150">
            {/* Visual simulation of high-density QR Code */}
            <QrCode className="w-24 h-24 text-zinc-950" />
          </div>
          <div className="space-y-1">
            <span className={`text-[10px] font-mono block font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>VCARD PORTABLE SIGNAL</span>
            <p className={`text-[9px] max-w-[160px] mx-auto leading-normal transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
              Scan using a mobile viewport to immediately resolve coordinates into contact logs.
            </p>
          </div>
        </div>

      </section>

      {/* 2. DIRECT SOCIAL NETWORKS & ENDPOINTS */}
      <section className="space-y-6">
        <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">Primary Connected Endpoints</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactCards.map((card) => (
            <div 
              key={card.name}
              className={`border p-5 rounded-xl space-y-4 flex flex-col justify-between transition-all duration-300 ${
                isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className={`p-2 border rounded-lg inline-block transition-colors ${
                  isDarkMode ? 'bg-zinc-900/60 border-zinc-850' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  {card.icon}
                </div>
                <div className="space-y-1">
                  <h4 className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{card.name}</h4>
                  <p className={`text-[11px] leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{card.desc}</p>
                </div>
              </div>

              <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono transition-colors ${
                isDarkMode ? 'border-zinc-900/60' : 'border-zinc-100'
              }`}>
                <span className="text-zinc-500 truncate max-w-[120px]">{card.value}</span>
                <button
                  onClick={card.action}
                  className={`hover:underline flex items-center gap-1 cursor-pointer font-semibold transition-colors ${
                    isDarkMode ? 'text-white' : 'text-zinc-950'
                  }`}
                >
                  <span>{card.actionLabel}</span>
                  {card.copyIcon}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BEYOND CODING - OTHER PLATFORMS */}
      <section className="space-y-6">
        <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">Secondary Content Registries</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialNetworkCards.map((network) => (
            <div 
              key={network.name}
              className={`border p-5 rounded-xl flex items-start gap-4 transition-all duration-300 ${
                isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
              }`}
            >
              <div className={`p-2.5 border rounded-lg transition-colors ${
                isDarkMode ? 'bg-zinc-900 border-zinc-850' : 'bg-zinc-50 border-zinc-200'
              }`}>
                {network.icon}
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex justify-between items-center">
                  <h4 className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{network.name}</h4>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded transition-colors ${
                    isDarkMode ? 'bg-zinc-900 text-zinc-500' : 'bg-zinc-100 text-zinc-600'
                  }`}>
                    {network.metric}
                  </span>
                </div>
                <p className={`text-[11px] leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {network.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROFESSIONAL CLOSING */}
      <section className={`text-center pt-8 border-t max-w-xl mx-auto space-y-4 transition-colors duration-300 ${
        isDarkMode ? 'border-zinc-900/60' : 'border-zinc-200'
      }`}>
        <p className={`text-xs italic leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
          "Simplicity is the consequence of structured thinking. Let's build something with lasting value."
        </p>
        <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">
          Constructed with absolute pixel-fidelity • Q3 2026
        </div>
      </section>

    </div>
  );
}
