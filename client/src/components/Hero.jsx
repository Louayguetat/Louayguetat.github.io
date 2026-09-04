import React from 'react';
import { personal, experiences, stats, coreStack } from '../data/portfolio';
import { ClockIcon, FileTextIcon, GithubIcon, LinkedinIcon, MailIcon, PinIcon } from './Icons';
import './Hero.css';

const currentRole = experiences.find((exp) => exp.current);

const highlights = [
  'Web, mobile, and cloud work on a single product',
  'A SEC document pipeline handling 37,000+ filings',
  'React, Python, FastAPI, and AWS in production',
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__status">
            <span className="dot" />
            Looking for a full-time role, happy to relocate
          </span>

          <h1 className="hero__name">Louay Guetat</h1>
          <p className="hero__role">Full Stack Engineer</p>

          <p className="hero__bio">
            I build web and mobile products for startups. Right now I work remotely for a US
            fintech company, where I handle most of the stack myself: the React front end, the
            Python and Node APIs, and the AWS setup behind them.
          </p>

          <div className="hero__meta">
            <span className="hero__meta-item">
              <PinIcon />
              {personal.location}
            </span>
            <span className="hero__meta-item">
              <ClockIcon />
              {personal.timezone}
            </span>
          </div>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">Get in touch</a>
            <a className="btn btn--ghost" href="#resume">
              <FileTextIcon size={15} />
              View my CV
            </a>

            <div className="hero__socials">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hero__social"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="hero__social"
                aria-label="GitHub"
              >
                <GithubIcon size={17} />
              </a>
              <a href={`mailto:${personal.email}`} className="hero__social" aria-label="Email">
                <MailIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        <aside className="hero__card">
          <div className="hero__card-head">
            <span className="hero__card-label">Where I am now</span>
            <span className="hero__card-badge">
              <span className="dot" />
              Available
            </span>
          </div>

          <h2 className="hero__card-title">{currentRole?.role}</h2>
          <p className="hero__card-company">
            {currentRole?.company}, {currentRole?.type}
          </p>

          <ul className="hero__card-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero__card-stack">
            <span className="hero__card-stack-label">Mostly working with</span>
            <div className="hero__card-tags">
              {coreStack.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="hero__stats">
        <div className="container hero__stats-grid">
          {stats.map(({ value, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
