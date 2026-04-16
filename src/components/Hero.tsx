"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background subtle zoom
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" }
      );

      // Intro tag reveal (framer-motion-less, pure GSAP for letter spacing)
      gsap.fromTo(
        tagRef.current,
        { y: 20, opacity: 0, letterSpacing: "0em" },
        { y: 0, opacity: 1, letterSpacing: "0.25em", duration: 1.5, ease: "power3.out", delay: 0.2 }
      );

      // Headline blur-to-sharp reveal
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0, filter: "blur(12px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          delay: 0.4,
        }
      );

      // Subtitle and button stagger
      gsap.fromTo(
        [textRef.current, buttonRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          delay: 0.8,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden px-6"
    >
      {/* Subtle abstract background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-charcoal-200 via-background to-background"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <div 
          ref={tagRef}
          className="font-inter text-xs font-medium text-sand-300 uppercase tracking-widest mb-8 opacity-0"
        >
          [ Azam Shaikh / Digital Showcase ]
        </div>
        
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-[1.1] text-foreground mb-6 opacity-0"
        >
          الفخامة
          <br />
          <span className="text-sand-100">في أبسط صورها</span>
        </h1>
        <p
          ref={textRef}
          className="text-lg md:text-xl text-sand-200 mb-10 max-w-2xl opacity-0 leading-relaxed md:leading-relaxed font-light flex flex-col items-center gap-2"
        >
          <span>نصنع تجارب رقمية حائزة على جوائز تجمع بين الأصالة العربية وأحدث تقنيات الويب، لنرتقي بعلامتك التجارية إلى آفاق جديدة.</span>
          <span className="font-inter text-sm tracking-wide text-sand-300 font-normal mt-2 opacity-70">
            Crafting award-winning digital experiences that merge Arabic authenticity with cutting-edge web technologies.
          </span>
        </p>
        <button
          ref={buttonRef}
          aria-label="ابدأ مشروعك - Start your project"
          className="group relative px-8 py-4 rounded-full overflow-hidden bg-white text-background opacity-0 font-medium transition-transform hover:scale-105 active:scale-95 flex items-center gap-3"
        >
          <span className="relative z-10">ابدأ مشروعك</span>
        </button>
      </div>
    </section>
  );
}
