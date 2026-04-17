import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export const Future: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-24 relative overflow-hidden transition-all duration-300">
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* 🔥 SCENE + LIVE 느낌 */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-broadcast-red mb-4 tracking-[0.2em]">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          SCENE 05: NEXT EPISODE
        </div>

        {/* 🔥 타이틀 등장 애니메이션 */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter"
        >
          사람들의 마음을 움직이는 <br />
          <span 
            className="text-transparent"
            style={{ WebkitTextStroke: '1px white' }}
          >
            이야기를 전달합니다
          </span>
        </motion.h2>
        
        {/* 🔥 문장 가독성 업 */}
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          단순히 영상을 만드는 사람이 아닌, 진심이 담긴 연출로 세상을 더 따뜻하게 만드는 방송 PD가 되고 싶습니다. 
          저의 다음 에피소드는 현장에서 여러분과 함께 시작됩니다.
        </p>

        {/* 🔥 버튼 강화 */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-broadcast-red text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]"
        >
          <Play size={20} fill="currentColor" />
          START PRODUCTION
        </motion.button>
      </div>

      {/* 🔥 배경 효과 강화 (더 자연스럽게) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-broadcast-red/5 rounded-full blur-[120px] -z-10 animate-pulse" />
    </section>
  );
};
