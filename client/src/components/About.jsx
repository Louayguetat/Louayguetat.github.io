import React from 'react';
import { personal, education, languages, focusAreas, quickFacts } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { CloudIcon, LayersIcon, SparklesIcon, TrendIcon } from './Icons';
import './About.css';

const focusIcons = {
  layers: LayersIcon,
  ai: SparklesIcon,
  trend: TrendIcon,
  cloud: CloudIcon,
};

export default function About() {
  const { ref, inView } = useInView();
  const shown = inView ? ' is-visible' : '';

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Who I am</p>
          <h2 className="section-title">About me</h2>
        </div>

        <div ref={ref} className="about__grid">
          <div className="about__main">
            <div className={`about__intro reveal${shown}`}>
              <p className="about__bio about__bio--lead">{personal.bio}</p>
              <p className="about__bio">{personal.aboutExtra}</p>
            </div>

            <div className={`about__focus-head reveal${shown}`} style={{ '--reveal-delay': '0.06s' }}>
              <h3 className="about__focus-title">What I work on</h3>
              <span className="about__focus-rule" aria-hidden="true" />
            </div>

            <div className="about__focus">
              {focusAreas.map(({ icon, title, detail, tags }, i) => {
                const Icon = focusIcons[icon] || LayersIcon;
                return (
                  <article
                    key={title}
                    className={`focus-card reveal${shown}`}
                    style={{ '--reveal-delay': `${0.1 + i * 0.06}s` }}
                  >
                    <span className="focus-card__icon">
                      <Icon />
                    </span>
                    <h4 className="focus-card__title">{title}</h4>
                    <p className="focus-card__detail">{detail}</p>
                    <div className="focus-card__tags">
                      {tags.map((tag) => (
                        <span key={tag} className="focus-card__tag">{tag}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className={`about__side reveal${shown}`} style={{ '--reveal-delay': '0.12s' }}>
            <div className="about__block">
              <h3 className="about__block-title">The short version</h3>
              <dl className="facts">
                {quickFacts.map(({ label, value, highlight }) => (
                  <div key={label} className={`fact${highlight ? ' fact--highlight' : ''}`}>
                    <dt className="fact__label">{label}</dt>
                    <dd className="fact__value">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="about__block">
              <h3 className="about__block-title">Education</h3>
              <div className="about__timeline">
                {education.map((e, i) => (
                  <div key={i} className="edu-item">
                    <span className="edu-item__dot" />
                    <div className="edu-item__content">
                      <div className="edu-item__degree">{e.degree}</div>
                      <div className="edu-item__school">{e.school}, {e.location}</div>
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
          </aside>
        </div>
      </div>
    </section>
  );
}
