"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = ["Blueprint", "Structure", "Furnishing", "Move-In Ready"];

export function ScrollExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const structureRef = useRef<SVGGElement>(null);
  const furnitureRef = useRef<SVGGElement>(null);
  const glowRef = useRef<SVGGElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      prefersReducedMotion ||
      !sectionRef.current ||
      !structureRef.current ||
      !furnitureRef.current ||
      !glowRef.current
    ) {
      setActiveStep(STEPS.length - 1);
      return;
    }

    gsap.set(furnitureRef.current.children, { y: 16 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=250%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          setActiveStep(Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length)));
        },
      },
    });

    tl.to(structureRef.current, { opacity: 1, duration: 1 }, 0)
      .to(furnitureRef.current.children, { opacity: 1, y: 0, stagger: 0.15, duration: 1 }, 1)
      .to(glowRef.current, { opacity: 1, duration: 1 }, 2);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative flex h-screen w-full items-center overflow-hidden bg-charcoal-900">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            From Blueprint to Furnished Facility
          </span>
          <ol className="flex flex-col gap-3">
            {STEPS.map((step, i) => (
              <li
                key={step}
                className={cn(
                  "flex items-center gap-3 text-sm font-medium transition-colors duration-300",
                  i === activeStep ? "text-amber-300" : "text-slate-500"
                )}
              >
                <span
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors duration-300",
                    i <= activeStep ? "bg-amber-400" : "bg-slate-600"
                  )}
                />
                {step}
              </li>
            ))}
          </ol>
          <p className="max-w-xs text-sm text-slate-400">
            Scroll to watch a facility go from floor plan to fully furnished —
            the same process our team runs for every institutional rollout.
          </p>
        </div>

        <div className="glass-panel relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl">
          <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
            <defs>
              <radialGradient id="roomGlow" cx="50%" cy="20%" r="70%">
                <stop offset="0%" stopColor="#f0c38a" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#f0c38a" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Base blueprint layer: always visible */}
            <g stroke="#8a93a3" strokeWidth="1" fill="none" opacity="0.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={300} />
              ))}
              {Array.from({ length: 7 }).map((_, i) => (
                <line key={`h${i}`} x1={0} y1={i * 50} x2={400} y2={i * 50} />
              ))}
            </g>

            <g stroke="#e0a35c" strokeWidth="2.5" fill="none">
              <rect x="30" y="30" width="340" height="240" rx="4" />
              <line x1="30" y1="150" x2="120" y2="150" />
              <rect x="260" y="30" width="60" height="90" />
            </g>

            {/* Structure: walls gain fill */}
            <g ref={structureRef} opacity="0">
              <rect x="34" y="34" width="332" height="232" rx="2" fill="#1a1e25" />
              <rect x="30" y="30" width="340" height="240" rx="4" fill="none" stroke="#c98a3e" strokeWidth="2" />
            </g>

            {/* Furniture: fades + rises in, staggered */}
            <g ref={furnitureRef}>
              <rect x="60" y="180" width="90" height="50" rx="4" fill="#6b4226" opacity="0" />
              <rect x="180" y="190" width="60" height="40" rx="4" fill="#8a93a3" opacity="0" />
              <circle cx="300" cy="210" r="26" fill="#c98a3e" opacity="0" />
              <rect x="60" y="60" width="70" height="30" rx="4" fill="#4b5563" opacity="0" />
            </g>

            {/* Glow / finished lighting pass */}
            <g ref={glowRef} opacity="0">
              <rect x="30" y="30" width="340" height="240" rx="4" fill="url(#roomGlow)" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
