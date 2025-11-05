import { useEffect, useRef, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "zoom" | "slide-bottom";
  delay?: number;
  className?: string;
}

const ScrollAnimation = ({ 
  children, 
  animation = "fade-up", 
  delay = 0,
  className = "" 
}: ScrollAnimationProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  const animationClass = {
    "fade-up": "animate-fade-in-up",
    "fade-down": "animate-fade-in-down",
    "fade-left": "animate-fade-in-left",
    "fade-right": "animate-fade-in-right",
    "scale": "animate-scale-in",
    "zoom": "animate-zoom-in",
    "slide-bottom": "animate-slide-in-bottom",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? animationClass : "opacity-0"}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
