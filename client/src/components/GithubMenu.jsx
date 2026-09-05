import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { githubAccounts } from '../data/portfolio';
import { ExternalIcon, GithubIcon } from './Icons';
import './GithubMenu.css';

/* Grace period so the pointer can cross the gap between the trigger and the
   panel without the panel closing underneath it. */
const CLOSE_DELAY = 200;

/* GitHub trigger that reveals both accounts on hover. The caller supplies the
   trigger's own class and contents, so the same menu drops into the hero, the
   contact list, and the footer without any of them being restyled.

   `placement` and `align` decide which corner the panel hangs off, which is all
   the positioning this needs while every trigger sits in a predictable spot. */
export default function GithubMenu({
  children,
  triggerClassName = '',
  triggerLabel,
  placement = 'bottom',
  align = 'start',
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const closeTimer = useRef(null);
  const panelId = useId();

  const openNow = useCallback(() => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);

  const closeSoon = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  /* Touch fires pointerenter too, so hover is filtered down to real mice and
     touch is left to the click handler below. Without this a tap would open the
     panel on enter and immediately close it again on click. */
  const handlePointerEnter = (event) => {
    if (event.pointerType === 'mouse') openNow();
  };

  const handlePointerLeave = (event) => {
    if (event.pointerType === 'mouse') closeSoon();
  };

  /* A keyboard-generated click reports `detail === 0`. Those are handled in
     handleTriggerKeyDown, so ignoring them here stops Enter from closing the
     panel that focus just opened. */
  const handleTriggerClick = (event) => {
    if (event.detail === 0) return;
    setOpen((prev) => !prev);
  };

  const handleTriggerKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'ArrowDown') return;
    event.preventDefault();
    openNow();
    /* Wait for the panel to mount before reaching into it. */
    requestAnimationFrame(() => panelRef.current?.querySelector('a')?.focus());
  };

  const handleBlur = (event) => {
    if (!rootRef.current?.contains(event.relatedTarget)) setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={`ghmenu ghmenu--${placement} ghmenu--${align}${open ? ' is-open' : ''}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onFocus={openNow}
      onBlur={handleBlur}
    >
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        aria-label={triggerLabel}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
      >
        {children}
      </button>

      {open && (
        <div className="ghmenu__anchor" id={panelId}>
          <div ref={panelRef} className="ghmenu__panel">
            <p className="ghmenu__title">Two accounts</p>
            {githubAccounts.map(({ handle, url, label, note }) => (
              <a
                key={handle}
                className="ghmenu__item"
                href={url}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <span className="ghmenu__mark">
                  <GithubIcon size={16} />
                </span>
                <span className="ghmenu__text">
                  <span className="ghmenu__top">
                    <span className="ghmenu__handle">{handle}</span>
                    <span className={`ghmenu__label ghmenu__label--${label.toLowerCase()}`}>
                      {label}
                    </span>
                  </span>
                  <span className="ghmenu__note">{note}</span>
                </span>
                <span className="ghmenu__go">
                  <ExternalIcon size={13} />
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
