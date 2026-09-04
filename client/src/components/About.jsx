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

// Rough strength meter so recruiters can scan language levels visually.
function levelStrength(level) {
  if (/native/i.test(level)) return 3;
  if (/professional|c1|c2|b2/i.test(level)) return 2;
  return 1;
}

export default function About() {
  const { ref, inView } = useInView();
  const shown = inView ? ' is-visible' : '';

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Who I am</p>
          <h2 className="section-title">About <span>Me</span></h2>
          <p className="section-sub">
            A product-minded engineer who is comfortable owning a feature from the interface
            down to the infrastructure it runs on.
          </p>
        </div>

        <div ref={ref} className="about__grid">
          <div className="about__main">
            <div className={`about__intro reveal${shown}`}>
              <p className="about__bio about__bio--lead">{personal.bio}</p>
              <p className="about__bio">{personal.aboutExtra}</p>
            </div>

            <div className={`about__focus-head reveal${shown}`} style={{ '--reveal-delay': '0.08s' }}>
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
                    style={{ '--reveal-delay': `${0.12 + i * 0.08}s` }}
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

          <aside className={`about__side reveal${shown}`} style={{ '--reveal-delay': '0.16s' }}>
            <div className="about__block about__block--facts">
              <h3 className="about__block-title">At a glance</h3>
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
                {languages.map(({ lang, level }) => {
                  const strength = levelStrength(level);
                  return (
                    <div key={lang} className="lang-row">
                      <div className="lang-row__head">
                        <span className="lang-row__name">{lang}</span>
                        <span className="lang-row__level">{level}</span>
                      </div>
                      <div className="lang-row__meter" aria-hidden="true">
                        {[1, 2, 3].map((step) => (
                          <span
                            key={step}
                            className={`lang-row__seg${step <= strength ? ' lang-row__seg--on' : ''}`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
