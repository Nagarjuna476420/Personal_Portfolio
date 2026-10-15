import React from 'react';
import { GlassCard } from '../../common/GlassCard/GlassCard';
import { Chip } from '../../common/Chip/Chip';
import { Terminal, CheckCircle2 } from 'lucide-react';

export function ProjectCard({ project }) {
  return (
    <GlassCard className="project-case-card" glowOnHover={true}>
      <div className="project-card-grid">
        <div className="project-info-column">
          <span className="project-role-badge">{project.role}</span>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-tagline muted">{project.tagline}</p>

          <div className="project-meta-block">
            <h4 className="project-subheading">Problem Solved</h4>
            <p className="project-description">{project.problem}</p>
          </div>

          <div className="project-meta-block">
            <h4 className="project-subheading">Key Architectural Features</h4>
            <ul className="project-features-list">
              {project.features.map((feat, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={15} className="feature-check-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-meta-block">
            <h4 className="project-subheading">Measurable Outcomes</h4>
            <p className="project-outcome-text">{project.outcomes}</p>
          </div>
        </div>

        <div className="project-visual-column">
          <div className="code-terminal-card">
            <div className="terminal-top-bar">
              <span className="terminal-circle red" />
              <span className="terminal-circle yellow" />
              <span className="terminal-circle green" />
              <span className="terminal-title">
                <Terminal size={13} /> {project.id}.engine
              </span>
            </div>
            <pre className="terminal-code-body">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="project-chips-footer">
        {project.chips.map((tech) => (
          <Chip key={tech} variant="default" size="sm">
            {tech}
          </Chip>
        ))}
      </div>
    </GlassCard>
  );
}
