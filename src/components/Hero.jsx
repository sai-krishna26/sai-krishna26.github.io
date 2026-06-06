import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profilePic from '../assets/port profile.jpg';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef(null);
  const bgImage = useRef(null);
  const contentWrap = useRef(null);
  const scrollIndicator = useRef(null);
  const nameLabel = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Entrance Animation Sequence
      const tl = gsap.timeline();

      // Portrait fades in
      tl.fromTo(bgImage.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 2.5, ease: "power3.out" },
        0
      );

      // Name label appears
      tl.fromTo(nameLabel.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        0.5
      );

      // Headline words reveal (staggered)
      const words = headlineRef.current.querySelectorAll('.word-reveal');
      tl.fromTo(words,
        { y: "100%" },
        { y: "0%", duration: 1.2, stagger: 0.15, ease: [0.22, 1, 0.36, 1] },
        0.7
      );

      // Description appears
      tl.fromTo(descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        1.3
      );

      // Scroll indicator appears
      tl.fromTo(scrollIndicator.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
        1.6
      );

      // 2. Scroll Parallax Effects
      gsap.to(bgImage.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(contentWrap.current, {
        y: 80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(scrollIndicator.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="index" className="relative min-h-screen w-full flex items-center bg-[#0B0B0B] pt-32 pb-24 overflow-hidden">

      {/* Background Depth & Radial Glow */}
      <div className="absolute inset-0 z-0 bg-[#0B0B0B]">
        {/* Soft radial orange gradient for background depth */}
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-primary-900/15 blur-[120px] rounded-full z-0 pointer-events-none mix-blend-screen" />

        {/* Main Image */}
        <img
          ref={bgImage}
          src={profilePic}
          alt="Saikrishna Portrait"
          className="absolute right-0 lg:right-[5%] top-0 w-full lg:w-[45%] h-[100%] object-cover object-[center_15%] opacity-100 z-10 origin-center drop-shadow-[-30px_0_40px_rgba(255,107,53,0.1)] mix-blend-lighten"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)'
          }}
        />

        {/* Subtle gradient to ensure text readability on mobile without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent lg:via-transparent z-20 pointer-events-none" />
        <div className="absolute lg:hidden inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Main Content Overlay */}
      <div ref={contentWrap} className="w-full h-full max-w-[100rem] mx-auto px-6 md:px-16 z-30 relative flex flex-col justify-center">

        <div className="flex flex-col justify-center items-start w-full lg:w-[70%] max-w-[1000px]">

          <div ref={nameLabel} className="mb-6 mt-8">
            <h2 className="text-primary-500 text-xs md:text-sm font-bold uppercase tracking-[0.4em]">
              Saikrishna Badiger
            </h2>
          </div>

          <div ref={headlineRef} className="flex flex-col space-y-2">
            <div className="overflow-hidden">
              <h1 className="word-reveal text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] leading-[0.95] font-black uppercase tracking-tighter text-white">
                JAVA
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="word-reveal text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] leading-[0.95] font-black uppercase tracking-tighter text-white">
                FULL STACK
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="word-reveal text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] leading-[0.95] font-black uppercase tracking-tighter text-primary-500 m-0 p-0 h-[0.95em] overflow-hidden">
                <div className="animate-spin-text flex flex-col w-max">
                  <span className="block h-[0.95em] whitespace-nowrap">DEVELOPER</span>
                  <span className="block h-[0.95em] whitespace-nowrap">ENGINEER</span>
                  <span className="block h-[0.95em] whitespace-nowrap">AI / ML</span>
                  <span className="block h-[0.95em] whitespace-nowrap">BACKEND SPECIALIST</span>
                  <span className="block h-[0.95em] whitespace-nowrap">PROBLEM SOLVER</span>
                  <span className="block h-[0.95em] whitespace-nowrap">SOFTWARE BUILDER</span>
                  <span className="block h-[0.95em] whitespace-nowrap">DEVELOPER</span>
                </div>
              </h1>
            </div>
          </div>

          <p
            ref={descRef}
            className="max-w-xl text-slate-400 text-base md:text-lg mt-8 md:mt-10 leading-relaxed font-light"
          >
            Computer Science Engineer building scalable software, modern web applications, and intelligent AI solutions.
          </p>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIndicator} className="absolute bottom-8 md:bottom-12 left-6 md:left-16 flex items-center gap-3 z-30 pointer-events-none opacity-0">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-primary-500 font-bold"
        >
          ↓
        </motion.div>
        <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-slate-400 font-bold">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default Hero;
