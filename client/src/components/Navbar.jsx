import React, { useState, useEffect } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => document.querySelector(l.href));
      let current = '';
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = '#' + section.id;
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a className="navbar__logo" href="#hero" onClick={() => handleNav('#hero')}>
          LG<span className="navbar__dot">.</span>
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
          <a
            className="navbar__cta"
            href="mailto:louay.guetat1@gmail.com"
          >
            Hire me
          </a>
        </nav>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`}>
        {navLinks.map(({ label, href }) => (
          <button
            key={href}
            className="navbar__drawer-link"
            onClick={() => handleNav(href)}
          >
            {label}
          </button>
        ))}
        <a className="navbar__cta navbar__cta--mobile" href="mailto:louay.guetat1@gmail.com">
          Hire me
        </a>
      </div>
    </header>
  );
}
