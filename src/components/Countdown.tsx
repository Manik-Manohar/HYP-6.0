
import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  className?: string;
}

export function Countdown({ targetDate, className }: CountdownProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={`grid grid-cols-4 gap-2 md:gap-4 ${className}`}>
      <div className="countdown-item">
        <span className="text-2xl md:text-4xl font-bold text-white">{days}</span>
        <span className="text-xs text-white/70 uppercase tracking-wider mt-1">Days</span>
      </div>
      <div className="countdown-item">
        <span className="text-2xl md:text-4xl font-bold text-white">{hours}</span>
        <span className="text-xs text-white/70 uppercase tracking-wider mt-1">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="text-2xl md:text-4xl font-bold text-white">{minutes}</span>
        <span className="text-xs text-white/70 uppercase tracking-wider mt-1">Mins</span>
      </div>
      <div className="countdown-item">
        <span className="text-2xl md:text-4xl font-bold text-white">{seconds}</span>
        <span className="text-xs text-white/70 uppercase tracking-wider mt-1">Secs</span>
      </div>
    </div>
  );
}
