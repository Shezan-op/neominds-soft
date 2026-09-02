import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CinematicScrollProps {
  children: React.ReactNode;
  className?: string;
  blurLayers?: number;
  blurMax?: number;
  blurSize?: number; // in pixels
  accentColor?: string;
  showScrollbar?: boolean;
  isGlobal?: boolean; // When true, applies progressive masking and scrollbar globally to viewport
}

export const CinematicScroll: React.FC<CinematicScrollProps> = ({
  children,
  className,
  blurLayers = 5,
  blurMax = 20,
  blurSize = 80,
  accentColor = "#2258e7",
  showScrollbar = true,
  isGlobal = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // When isGlobal is true, useScroll binds to the browser window;
  // otherwise it binds to the internal container scrollerRef.
  const { scrollYProgress } = useScroll(
    isGlobal
      ? {}
      : {
          container: scrollerRef,
        }
  );

  // Spring smooth progress for the custom bar
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (isGlobal) {
    return (
      <div
        ref={containerRef}
        className={cn("relative w-full min-h-screen", className)}
        style={
          {
            "--blur-max": `${blurMax}px`,
            "--blur-size": `${blurSize}px`,
            "--accent": accentColor,
          } as React.CSSProperties
        }
      >
        {/* Top Progressive Blur Mask Layers (Fixed Viewport) */}
        <div
          className="fixed top-0 left-0 right-0 z-40 pointer-events-none overflow-hidden"
          style={{ height: blurSize }}
          aria-hidden="true"
        >
          {[...Array(blurLayers)].map((_, i) => (
            <div
              key={`top-${i}`}
              className="absolute inset-0"
              style={{
                backdropFilter: `blur(${
                  Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                  blurMax
                }px) contrast(1.1) brightness(1.05)`,
                WebkitBackdropFilter: `blur(${
                  Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                  blurMax
                }px) contrast(1.1) brightness(1.05)`,
                maskImage: `linear-gradient(to bottom, black, transparent ${
                  ((i + 1) / blurLayers) * 100
                }%)`,
                WebkitMaskImage: `linear-gradient(to bottom, black, transparent ${
                  ((i + 1) / blurLayers) * 100
                }%)`,
              }}
            />
          ))}
        </div>

        {/* Bottom Progressive Blur Mask Layers (Fixed Viewport) */}
        <div
          className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none overflow-hidden rotate-180"
          style={{ height: blurSize }}
          aria-hidden="true"
        >
          {[...Array(blurLayers)].map((_, i) => (
            <div
              key={`bottom-${i}`}
              className="absolute inset-0"
              style={{
                backdropFilter: `blur(${
                  Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                  blurMax
                }px) contrast(1.1) brightness(1.05)`,
                WebkitBackdropFilter: `blur(${
                  Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                  blurMax
                }px) contrast(1.1) brightness(1.05)`,
                maskImage: `linear-gradient(to bottom, black, transparent ${
                  ((i + 1) / blurLayers) * 100
                }%)`,
                WebkitMaskImage: `linear-gradient(to bottom, black, transparent ${
                  ((i + 1) / blurLayers) * 100
                }%)`,
              }}
            />
          ))}
        </div>

        {/* Global Custom Spring Scrollbar Indicator */}
        {showScrollbar && (
          <div
            className="fixed top-6 right-2 bottom-6 w-1.5 z-50 pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            {/* Scrollbar Track Background */}
            <div className="w-full h-full bg-white/[0.08] backdrop-blur-md rounded-full overflow-hidden border border-white/[0.06]">
              <motion.div
                className="w-full rounded-full origin-top"
                style={{
                  scaleY,
                  height: "100%",
                  background: `linear-gradient(to bottom, ${accentColor}, #6091fa)`,
                  boxShadow: `0 0 14px ${accentColor}`,
                }}
              />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="w-full min-h-screen">
          {children}
        </div>
      </div>
    );
  }

  // Standalone Container Mode (matching original Lightswind UI spec)
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full overflow-hidden rounded-xl border border-white/10 bg-[#0c0e12]",
        className
      )}
      style={
        {
          "--blur-max": `${blurMax}px`,
          "--blur-size": `${blurSize}px`,
          "--accent": accentColor,
        } as React.CSSProperties
      }
    >
      {/* Top Blur Mask Layers */}
      <div
        className="absolute top-0 left-0 right-0 z-30 pointer-events-none overflow-hidden"
        style={{ height: blurSize }}
        aria-hidden="true"
      >
        {[...Array(blurLayers)].map((_, i) => (
          <div
            key={`top-${i}`}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${
                Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                blurMax
              }px) contrast(1.2) brightness(1.1)`,
              WebkitBackdropFilter: `blur(${
                Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                blurMax
              }px) contrast(1.2) brightness(1.1)`,
              maskImage: `linear-gradient(to bottom, black, transparent ${
                ((i + 1) / blurLayers) * 100
              }%)`,
              WebkitMaskImage: `linear-gradient(to bottom, black, transparent ${
                ((i + 1) / blurLayers) * 100
              }%)`,
            }}
          />
        ))}
      </div>

      {/* Bottom Blur Mask Layers */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none overflow-hidden rotate-180"
        style={{ height: blurSize }}
        aria-hidden="true"
      >
        {[...Array(blurLayers)].map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${
                Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                blurMax
              }px) contrast(1.2) brightness(1.1)`,
              WebkitBackdropFilter: `blur(${
                Math.sin(((blurLayers - (i + 1)) / blurLayers) * Math.PI / 2) *
                blurMax
              }px) contrast(1.2) brightness(1.1)`,
              maskImage: `linear-gradient(to bottom, black, transparent ${
                ((i + 1) / blurLayers) * 100
              }%)`,
              WebkitMaskImage: `linear-gradient(to bottom, black, transparent ${
                ((i + 1) / blurLayers) * 100
              }%)`,
            }}
          />
        ))}
      </div>

      {/* Custom Scrollbar */}
      {showScrollbar && (
        <div
          className="absolute top-2 right-2 bottom-2 w-1.5 z-40 pointer-events-none hidden sm:block"
          aria-hidden="true"
        >
          <motion.div
            className="w-full rounded-full origin-top"
            style={{
              scaleY,
              height: "100%",
              background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}dd)`,
              boxShadow: `0 0 10px ${accentColor}44`,
            }}
          />
        </div>
      )}

      {/* Main Scrollable Content */}
      <div
        ref={scrollerRef}
        className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="px-6 py-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CinematicScroll;
