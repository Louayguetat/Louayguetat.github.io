import React from 'react';
import { personal, education, languages } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './About.css';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section className="section about" id="about">
      <div className="container">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">About <span>Me</span></h2>

        <div ref={ref} className={`about__grid${inView ? ' fade-up' : ''}`}>

          {/* Bio */}
          <div className="about__bio-block">
            <p className="about__bio">{personal.bio}</p>
            <p className="about__bio">{personal.aboutExtra}</p>
            <div className="about__flags">
              <span className="about__flag">🇹🇳 Tunis</span>
              <span className="about__arrow">→</span>
              <span className="about__flag">🌍 Open to relocation</span>
            </div>
          </div>

          {/* Education */}
          <div className="about__side">
            <div className="about__block">
              <h3 className="about__block-title">Education</h3>
              <div className="about__timeline">
                {education.map((e, i) => (
                  <div key={i} className="edu-item">
                    <div className="edu-item__dot" />
                    <div className="edu-item__content">
                      <div className="edu-item__degree">{e.degree}</div>
                      <div className="edu-item__school">{e.school} · {e.location}</div>
                      <div className="edu-item__period">{e.period}</div>
                      {e.note && <div className="edu-item__note">{e.note}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about__block">
              <h3 className="about__block-title">Languages</h3>
              <div className="about__langs">
                {languages.map(({ lang, level }) => (
                  <div key={lang} className="lang-row">
                    <span className="lang-row__name">{lang}</span>
                    <span className="lang-row__level">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
