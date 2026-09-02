import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RevealElement.css';

gsap.registerPlugin(ScrollTrigger);

export type RevealVariant =
  | 'default'
  | 'text'
  | 'heading'
  | 'image'
  | 'card'
  | 'button'
  | 'section';

export interface RevealElementProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  start?: string;
  end?: string;
  delay?: number;
  enableBlur?: boolean;
  blurMax?: number;
  triggerElement?: string | HTMLElement | null;
}

interface VariantPreset {
  opacity: number;
  blur: number;
  y: number;
  scale: number;
  rotate: number;
  start: string;
  end: string;
}

const VARIANT_PRESETS: Record<RevealVariant, VariantPreset> = {
  default: {
    opacity: 0,
    blur: 5,
    y: 12,
    scale: 1,
    rotate: 0,
    start: 'top 85%',
    end: 'top 50%',
  },
  text: {
    opacity: 0.1,
    blur: 5,
    y: 10,
    scale: 1,
    rotate: 2.5,
    start: 'top 85%',
    end: 'top 45%',
  },
  heading: {
    opacity: 0.1,
    blur: 7,
    y: 14,
    scale: 1,
    rotate: 2,
    start: 'top 85%',
    end: 'top 45%',
  },
  image: {
    opacity: 0,
    blur: 8,
    y: 10,
    scale: 0.97,
    rotate: 0,
    start: 'top 85%',
    end: 'top 50%',
  },
  card: {
    opacity: 0,
    blur: 5.5,
    y: 18,
    scale: 0.985,
    rotate: 0,
    start: 'top 88%',
    end: 'top 55%',
  },
  button: {
    opacity: 0,
    blur: 2.5,
    y: 8,
    scale: 1,
    rotate: 0,
    start: 'top 90%',
    end: 'top 60%',
  },
  section: {
    opacity: 0.85,
    blur: 2,
    y: 0,
    scale: 1,
    rotate: 0,
    start: 'top 95%',
    end: 'top 70%',
  },
};

export const RevealElement: React.FC<RevealElementProps> = ({
  children,
  variant = 'default',
  as: Component = 'div',
  className = '',
  style,
  start,
  end,
  delay = 0,
  enableBlur = true,
  blurMax,
}) => {
  const elRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Accessibility check: Prefers Reduced Motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const preset = VARIANT_PRESETS[variant];
      const isMobile = window.innerWidth < 768;

      // Mobile tuning: softer blurs, zero rotation, smaller vertical translation
      const initialBlur = enableBlur
        ? blurMax !== undefined
          ? blurMax
          : isMobile
          ? Math.min(preset.blur, 3.5)
          : preset.blur
        : 0;

      const initialRotate = isMobile ? 0 : preset.rotate;
      const initialY = isMobile ? Math.min(preset.y, 8) : preset.y;
      const initialScale = isMobile && preset.scale < 1 ? 0.99 : preset.scale;

      const triggerStart = start || preset.start;
      const triggerEnd = end || preset.end;

      gsap.fromTo(
        el,
        {
          opacity: preset.opacity,
          filter: initialBlur > 0 ? `blur(${initialBlur}px)` : 'blur(0px)',
          y: initialY,
          scale: initialScale,
          rotate: initialRotate,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          rotate: 0,
          delay,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: triggerStart,
            end: triggerEnd,
            scrub: true,
          },
        }
      );
    }, elRef);

    return () => ctx.revert();
  }, [variant, start, end, delay, enableBlur, blurMax]);

  return (
    <Component
      ref={elRef as any}
      className={`reveal-element reveal-variant-${variant} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export default RevealElement;
