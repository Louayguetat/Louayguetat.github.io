import React, { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';
import { useTheme } from '../hooks/useTheme';
import { DownloadIcon, MoonIcon, SunIcon } from './Icons';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);

      let current = '';
      navLinks.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section && window.scrollY >= section.offsetTop - 140) current = href;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a className="navbar__logo" href="#hero" onClick={() => handleNav('#hero')}>
          <span className="navbar__mark">LG</span>
          <span className="navbar__wordmark">
            Louay Guetat
            <span className="navbar__wordmark-role">Full Stack Engineer</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              className={`navbar__link${active === href ? ' navbar__link--active' : ''}`}
              onClick={() => handleNav(href)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <a className="navbar__resume" href={personal.resumeUrl} download>
            <DownloadIcon size={15} />
            Résumé
          </a>

          <a className="navbar__cta" href={`mailto:${personal.email}`}>
            Hire me
          </a>

          <button
            className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className="navbar__progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`}>
        {navLinks.map(({ label, href }) => (
          <button key={href} className="navbar__drawer-link" onClick={() => handleNav(href)}>
            {label}
          </button>
        ))}
        <div className="navbar__drawer-actions">
          <a className="btn btn--ghost" href={personal.resumeUrl} download>
            <DownloadIcon size={15} />
            Résumé
          </a>
          <a className="btn btn--primary" href={`mailto:${personal.email}`}>
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
