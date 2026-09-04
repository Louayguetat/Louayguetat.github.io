import React, { useState } from 'react';
import { experiences } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { ExternalIcon } from './Icons';
import './Experience.css';

export default function Experience() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();
  const exp = experiences[active];

  return (
    <section className="section section--alt experience" id="experience">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Career</p>
          <h2 className="section-title">Where I have worked</h2>
        </div>

        <div ref={ref} className={`exp__layout reveal${inView ? ' is-visible' : ''}`}>
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
              </button>
            ))}
          </div>

          <div className="exp__panel" role="tabpanel">
            <h3 className="exp__role">{exp.role}</h3>

            <div className="exp__company">
              {exp.companyUrl ? (
                <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="exp__company-link">
                  {exp.company}
                  <ExternalIcon size={12} />
                </a>
              ) : (
                <span className="exp__company-name">{exp.company}</span>
              )}
              <span className="exp__meta">{exp.type}, {exp.period}</span>
            </div>

            <p className="exp__description">{exp.description}</p>

            <ul className="exp__highlights">
              {exp.highlights.map((h, i) => (
                <li key={i} className="exp__highlight">{h}</li>
              ))}
            </ul>

            <div className="exp__tech">
              {exp.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
