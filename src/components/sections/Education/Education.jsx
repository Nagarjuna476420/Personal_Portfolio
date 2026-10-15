import React from 'react';
import { educationData } from '../../../data/portfolioData';
import { SectionContainer } from '../../layout/SectionContainer/SectionContainer';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { GlassCard } from '../../common/GlassCard/GlassCard';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Education.css';

export function Education() {
  return (
    <SectionContainer id="education" ariaLabel="Educational Background">
      <SectionHeading
        tag="Academic Foundation"
        title="Education"
        gradientText="& Degree"
      />

      <div className="education-cards-wrapper">
        <GlassCard tilt={true} className="education-details-card">
          <div className="education-header">
            <div className="education-icon-box">
              <GraduationCap size={28} color="var(--a)" />
            </div>
            <div>
              <h3 className="education-degree">{educationData.degree}</h3>
              <p className="education-major">{educationData.major}</p>
            </div>
          </div>

          <div className="education-meta-info">
            <span className="education-meta-item">
              <Calendar size={15} />
              <span>{educationData.period}</span>
            </span>
            <span className="education-meta-item">
              <MapPin size={15} />
              <span>{educationData.institution} · {educationData.location}</span>
            </span>
          </div>
        </GlassCard>
      </div>
    </SectionContainer>
  );
}
