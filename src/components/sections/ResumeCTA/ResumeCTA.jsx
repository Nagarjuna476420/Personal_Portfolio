import React from 'react';
import { personalInfo } from '../../../data/portfolioData';
import { SectionContainer } from '../../layout/SectionContainer/SectionContainer';
import { Button } from '../../common/Button/Button';
import { Download, FileCheck } from 'lucide-react';
import './ResumeCTA.css';

export function ResumeCTA() {
  return (
    <SectionContainer id="resume" ariaLabel="Resume Download CTA">
      <div className="resume-cta-inner glass-panel">
        <div className="resume-cta-icon-pill">
          <FileCheck size={18} color="var(--b)" />
          <span>Detailed Curriculum Vitae</span>
        </div>
        <h2 className="resume-cta-title">
          Want the <span className="gradient-text">Complete Story?</span>
        </h2>
        <p className="resume-cta-desc muted">
          The full resume covers every project architecture, sprint responsibility, database optimization, and delivery metric in depth.
        </p>
        <div className="resume-cta-btn-wrapper">
          <Button
            variant="primary"
            size="lg"
            href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Nagarjuna%20Reddy`}
            icon={<Download size={18} />}
          >
            Request Full Resume
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
