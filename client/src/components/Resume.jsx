import React, { useState } from 'react';
import { resumeTracks, resumeLanguages } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { DownloadIcon, ExternalIcon, FileTextIcon } from './Icons';
import './Resume.css';

// Files live in client/public/CV/<track>/Louay_Guetat_<lang>.<ext>
const resumePath = (track, lang, ext) =>
  `${process.env.PUBLIC_URL || ''}/CV/${track}/Louay_Guetat_${lang}.${ext}`;

export default function Resume() {
  const { ref, inView } = useInView();
  const [track, setTrack] = useState(resumeTracks[0].id);
  const [lang, setLang] = useState(resumeLanguages[0].id);

  const pdf = resumePath(track, lang, 'pdf');
  const docx = resumePath(track, lang, 'docx');

  const activeTrack = resumeTracks.find((t) => t.id === track);
  const activeLang = resumeLanguages.find((l) => l.id === lang);
  const fileLabel = `${activeTrack.label} — ${activeLang.label}`;

  return (
    <section className="section resume" id="resume">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Résumé</p>
          <h2 className="section-title">Pick the <span>right CV</span></h2>
          <p className="section-sub">
            I keep two versions depending on the role, each in English and French. Preview it
            here, open it in a new tab, or download it as PDF or Word.
          </p>
        </div>

        <div ref={ref} className={`resume__layout reveal${inView ? ' is-visible' : ''}`}>
          <div className="resume__controls">
            <fieldset className="resume__group">
              <legend className="resume__group-label">Role focus</legend>
              <div className="resume__options">
                {resumeTracks.map((t) => (
                  <button
                    key={t.id}
                    className={`resume__option${track === t.id ? ' resume__option--active' : ''}`}
                    onClick={() => setTrack(t.id)}
                    aria-pressed={track === t.id}
                  >
                    <span className="resume__option-label">{t.label}</span>
                    <span className="resume__option-detail">{t.detail}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="resume__group">
              <legend className="resume__group-label">Language</legend>
              <div className="resume__options resume__options--row">
                {resumeLanguages.map((l) => (
                  <button
                    key={l.id}
                    className={`resume__option${lang === l.id ? ' resume__option--active' : ''}`}
                    onClick={() => setLang(l.id)}
                    aria-pressed={lang === l.id}
                  >
                    <span className="resume__option-label">{l.label}</span>
                    <span className="resume__option-detail">{l.hint}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="resume__actions">
              <a className="btn btn--primary" href={pdf} target="_blank" rel="noreferrer">
                <ExternalIcon size={15} />
                Open in new tab
              </a>
              <a className="btn btn--ghost" href={pdf} download>
                <DownloadIcon size={15} />
                Download PDF
              </a>
              <a className="resume__docx" href={docx} download>
                <FileTextIcon size={14} />
                Word version (.docx)
              </a>
            </div>
          </div>

          <div className="resume__viewer">
            <div className="resume__viewer-bar">
              <span className="resume__viewer-title">
                <FileTextIcon size={14} />
                {fileLabel}
              </span>
              <span className="resume__viewer-badge">PDF</span>
            </div>

            {/* key forces a remount so the embedded PDF reloads on every switch */}
            <iframe
              key={pdf}
              className="resume__frame"
              src={`${pdf}#view=FitH&navpanes=0`}
              title={`Louay Guetat résumé — ${fileLabel}`}
            />

            {/* Mobile browsers rarely render embedded PDFs, so offer a direct link */}
            <div className="resume__fallback">
              <FileTextIcon size={22} />
              <p className="resume__fallback-text">
                Inline preview isn't supported on small screens.
              </p>
              <a className="btn btn--primary" href={pdf} target="_blank" rel="noreferrer">
                Open {fileLabel}
                <ExternalIcon size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
