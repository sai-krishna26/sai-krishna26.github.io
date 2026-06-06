import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;
