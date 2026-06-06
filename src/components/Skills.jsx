import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { category: "Languages", items: ["Java", "Python", "SQL"] },
  { category: "Web Technologies", items: ["HTML", "CSS", "JS"] },
  { category: "Core Concepts", items: ["OOP", "DSA", "DBMS", "Operating Systems"] },
  { category: "Tools", items: ["Git", "GitHub", "MySQL"] }
];

const Skills = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal text lines progressively
      const lines = textRef.current.children;
      gsap.from(lines, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 90%",
          scrub: 1,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="skills" className="relative min-h-screen bg-[#0B0B0B] w-full py-32 px-6 md:px-16 flex flex-col justify-center border-t border-white/5">
      <div className="max-w-[100rem] mx-auto w-full relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col items-start overflow-hidden" ref={textRef}>
          <h2 className="text-primary-500 font-bold uppercase tracking-[0.2em] mb-4 text-xs md:text-sm block">
            Expertise
          </h2>
          <h3 className="text-4xl md:text-6xl font-sans font-light tracking-tight text-white max-w-3xl block">
            Technical Arsenal
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {skillsData.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h4 className="text-slate-400 text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm font-light hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
