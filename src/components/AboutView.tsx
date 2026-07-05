import React, { useState } from 'react';
import { Certification } from '../types';
import { CERTIFICATIONS } from '../data';
import { 
  Award, BookOpen, Compass, ShieldAlert, CheckCircle, 
  ChevronRight, Calendar, MapPin, Sparkles, BookMarked,
  Layers, Hammer, Cpu, Terminal, X, ExternalLink
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: 'home' | 'about' | 'projects' | 'work' | 'connect') => void;
  isDarkMode: boolean;
}

export default function AboutView({ onNavigate, isDarkMode }: AboutViewProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const skillsList = [
    { name: 'Core Web Development', level: 95, desc: 'Optimizing render times, responsive grid configurations, and client state management setups.' },
    { name: 'Frontend Engineering', level: 92, desc: 'Modern React patterns, hooks, and clean components with Lucide-react and motion/react animations.' },
    { name: 'Full-Stack Integration', level: 90, desc: 'Constructing Express APIs, database queries, routing logic, and backend security flows.' },
    { name: 'Algorithm Design', level: 88, desc: 'Proficient in data structures, time complexity analysis, and algorithmic optimization.' }
  ];

  const currentLearnings = [
    { subject: 'Rust systems programming', status: 'In Progress', progress: 72 },
    { subject: 'Distributed Vector databases (Pinecone, pgvector)', status: 'In Progress', progress: 55 },
    { subject: 'Wasm compiling pipelines', status: 'Completed', progress: 100 }
  ];

  const coreValues = [
    { title: 'Absolute Pixel Fidelity', desc: 'No approximations. Borders, spacing, and font sizes must conform strictly to elegant layout guidelines.' },
    { title: 'Responsive Resilience', desc: 'Interfaces must adapt beautifully on ultra-wide screens as well as small touch viewports.' },
    { title: 'Zero Unrequested Over-engineering', desc: 'Complexity is a failure metric. We build standard, robust, performant components with pure focus.' }
  ];

  return (
    <div className="space-y-16 animate-fadeIn">
      
      {/* 1. PERSONAL INTRODUCTION */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">01 • Personal Engine</span>
          <h2 className={`text-3xl font-display font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>The developer behind the layouts.</h2>
          <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
            I am Mrunali Kale, a Computer Science student and full-stack developer. I view the web browser not merely as a presentation viewport, but as a fully capable native runtime environment. 
          </p>
          <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
            My engineering practice centers on building clean application flows. Rather than pasting together heavy, unvetted scripts, I construct core state structures, layout transitions, and clean API connectors from primitive foundations.
          </p>
        </div>

        {/* Bento values highlight */}
        <div className={`border rounded-xl p-5 space-y-4 transition-all duration-300 ${
          isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">Primary Indicators</span>
          <div className={`space-y-3.5 text-xs font-sans transition-colors ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isDarkMode ? 'bg-white' : 'bg-zinc-950'}`} />
              <span>Based in: SF Bay Area, CA (Student)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isDarkMode ? 'bg-white' : 'bg-zinc-950'}`} />
              <span>Specialty: Custom Full-Stack Web Apps</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isDarkMode ? 'bg-white' : 'bg-zinc-950'}`} />
              <span>Design Influence: Swiss typographic grids</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC SKILLS ASSESSMENT */}
      <section className="space-y-6">
        <div className={`border-b pb-3 transition-colors duration-300 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">02 • Capability Metrics</span>
          <h3 className={`text-lg font-semibold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Core Competencies & Capabilities</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsList.map((skill) => (
            <div key={skill.name} className={`p-5 border rounded-xl space-y-3 transition-all duration-300 ${
              isDarkMode ? 'bg-zinc-950/60 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
            }`}>
              <div className="flex justify-between items-center">
                <span className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>{skill.name}</span>
                <span className="font-mono text-[10px] text-zinc-500">{skill.level}% Academic Proficiency</span>
              </div>
              <div className={`h-1 w-full rounded-full overflow-hidden transition-colors ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                <div className={`h-full rounded-full transition-all duration-1000 ${isDarkMode ? 'bg-white' : 'bg-zinc-800'}`} style={{ width: `${skill.level}%` }} />
              </div>
              <p className={`text-[11px] leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CONTINUOUS SCROLLING CERTIFICATIONS (MANDATORY RULE) */}
      <section className="space-y-4">
        <div className={`flex items-center justify-between border-b pb-3 transition-colors duration-300 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
          <div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">03 • Continued Development</span>
            <h3 className={`text-lg font-semibold tracking-tight flex items-center gap-2 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              <Award className="w-4 h-4 text-amber-400" /> Learning Never Stops
            </h3>
          </div>
          <span className="text-[10px] font-mono text-zinc-500">
            Total Certifications: {CERTIFICATIONS.length}
          </span>
        </div>

        <p className={`text-xs transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Click on any scrolling card below to expand the direct credential validation parameters in a focused modal interface.
        </p>

        {/* Infinite Scrolling Marquee frame */}
        <div className={`relative overflow-hidden w-full py-5 border rounded-2xl transition-all duration-300 ${
          isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <div className="animate-scroll flex gap-4 pr-4">
            {/* Double duplicate array to allow continuous seamless loop */}
            {[...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                onClick={() => setSelectedCert(cert)}
                className={`flex-shrink-0 w-64 p-4 rounded-xl cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between h-28 ${
                  isDarkMode 
                    ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700' 
                    : 'bg-zinc-50 border-zinc-200 hover:border-zinc-350 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <span className={`text-[10px] font-semibold font-mono truncate max-w-[140px] ${
                      isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {cert.issuer}
                    </span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                      isDarkMode ? 'bg-zinc-950 text-zinc-500' : 'bg-white text-zinc-500 border border-zinc-200/55'
                    }`}>
                      {cert.date}
                    </span>
                  </div>
                  <h4 className={`text-xs font-semibold mt-1.5 line-clamp-2 leading-tight transition-colors ${
                    isDarkMode ? 'text-white' : 'text-zinc-800'
                  }`}>
                    {cert.title}
                  </h4>
                </div>
                <div className={`flex items-center justify-between text-[10px] font-mono border-t pt-1.5 ${
                  isDarkMode ? 'border-zinc-900 text-zinc-400' : 'border-zinc-200 text-zinc-600'
                }`}>
                  <span className="text-zinc-500">ID validation</span>
                  <span className={`flex items-center gap-1 hover:underline ${isDarkMode ? 'text-white' : 'text-zinc-800 font-semibold'}`}>
                    Inspect <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE TIMELINE */}
      <section className="space-y-6">
        <div className={`border-b pb-3 transition-colors duration-300 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">04 • Student Journeys</span>
          <h3 className={`text-lg font-semibold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Academic & Project History</h3>
        </div>

        <div className={`space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 transition-all ${
          isDarkMode ? 'before:bg-zinc-900' : 'before:bg-zinc-200'
        }`}>
          
          <div className="relative pl-8 group">
            <span className={`absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full border transition-all ${
              isDarkMode ? 'bg-white border-zinc-950' : 'bg-zinc-900 border-white'
            }`} />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Computer Science Teaching Assistant • Department of Computer Science</h4>
              <span className="text-[10px] font-mono text-zinc-500">2024 - Present • San Francisco Bay Area, CA</span>
            </div>
            <p className={`text-xs mt-1 leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Support over 120 undergraduates in object-oriented programming, data structures, and algorithms. Built automated testing scripts and autograders to streamline assignment valuations.
            </p>
          </div>

          <div className="relative pl-8 group">
            <span className={`absolute left-2 top-2 w-2.5 h-2.5 rounded-full transition-all ${
              isDarkMode ? 'bg-zinc-800' : 'bg-zinc-300'
            }`} />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Full-Stack Software Engineering Intern • Student Technology Center</h4>
              <span className="text-[10px] font-mono text-zinc-500">2023 - 2024 • San Francisco Bay Area, CA</span>
            </div>
            <p className={`text-xs mt-1 leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Constructed responsive campus portal dashboards, designed database schemas in Postgres, and optimized API payloads, enhancing student navigation speed and system reliability.
            </p>
          </div>

          <div className="relative pl-8 group">
            <span className={`absolute left-2 top-2 w-2.5 h-2.5 rounded-full transition-all ${
              isDarkMode ? 'bg-zinc-800' : 'bg-zinc-300'
            }`} />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Lead Developer & Club Officer • Student Coding Club</h4>
              <span className="text-[10px] font-mono text-zinc-500">2022 - 2023 • San Francisco Bay Area, CA</span>
            </div>
            <p className={`text-xs mt-1 leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Led collegiate developer teams to construct open-source utility tools. Conducted weekly student workshops on modern React patterns, styling, and standard web structures.
            </p>
          </div>

        </div>
      </section>

      {/* 5. PERSONAL VALUES & BEYOND CODING */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Core Values */}
        <div className={`p-6 border rounded-xl space-y-4 transition-all duration-300 ${
          isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <h4 className={`text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-700'
          }`}>
            <Layers className="w-4 h-4" /> Core Learning & Coding Values
          </h4>
          <div className="space-y-4">
            {coreValues.map((val) => (
              <div key={val.title} className="space-y-1">
                <h5 className={`text-xs font-semibold flex items-center gap-2 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>
                  <span className={`w-1 h-1 rounded-full inline-block ${isDarkMode ? 'bg-white' : 'bg-zinc-800'}`} /> {val.title}
                </h5>
                <p className={`text-[11px] leading-relaxed pl-3 transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Learnings & Beyond Coding */}
        <div className={`p-6 border rounded-xl space-y-4 transition-all duration-300 ${
          isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <h4 className={`text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-700'
          }`}>
            <BookMarked className="w-4 h-4" /> Active R&D Sandbox
          </h4>
          <div className={`space-y-3.5 text-xs transition-colors ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
            {currentLearnings.map((learn) => (
              <div key={learn.subject} className="space-y-1.5">
                <div className="flex justify-between items-center text-[11px]">
                  <span className={`transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800 font-semibold'}`}>{learn.subject}</span>
                  <span className="text-[10px] font-mono text-zinc-500">{learn.progress}%</span>
                </div>
                <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                  <div className={`h-full rounded-full ${isDarkMode ? 'bg-zinc-400' : 'bg-zinc-800'}`} style={{ width: `${learn.progress}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className={`border-t pt-4 space-y-2 ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
            <h5 className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-bold">Beyond the Terminal</h5>
            <p className={`text-[11px] leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              When my screens are dark, I am assembling custom mechanical keyboards, capturing architectural layouts in my sketchbook, and reading textbooks on typography and Swiss grid systems.
            </p>
          </div>
        </div>

      </section>

      {/* CERTIFICATION DETAIL MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-sm animate-fadeIn">
          <div className={`relative w-full max-w-md rounded-2xl p-6 space-y-4 shadow-2xl border transition-all duration-300 ${
            isDarkMode ? 'bg-[#121212] border-zinc-850' : 'bg-white border-zinc-200'
          }`}>
            <button 
              onClick={() => setSelectedCert(null)}
              className={`absolute top-4 right-4 p-1 rounded-md border cursor-pointer transition-colors ${
                isDarkMode 
                  ? 'text-zinc-500 hover:text-white bg-zinc-900 border-zinc-800' 
                  : 'text-zinc-500 hover:text-zinc-900 bg-zinc-100 border-zinc-200'
              }`}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1 pt-2">
              <span className="text-[9px] font-mono bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded-full uppercase font-semibold">
                Verified Credential Spec
              </span>
              <h3 className={`text-base font-display font-bold tracking-tight mt-2 transition-colors ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}>
                {selectedCert.title}
              </h3>
              <p className="text-xs text-zinc-500 font-mono">Issued by: {selectedCert.issuer}</p>
            </div>

            <div className={`p-4 border rounded-lg text-xs font-mono space-y-2 transition-colors duration-300 ${
              isDarkMode ? 'bg-zinc-950 border-zinc-900 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
            }`}>
              <div className={`text-[10px] border-b pb-1 font-semibold uppercase ${
                isDarkMode ? 'text-zinc-500 border-zinc-900' : 'text-zinc-400 border-zinc-200'
              }`}>Validation Signatures</div>
              <div><span className="text-zinc-500">Issue Date:</span> {selectedCert.date}</div>
              <div><span className="text-zinc-500">Security Signature:</span> SHA-256 Verified</div>
              <div><span className="text-zinc-500">Validation URI:</span> {selectedCert.credentialUrl}</div>
              <div><span className="text-zinc-500">Status Check:</span> ACTIVE ✓</div>
            </div>

            <div className="flex gap-2 pt-2">
              <a 
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-2 text-center text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all ${
                  isDarkMode 
                    ? 'bg-white text-zinc-950 hover:bg-zinc-200' 
                    : 'bg-zinc-950 text-white hover:bg-zinc-850'
                }`}
              >
                <span>Validate Credential Record</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button 
                onClick={() => setSelectedCert(null)}
                className={`py-2 px-4 text-xs font-semibold rounded-lg border transition-all ${
                  isDarkMode 
                    ? 'bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800' 
                    : 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200 shadow-2xs'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
