import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const easeOutQuint = "power4.out";

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const gridRef = useRef(null);

  const logos = [
    "Java", "Python", "SQL", 
    "React", "Spring", "Next.js", 
    "DSA", "GitHub", "MySQL"
  ];

  const philosophyLines = [
    "Code should be efficient,",
    "scalable, and beautifully",
    "structured. I leverage deep",
    "computer science fundamentals",
    "to architect full-stack solutions."
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal text lines progressively
      const lines = textRef.current.children;
      gsap.from(lines, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.2,
        ease: easeOutQuint,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1, // Connect reveal tightly to scroll position
        }
      });

      // Reveal grid blocks progressively
      const blocks = gridRef.current.children;
      gsap.from(blocks, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.1,
        ease: easeOutQuint,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative w-full bg-[#0B0B0B] py-32 md:py-48 min-h-screen flex items-center z-10 border-t border-white/5">
       <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 flex flex-col lg:flex-row">
          
          {/* Left Side: Title & Grid */}
          <div className="w-full lg:w-[35%] flex flex-col mb-24 lg:mb-0 pr-8">
            <h3 className="text-primary-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-12 border-t border-white/10 pt-8 w-48">
              Technical Arsenal
            </h3>

            {/* Dark Checkerboard Grid */}
            <div ref={gridRef} className="grid grid-cols-3 gap-0 w-full max-w-[350px]">
              {logos.map((logo, index) => {
                const isDark = (index % 2 === 0);
                return (
                  <div 
                    key={index}
                    className={`aspect-square flex items-center justify-center transition-colors hover:bg-primary-500/10 ${isDark ? 'bg-[#121212]' : 'bg-[#0B0B0B] border border-white/5'}`}
                  >
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{logo}</span>
                  </div>
                );
              })}
            </div>

            {/* Sub-info block */}
            <div className="mt-16 flex flex-col space-y-6 opacity-80">
              <div>
                <h4 className="text-white text-sm font-medium tracking-wide">B.E. Computer Science</h4>
                <p className="text-slate-500 text-xs mt-1">Adichunchanagiri Institute of Technology • CGPA: 8.60</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-medium tracking-wide">Published Author</h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed max-w-[300px] mb-4">"Automated Abnormal Brain Tumor Diagnosis Leveraging ResNet50" – IEEE ICONAT 2025</p>
                <a 
                  href="https://ieeexplore.ieee.org/document/11362737" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/10 text-primary-500 border border-primary-500/30 hover:bg-primary-500 hover:text-white transition-colors duration-300 rounded-full text-[10px] font-bold uppercase tracking-widest"
                >
                  <span>Read Publication</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Massive Scrolling Text / Experience */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center lg:pl-24">
             <p className="text-primary-500 text-[10px] mb-8 font-bold tracking-[0.2em] uppercase">(Experience & Philosophy)</p>
             
             {/* Progressive Reveal Text */}
             <div ref={textRef} className="text-3xl md:text-5xl lg:text-[4rem] font-sans font-medium leading-[1.1] tracking-tight text-white mb-16 flex flex-col items-start overflow-hidden">
               {philosophyLines.map((line, idx) => (
                 <span key={idx} className="block">{line}</span>
               ))}
             </div>

             <div className="text-xl md:text-3xl font-sans font-light leading-[1.4] tracking-tight text-slate-300 mb-16">
               As a <span className="text-primary-500 font-medium">Java Full Stack Intern at X-Workz</span>, I develop enterprise-level Java applications, mastering core concepts, collections, and backend databases.
             </div>

             <div className="text-lg md:text-2xl font-sans font-light leading-[1.5] tracking-tight text-slate-500">
               Concurrently, as an <span className="text-white font-medium">AI & Data Science Intern at AIROBSOFT</span>, I implement ML pipelines and handle real-time datasets. I believe rigorous logic and clean architecture form the foundation of true digital innovation.
             </div>
          </div>

       </div>
    </section>
  );
};

export default About;
