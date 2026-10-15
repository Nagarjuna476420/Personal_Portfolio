import React from 'react';
import { projectCaseStudies } from '../../../data/portfolioData';
import { SectionContainer } from '../../layout/SectionContainer/SectionContainer';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

export function Projects() {
  return (
    <SectionContainer id="projects" ariaLabel="Featured Case Studies">
      <SectionHeading
        tag="Deep Dives"
        title="Case"
        gradientText="Studies"
        subtitle="Detailed look at the enterprise systems, architectural challenges, and measurable performance optimizations I engineered."
      />

      <div className="projects-cards-list">
        {projectCaseStudies.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
