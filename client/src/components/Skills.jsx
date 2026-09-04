import React from 'react';
import { skills, coreStack, personal } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { ArrowRightIcon } from './Icons';
import './Skills.css';

const categories = Object.entries(skills);

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section className="section section--alt skills" id="skills">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Toolkit</p>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <p className="section-sub">
            The stack I reach for daily is highlighted first; everything below it is something
            I have shipped with.
          </p>
        </div>

        <div ref={ref}>
          <div className={`skills__core reveal${inView ? ' is-visible' : ''}`}>
            <span className="skills__core-label">Daily driver</span>
            <div className="skills__core-list">
              {coreStack.map((skill) => (
                <span key={skill} className="skills__core-chip">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills__grid">
            {categories.map(([category, items], i) => (
              <div
                key={category}
                className={`skill-group reveal${inView ? ' is-visible' : ''}`}
                style={{ '--reveal-delay': `${0.08 + i * 0.07}s` }}
              >
                <div className="skill-group__head">
                  <h3 className="skill-group__title">{category}</h3>
                  <span className="skill-group__count">{items.length}</span>
                </div>
                <div className="skill-group__items">
                  {items.map((item) => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}

            <a
              href={`mailto:${personal.email}`}
              className={`skill-group skill-group--cta reveal${inView ? ' is-visible' : ''}`}
              style={{ '--reveal-delay': `${0.08 + categories.length * 0.07}s` }}
            >
              <h3 className="skill-group__title">Not seeing your stack?</h3>
              <p className="skill-group__cta-text">
                I pick up new tools quickly — most of the list above was learned on the job.
                Tell me what you run and I'll tell you honestly where I stand.
              </p>
              <span className="skill-group__cta-link">
                Ask me
                <ArrowRightIcon size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
