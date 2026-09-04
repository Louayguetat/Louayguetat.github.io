import React from 'react';
import { personal } from '../data/portfolio';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import './Footer.css';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="#hero">
              <span className="footer__mark">LG</span>
              <span className="footer__name">Louay Guetat</span>
            </a>
            <p className="footer__tagline">{personal.tagline}</p>
            <div className="footer__socials">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={17} />
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={17} />
              </a>
              <a href={`mailto:${personal.email}`} aria-label="Email">
                <MailIcon size={17} />
              </a>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <span className="footer__nav-title">Navigate</span>
            {footerLinks.map(({ label, href }) => (
              <a key={href} href={href} className="footer__nav-link">{label}</a>
            ))}
          </nav>

          <div className="footer__contact">
            <span className="footer__nav-title">Get in touch</span>
            <a href={`mailto:${personal.email}`} className="footer__contact-link">{personal.email}</a>
            <a href={`https://wa.me/${personal.whatsapp}`} target="_blank" rel="noreferrer" className="footer__contact-link">
              {personal.phone}
            </a>
            <span className="footer__contact-note">{personal.location} · {personal.available}</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Louay Guetat. All rights reserved.</span>
          <span className="footer__built">Designed and built with React</span>
        </div>
      </div>
    </footer>
  );
}
