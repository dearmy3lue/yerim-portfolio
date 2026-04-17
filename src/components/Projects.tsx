import React from 'react';
import { Film } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section className="bento-card md:col-span-2 transition-all duration-300 hover:scale-[1.02] hover:border-broadcast-red/60 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">

      <div className="flex items-center gap-2 mb-3">
        <Film size={14} className="text-broadcast-red" />
        <span className="card-label">PROJECTS</span>
      </div>

      <div className="space-y-4 text-sm text-white/80">

        {/* 🎬 예능 */}
        <a href="https://youtu.be/4b2WyNj3HW0" target="_blank" rel="noopener noreferrer"
          className="block rounded overflow-hidden group relative">
          <img src="https://img.youtube.com/vi/4b2WyNj3HW0/hqdefault.jpg"
            className="w-full h-40 object-cover group-hover:scale-105 transition duration-300" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-bold text-white">예능 콘텐츠 제작</div>
            <div className="text-[11px] text-white/80">연출 및 구성 참여, 재미 요소 중심 콘텐츠 제작</div>
          </div>
          <div className="absolute top-3 right-3 text-broadcast-red text-xs opacity-0 group-hover:opacity-100 transition">
            ▶ PLAY
          </div>
        </a>

        {/* 📰 뉴스 */}
        <a href="https://youtu.be/6NwDFxcAoaA" target="_blank" rel="noopener noreferrer"
          className="block rounded overflow-hidden group relative">
          <img src="https://img.youtube.com/vi/6NwDFxcAoaA/hqdefault.jpg"
            className="w-full h-40 object-cover group-hover:scale-105 transition duration-300" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-bold text-white">뉴스 콘텐츠 제작</div>
            <div className="text-[11px] text-white/80">교내 소식을 전달하는 뉴스 형식 콘텐츠 제작</div>
          </div>
          <div className="absolute top-3 right-3 text-broadcast-red text-xs opacity-0 group-hover:opacity-100 transition">
            ▶ PLAY
          </div>
        </a>

        {/* 🎥 홍보영상 */}
        <a href="https://youtu.be/1sAmlvh6eLk" target="_blank" rel="noopener noreferrer"
          className="block rounded overflow-hidden group relative">
          <img src="https://img.youtube.com/vi/1sAmlvh6eLk/hqdefault.jpg"
            className="w-full h-40 object-cover group-hover:scale-105 transition duration-300" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-bold text-white">홍보 영상 제작</div>
            <div className="text-[11px] text-white/80">기획부터 촬영, 편집까지 전 과정 수행</div>
          </div>
          <div className="absolute top-3 right-3 text-broadcast-red text-xs opacity-0 group-hover:opacity-100 transition">
            ▶ PLAY
          </div>
        </a>

        {/* 🎉 축제 (통일됨) */}
        <a href="https://youtu.be/_RISSiwNXYc" target="_blank" rel="noopener noreferrer"
          className="block rounded overflow-hidden group relative">
          <img src="https://img.youtube.com/vi/_RISSiwNXYc/hqdefault.jpg"
            className="w-full h-40 object-cover group-hover:scale-105 transition duration-300" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-bold text-white">축제 영상 제작</div>
            <div className="text-[11px] text-white/80">현장 연출 및 방송 송출 포함 종합 제작 경험</div>
          </div>
          <div className="absolute top-3 right-3 text-broadcast-red text-xs opacity-0 group-hover:opacity-100 transition">
            ▶ PLAY
          </div>
        </a>

      </div>

    </section>
  );
};
