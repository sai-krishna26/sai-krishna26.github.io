import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PreProjects = () => {
  const container = useRef(null);
  const xElement = useRef(null);
  const skillsWrap = useRef(null);

  const skills = [
    "Java", "Python", "SQL", "HTML", "CSS", "JavaScript", 
    "OOP", "DSA", "DBMS", "Operating Systems", "Git", "GitHub", "MySQL"
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Rotate the X continuously while scrolling
      gsap.to(xElement.current, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      // Staggered reveal of skills floating around
      const skillNodes = gsap.utils.toArray('.floating-skill');
      gsap.from(skillNodes, {
        opacity: 0,
        y: 100,
        scale: 0.5,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "center center",
          scrub: 1,
        }
      });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-[80vh] md:h-screen bg-[#0B0B0B] border-t border-white/5 flex items-center justify-center overflow-hidden">
      
      {/* Background radial subtle glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="w-[500px] h-[500px] bg-primary-900/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative w-full max-w-[100rem] mx-auto h-full flex items-center justify-center">
         
         {/* The Interactive X Element */}
         <div 
           ref={xElement}
           className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] z-10 hover:scale-105 transition-transform duration-700 ease-out cursor-none"
         >
           {/* Diagonal Bar 1 (Dark Charcoal) */}
           <div className="absolute top-1/2 left-1/2 w-[120%] h-[15%] md:h-[12%] bg-[#1A1A1A] -translate-x-1/2 -translate-y-1/2 rotate-45 shadow-2xl border border-white/5 rounded-full" />
           {/* Diagonal Bar 2 (Orange) */}
           <div className="absolute top-1/2 left-1/2 w-[120%] h-[15%] md:h-[12%] bg-primary-500 -translate-x-1/2 -translate-y-1/2 -rotate-45 shadow-[0_0_50px_rgba(255,107,53,0.4)] rounded-full" />
         </div>

         {/* Floating Skills */}
         <div ref={skillsWrap} className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
           {skills.map((skill, i) => {
             // Randomly position skills in a circle around the center
             const angle = (i / skills.length) * Math.PI * 2;
             const radius = window.innerWidth > 768 ? 350 : 180;
             const x = Math.cos(angle) * radius;
             const y = Math.sin(angle) * radius;
             
             return (
               <div 
                 key={i} 
                 className="floating-skill absolute text-white font-sans font-bold uppercase tracking-widest text-xs md:text-sm bg-[#121212] px-6 py-3 rounded-full border border-white/10 shadow-xl"
                 style={{ transform: `translate(${x}px, ${y}px)` }}
               >
                 {skill}
               </div>
             );
           })}
         </div>

      </div>
    </section>
  );
};

export default PreProjects;
