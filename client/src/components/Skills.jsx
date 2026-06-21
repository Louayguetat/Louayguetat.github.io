import React, { useState } from 'react';
import { skills } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Skills.css';

const categories = Object.keys(skills);

export default function Skills() {
  const [active, setActive] = useState(categories[0]);
  const { ref, inView } = useInView();

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <p className="section-label">Toolkit</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>

        <div ref={ref} className={`skills__wrapper${inView ? ' fade-up' : ''}`}>
          <div className="skills__filter" role="tablist">
            {categories.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`skills__filter-btn${active === cat ? ' skills__filter-btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="skills__grid" role="tabpanel">
            {skills[active].map((skill, i) => (
              <div
                key={skill}
                className="skill-chip"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* All skills overview */}
        <div className="skills__overview">
          {categories.map(cat => (
            <div key={cat} className="skills__group">
              <h4 className="skills__group-title">{cat}</h4>
              <p className="skills__group-items">{skills[cat].join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
