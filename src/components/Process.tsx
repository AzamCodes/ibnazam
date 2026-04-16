"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    enTitle: "DISCOVERY",
    title: "الاستكشاف",
    description: "نجتمع لفهم أهدافك، نحلل السوق، ونضع الأساس المتين للمشروع.",
  },
  {
    num: "02",
    enTitle: "DESIGN",
    title: "التصميم",
    description: "نصمم واجهات تعكس هوية علامتك التجارية متزامنة مع أفضل معايير تجربة المستخدم.",
  },
  {
    num: "03",
    enTitle: "DEVELOPMENT",
    title: "التطوير",
    description: "نحول التصميم إلى كود حي باستخدام أحدث التقنيات لضمان أداء لا مثيل له.",
  },
  {
    num: "04",
    enTitle: "LAUNCH",
    title: "الإطلاق",
    description: "نختبر، نحسن، ثم نطلق مشروعك للعالم ليكون جاهزاً للنجاح.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Line progression
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Steps sequential fade in
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(
          step,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2, // sequential
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-16 lg:px-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-24 opacity-0">
          <div className="font-inter text-xs font-medium text-sand-300 uppercase tracking-widest mb-4 inline-block">
            [ Workflow Methodology ]
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            منهجية العمل
          </h2>
        </div>

        <div className="relative">
          {/* Continuous Line */}
          <div className="absolute top-8 left-0 right-0 h-[1px] bg-charcoal-200 hidden md:block">
            <div 
              ref={lineRef}
              className="h-full bg-gold origin-right" // origin-right because RTL
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
                className="flex flex-col items-start opacity-0"
              >
                <div className="w-16 h-16 rounded-full bg-background border-2 border-gold text-gold flex items-center justify-center text-xl font-bold mb-6 md:mt-0 mt-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                  {step.num}
                </div>
                <div className="font-inter text-[10px] text-sand-300 tracking-widest uppercase mb-2 opacity-70">
                  Step {step.num} &mdash; {step.enTitle}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-sand-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
