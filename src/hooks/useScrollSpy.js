import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking the active section based on window scroll
 * Handles mapped section IDs (e.g. feat -> projects)
 */
export function useScrollSpy(sectionIds, offsetPercent = 0.4) {
  const [activeId, setActiveId] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetPercent;
      let currentSection = sectionIds[0] || 'home';

      // Check all elements with matching IDs or all section elements
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }

      // Check sub-sections that belong to parent navigation targets
      const featEl = document.getElementById('feat');
      const highEl = document.getElementById('highlights');
      const resumeEl = document.getElementById('resume');

      if (featEl && featEl.offsetTop <= scrollPosition) currentSection = 'projects';
      if (highEl && highEl.offsetTop <= scrollPosition) currentSection = 'projects';
      if (resumeEl && resumeEl.offsetTop <= scrollPosition) currentSection = 'education';

      setActiveId(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offsetPercent]);

  return activeId;
}
