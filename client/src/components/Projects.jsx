import React from 'react';
import { projects } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { ExternalIcon, GithubIcon } from './Icons';
import './Projects.css';

// Projects carrying hard numbers get the large treatment at the top.
const featured = projects.filter((p) => p.metrics && p.metrics.length);
const others = projects.filter((p) => !p.metrics || !p.metrics.length);

function StatusBadge({ label, color }) {
  return <span className={`project__status project__status--${color}`}>{label}</span>;
}

function CardLinks({ github, url }) {
  if (!github && !url) return null;
  return (
    <div className="project-card__actions">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="project-card__icon-btn"
          aria-label="View source on GitHub"
        >
          <GithubIcon size={15} />
        </a>
      )}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="project-card__icon-btn"
          aria-label="Visit live site"
        >
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
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-sub">
            Products I designed, built, and shipped — two of them running in production today.
          </p>
        </div>

        <div ref={ref} className="projects__featured">
          {featured.map((p, i) => (
            <article
              key={p.title}
              className={`project-hero reveal${inView ? ' is-visible' : ''}`}
              style={{ '--reveal-delay': `${i * 0.1}s` }}
            >
              <div className="project-hero__glow" aria-hidden="true" />

              <header className="project-hero__top">
                <span className="project-card__category">{p.category}</span>
                <div className="project-hero__top-right">
                  <StatusBadge label={p.status} color={p.statusColor} />
                  <CardLinks github={p.github} url={p.url} />
                </div>
              </header>

              <h3 className="project-hero__title">{p.title}</h3>

              <p className="project-hero__meta">
                {p.role}
                {p.period && (
                  <>
                    <span className="project-hero__meta-dot">·</span>
                    {p.period}
                  </>
                )}
              </p>

              <p className="project-hero__desc">{p.description}</p>

              <div className="project-hero__metrics">
                {p.metrics.map((m) => (
                  <div key={m.label} className="project-metric">
                    <span className="project-metric__value">{m.value}</span>
                    <span className="project-metric__label">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="project-card__tech">
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
              style={{ '--reveal-delay': `${0.2 + i * 0.07}s` }}
            >
              <header className="project-card__top">
                <StatusBadge label={p.status} color={p.statusColor} />
                <CardLinks github={p.github} url={p.url} />
              </header>

              <span className="project-card__category">{p.category}</span>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>

              <div className="project-card__tech">
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
