import React, { useState, useEffect } from 'react';
import { Battery, Wifi, Signal, Camera } from 'lucide-react';
import { motion } from 'motion/react';

export const Viewfinder: React.FC = () => {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setTime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">

      {/* 🔥 살짝만 어둡게 (거의 안 보이게) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* 🔥 코너 표시 (얇게) */}
      <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-white/20" />
      <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/20" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/20" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-white/20" />

      {/* 🔥 상단 바 (작게) */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-4 text-[9px] font-mono text-white/50">
        <span className="text-broadcast-red">● REC</span>
        <span>{time}</span>
      </div>

      {/* 🔥 하단 작은 바 */}
      <div className="absolute bottom-3 left-4 flex items-center gap-2 text-[9px] text-white/40 font-mono">
        <Camera size={10} />
        <span>CH 01</span>
      </div>

    </div>
  );
};