import React from 'react';
import { motion } from 'motion/react';

const timelineData = [
  {
    year: '2023 - 2024',
    title: '한성대학교 방송국 (HBS)',
    role: '부국장 & 기획팀원',
    description:
      '방송국 운영 전반을 관리하고 다양한 영상 콘텐츠의 기획 및 제작을 총괄했습니다. 부국장으로서 팀원들 간의 소통을 조율하고 고퀄리티 방송 송출을 위한 실무를 담당했습니다.',
    highlight: '▶ LIVE 송출 경험 / 팀 운영 / 콘텐츠 기획'
  },
  {
    year: '2020 - 2022',
    title: '석정여자고등학교 방송부 & 미디어부',
    role: '부장 (2년 / 3년)',
    description:
      '3년 동안 미디어부 부장을 맡으며 학교 홍보 및 영상 제작을 주도했습니다. 또한 2년간 방송부 부장으로 활동하며 학교 내 주요 행사 생중계 및 방송 시스템을 운영했습니다.',
    highlight: '▶ 생중계 진행 / 학교 콘텐츠 제작 / 조직 운영'
  },
  {
    year: '2022',
    title: '석정여자고등학교 신문 동아리 창설',
    role: '설립자 & 운영자',
    description:
      '기획의 즐거움을 깨닫고 직접 신문 동아리를 창설하여 운영했습니다. 취재부터 편집, 발행까지의 전 과정을 경험하며 콘텐츠 기획의 기초를 다졌습니다.',
    highlight: '▶ 기획 경험 / 콘텐츠 제작 프로세스 이해'
  },
  {
    year: '2017 - 2019',
    title: '영상 편집 독학',
    role: '개인 프로젝트',
    description:
      '중학생 시절부터 영상 편집에 관심을 가지고 스스로 툴을 익혔습니다. 다양한 개인 프로젝트를 통해 편집 감각과 기술적인 기초를 독립적으로 쌓아왔습니다.',
    highlight: '▶ 편집 역량 / 독학 기반 성장 / 지속적 제작'
  },
];

export const Timeline: React.FC = () => {
  return (
    <section className="bento-card md:col-span-3 
    transition-all duration-300 hover:scale-[1.01] hover:border-broadcast-red/40">

      {/* 헤더 */}
      <div className="flex items-center justify-between mb-3">
        <span className="card-label">ON AIR ARCHIVE</span>
        <span className="text-broadcast-red text-xs font-mono flex items-center gap-1">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          LIVE
        </span>
      </div>

      <span className="card-label text-[10px] text-text-secondary">
        HISTORY
      </span>

      <div className="relative mt-8">
        <div className="absolute top-3 left-0 right-0 h-[1px] bg-broadcast-line z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-4 group"
            >
              {/* 번호 */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-broadcast-surface border-2 border-broadcast-red rounded-full flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 h-[1px] bg-white/10 md:hidden" />
              </div>

              {/* 내용 */}
              <div className="space-y-1">

                <div className="text-[10px] text-broadcast-red font-mono tracking-widest">
                  {item.year}
                </div>

                <div className="text-sm font-bold text-white leading-snug">
                  {item.title}
                </div>

                <div className="text-[10px] text-white/50">
                  {item.role}
                </div>

                <div className="text-[12px] text-white/70 leading-relaxed">
                  {item.description}
                </div>

                {/* 🔥 핵심 추가 (성과 한 줄) */}
                <div className="text-[10px] text-broadcast-red mt-1 font-mono font-semibold tracking-wide">
  {item.highlight}
</div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};