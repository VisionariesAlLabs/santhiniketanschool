import { useEffect, useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

interface CounterBoxProps {
  target: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const CounterBox = ({ target, suffix = "", label, icon }: CounterBoxProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="counter-box hover-lift">
      <div className="text-secondary mb-2 flex justify-center">{icon}</div>
      <div className="text-3xl md:text-4xl font-display font-bold text-primary">
        {isVisible ? count : 0}{suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

export default CounterBox;
