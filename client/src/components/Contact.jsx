import React, { useState } from 'react';
import { personal } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import {
  CheckIcon,
  CopyIcon,
  FileTextIcon,
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from './Icons';
import GithubMenu from './GithubMenu';
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
    { label: 'LinkedIn', sub: 'guetat-louay', href: personal.linkedin, icon: <LinkedinIcon size={17} /> },
    { label: 'GitHub', sub: 'Two accounts', menu: true, icon: <GithubIcon size={17} /> },
    {
      label: 'WhatsApp',
      sub: personal.phone,
      href: `https://wa.me/${personal.whatsapp}`,
      icon: <WhatsappIcon size={17} />,
    },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div ref={ref} className={`contact__grid reveal${inView ? ' is-visible' : ''}`}>
          <div className="contact__main">
            <p className="section-label">Get in touch</p>
            <h2 className="section-title">Let's talk</h2>

            <p className="contact__text">
              I'm looking for a full-time role and I'm open to moving anywhere in Europe, the
              Americas, or Asia. I would need visa sponsorship. If you're hiring, or you just
              want to talk about something you're building, send me a message.
            </p>

            <p className="contact__note">I usually reply within a day.</p>

            <div className="contact__email">
              <span className="contact__email-value">{personal.email}</span>
              <button className="contact__copy" onClick={copyEmail} aria-label="Copy email address">
                {copied ? <CheckIcon /> : <CopyIcon />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${personal.email}`}>Send an email</a>
              <a className="btn btn--ghost" href="#resume">
                <FileTextIcon size={15} />
                View my CV
              </a>
            </div>
          </div>

          <div className="contact__channels">
            {channels.map(({ label, sub, href, icon, menu }) => {
              const body = (
                <>
                  <span className="channel__icon">{icon}</span>
                  <span className="channel__text">
                    <span className="channel__label">{label}</span>
                    <span className="channel__sub">{sub}</span>
                  </span>
                </>
              );

              return menu ? (
                <GithubMenu key={label} triggerClassName="channel" placement="bottom" align="start">
                  {body}
                </GithubMenu>
              ) : (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="channel">
                  {body}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
