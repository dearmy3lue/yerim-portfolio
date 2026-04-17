import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { AISection } from './components/AISection';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ProjectInsight } from './components/ProjectInsight';

export default function App() {
  return (
    <div className="relative min-h-screen bg-broadcast-black text-white p-6 flex flex-col gap-4 overflow-x-hidden">

      {/* 상단 */}
      <header className="flex justify-between items-center border-b border-broadcast-line pb-3">
        
        <div className="text-broadcast-red font-bold text-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          REC LIVE
        </div>

        <div className="text-[10px] text-white/40 font-mono">
          DIRECTOR: CHOI YERIM
        </div>
      </header>

      {/* 메인 */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow auto-rows-auto [grid-auto-flow:dense]">

        <Hero />
        <About />
        <Timeline />
        <Skills />
        <AISection />
        <Projects />
        <ProjectInsight />
        <Contact />

      </main>

      {/* 배경 효과 */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay animate-pulse">
        <div className="w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* 하단 */}
      <footer className="text-[10px] text-white/30 font-mono text-center pt-4 border-t border-broadcast-line">
        © 2026 Choi Yerim Portfolio / AI Assisted Production
      </footer>

      {/* 🔥 핵심: 카드 hover 효과 */}
      <style>
{`
.bento-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 16px;
  transition: all 0.3s ease;
}

.bento-card:hover {
  background: rgba(255,0,0,0.04);
  border-color: rgba(255,0,0,0.4);
  box-shadow: 0 0 12px rgba(255,0,0,0.15);
  transform: translateY(-2px);
}
`}
</style>

    </div>
  );
}