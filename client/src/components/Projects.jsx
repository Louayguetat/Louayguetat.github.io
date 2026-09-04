import React from 'react';
import { projects } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { ExternalIcon, GithubIcon } from './Icons';
import './Projects.css';

// Projects with hard numbers behind them get the larger treatment at the top.
const featured = projects.filter((p) => p.metrics && p.metrics.length);
const others = projects.filter((p) => !p.metrics || !p.metrics.length);

function CardLinks({ github, url }) {
  if (!github && !url) return null;
  return (
    <div className="project__links">
      {github && (
        <a href={github} target="_blank" rel="noreferrer" aria-label="View source on GitHub">
          <GithubIcon size={15} />
        </a>
      )}
      {url && (
        <a href={url} target="_blank" rel="noreferrer" aria-label="Visit live site">
          <ExternalIcon size={14} />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Work</p>
          <h2 className="section-title">Things I have built</h2>
          <p className="section-sub">
            A mix of client work, side projects, and university projects. Two of them are live
            and in daily use.
          </p>
        </div>

        <div ref={ref} className="projects__featured">
          {featured.map((p, i) => (
            <article
              key={p.title}
              className={`project-hero reveal${inView ? ' is-visible' : ''}`}
              style={{ '--reveal-delay': `${i * 0.08}s` }}
            >
              <div className="project__top">
                <span className="project__category">{p.category}</span>
                <CardLinks github={p.github} url={p.url} />
              </div>

              <h3 className="project-hero__title">{p.title}</h3>
              <p className="project-hero__meta">
                {p.role}
                {p.period ? `, ${p.period}` : ''}
              </p>
              <p className="project__desc">{p.description}</p>

              <div className="project-hero__metrics">
                {p.metrics.map((m) => (
                  <div key={m.label} className="project-metric">
                    <span className="project-metric__value">{m.value}</span>
                    <span className="project-metric__label">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="project__tech">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="projects__grid">
          {others.map((p, i) => (
            <article
              key={p.title}
              className={`project-card reveal${inView ? ' is-visible' : ''}`}
              style={{ '--reveal-delay': `${0.16 + i * 0.06}s` }}
            >
              <div className="project__top">
                <span className="project__category">{p.category}</span>
                <CardLinks github={p.github} url={p.url} />
              </div>

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-hero__meta">{p.status}</p>
              <p className="project__desc">{p.description}</p>

              <div className="project__tech">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
