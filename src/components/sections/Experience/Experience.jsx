import React, { useEffect, useState, useRef } from 'react';
import { experienceData } from '../../../data/portfolioData';
import { SectionContainer } from '../../layout/SectionContainer/SectionContainer';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Chip } from '../../common/Chip/Chip';
import './Experience.css';

export function Experience() {
  const [activeCompany, setActiveCompany] = useState(experienceData[0].companyShort);
  const articleRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const midPoint = window.innerHeight * 0.5;
      let closestDistance = Infinity;
      let closestCompany = experienceData[0].companyShort;

      experienceData.forEach((item) => {
        const el = articleRefs.current[item.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementCenter = rect.top + Math.min(rect.height, 300) / 2;
          const distance = Math.abs(elementCenter - midPoint);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestCompany = item.companyShort;
          }
        }
      });

      setActiveCompany(closestCompany);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionContainer id="experience" ariaLabel="Professional Experience">
      <div className="experience-layout-grid">
        <div className="experience-sticky-side">
          <SectionHeading
            tag="Career Trajectory"
            title="Work"
            gradientText="Experience"
          />
          <div className="sticky-active-indicator">
            <span className="sticky-active-company gradient-text">{activeCompany}</span>
            <p className="sticky-company-sub muted">Hansai Technosoft Pvt. Ltd.</p>
          </div>
        </div>

        <div className="timeline-articles-list">
          {experienceData.map((exp) => {
            const isActive = activeCompany === exp.companyShort;
            return (
              <article
                key={exp.id}
                id={`exp-${exp.id}`}
                ref={(el) => (articleRefs.current[exp.id] = el)}
                className={`timeline-entry-card ${isActive ? 'is-active-entry' : ''}`}
              >
                <div className="timeline-node-dot" />
                <div className="timeline-card-content glass-panel">
                  <div className="timeline-entry-header">
                    <h3 className="timeline-role-title">{exp.role}</h3>
                    <span className="timeline-period-badge">{exp.period}</span>
                  </div>
                  <div className="timeline-project-name">{exp.project}</div>

                  <ul className="timeline-bullets-list">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="timeline-chips-row">
                    {exp.tech.map((t) => (
                      <Chip key={t} variant={isActive ? 'accent' : 'default'} size="sm">
                        {t}
                      </Chip>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
