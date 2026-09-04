import React, { useState } from 'react';
import { personal } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  CopyIcon,
  FileTextIcon,
  GithubIcon,
  LinkedinIcon,
  PinIcon,
  WhatsappIcon,
} from './Icons';
import './Contact.css';

export default function Contact() {
  const { ref, inView } = useInView();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      label: 'LinkedIn',
      sub: 'guetat-louay',
      href: personal.linkedin,
      icon: <LinkedinIcon size={19} />,
    },
    {
      label: 'GitHub',
      sub: 'Louay-Guetat',
      href: personal.github,
      icon: <GithubIcon size={19} />,
    },
    {
      label: 'WhatsApp',
      sub: personal.phone,
      href: `https://wa.me/${personal.whatsapp}`,
      icon: <WhatsappIcon size={19} />,
    },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div ref={ref} className={`contact__panel reveal${inView ? ' is-visible' : ''}`}>
          <div className="contact__panel-glow" aria-hidden="true" />

          <div className="contact__main">
            <p className="section-label">Let's talk</p>
            <h2 className="contact__title">
              Ready to build something<br />
              <span>worth shipping?</span>
            </h2>

            <p className="contact__text">
              I'm open to full-time roles anywhere across <strong>Europe</strong>,
              the <strong>Americas</strong>, and <strong>Asia</strong> — no country is off the
              table, and I'm happy to relocate. Visa sponsorship required. If you're hiring or
              just want to compare notes, my inbox is always open.
            </p>

            <div className="contact__facts">
              <span className="contact__fact">
                <PinIcon />
                {personal.location}
              </span>
              <span className="contact__fact">
                <ClockIcon />
                {personal.timezone}
              </span>
              <span className="contact__fact contact__fact--live">
                <span className="pulse-dot" />
                Usually replies within 24 hours
              </span>
            </div>

            <div className="contact__email">
              <span className="contact__email-value">{personal.email}</span>
              <button className="contact__copy" onClick={copyEmail} aria-label="Copy email address">
                {copied ? <CheckIcon /> : <CopyIcon />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${personal.email}`}>
                Send an email
                <ArrowRightIcon size={15} />
              </a>
              <a className="btn btn--ghost" href="#resume">
                <FileTextIcon size={15} />
                View résumé
              </a>
            </div>
          </div>

          <div className="contact__channels">
            {channels.map(({ label, sub, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="channel-card"
              >
                <span className="channel-card__icon">{icon}</span>
                <span className="channel-card__text">
                  <span className="channel-card__label">{label}</span>
                  <span className="channel-card__sub">{sub}</span>
                </span>
                <span className="channel-card__arrow">
                  <ArrowRightIcon size={15} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
