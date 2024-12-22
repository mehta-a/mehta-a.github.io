// src/App.jsx
import React from 'react';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import Blog from './components/sections/Blog';  // Changed this line
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;