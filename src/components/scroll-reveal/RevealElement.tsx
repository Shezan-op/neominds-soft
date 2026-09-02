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
    opacity: 0.15,
    blur: 6,
    y: 18,
    scale: 1,
    rotate: 0,
    start: 'top 90%',
    end: 'top 55%',
  },
  text: {
    opacity: 0.15,
    blur: 6,
    y: 16,
    scale: 1,
    rotate: 2,
    start: 'top 90%',
    end: 'top 50%',
  },
  heading: {
    opacity: 0.15,
    blur: 8,
    y: 22,
    scale: 1,
    rotate: 2.5,
    start: 'top 90%',
    end: 'top 48%',
  },
  image: {
    opacity: 0.15,
    blur: 10,
    y: 24,
    scale: 0.95,
    rotate: 0,
    start: 'top 90%',
    end: 'top 52%',
  },
  card: {
    opacity: 0.15,
    blur: 7,
    y: 28,
    scale: 0.97,
    rotate: 0,
    start: 'top 92%',
    end: 'top 55%',
  },
  button: {
    opacity: 0.2,
    blur: 4,
    y: 12,
    scale: 1,
    rotate: 0,
    start: 'top 92%',
    end: 'top 60%',
  },
  section: {
    opacity: 0.3,
    blur: 5,
    y: 0,
    scale: 1,
    rotate: 0,
    start: 'top 95%',
    end: 'top 65%',
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

    const ctx = gsap.context(() => {
      const preset = VARIANT_PRESETS[variant];
      const isMobile = window.innerWidth < 768;

      const initialBlur = enableBlur
        ? blurMax !== undefined
          ? blurMax
          : isMobile
          ? Math.min(preset.blur, 4)
          : preset.blur
        : 0;

      const initialRotate = isMobile ? 0 : preset.rotate;
      const initialY = isMobile ? Math.min(preset.y, 10) : preset.y;
      const initialScale = isMobile && preset.scale < 1 ? 0.985 : preset.scale;

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
            scrub: 1,
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
