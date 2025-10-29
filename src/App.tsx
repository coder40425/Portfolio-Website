import { ParticleBackground } from './components/ParticleBackground';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CodingProfilesSection } from './components/CodingProfilesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0d0d12] to-[#0a0a0f] text-white relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Subtle Background Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Main gradient orbs - more subtle and sophisticated */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full filter blur-3xl opacity-30" />
      </div>
      
      {/* Main Content */}
      <main className="relative z-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CodingProfilesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
