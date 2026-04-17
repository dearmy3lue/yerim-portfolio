import React from 'react';
import { motion } from 'motion/react';
import { Film, FileText, Sparkles, Image } from 'lucide-react';

const tools = [
  { name: 'Premiere Pro', icon: Film, level: 'ADVANCED' },
  { name: 'MS Office', icon: FileText, level: 'PROFICIENT' },
  { name: 'AI Tools', icon: Sparkles, level: 'ACTIVE' },
  { name: 'Photoshop', icon: Image, level: 'LEARNING' },
];

export const Skills: React.FC = () => {
  return (
    <section className="bento-card md:col-span-1 flex flex-col 
    transition-all duration-300 hover:scale-[1.02] hover:border-broadcast-red/60 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">

      {/* 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <span className="card-label">PRODUCTION TOOLS</span>

        {/* 🔥 방송 느낌 */}
        <span className="text-broadcast-red text-xs font-mono flex items-center gap-1">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          ACTIVE
        </span>
      </div>

      {/* 툴 */}
      <div className="grid grid-cols-2 gap-3 flex-grow">
        {tools.map((tool, index) => {
          const Icon = tool.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center gap-2 
                         bg-white/5 border border-white/10 
                         rounded-lg p-4 text-center
                         hover:border-broadcast-red hover:bg-white/10 
                         hover:scale-[1.05] transition-all duration-300 cursor-pointer"
            >
              <Icon className="w-5 h-5 text-broadcast-red" />

              <span className="text-xs text-white font-medium">
                {tool.name}
              </span>

              {/* 🔥 핵심 추가 (실력 표시) */}
              <span className="text-[9px] text-white/40 font-mono">
                {tool.level}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};