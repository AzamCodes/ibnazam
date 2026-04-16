"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    title: "مساكن العقيق",
    category: "عقارات فاخرة",
    enCategory: "LUXURY REAL ESTATE",
    image: "/project_real_estate.png",
  },
  {
    id: 2,
    title: "عطر أوركيد",
    category: "علامة تجارية",
    enCategory: "BRANDING",
    image: "/project_branding.png",
  },
  {
    id: 3,
    title: "منصة نماء",
    category: "تطبيق مالي",
    enCategory: "FINANCE APP",
    image: "/project_finance.png",
  },
  {
    id: 4,
    title: "متحف الفن المعاصر",
    category: "تجربة ثقافية",
    enCategory: "CULTURAL EXPERIENCE",
    image: "/project_museum.png",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
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

      // Staggered cards reveal
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16 opacity-0">
          <div className="font-inter text-xs font-medium text-sand-300 uppercase tracking-widest mb-4 inline-block">
            [ Selected Works ]
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            أعمال مختارة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] bg-charcoal-200 opacity-0"
              whileHover="hover"
            >
              <Image 
                src={project.image} 
                alt={`${project.title} - ${project.enCategory} | Azam Shaikh Portfolio`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
              
              {/* Content */}
              <motion.div 
                className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                variants={{
                  hover: { y: 0 },
                  rest: { y: 20 }
                }}
                initial="rest"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gold font-medium tracking-wider text-sm">{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-sand-300 opacity-50" />
                  <span className="font-inter text-[10px] text-sand-300 tracking-widest uppercase opacity-80">{project.enCategory}</span>
                </div>
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
