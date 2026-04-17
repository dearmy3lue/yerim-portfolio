import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section className="bento-card md:col-span-1 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-broadcast-red/60 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-3">
          <span className="card-label">DIRECTOR'S NOTE</span>

          {/* 🔥 ON 표시 업그레이드 */}
          <span className="text-broadcast-red text-xs font-mono flex items-center gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            ON
          </span>
        </div>

        {/* 본문 */}
        <div className="space-y-4 text-[13px] text-white/80 leading-relaxed">
          
          {/* 🔥 핵심 문장 강조 */}
          <p className="text-white font-semibold text-[14px]">
            차분함 속에서 디테일을 끝까지 밀어붙이는 사람.
          </p>

          <p>
            어린 시절부터 방송이라는 매체에 매력을 느꼈고, 
            중학생 때는 스스로 영상 편집을 익히며 콘텐츠 제작을 시작했습니다.
          </p>

          <p>
            이후 고등학교에서는 방송부와 미디어부 활동을 통해 
            기획부터 제작, 송출까지의 전 과정을 경험하며 
            ‘좋은 콘텐츠는 어떻게 만들어지는가’에 대해 고민해왔습니다.
          </p>

          <p>
            현재는 한성대학교 방송국에서 활동하며 
            단순한 제작을 넘어, 사람의 감정을 움직이는 연출에 집중하고 있습니다.
          </p>

        </div>
      </motion.div>

      {/* 하단 */}
      <div className="mt-8 pt-4 border-t border-broadcast-line">
        <div className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
          Directed by Choi Yerim
        </div>
      </div>

    </section>
  );
};