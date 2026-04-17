import React from 'react';
import { motion } from 'motion/react';

export const AISection: React.FC = () => {
  return (
    <section className="bento-card md:col-span-1 transition-all duration-300 hover:scale-[1.02] hover:border-broadcast-red/60 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">
      
      <div className="flex items-center justify-between mb-3">
        <span className="card-label">AI PRODUCTION NOTE</span>

        {/* 🔥 ACTIVE 업그레이드 */}
        <span className="text-broadcast-red text-xs font-mono flex items-center gap-1">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          ACTIVE
        </span>
      </div>

      <div className="space-y-3 mt-2 text-[12px] text-white/80 leading-relaxed">
        
        {/* 🔥 첫 줄 강조 */}
        <p className="text-white font-semibold text-[13px]">
          본 포트폴리오는 AI 도구를 활용하여 제작되었습니다.
        </p>

        <p>
          기획 단계에서는 아이디어 구상과 콘텐츠 구조 설계를 진행하였으며,  
          제작 단계에서는 코드 생성 및 디자인 구현 과정에 AI를 적극적으로 활용했습니다.
        </p>

        <p>
          AI를 단순한 도구가 아닌,  
          콘텐츠 제작을 함께하는 협업 파트너로 활용하고자 합니다.
        </p>

      </div>

    </section>
  );
};