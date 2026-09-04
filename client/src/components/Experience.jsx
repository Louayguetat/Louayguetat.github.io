import React, { useState } from 'react';
import { experiences } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { ExternalIcon } from './Icons';
import './Experience.css';

const initials = (name) =>
  name.replace(/[()]/g, '').split(/[\s.]+/).filter(Boolean)
    .map((w) => w[0]).join('').slice(0, 2).toUpperCase();

export default function Experience() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();
  const exp = experiences[active];

  return (
    <section className="section section--alt experience" id="experience">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Career</p>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-sub">
            Six roles across fintech, data science, and agency work — from Java desktop tooling
            to production AI systems on AWS.
          </p>
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
                <span className="exp__tab-mark">{initials(e.company)}</span>
                <span className="exp__tab-text">
                  <span className="exp__tab-company">{e.company}</span>
                  <span className="exp__tab-period">{e.period}</span>
                </span>
                {e.current && <span className="exp__tab-live" aria-label="Current role" />}
              </button>
            ))}
          </div>

          <div className="exp__panel" role="tabpanel">
            <div className="exp__panel-head">
              <div>
                <h3 className="exp__role">{exp.role}</h3>
                <div className="exp__company">
                  {exp.companyUrl ? (
                    <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="exp__company-link">
                      {exp.company}
                      <ExternalIcon size={13} />
                    </a>
                  ) : (
                    <span className="exp__company-name">{exp.company}</span>
                  )}
                  <span className="exp__sep">·</span>
                  <span className="exp__type">{exp.type}</span>
                </div>
              </div>

              <div className="exp__panel-meta">
                <span className="exp__period">{exp.period}</span>
                {exp.current && (
                  <span className="exp__badge">
                    <span className="pulse-dot" />
                    Current
                  </span>
                )}
              </div>
            </div>

            <p className="exp__description">{exp.description}</p>

            <span className="exp__section-label">Selected work</span>
            <ul className="exp__highlights">
              {exp.highlights.map((h, i) => (
                <li key={i} className="exp__highlight" style={{ '--reveal-delay': `${i * 0.05}s` }}>
                  <span className="exp__bullet" aria-hidden="true" />
                  {h}
                </li>
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
