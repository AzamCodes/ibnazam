"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal line separator
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // Reveal left column (Headline)
      gsap.fromTo(
        leftColRef.current,
        { y: 50, opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // Reveal right column (Text)
      gsap.fromTo(
        rightColRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 md:px-16 lg:px-24 bg-background"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between relative gap-16 lg:gap-24">
        {/* Decorative Line purely for Arabic Premium feel */}
        <div
          ref={lineRef}
          className="hidden lg:block absolute right-[45%] top-0 bottom-0 w-[1px] bg-charcoal-200 origin-top"
        />

        <div
          ref={leftColRef}
          className="lg:w-5/12 opacity-0"
        >
          <div className="font-inter text-xs font-medium text-sand-300 uppercase tracking-widest mb-6 border-b border-charcoal-200 inline-block pb-2">
            [ About Studio ]
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.3]">
            التصميم لم يعد
            <br />
            <span className="text-gold">مجرد شكل</span>.
          </h2>
          <div className="mt-6 flex flex-col gap-1">
            <p className="text-sand-300 font-light text-lg">
              إنه اللغة التي تتحدث بها علامتك التجارية قبل أن ينطق بها أي شخص.
            </p>
            <p className="font-inter text-xs font-normal text-charcoal-300 uppercase tracking-widest">
              Design is the silent ambassador of your brand.
            </p>
          </div>
        </div>

        <div
          ref={rightColRef}
          className="lg:w-6/12 opacity-0 flex flex-col justify-center"
        >
          <p className="text-xl md:text-2xl text-sand-100 font-light leading-relaxed mb-4">
            نحن استوديو إبداعي يركز على الجمع بين الفن والبرمجة. نقوم بصياغة هويات رقمية تعكس الرقي والأصالة مع الحفاظ على أعلى معايير الأداء وتجربة المستخدم.
          </p>
          <p className="font-inter text-sm text-charcoal-300 leading-relaxed mb-8 opacity-60">
            We are a creative studio focused on merging art and code. We craft digital identities that reflect sophistication and authenticity while maintaining the highest standards of performance and user experience.
          </p>
          <div className="flex gap-4 items-center group cursor-pointer w-fit">
            <div className="w-12 h-[1px] bg-gold transition-all group-hover:w-16" />
            <div className="flex flex-col">
              <span className="text-gold font-medium tracking-wide">اكتشف المزيد عنا</span>
              <span className="font-inter text-[10px] text-sand-300 tracking-[0.2em] uppercase mt-1 opacity-70">Discover More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
