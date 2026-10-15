import React from 'react';
import { highlightsData } from '../../../data/portfolioData';
import { SectionContainer } from '../../layout/SectionContainer/SectionContainer';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { GlassCard } from '../../common/GlassCard/GlassCard';
import './Highlights.css';

export function Highlights() {
  return (
    <SectionContainer id="highlights" ariaLabel="Key Performance Highlights">
      <SectionHeading
        tag="Verified Outcomes"
        title="Impact"
        gradientText="& Benchmarks"
        subtitle="Tangible outcomes delivered across backend engines, query optimization, and frontend application responsiveness."
      />

      <div className="highlights-grid-container">
        {highlightsData.map((item, idx) => (
          <GlassCard key={idx} tilt={true} maxTilt={10} className="highlight-metric-card">
            <span className="highlight-number gradient-text">{item.metric}</span>
            <div className="highlight-title">{item.label}</div>
            <p className="highlight-desc muted">{item.desc}</p>
          </GlassCard>
        ))}
      </div>
    </SectionContainer>
  );
}
