import React from 'react';
import { personal } from '../data/portfolio';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import GithubMenu from './GithubMenu';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__name">Louay Guetat</span>
          <span className="footer__meta">
            {personal.location}. {new Date().getFullYear()}.
          </span>
        </div>

        <div className="footer__socials">
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
          <GithubMenu triggerLabel="GitHub, two accounts" placement="top" align="end">
            <GithubIcon size={16} />
          </GithubMenu>
          <a href={`mailto:${personal.email}`} aria-label="Email">
            <MailIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
