import React, { useState, useRef, useEffect } from 'react';
import '../style/AchievementsSection.css';
import '../style/style.css';
import '../style/responsive.css';
import techMemeCert from '../src/assets/sunstone-tech-meme.png';
import treasureHuntCert from '../src/assets/sunstone-treasure-hunt.jpg';

const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Tech Meme Competition Certificate',
    subtitle: '2nd Prize - Tech Meme Competition',
    issuer: 'Sunstone Tech Club',
    image: techMemeCert,
    alt: 'Tech Meme Competition certificate for 2nd prize',
  },
  {
    id: 2,
    title: 'Tech Treasure Hunt Certificate',
    subtitle: '3rd Position - Tech Treasure Hunt',
    issuer: 'Sunstone',
    image: treasureHuntCert,
    alt: 'Tech Treasure Hunt certificate for 3rd position',
  },
];

export default function AchievementsSection() {
  const [openCert, setOpenCert] = useState(null); // holds achievement object or null
  const closeBtnRef = useRef(null);
  const overlayRef = useRef(null);

 
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

  const FREELANCE_PROJECTS = [
    {
      id: 'fitbridge',
      title: 'Fit Bridge',
      short:
        'Fitness platform — workout tracker, diet planner, transformation timeline.',
      detail:
        'Fit Bridge is a fitness platform designed to help users track workouts, plan diet, and monitor body transformation over time. Focused on clean UI/UX and backend APIs for workout/diet data. Currently under development with features: user profiles, image uploads for progress, workout logging, diet plans and analytics.',
      tech: ['React (Vite)', 'Node/Express', 'MongoDB (planned)', 'Axios'],
      status: 'In development',
      repo: 'https://github.com/grchetan/fit-bridge', // <- change to your actual repo URL
      live: '', // optional live demo link
    },

    // example template for future freelance projects - copy/paste to add
    // {
    //   id: "client-xyz",
    //   title: "Client XYZ - Marketing Site",
    //   short: "Brand website + lead capture form.",
    //   detail: "Built a responsive marketing website with CMS and lead capture. Delivered pages, SEO basics and contact automation.",
    //   tech: ["HTML", "CSS", "Netlify"],
    //   status: "Delivered",
    //   repo: "https://github.com/yourname/client-xyz",
    //   live: "https://clientxyz.example.com"
    // }
  ];
  const [open, setOpen] = useState(null);
  const closeBtn = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open && closeBtn.current)
      closeBtn.current.focus({ preventScroll: true });
  }, [open]);

  function overlayClick(e) {
    if (e.target === overlayRef.current) setOpen(null);
  }

  return (
    <>
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
            Recognitions and milestones that reflect my dedication and
            competitive spirit.
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

        {/* Modal use */}
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

      <section className="freelance-section" id="freelance">
        <div className="freelance-header">
          <h2 className="freelance-title">Freelance Projects Showcase</h2>
          <p className="freelance-sub">
            Selected freelance work — client projects, ongoing builds and live
            demos.
          </p>
        </div>

        <div className="freelance-grid">
          {FREELANCE_PROJECTS.map((p) => (
            <article key={p.id} className="freelance-card" tabIndex={0}>
              <div className="freelance-left">
                <h3 className="freelance-name">{p.title}</h3>
                <p className="freelance-short">{p.short}</p>
                <div className="freelance-meta">
                  <span className="badge">{p.status}</span>
                  <div className="tech">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="freelance-cta">
                <button
                  className="btn primary"
                  onClick={() => setOpen(p)}
                  aria-haspopup="dialog"
                  aria-controls={`freelance-modal-${p.id}`}
                >
                  View Details
                </button>

                <a
                  className="link repo"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.title} repository`}
                >
                  View Repo →
                </a>

                {p.live && (
                  <a
                    className="link live"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {open && (
          <div
            className="freelance-overlay"
            role="dialog"
            aria-modal="true"
            id={`freelance-modal-${open.id}`}
            ref={overlayRef}
            onClick={overlayClick}
          >
            <div className="freelance-panel" role="document">
              <header className="panel-head">
                <div>
                  <h3 className="panel-title">{open.title}</h3>
                  <p className="panel-status">
                    Status: <strong>{open.status}</strong>
                  </p>
                </div>

                <button
                  className="panel-close"
                  onClick={() => setOpen(null)}
                  aria-label="Close details"
                  ref={closeBtn}
                >
                  ✕
                </button>
              </header>

              <div className="panel-body">
                <div className="panel-left">
                  <p className="panel-desc">{open.detail}</p>

                  <h4>Tech stack</h4>
                  <div className="panel-tech">
                    {open.tech.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <aside className="panel-side">
                  <a
                    className="panel-repo"
                    href={open.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗 Open Repository
                  </a>

                  {open.live && (
                    <a
                      className="panel-live"
                      href={open.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      🌐 View Live Demo
                    </a>
                  )}

                  <div className="panel-actions">
                    <a
                      className="download-prop"
                      href={open.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ⤓ Download / Browse Repo
                    </a>

                    <button
                      className="panel-close secondary"
                      onClick={() => setOpen(null)}
                    >
                      Close
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
