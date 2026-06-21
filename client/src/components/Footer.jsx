import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">Louay Guetat<span className="footer__dot">.</span></span>
        <span className="footer__copy">Built with React · {new Date().getFullYear()}</span>
        <span className="footer__location">Tunis, Tunisia 🇹🇳</span>
      </div>
    </footer>
  );
}
