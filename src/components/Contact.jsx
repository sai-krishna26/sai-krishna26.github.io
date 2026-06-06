import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (textRef.current) {
        const lines = textRef.current.children;
        gsap.from(lines, {
          opacity: 0,
          y: 50,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "bottom bottom",
            scrub: 1,
          }
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={containerRef} id="contact" className="relative w-full bg-[#0B0B0B] py-16 md:py-24 border-t border-white/5 z-40 text-white">
      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-16 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-24">
          <div ref={textRef} className="flex flex-col items-start overflow-hidden">
            <p className="text-primary-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Got a project in mind?</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] tracking-tight text-white max-w-xl block">
              Let's build <span className="text-slate-500">excellence</span> together.
            </h2>
            <div className="block mt-10">
              <a 
                href="mailto:vishwakarmasaikrishna@gmail.com" 
                className="inline-block px-8 py-4 bg-white text-black text-sm font-medium uppercase tracking-widest hover:bg-primary-500 hover:text-white transition-colors duration-500 rounded-full"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-end space-y-10 md:space-y-0 md:flex-row md:space-x-20">
            <div className="flex flex-col space-y-4">
              <h4 className="text-slate-500 uppercase tracking-[0.2em] mb-2 text-[10px]">Socials</h4>
              <a href="https://linkedin.com/in/saikrishna-badiger-063a9a314" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform duration-300 font-light text-sm w-fit">LinkedIn</a>
              <a href="https://github.com/sai-krishna26" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform duration-300 font-light text-sm w-fit">GitHub</a>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-slate-500 uppercase tracking-[0.2em] mb-2 text-[10px]">Contact</h4>
              <a href="mailto:vishwakarmasaikrishna@gmail.com" className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform duration-300 font-light text-sm w-fit">vishwakarmasaikrishna@gmail.com</a>
              <p className="text-slate-300 font-light text-sm w-fit">+91-6363326263</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-slate-500 font-light">
          <p>&copy; {new Date().getFullYear()} Saikrishna Badiger. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed & Developed with purpose.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
