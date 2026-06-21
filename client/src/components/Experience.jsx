import React, { useState } from 'react';
import { experiences } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Experience.css';

export default function Experience() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();
  const exp = experiences[active];

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Work <span>Experience</span></h2>

        <div
          ref={ref}
          className={`exp__layout${inView ? ' fade-up' : ''}`}
        >
          {/* Tab list */}
          <div className="exp__tabs" role="tablist" aria-label="Work experience">
            {experiences.map((e, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={active === i}
                className={`exp__tab${active === i ? ' exp__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="exp__tab-company">{e.company}</span>
                <span className="exp__tab-period">{e.period}</span>
                {e.current && <span className="exp__tab-badge">Now</span>}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="exp__panel" role="tabpanel">
            <div className="exp__panel-header">
              <div>
                <h3 className="exp__role">
                  {exp.role}
                  {exp.companyUrl
                    ? <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="exp__company-link"> @ {exp.company}</a>
                    : <span className="exp__company-name"> @ {exp.company}</span>
                  }
                </h3>
                <div className="exp__meta">
                  <span className="exp__period">{exp.period}</span>
                  <span className="exp__sep">·</span>
                  <span className="exp__type">{exp.type}</span>
                </div>
              </div>
              {exp.current && <span className="exp__current-badge">Current</span>}
            </div>

            <p className="exp__description">{exp.description}</p>

            <ul className="exp__highlights">
              {exp.highlights.map((h, i) => (
                <li key={i} className="exp__highlight">
                  <span className="exp__highlight-arrow" aria-hidden="true">▹</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="exp__tech">
              {exp.tech.map(t => (
                <span key={t} className="exp__tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
