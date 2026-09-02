import React, { useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  enableBlur?: boolean;
  start?: string;
  end?: string;
  stagger?: number;
  wordSpacing?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  as: Component = 'span',
  className = '',
  style,
  baseOpacity = 0.1,
  baseRotation = 2.5,
  blurStrength = 6,
  enableBlur = true,
  start = 'top 85%',
  end = 'top 45%',
  stagger = 0.04,
  wordSpacing = '0.25em',
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  // Split string children into words and whitespace
  const renderedContent = useMemo(() => {
    if (typeof children === 'string') {
      const tokens = children.split(/(\s+)/);
      return tokens.map((token, i) => {
        if (/^\s+$/.test(token)) {
          return (
            <span key={i} className="scroll-reveal-space" style={{ marginRight: wordSpacing }}>
              {token}
            </span>
          );
        }
        return (
          <span key={i} className="scroll-reveal-word" data-reveal-word>
            {token}
          </span>
        );
      });
    }
    return children;
  }, [children, wordSpacing]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const words = el.querySelectorAll<HTMLElement>('.scroll-reveal-word');
      const isMobile = window.innerWidth < 768;
      const actualBlur = isMobile ? Math.min(blurStrength, 3) : blurStrength;
      const actualRotation = isMobile ? 0 : baseRotation;
      const actualY = isMobile ? 4 : 8;

      if (words.length > 0) {
        gsap.fromTo(
          words,
          {
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${actualBlur}px)` : 'none',
            rotate: actualRotation,
            y: actualY,
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            rotate: 0,
            y: 0,
            stagger,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: el,
              start,
              end,
              scrub: true,
            },
          }
        );
      } else {
        // If children wasn't a raw string, animate the container element directly
        gsap.fromTo(
          el,
          {
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${actualBlur}px)` : 'none',
            rotate: actualRotation,
            y: actualY,
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            rotate: 0,
            y: 0,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: el,
              start,
              end,
              scrub: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [baseOpacity, baseRotation, blurStrength, enableBlur, start, end, stagger]);

  return (
    <Component
      ref={containerRef as any}
      className={`scroll-reveal ${className}`}
      style={style}
    >
      {renderedContent}
    </Component>
  );
};

export default ScrollReveal;
