import React from 'react';
import { personalInfo } from '../../../data/portfolioData';
import { SectionContainer } from '../../layout/SectionContainer/SectionContainer';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Chip } from '../../common/Chip/Chip';
import { GlassCard } from '../../common/GlassCard/GlassCard';
import './About.css';

export function About() {
  const coreChips = [
    ".NET Core", "C#", "React.js", "TypeScript", 
    "SQL Server", "Spatial Search", "OAuth 2.0", "Worker Services"
  ];

  return (
    <SectionContainer id="about" ariaLabel="About Nagarjuna">
      <SectionHeading
        tag="Engineering Focus"
        title="Backend depth,"
        gradientText="frontend polish."
      />

      <div className="about-grid-layout">
        <div className="about-narrative">
          {personalInfo.about.map((paragraph, idx) => (
            <p key={idx} className={idx === personalInfo.about.length - 1 ? 'muted' : ''}>
              {paragraph}
            </p>
          ))}

          <div className="about-chips-container">
            {coreChips.map((tech) => (
              <Chip key={tech} variant="default" interactive={true}>
                {tech}
              </Chip>
            ))}
          </div>
        </div>

        <div className="about-stats-column">
          {personalInfo.stats.map((stat, idx) => (
            <GlassCard key={idx} tilt={true} className="stat-card">
              <span className="stat-number gradient-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
