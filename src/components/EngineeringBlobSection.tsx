import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const EngineeringBlobSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pinned scroll-driven transition: Full blue -> contracting radial organic blob -> white background
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Explicitly anchor blob center at top 50% left 50%
      gsap.set(blobRef.current, {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: 'center center',
      });

      // 1. Blob contracts from full screen to centered circle to small dot and fades away
      tl.fromTo(
        blobRef.current,
        {
          width: '180vw',
          height: '180vh',
          borderRadius: '35%',
          opacity: 1,
          scale: 1,
          xPercent: -50,
          yPercent: -50,
          transformOrigin: 'center center',
        },
        {
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          opacity: 0.85,
          scale: 0.85,
          xPercent: -50,
          yPercent: -50,
          transformOrigin: 'center center',
          ease: 'power1.inOut',
          duration: 1,
        }
      )
        .to(blobRef.current, {
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          opacity: 0,
          scale: 0.2,
          xPercent: -50,
          yPercent: -50,
          transformOrigin: 'center center',
          ease: 'power2.in',
          duration: 0.6,
        })
        // 2. Text transitions to dark black / dark slate
        .fromTo(
          headlineRef.current,
          { color: '#ffffff', y: 30 },
          { color: '#121212', y: 0, ease: 'power1.out', duration: 1 },
          0
        )
        .fromTo(
          paragraphRef.current,
          { color: 'rgba(255, 255, 255, 0.85)', y: 30 },
          { color: '#121212', y: 0, ease: 'power1.out', duration: 1 },
          0.2
        );
    }, containerRef);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === containerRef.current) {
          st.kill(true, true);
        }
      });
      ctx.revert();
    };
  }, []);

  return (
    <div
      id="engineering"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 5,
      }}
    >
      {/* Scroll-Driven Contracting Blue Radial Blob */}
      <div
        ref={blobRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transformOrigin: 'center center',
          background: 'radial-gradient(circle at center, #001334 0%, #2258e7 55%, rgba(34, 88, 231, 0.4) 80%, rgba(255, 255, 255, 0) 100%)',
          filter: 'blur(35px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Centered Editorial Text Content */}
      <div
        ref={textContentRef}
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '960px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 var(--container-padding)',
        }}
      >
        <h2
          ref={headlineRef}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 5.8vw, 84px)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            marginBottom: 'clamp(20px, 3.5vw, 36px)',
            color: '#121212',
          }}
        >
          Engineering first.
          <br />
          AI-enhanced<span style={{ color: '#2258e7' }}>.</span>
        </h2>

        {/* Decorative Blue Dot Motif */}
        <div style={{ marginBottom: 'clamp(18px, 3vw, 32px)' }}>
          <span className="blue-dot" style={{ width: '8px', height: '8px' }} />
        </div>

        <p
          ref={paragraphRef}
          className="body-lead"
          style={{
            color: '#121212',
            maxWidth: '780px',
          }}
        >
          The AI era doesn’t replace engineering fundamentals, but it raises the bar for them. The hard part is not the demo, but scaling, securing, integrating, and sustaining AI inside real products. Neominds brings deep experience in complex systems, production delivery, and reliability-critical environments.
        </p>
      </div>
    </div>
  );
};
