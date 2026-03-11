/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Cpu, 
  Youtube, 
  Heart, 
  FileText, 
  Github, 
  Linkedin,
  Menu,
  X,
  ChevronRight,
  Gamepad2,
  Trophy,
  Target,
  Zap,
  Dribbble
} from 'lucide-react';
import { PROFILE_DATA } from './constants';

type View = 'home' | 'experience' | 'education' | 'projects' | 'engineering' | 'interests' | 'awards' | 'qualifications';

export default function App() {
  const [activeView, setActiveView] = useState<View>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'awards', label: 'Awards', icon: Trophy },
    { id: 'qualifications', label: 'Certifications', icon: Zap },
    { id: 'projects', label: 'Projects', icon: Cpu },
    { id: 'interests', label: 'Extracurriculars', icon: Heart },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row technical-grid">
      <div className="scanline" />
      
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 border-b border-brand-border bg-brand-surface z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center text-brand-bg font-bold">AH</div>
          <span className="font-mono text-sm tracking-tighter uppercase">System.Amelia</span>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-accent">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed inset-0 lg:relative lg:inset-auto z-40
        w-full lg:w-64 bg-brand-surface border-r border-brand-border
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col p-6">
          <div className="hidden lg:flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-brand-accent rounded flex items-center justify-center text-brand-bg font-bold text-xl">AH</div>
            <div>
              <h1 className="font-mono text-[10px] font-bold tracking-widest uppercase text-brand-accent leading-tight">Amelia Hitchcock</h1>
              <p className="text-[9px] text-brand-muted uppercase tracking-tighter">Robotics Engineer</p>
            </div>
          </div>

          <div className="space-y-1 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id as View);
                  setIsMenuOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all
                  ${activeView === item.id 
                    ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20' 
                    : 'text-brand-muted hover:text-brand-text hover:bg-white/5'}
                `}
              >
                <item.icon size={14} />
                {item.label}
                {activeView === item.id && <motion.div layoutId="active-indicator" className="ml-auto w-1 h-1 bg-brand-accent rounded-full" />}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-brand-border space-y-3">
            <a href="https://linkedin.com/in/amelia-hitchcock/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] text-brand-muted hover:text-brand-accent transition-colors">
              <Linkedin size={12} /> LinkedIn
            </a>
            <a href="https://github.com/hitcha7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] text-brand-muted hover:text-brand-accent transition-colors">
              <Github size={12} /> GitHub
            </a>
            <a href="https://www.youtube.com/@amelia.hitchcock" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] text-brand-muted hover:text-brand-accent transition-colors">
              <Youtube size={12} /> YouTube
            </a>
            <a href={PROFILE_DATA.certificatesUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] text-brand-muted hover:text-brand-accent transition-colors">
              <Zap size={12} /> Certificates
            </a>
            <a href={PROFILE_DATA.resumeUrl} target="_blank" rel="noopener noreferrer" className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-brand-accent text-brand-bg rounded font-mono text-[9px] font-bold uppercase tracking-widest hover:brightness-110 transition-all">
              <FileText size={12} /> Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto p-6 lg:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {activeView === 'home' && <HomeView />}
            {activeView === 'experience' && <ExperienceView />}
            {activeView === 'education' && <EducationView />}
            {activeView === 'awards' && <AwardsView />}
            {activeView === 'qualifications' && <QualificationsView />}
            {activeView === 'projects' && <ProjectsView />}
            {activeView === 'interests' && <InterestsView />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function HomeView() {
  return (
    <div className="space-y-12">
      <header>
        <div className="inline-block px-2 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded text-[10px] font-mono text-brand-accent uppercase tracking-widest mb-4">
          Status: Online / System Active
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight">
          Robotics & Mechatronics <span className="text-brand-accent italic">Engineer</span>.
        </h2>
        <p className="text-lg text-brand-muted max-w-3xl leading-relaxed">
          {PROFILE_DATA.bio}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <div className="p-8 bg-brand-surface border border-brand-border rounded-2xl">
          <h3 className="font-mono text-xs text-brand-accent uppercase tracking-widest mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] font-mono text-brand-muted uppercase tracking-widest mb-3">Tools & Tech</h4>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.skills.technical.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-brand-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-mono text-brand-muted uppercase tracking-widest mb-3">Conceptual</h4>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.skills.conceptual.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-brand-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-mono text-brand-muted uppercase tracking-widest mb-3">Interpersonal</h4>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.skills.interpersonal.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-brand-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceView() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Relevant Experience</h2>
      <div className="space-y-12">
        {PROFILE_DATA.experience.map((exp, i) => (
          <div key={i} className="relative pl-8 border-l border-brand-border">
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-brand-accent font-mono text-sm mb-2">{exp.company}</p>
                <p className="text-brand-muted text-sm italic max-w-2xl mb-4">{exp.summary}</p>
              </div>
              <span className="text-xs font-mono text-brand-muted mt-2 md:mt-0 whitespace-nowrap">{exp.period}</span>
            </div>
            <ul className="space-y-2">
              {exp.description.map((item, j) => (
                <li key={j} className="text-brand-muted text-sm flex gap-3">
                  <ChevronRight size={14} className="text-brand-accent shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationView() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Education</h2>
      <div className="space-y-12">
        {PROFILE_DATA.education.map((edu, i) => (
          <div key={i} className="p-8 bg-brand-surface border border-brand-border rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={120} />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest mb-2 block">{edu.period}</span>
              <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
              <p className="text-brand-muted mb-6">{edu.institution}</p>
              <div className="space-y-2">
                {edu.details.map((detail, j) => (
                  <div key={j} className="text-sm text-brand-muted flex items-center gap-2">
                    <div className="w-1 h-1 bg-brand-accent rounded-full" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AwardsView() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Awards & Achievements</h2>
      <div className="grid grid-cols-1 gap-6">
        {PROFILE_DATA.awards.map((award, i) => (
          <div key={i} className="p-6 bg-brand-surface border border-brand-border rounded-xl flex flex-col md:flex-row md:items-start gap-6 group hover:border-brand-accent/30 transition-all">
            <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent shrink-0">
              <Trophy size={24} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{award.title}</h3>
                <p className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">{award.date}</p>
              </div>
              {award.description && (
                <p className="text-sm text-brand-muted leading-relaxed">{award.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QualificationsView() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Qualifications & Professionalisation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROFILE_DATA.qualifications.map((qual, i) => (
          <div key={i} className="p-5 bg-brand-surface border border-brand-border rounded-xl flex items-start gap-4 group hover:border-brand-accent/30 transition-all">
            <div className="w-8 h-8 bg-brand-accent/10 rounded flex items-center justify-center text-brand-accent shrink-0">
              <Zap size={16} />
            </div>
            <div>
              <h3 className="font-bold text-xs mb-1">{qual.title}</h3>
              <p className="text-[9px] font-mono text-brand-muted uppercase tracking-widest">{qual.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsView() {
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/shorts/')) {
      return url.replace('youtube.com/shorts/', 'youtube.com/embed/');
    }
    if (url.includes('watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }
    if (url.includes('youtu.be/')) {
      return url.replace('youtu.be/', 'youtube.com/embed/').split('?')[0];
    }
    return url;
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Engineering Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-16">
        {PROFILE_DATA.projects.map((project, i) => (
          <div key={i} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  {project.title}
                  {project.status === 'WIP' && (
                    <span className="px-2 py-0.5 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[8px] font-mono uppercase tracking-widest rounded">
                      WIP
                    </span>
                  )}
                </h3>
                <p className="text-xs font-mono text-brand-accent uppercase tracking-widest mt-1">{project.period}</p>
              </div>
            </div>

            <p className="text-brand-muted text-sm leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {project.videoUrl && (
              <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden border border-brand-border shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={getEmbedUrl(project.videoUrl)}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {project.shortsUrls && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {project.shortsUrls.map((url, j) => (
                  <div key={j} className="aspect-[9/16] bg-black rounded-xl overflow-hidden border border-brand-border">
                    <iframe
                      width="100%"
                      height="100%"
                      src={getEmbedUrl(url)}
                      title={`${project.title} short ${j + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            )}
            
            <div className="h-px bg-brand-border w-full opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

function InterestsView() {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Gamepad2': return <Gamepad2 size={24} />;
      case 'Trophy': return <Trophy size={24} />;
      case 'Target': return <Target size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'Dribbble': return <Dribbble size={24} />;
      default: return <Heart size={24} />;
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Extracurriculars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILE_DATA.interests.map((interest, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="p-6 bg-brand-surface border border-brand-border rounded-2xl flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-brand-muted group-hover:text-brand-accent group-hover:bg-brand-accent/10 transition-all">
              {getIcon(interest.icon)}
            </div>
            <h3 className="font-bold mb-1">{interest.name}</h3>
            {interest.since && (
              <p className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">
                Since age {interest.since}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
