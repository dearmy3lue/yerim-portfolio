import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  return (
    <section className="bento-card md:col-span-1 flex flex-col overflow-hidden
      transition-all duration-300 hover:scale-[1.02] hover:border-broadcast-red/40 hover:shadow-[0_0_15px_rgba(255,0,0,0.15)] group">

      {/* 🔥 상단 이미지 (더 길게 수정) */}
      <div className="w-full h-72 md:h-80 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          alt="contact visual"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* 어둡게 */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

        {/* REC 느낌 */}
        <div className="absolute top-2 left-2 text-[9px] font-mono text-red-500 flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
          REC
        </div>
      </div>

      {/* 🔽 기존 내용 */}
      <div className="p-4 flex flex-col justify-between flex-grow">

        {/* 상단 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="card-label">CONTACT INFO</span>
            <span className="text-broadcast-red text-xs font-mono flex items-center gap-1">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              OPEN
            </span>
          </div>

          <div className="space-y-3 mt-2">

            {/* 이메일 */}
            <motion.div 
              whileHover={{ x: 6 }}
              className="flex items-center gap-3 text-sm font-mono text-white/90 group"
            >
              <Mail className="w-4 h-4 text-broadcast-red group-hover:scale-110 transition" />
              <span className="group-hover:text-white transition">
                dearmy3lue@hansung.ac.kr
              </span>
            </motion.div>

            {/* 전화번호 */}
            <motion.div 
              whileHover={{ x: 6 }}
              className="flex items-center gap-3 text-sm font-mono text-white/90 group"
            >
              <Phone className="w-4 h-4 text-broadcast-red group-hover:scale-110 transition" />
              <span className="group-hover:text-white transition">
                010-7571-7107
              </span>
            </motion.div>

          </div>
        </div>

        {/* 하단 */}
        <div className="mt-5 pt-3 border-t border-broadcast-line space-y-1">

          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
            Directed by Choi Yerim
          </div>

          <div className="text-[10px] text-broadcast-red font-semibold tracking-wide">
            Ready to collaborate / Always On Air
          </div>

        </div>

      </div>

    </section>
  );
};