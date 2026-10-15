import React from 'react';
import { skillsData } from '../../../data/portfolioData';
import { SectionContainer } from '../../layout/SectionContainer/SectionContainer';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { GlassCard } from '../../common/GlassCard/GlassCard';
import { Chip } from '../../common/Chip/Chip';
import './Skills.css';

export function Skills() {
  const skillCategories = Object.entries(skillsData);

  return (
    <SectionContainer id="skills" ariaLabel="Technical Skills">
      <SectionHeading
        tag="Expertise & Tools"
        title="Technical"
        gradientText="Capabilities"
        subtitle="A comprehensive toolkit across backend architecture, modern frontend frameworks, cloud integrations, and database tuning."
      />

      <div className="skills-cards-grid">
        {skillCategories.map(([category, items]) => (
          <GlassCard
            key={category}
            tilt={true}
            maxTilt={9}
            className="skill-category-card"
          >
            <h3 className="skill-category-title">{category}</h3>
            <div className="skill-category-chips">
              {items.map((skill) => (
                <Chip key={skill} variant="default" size="md">
                  {skill}
                </Chip>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionContainer>
  );
}
