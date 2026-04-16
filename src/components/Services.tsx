"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, PenTool, TrendingUp, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "تصميم واجهات المستخدم",
    enTitle: "UI/UX DESIGN",
    description: "نصنع تجارب بصرية مذهلة تركز على راحة المستخدم والجمالية التي لا تُنسى.",
    enDescription: "Crafting stunning visual experiences focused on user comfort and unforgettable aesthetics.",
    icon: PenTool,
  },
  {
    title: "تطوير الويب المتقدم",
    enTitle: "WEB DEVELOPMENT",
    description: "تطبيقات ويب سريعة، آمنة، وقابلة للتطوير باستخدام أحدث التقنيات.",
    enDescription: "Fast, secure, and scalable web applications using cutting-edge technologies.",
    icon: Code2,
  },
  {
    title: "تطبيقات الهواتف",
    enTitle: "MOBILE APPS",
    description: "تجارب سلسة على الأجهزة المحمولة تصل لجمهورك أينما كانوا.",
    enDescription: "Seamless mobile experiences reaching your audience wherever they are.",
    icon: Smartphone,
  },
  {
    title: "تحسين محركات البحث",
    enTitle: "SEO OPTIMIZATION",
    description: "نضمن ظهور علامتك التجارية في صدارة نتائج البحث بشكل عضوي ومستدام.",
    enDescription: "Ensuring your brand reaches the top of search results organically and sustainably.",
    icon: TrendingUp,
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
    <section ref={containerRef} className="py-32 px-6 md:px-16 lg:px-24 bg-charcoal-100">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center opacity-0">
          <div className="font-inter text-xs font-medium text-sand-300 uppercase tracking-widest mb-4 inline-block">
            [ Core Expertise ]
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            خدماتنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group p-8 rounded-2xl bg-background border border-charcoal-200 hover:border-gold/50 transition-colors duration-500 opacity-0"
              >
                <div className="w-14 h-14 rounded-full bg-charcoal-200 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500 text-sand-200 group-hover:text-gold">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {service.title}
                </h3>
                <div className="font-inter text-[10px] text-sand-300 tracking-widest uppercase mb-4 opacity-70">
                  {service.enTitle}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sand-300 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <p className="font-inter text-xs text-charcoal-300 leading-relaxed opacity-60">
                    {service.enDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
