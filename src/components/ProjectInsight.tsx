import React from 'react';
import { motion } from 'motion/react';

export const ProjectInsight: React.FC = () => {
  return (
    <section className="bento-card md:col-span-1 flex flex-col gap-5 transition-all duration-300 hover:scale-[1.02] hover:border-broadcast-red/60 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">

      <div className="flex items-center justify-between">
        <span className="card-label">PROJECT INSIGHT</span>

        {/* 🔥 ACTIVE 느낌 추가 */}
        <span className="text-broadcast-red text-xs font-mono flex items-center gap-1">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          LIVE
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm text-white/80 leading-relaxed space-y-4"
      >

        {/* WHY PD */}
        <div className="transition-all duration-200 hover:translate-x-1">
          <div className="text-white text-xs mb-1 flex items-center gap-1">
            🎯 WHY PD
          </div>
          <p className="text-[12px] text-white/70">
            단순한 영상 제작이 아니라, 사람의 감정을 움직이는 콘텐츠를 만들고 싶어 
            방송 PD를 목표로 하고 있습니다.
          </p>
        </div>

        {/* WORK STYLE */}
        <div className="transition-all duration-200 hover:translate-x-1">
          <div className="text-white text-xs mb-1 flex items-center gap-1">
            ⚡ WORK STYLE
          </div>
          <p className="text-[12px] text-white/70">
            기획 → 촬영 → 편집까지 전체 흐름을 이해하며, 디테일한 연출과 빠른 실행력을
            바탕으로 완성도 높은 결과물을 만드는 것을 지향합니다.
          </p>
        </div>

        {/* PROJECT DETAIL */}
        <div className="transition-all duration-200 hover:translate-x-1">
          <div className="text-white text-xs mb-1 flex items-center gap-1">
            📂 PROJECT DETAIL
          </div>
          <ul className="text-[12px] text-white/70 list-disc pl-4 space-y-1">
            <li>학교 행사 방송 송출 및 연출</li>
            <li>홍보 영상 기획 및 제작</li>
            <li>뉴스 형식 콘텐츠 제작 경험</li>
          </ul>
        </div>

      </motion.div>

    </section>
  );
};