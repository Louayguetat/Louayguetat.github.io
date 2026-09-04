import React from 'react';
import { personal, experiences, stats, coreStack } from '../data/portfolio';
import {
  ArrowRightIcon,
  ClockIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
} from './Icons';
import './Hero.css';

const currentRole = experiences.find((exp) => exp.current);

const highlights = [
  'Web, mobile, and cloud work on a single product',
  'SEC document pipeline handling 37,000+ filings',
  'React, Python, FastAPI, and AWS in production',
];

const initials = (name) =>
  name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__backdrop" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__status">
            <span className="pulse-dot" />
            Open to full-time roles · Worldwide
          </span>

          <h1 className="hero__name">
            Louay <span>Guetat</span>
          </h1>

          <p className="hero__role">
            Full Stack Engineer
            <span className="hero__role-sep" />
            <span className="hero__role-note">React · Python · AWS</span>
          </p>

          <p className="hero__bio">
            I build and ship production software end to end — from React interfaces to Python APIs
            and the AWS infrastructure underneath. Currently doing that remotely for a US fintech
            startup, and open to relocating anywhere in Europe, the Americas, or Asia for the
            right role.
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
            <a className="btn btn--primary" href="#contact">
              Get in touch
              <ArrowRightIcon size={15} />
            </a>
            <a className="btn btn--ghost" href={personal.resumeUrl} download>
              <DownloadIcon size={15} />
              Download résumé
            </a>

            <div className="hero__socials">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hero__social"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="hero__social"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a href={`mailto:${personal.email}`} className="hero__social" aria-label="Email">
                <MailIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <aside className="hero__card">
          <div className="hero__card-glow" aria-hidden="true" />

          <div className="hero__card-head">
            <span className="hero__card-label">Currently</span>
            <span className="hero__card-badge">
              <span className="pulse-dot" />
              Available
            </span>
          </div>

          <div className="hero__card-role">
            <span className="hero__card-avatar">{initials(currentRole?.company || 'LG')}</span>
            <div>
              <h2 className="hero__card-title">{currentRole?.role}</h2>
              <p className="hero__card-company">
                {currentRole?.company}
                <span className="hero__card-dot">·</span>
                {currentRole?.type}
              </p>
            </div>
          </div>

          <ul className="hero__card-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero__card-stack">
            <span className="hero__card-stack-label">Core stack</span>
            <div className="hero__card-tags">
              {coreStack.map((tech) => (
                <span key={tech} className="tag tag--accent">{tech}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="hero__stats">
        <div className="container hero__stats-grid">
          {stats.map(({ value, unit, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-value">
                {value}
                {unit && <em>{unit}</em>}
              </span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
