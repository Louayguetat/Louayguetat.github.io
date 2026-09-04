import React from 'react';
import { skills, coreStack } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Skills.css';

const categories = Object.entries(skills);

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section className="section section--alt skills" id="skills">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Toolkit</p>
          <h2 className="section-title">What I work with</h2>
        </div>

        <div ref={ref}>
          <div className={`skills__core reveal${inView ? ' is-visible' : ''}`}>
            <span className="skills__core-label">Day to day</span>
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
                style={{ '--reveal-delay': `${0.06 + i * 0.05}s` }}
              >
                <h3 className="skill-group__title">{category}</h3>
                <p className="skill-group__items">{items.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
