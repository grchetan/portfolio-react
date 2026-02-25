import React, { useState, useRef, useEffect } from 'react';
import '../style/AchievementsSection.css';
import '../style/style.css';
import '../style/responsive.css';

/**
 * Replace `image` values with your certificate image URLs (public folder or hosted).
 * Example: "/certs/tech-meme-cert.jpg" or "https://yourcdn.com/certs/.."
 */
const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Tech Meme Competition Certificate',
    subtitle: '2nd Prize - Tech Meme Competition',
    issuer: 'Sunstone Tech Club',
    image: '/images/cert-tech-meme.jpg', // <-- replace
    alt: 'Tech Meme Competition certificate for 2nd prize',
  },
  {
    id: 2,
    title: 'Tech Treasure Hunt Certificate',
    subtitle: '3rd Position - Tech Treasure Hunt',
    issuer: 'Sunstone',
    image: '/images/cert-treasure-hunt.jpg', // <-- replace
    alt: 'Tech Treasure Hunt certificate for 3rd position',
  },
];

export default function AchievementsSection() {
  const [openCert, setOpenCert] = useState(null); // holds achievement object or null
  const closeBtnRef = useRef(null);
  const overlayRef = useRef(null);

  // close on Esc
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpenCert(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // focus management: when modal opens, focus close button
  useEffect(() => {
    if (openCert && closeBtnRef.current) {
      closeBtnRef.current.focus({ preventScroll: true });
    }
  }, [openCert]);

  // close when clicking overlay (but not when clicking inside the modal content)
  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) {
      setOpenCert(null);
    }
  }

  return (
    <section
      className="ach-section"
      id="achievements"
      aria-labelledby="ach-heading"
    >
      <div className="ach-header">
        <h2 id="ach-heading" className="head">
          My Achievements
        </h2>
        <p className="ach-sub">
          Recognitions and milestones that reflect my dedication and competitive
          spirit.
        </p>
      </div>

      <div className="ach-grid">
        {ACHIEVEMENTS.map((a) => (
          <article key={a.id} className="ach-card" tabIndex={0}>
            <div className="ach-info">
              <h3 className="ach-name">{a.title}</h3>
              <p className="ach-subtitle">{a.subtitle}</p>
              <p className="ach-issuer">
                Issued by <strong>{a.issuer}</strong>
              </p>
            </div>

            <div className="ach-actions">
              <button
                className="ach-btn ach-btn-primary"
                onClick={() => setOpenCert(a)}
                aria-haspopup="dialog"
                aria-controls="cert-modal"
              >
                View Certificate
              </button>
              <a
                className="ach-link"
                href={a.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${a.title} in new tab`}
              >
                Open in new tab
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {openCert && (
        <div
          className="cert-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-title"
          id="cert-modal"
          ref={overlayRef}
          onClick={handleOverlayClick}
        >
          <div className="cert-panel" role="document">
            <header className="cert-header">
              <h3 id="cert-title" className="cert-heading">
                {openCert.title}
              </h3>
              <button
                className="cert-close"
                onClick={() => setOpenCert(null)}
                aria-label="Close certificate"
                ref={closeBtnRef}
              >
                ✕
              </button>
            </header>

            <div className="cert-body">
              {/* certificate image */}
              <img
                src={openCert.image}
                alt={openCert.alt || `${openCert.title} certificate`}
                className="cert-image"
              />

              {/* small details + download */}
              <div className="cert-meta">
                <p className="cert-meta-line">
                  <strong>{openCert.subtitle}</strong>
                </p>
                <p className="cert-meta-line">Issued by {openCert.issuer}</p>

                <div className="cert-actions">
                  <a
                    className="cert-download"
                    href={openCert.image}
                    target="_blank"
                    rel="noreferrer"
                    download
                    aria-label={`Download ${openCert.title}`}
                  >
                    ⤓ Download
                  </a>
                  <button
                    className="cert-close secondary"
                    onClick={() => setOpenCert(null)}
                    aria-label="Close certificate"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
