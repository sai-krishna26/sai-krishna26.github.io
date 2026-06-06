import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-6 md:px-12 flex justify-between items-center z-50 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/5 text-white">
      
      {/* Left: Branding */}
      <div className="w-1/3 text-lg md:text-xl tracking-widest font-black uppercase opacity-100">
        SB<span className="text-primary-500">.</span>
      </div>
      
      {/* Center: Socials */}
      <div className="hidden md:flex w-1/3 justify-center text-[10px] md:text-xs tracking-wider font-medium space-x-2">
        <span className="opacity-80">Socials</span>
        <span className="opacity-50">/</span>
        <a href="https://linkedin.com/in/saikrishna-badiger-063a9a314" target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">li</a>
        <span className="opacity-50">/</span>
        <a href="https://github.com/sai-krishna26" target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">gh</a>
        <span className="opacity-50">/</span>
        <a href="mailto:vishwakarmasaikrishna@gmail.com" className="opacity-50 hover:opacity-100 transition-opacity">em</a>
      </div>

      {/* Right: Navigation */}
      <div className="w-1/2 md:w-1/3 flex justify-end items-center text-[10px] md:text-xs tracking-widest font-bold space-x-4 md:space-x-6">
        <a href="#index" className="opacity-60 hover:opacity-100 transition-opacity uppercase hidden sm:block">Index</a>
        <a href="#about" className="opacity-60 hover:opacity-100 transition-opacity uppercase hidden sm:block">About</a>
        <a href="#projects" className="opacity-60 hover:opacity-100 transition-opacity uppercase hidden sm:block">Projects</a>
        <a href="#contact" className="relative group text-primary-500 uppercase tracking-widest flex items-center space-x-1 ml-2 md:ml-4">
          <span>LET'S TALK</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          {/* Animated underline */}
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
