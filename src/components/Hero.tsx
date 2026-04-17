import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="bento-card md:col-span-2 flex items-center min-h-[320px] gap-6 transition-all duration-300 hover:scale-[1.02] hover:border-broadcast-red/40 hover:shadow-[0_0_15px_rgba(255,0,0,0.15)]">
      
      {/* 왼쪽 텍스트 */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="card-label">DIRECTOR PROFILE</span>
        
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-3 leading-none"
        >
          최예림<span className="text-broadcast-red">.</span>
        </motion.h1>

        <div className="text-[11px] text-white/40 font-mono mb-4 tracking-widest">
          STORYTELLING · DIRECTION · MEDIA PRODUCTION
        </div>
        
        <p className="text-lg md:text-xl text-white/80 font-light max-w-xl mb-6 leading-relaxed">
          이야기를 설계하고, 장면을 연출하여  
          시청자의 감정을 움직이는 방송 PD를 꿈꿉니다.
        </p>

        <div className="text-[11px] font-bold text-broadcast-red italic tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          NEXT EPISODE: BROADCAST PD
        </div>
      </motion.div>

      {/* 🔥 오른쪽 이미지 2개 */}
      <div className="flex flex-col gap-3">

        {/* 이미지 1 */}
        <motion.div
          className="w-40 h-28 rounded-lg overflow-hidden border border-white/10 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
            alt="PD 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute top-2 left-2 text-[9px] font-mono text-red-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
            REC
          </div>
        </motion.div>

        {/* 이미지 2 */}
        <motion.div
          className="w-40 h-28 rounded-lg overflow-hidden border border-white/10 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="PD 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

      </div>

    </section>
  );
};