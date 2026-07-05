import React, { useState } from 'react';
import { 
  CheckCircle, ArrowRight, ArrowLeft, Upload, FileText, 
  HelpCircle, User, Mail, Building, Laptop, DollarSign, Calendar
} from 'lucide-react';

interface WorkViewProps {
  isDarkMode: boolean;
}

export default function WorkView({ isDarkMode }: WorkViewProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orgType: 'Startup', // Startup, Enterprise, Agency
    projectType: 'Full-Stack Web App', // Full-Stack, Frontend, Technical Advising
    projectSize: 'Medium Scale', // Small, Medium, Enterprise-grade
    teamSize: '1-3 Engineers', // Solo, 1-3, 5+
    role: 'Lead Architect', // Lead, Advisor, Solo Developer
    description: '',
    timeline: '1-3 Months', // <1 Month, 1-3 Months, 3-6 Months, Long-term
    budget: '$10k - $25k', // <$10k, $10k-$25k, $25k-$50k, $50k+
    referenceLinks: '',
    preferredContact: 'Email', // Email, Video Call, Slack
    fileName: '' // Simulated document upload filename
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(prev => prev + 1);
    } else {
      // Final Submit
      setIsSuccess(true);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, fileName: file.name }));
    }
  };

  const services = [
    { title: 'Full-Stack Construction', desc: 'Crafting fully unified end-to-end applications from scratch, deploying optimized structures & APIs.' },
    { title: 'Performance Optimization', desc: 'Diagnosing heavy browser render loops, resolving memory leaks, and tuning state updates.' },
    { title: 'Interactive Interface Design', desc: 'Designing custom responsive visual layouts that mirror modern Notion and Linear standards.' }
  ];

  const processSteps = [
    { num: '01', title: 'Deep Discovery', desc: 'We map raw project requirements, user interfaces, and technical parameters.' },
    { num: '02', title: 'System Blueprinting', desc: 'Drafting state structures, code module layouts, and typography grids.' },
    { num: '03', title: 'Incremental Delivery', desc: 'Bi-weekly progressive updates with clean lints & live simulation links.' }
  ];

  return (
    <div className="space-y-16 animate-fadeIn max-w-4xl mx-auto">
      
      {/* 1. INTRODUCTION HERO */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">03 • Collaborative Lab</span>
          <h2 className={`text-3xl font-display font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Constructing software together.</h2>
          <p className={`text-xs leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
            I partner with forward-thinking developers, student peers, and project advisors to turn ideas into resilient software architectures. I bring clean coding discipline, Swiss design aesthetics, and structured progress timelines.
          </p>
        </div>

        <div className={`p-5 border rounded-xl space-y-3 flex flex-col justify-between transition-all duration-300 ${
          isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <div>
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block font-semibold">LAB BANDWIDTH</span>
            <div className={`text-xs font-semibold mt-1 flex items-center gap-1.5 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Available for Student Partnerships
            </div>
          </div>
          <p className={`text-[10px] leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
            I maintain structured study limits to ensure that each active collaboration receives my complete focus and highest standard of delivery.
          </p>
        </div>
      </section>

      {/* 2. SERVICES & DEVELOPMENT PROCESS */}
      <section className={`grid grid-cols-1 md:grid-cols-2 gap-8 border-y py-10 transition-colors duration-300 ${
        isDarkMode ? 'border-zinc-900' : 'border-zinc-200'
      }`}>
        {/* Services */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">Provided Specializations</h3>
          <div className="space-y-4">
            {services.map((serv) => (
              <div key={serv.title} className="space-y-1">
                <h4 className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{serv.title}</h4>
                <p className={`text-[11px] leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{serv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">The Development Rhythm</h3>
          <div className="space-y-4">
            {processSteps.map((pStep) => (
              <div key={pStep.num} className="flex gap-4 items-start">
                <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border transition-colors ${
                  isDarkMode 
                    ? 'text-zinc-500 bg-zinc-900 border-zinc-850' 
                    : 'text-zinc-600 bg-zinc-100 border-zinc-250 shadow-2xs'
                }`}>
                  {pStep.num}
                </span>
                <div className="space-y-1">
                  <h4 className={`text-xs font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{pStep.title}</h4>
                  <p className={`text-[11px] leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{pStep.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MULTI-STEP PROJECT INQUIRY FORM */}
      <section className="space-y-6">
        <div className="space-y-1 text-center">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Inquiry Pipeline</span>
          <h3 className={`text-lg font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Initiate a Project Engagement</h3>
          <p className={`text-xs max-w-lg mx-auto leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
            Specify your product criteria using this structured multi-step wizard. I will analyze your parameters and follow up with a detailed execution proposal.
          </p>
        </div>

        <div className={`border rounded-2xl max-w-2xl mx-auto overflow-hidden transition-all duration-300 ${
          isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-sm'
        }`}>
          {/* Progress Indicators */}
          {!isSuccess && (
            <div className={`flex border-b text-[10px] font-mono transition-all duration-300 divide-x ${
              isDarkMode 
                ? 'border-zinc-900 text-zinc-500 bg-[#0c0c0c] divide-zinc-900' 
                : 'border-zinc-200 text-zinc-500 bg-zinc-50/50 divide-zinc-200'
            }`}>
              <div className={`flex-1 p-3 text-center ${step === 1 ? isDarkMode ? 'text-white font-semibold bg-zinc-900/30' : 'text-zinc-950 font-semibold bg-white' : ''}`}>1. Client</div>
              <div className={`flex-1 p-3 text-center ${step === 2 ? isDarkMode ? 'text-white font-semibold bg-zinc-900/30' : 'text-zinc-950 font-semibold bg-white' : ''}`}>2. Scope</div>
              <div className={`flex-1 p-3 text-center ${step === 3 ? isDarkMode ? 'text-white font-semibold bg-zinc-900/30' : 'text-zinc-950 font-semibold bg-white' : ''}`}>3. Team & Budget</div>
              <div className={`flex-1 p-3 text-center ${step === 4 ? isDarkMode ? 'text-white font-semibold bg-zinc-900/30' : 'text-zinc-950 font-semibold bg-white' : ''}`}>4. Details</div>
            </div>
          )}

          {/* Form Content Body */}
          <div className="p-6 md:p-8">
            {isSuccess ? (
              /* SUCCESS STATE SCREEN */
              <div className="text-center py-8 space-y-5 animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className={`text-sm font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Inquiry Successfully Queued</h4>
                  <p className={`text-xs max-w-md mx-auto leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                    Thank you, <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-zinc-950'}`}>{formData.name}</span>! Your detailed project parameters have been securely stored. I am analyzing the scope and will reach out to you via <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-zinc-950'}`}>{formData.email}</span> within 24 business hours to set up our collaboration session.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => { setIsSuccess(false); setStep(1); setFormData(prev => ({ ...prev, name: '', email: '', description: '', fileName: '' })); }}
                    className={`px-4 py-2 border rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      isDarkMode 
                        ? 'bg-zinc-900 hover:bg-zinc-850 text-white border-zinc-800' 
                        : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-850 border-zinc-200 shadow-2xs'
                    }`}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* ACTIVE STEP FORMS */
              <div className="space-y-6">
                
                {/* STEP 1: Personal & Org Information */}
                {step === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">Step 1 • Identity & Organization</h4>
                    
                    <div className="space-y-1.5">
                      <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>What is your Name? *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name (e.g. David Vance)"
                          className={`w-full rounded-lg py-2 pl-9 pr-4 text-xs outline-hidden transition-all ${
                            isDarkMode 
                              ? 'bg-zinc-900 border border-zinc-850 focus:border-zinc-700 text-white placeholder-zinc-500' 
                              : 'bg-zinc-50 border border-zinc-250 focus:border-zinc-400 text-zinc-900 placeholder-zinc-450'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Your Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Your primary email address (e.g. david@saas.com)"
                          className={`w-full rounded-lg py-2 pl-9 pr-4 text-xs outline-hidden transition-all ${
                            isDarkMode 
                              ? 'bg-zinc-900 border border-zinc-850 focus:border-zinc-700 text-white placeholder-zinc-500' 
                              : 'bg-zinc-50 border border-zinc-250 focus:border-zinc-400 text-zinc-900 placeholder-zinc-450'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Organization Structure</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Startup', 'Enterprise', 'Design Agency'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleInputChange('orgType', type)}
                            className={`p-3 text-center border rounded-lg transition-all text-xs cursor-pointer ${
                              formData.orgType === type 
                                ? isDarkMode 
                                  ? 'bg-white text-zinc-950 border-white font-semibold' 
                                  : 'bg-zinc-950 text-white border-zinc-950 font-semibold shadow-xs' 
                                : isDarkMode 
                                  ? 'bg-zinc-900 text-zinc-400 border-zinc-850 hover:border-zinc-700' 
                                  : 'bg-zinc-50 text-zinc-650 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950 shadow-2xs'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Project Parameters */}
                {step === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">Step 2 • Architectural Targets</h4>

                    <div className="space-y-1.5">
                      <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Required Specialization</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {['Full-Stack Web App', 'Frontend Refactor', 'Architectural Consulting'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleInputChange('projectType', type)}
                            className={`p-3 text-left border rounded-lg transition-all text-xs cursor-pointer ${
                              formData.projectType === type 
                                ? isDarkMode 
                                  ? 'bg-white text-zinc-950 border-white font-semibold' 
                                  : 'bg-zinc-950 text-white border-zinc-950 font-semibold shadow-xs' 
                                : isDarkMode 
                                  ? 'bg-zinc-900 text-zinc-400 border-zinc-850 hover:border-zinc-700' 
                                  : 'bg-zinc-50 text-zinc-650 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950 shadow-2xs'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Estimated Project Scale</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Small Prototype', 'Medium Scale', 'Enterprise-grade'].map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => handleInputChange('projectSize', size)}
                            className={`p-3 text-center border rounded-lg transition-all text-xs cursor-pointer ${
                              formData.projectSize === size 
                                ? isDarkMode 
                                  ? 'bg-white text-zinc-950 border-white font-semibold' 
                                  : 'bg-zinc-950 text-white border-zinc-950 font-semibold shadow-xs' 
                                : isDarkMode 
                                  ? 'bg-zinc-900 text-zinc-400 border-zinc-850 hover:border-zinc-700' 
                                  : 'bg-zinc-50 text-zinc-650 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950 shadow-2xs'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Role, Expected Team & Budget */}
                {step === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">Step 3 • Engagement Roles & Budget</h4>

                    <div className="space-y-1.5">
                      <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Expected Engineering Team Size</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Solo Builder', '1-3 Engineers', '5+ Core Staff'].map((tSize) => (
                          <button
                            key={tSize}
                            type="button"
                            onClick={() => handleInputChange('teamSize', tSize)}
                            className={`p-3 text-center border rounded-lg transition-all text-xs cursor-pointer ${
                              formData.teamSize === tSize 
                                ? isDarkMode 
                                  ? 'bg-white text-zinc-950 border-white font-semibold' 
                                  : 'bg-zinc-950 text-white border-zinc-950 font-semibold shadow-xs' 
                                : isDarkMode 
                                  ? 'bg-zinc-900 text-zinc-400 border-zinc-850 hover:border-zinc-700' 
                                  : 'bg-zinc-50 text-zinc-650 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950 shadow-2xs'
                            }`}
                          >
                            {tSize}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>My Proposed Role</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Solo Developer', 'Lead Architect', 'Technical Advisor'].map((rl) => (
                          <button
                            key={rl}
                            type="button"
                            onClick={() => handleInputChange('role', rl)}
                            className={`p-3 text-center border rounded-lg transition-all text-xs cursor-pointer ${
                              formData.role === rl 
                                ? isDarkMode 
                                  ? 'bg-white text-zinc-950 border-white font-semibold' 
                                  : 'bg-zinc-950 text-white border-zinc-950 font-semibold shadow-xs' 
                                : isDarkMode 
                                  ? 'bg-zinc-900 text-zinc-400 border-zinc-850 hover:border-zinc-700' 
                                  : 'bg-zinc-50 text-zinc-650 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950 shadow-2xs'
                            }`}
                          >
                            {rl}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Expected Timeline</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className={`w-full rounded-lg py-2 px-3 text-xs outline-hidden transition-all ${
                            isDarkMode 
                              ? 'bg-zinc-900 border border-zinc-850 text-white focus:border-zinc-750' 
                              : 'bg-zinc-50 border border-zinc-250 text-zinc-900 focus:border-zinc-400'
                          }`}
                        >
                          <option value="< 1 Month">Under 1 Month (Fast Prototype)</option>
                          <option value="1-3 Months">1-3 Months (Standard Launch)</option>
                          <option value="3-6 Months">3-6 Months (Robust Application)</option>
                          <option value="Long-term partner">Long-term Retainer Integration</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Allocated Project Budget</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className={`w-full rounded-lg py-2 px-3 text-xs outline-hidden transition-all ${
                            isDarkMode 
                              ? 'bg-zinc-900 border border-zinc-850 text-white focus:border-zinc-750' 
                              : 'bg-zinc-50 border border-zinc-250 text-zinc-900 focus:border-zinc-400'
                          }`}
                        >
                          <option value="<$10k">Under $10,000</option>
                          <option value="$10k - $25k">$10,000 - $25,000</option>
                          <option value="$25k - $50k">$25,000 - $50,000</option>
                          <option value="$50k+">$50,000+ Enterprise Tier</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Description, reference & file upload simulation */}
                {step === 4 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">Step 4 • Context & Reference Parameters</h4>

                    <div className="space-y-1.5">
                      <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Project Description *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Briefly state the primary objective, targeted users, and absolute core issues we need to solve together..."
                        className={`w-full rounded-lg p-3 text-xs outline-hidden resize-none transition-all ${
                          isDarkMode 
                            ? 'bg-zinc-900 border border-zinc-850 focus:border-zinc-700 text-white placeholder-zinc-500' 
                            : 'bg-zinc-50 border border-zinc-250 focus:border-zinc-400 text-zinc-900 placeholder-zinc-450'
                        }`}
                      />
                    </div>

                    {/* Drag and Drop Document Upload simulator */}
                    <div className="space-y-1.5">
                      <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Reference Documents / Scope Specs (Optional)</label>
                      <div className={`border border-dashed rounded-lg p-4 text-center cursor-pointer transition-all relative ${
                        isDarkMode 
                          ? 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/30' 
                          : 'border-zinc-250 hover:border-zinc-350 bg-zinc-50 shadow-2xs'
                      }`}>
                        <input 
                          type="file" 
                          id="file-upload" 
                          onChange={handleSimulatedFileUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                        />
                        <Upload className="w-5 h-5 text-zinc-500 mx-auto mb-2" />
                        <span className={`text-[10px] font-mono block ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          {formData.fileName ? `✓ Loaded: ${formData.fileName}` : 'Drag & drop or click to upload PDF / DOC specifications'}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>External References (Figma / Web Links)</label>
                        <input
                          type="url"
                          value={formData.referenceLinks}
                          onChange={(e) => handleInputChange('referenceLinks', e.target.value)}
                          placeholder="e.g. figma.com/file/..."
                          className={`w-full rounded-lg py-2 px-3 text-xs outline-hidden transition-all ${
                            isDarkMode 
                              ? 'bg-zinc-900 border border-zinc-850 focus:border-zinc-700 text-white placeholder-zinc-500' 
                              : 'bg-zinc-50 border border-zinc-250 focus:border-zinc-400 text-zinc-900 placeholder-zinc-450'
                          }`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className={`text-[10px] font-mono uppercase block font-semibold ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Preferred Communication Channel</label>
                        <select
                          value={formData.preferredContact}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                          className={`w-full rounded-lg py-2 px-3 text-xs outline-hidden transition-all ${
                            isDarkMode 
                              ? 'bg-zinc-900 border border-zinc-850 text-white focus:border-zinc-750' 
                              : 'bg-zinc-50 border border-zinc-250 text-zinc-900 focus:border-zinc-400'
                          }`}
                        >
                          <option value="Email">Secure Email Thread</option>
                          <option value="Video Call">Google Meet / Zoom Session</option>
                          <option value="Slack">Dedicated Slack Channel Invite</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Navigation Buttons */}
                <div className={`flex justify-between items-center pt-4 border-t text-xs transition-colors duration-300 ${
                  isDarkMode ? 'border-zinc-900' : 'border-zinc-200'
                }`}>
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    disabled={step === 1}
                    className={`flex items-center gap-1.5 font-semibold py-2 px-4 rounded border transition-colors cursor-pointer ${
                      step === 1 
                        ? isDarkMode 
                          ? 'text-zinc-700 border-transparent cursor-not-allowed bg-transparent' 
                          : 'text-zinc-300 border-transparent cursor-not-allowed bg-transparent'
                        : isDarkMode 
                          ? 'text-zinc-400 border-zinc-850 hover:text-white hover:border-zinc-700 bg-zinc-900' 
                          : 'text-zinc-650 border-zinc-250 hover:text-zinc-900 hover:bg-zinc-100 bg-zinc-50 shadow-2xs'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Step</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={step === 1 && (!formData.name || !formData.email)}
                    className={`flex items-center gap-1.5 font-semibold py-2 px-5 rounded shadow-xs transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                      isDarkMode 
                        ? 'bg-white text-zinc-950 hover:bg-zinc-100' 
                        : 'bg-zinc-950 text-white hover:bg-zinc-850'
                    }`}
                  >
                    <span>{step === totalSteps ? 'Compile & Submit Parameters' : 'Advance Scope'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
