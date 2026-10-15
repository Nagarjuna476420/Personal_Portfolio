import React from 'react';
import { ErrorBoundary } from './components/common/ErrorBoundary/ErrorBoundary';
import { SceneBackground } from './components/background/SceneBackground';
import { CursorGlow } from './components/common/CursorGlow/CursorGlow';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Skills } from './components/sections/Skills/Skills';
import { Experience } from './components/sections/Experience/Experience';
import { Projects } from './components/sections/Projects/Projects';
import { Featured } from './components/sections/Featured/Featured';
import { Highlights } from './components/sections/Highlights/Highlights';
import { TechMarquee } from './components/sections/TechMarquee/TechMarquee';
import { Education } from './components/sections/Education/Education';
import { ResumeCTA } from './components/sections/ResumeCTA/ResumeCTA';
import { Contact } from './components/sections/Contact/Contact';
import './App.css';

export default function App() {
  return (
    <ErrorBoundary>
      <div className="portfolio-app-root">
        {/* Interactive 3D WebGL Background */}
        <SceneBackground />

        {/* Ambient Pointer Glow Follower */}
        <CursorGlow />

        {/* Floating Capsule Navigation */}
        <Navbar />

        {/* Main Sections Content */}
        <main id="main-content" className="portfolio-main-content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Featured />
          <Highlights />
          <TechMarquee />
          <Education />
          <ResumeCTA />
          <Contact />
        </main>

        {/* Polished Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
