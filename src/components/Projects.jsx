import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import algonovaImg from '../assets/algonova.png';
import brainTumorImg from '../assets/brain_tumor.png';
import resumeImg from '../assets/resume.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    total: "03",
    title: "ALGONOVA",
    year: "2026",
    role: "Full-Stack Engineer",
    description: "Built an interactive DSA visualization platform with authentication and progress tracking. Engineered the frontend using Next.js, Framer Motion, and Tailwind CSS. Developed robust backend APIs utilizing Spring Boot, JWT for security, and an H2 Database.",
    img: algonovaImg,
    link: "https://github.com/sai-krishna26/AlgoNova_dsa_visualation_platform"
  },
  {
    id: "02",
    total: "03",
    title: "BRAIN TUMOR",
    year: "2025",
    role: "AI/ML Developer",
    description: "Developed a ResNet50-based deep learning model for multi-class abnormal brain tumor classification. Handled extensive data preprocessing, training, and evaluated the model on 1,304 MRI images using TensorFlow. Published architecture at IEEE ICONAT 2025.",
    img: brainTumorImg,
    link: "https://github.com/sai-krishna26/Brain_tumor_classification_project",
    publicationLink: "https://ieeexplore.ieee.org/document/11362737"
  },
  {
    id: "03",
    total: "03",
    title: "AI RESUME",
    year: "2025",
    role: "Full-Stack Engineer",
    description: "Engineered an AI-powered resume screening system utilizing Flask, React, and MongoDB. Implemented advanced NLP algorithms including TF-IDF and cosine similarity to dynamically rank and match candidates to job descriptions.",
    img: resumeImg,
    link: "https://github.com/sai-krishna26/AI-powered-resume-screening-system"
  }
];

const easeOutQuint = [0.22, 1, 0.36, 1];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0b0b] w-full border-t border-white/5 relative z-30 pt-48 pb-32">
      <div className="w-full flex flex-col space-y-48">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index }) => {
  const itemRef = useRef(null);
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
            trigger: itemRef.current,
            start: "top 80%",
            end: "bottom 90%",
            scrub: 1,
          }
        });
      }
    }, itemRef);
    return () => ctx.revert();
  }, []);

  return (
    <motion.div 
      ref={itemRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 1.4, ease: easeOutQuint }}
      className="w-full max-w-[100rem] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8"
    >
      {/* Left Column: Number & Title */}
      <div className="w-full lg:w-[20%] flex flex-col justify-end lg:h-[600px] pb-12 relative z-10" ref={textRef}>
        <div className="flex items-baseline space-x-2 mb-6 block">
          <span className="text-white font-bold text-lg">{project.id}</span>
          <span className="text-slate-500 font-light text-sm">/ {project.total}</span>
        </div>
        <h3 className="text-5xl md:text-6xl xl:text-7xl font-sans font-black uppercase tracking-tighter text-white leading-[0.9] block">
          {project.title}
        </h3>
      </div>

      {/* Center Column: Massive Square Image */}
      <div className="w-full lg:w-[55%] relative group">
        <div className="aspect-square w-full rounded-sm overflow-hidden bg-[#121212] border border-white/10 relative">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover object-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.2s] ease-[0.16,1,0.3,1] scale-[1.02] group-hover:scale-100" 
          />
        </div>
      </div>

      {/* Right Column: Metadata */}
      <div className="w-full lg:w-[20%] flex flex-col space-y-16 lg:pt-16">
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-primary-500 font-bold mb-3">Year</h4>
          <p className="text-3xl font-medium text-white tracking-tighter">{project.year}</p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-primary-500 font-bold mb-3">Role</h4>
          <p className="text-base text-slate-200 font-light tracking-wide">{project.role}</p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-primary-500 font-bold mb-4">Description</h4>
          <p className="text-sm text-slate-400 leading-[1.8] font-light">
            {project.description}
          </p>
        </div>
        <div className="flex flex-col space-y-4">
           <a href={project.link} target="_blank" rel="noreferrer" className="text-white text-sm tracking-widest font-medium border-b border-white/30 hover:border-primary-500 pb-1 w-fit flex items-center space-x-2 transition-colors duration-500 uppercase text-[10px]">
             <span>View on GitHub</span>
             <span className="text-primary-500 font-bold">↗</span>
           </a>
           {project.publicationLink && (
             <a href={project.publicationLink} target="_blank" rel="noreferrer" className="text-white text-sm tracking-widest font-medium border-b border-white/30 hover:border-primary-500 pb-1 w-fit flex items-center space-x-2 transition-colors duration-500 uppercase text-[10px]">
               <span>IEEE Xplore Publication</span>
               <span className="text-primary-500 font-bold">↗</span>
             </a>
           )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
