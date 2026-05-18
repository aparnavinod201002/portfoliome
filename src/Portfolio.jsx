import React, { useState, useEffect } from 'react';
import pic from './assets/pic.png';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import aparna from './assets/Aparna.pdf';
import Footer from './components/Footer';

/* ─── Inline styles ─────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Syne:wght@400;500;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #07080d;
    --surface:  #0e0f18;
    --accent:   #c72e00;
    --accent2:  #6366f1;
    --text:     #e8e4de;
    --muted:    rgba(232,228,222,0.45);
    --border:   rgba(232,228,222,0.08);
    --nav-h:    64px;
  }

  html { scroll-behavior: smooth; }

  body, #root {
    background: var(--bg);
    color: var(--text);
    font-family: 'Syne', sans-serif;
    overflow-x: hidden;
  }

  /* ── NAV ── */
  .pf-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: var(--nav-h);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
    transition: background 0.35s, border-color 0.35s;
    border-bottom: 1px solid transparent;
  }

  .pf-nav.scrolled {
    background: rgba(7,8,13,0.85);
    backdrop-filter: blur(18px);
    border-color: var(--border);
  }

  .pf-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: 0.04em;
    text-decoration: none;
  }

  .pf-links {
    display: flex;
    align-items: center;
    gap: 36px;
    list-style: none;
  }

  .pf-links a {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
    position: relative;
  }

  .pf-links a::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 0;
    width: 0; height: 1px;
    background: var(--accent);
    transition: width 0.25s;
  }

  .pf-links a:hover { color: var(--text); }
  .pf-links a:hover::after { width: 100%; }

  .pf-nav-cta {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    border: 1px solid rgba(200,47,0,0.35);
    border-radius: 100px;
    padding: 8px 22px;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
  }

  .pf-nav-cta:hover {
    background: rgba(200,47,0,0.1);
  }

  /* ── HERO ── */
  .pf-hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 420px;
    align-items: center;
    gap: 48px;
    padding: calc(var(--nav-h) + 60px) 80px 80px;
    position: relative;
    overflow: hidden;
  }

  /* Background blobs */
  .pf-hero::before {
    content: '';
    position: absolute;
    top: 10%;  left: -10%;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(0,229,200,0.07) 0%, transparent 65%);
    pointer-events: none;
  }

  .pf-hero::after {
    content: '';
    position: absolute;
    bottom: 5%; right: 5%;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%);
    pointer-events: none;
  }

  /* Decorative grid lines */
  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 80px 80px;
    mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 100%);
    pointer-events: none;
  }

  /* ── HERO TEXT ── */
  .hero-text { position: relative; z-index: 1; }

  .hero-greeting {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 24px;
    opacity: 0;
    animation: riseIn 0.7s ease 0.1s forwards;
  }

  .hero-greeting::before {
    content: '';
    display: block;
    width: 32px; height: 1px;
    background: var(--accent);
  }

  .hero-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(52px, 7vw, 88px);
    font-weight: 700;
    line-height: 1.0;
    color: var(--text);
    margin-bottom: 16px;
    opacity: 0;
    animation: riseIn 0.8s ease 0.25s forwards;
  }

  .hero-name em {
    font-style: italic;
    color: var(--accent);
  }

  .hero-role {
    font-size: clamp(16px, 2vw, 20px);
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 32px;
    opacity: 0;
    animation: riseIn 0.8s ease 0.4s forwards;
  }

  .hero-role span {
    color: #c72e00;
  }

  .hero-desc {
    font-size: 15px;
    font-weight: 400;
    color: var(--muted);
    line-height: 1.85;
    max-width: 560px;
    margin-bottom: 44px;
    opacity: 0;
    animation: riseIn 0.8s ease 0.55s forwards;
  }

  .hero-desc strong {
    color: var(--text);
    font-weight: 500;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 44px;
    opacity: 0;
    animation: riseIn 0.8s ease 0.65s forwards;
  }

  .htag {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: rgba(200,47,0,0.7);
    background: rgba(200,47,0,0.07);
    border: 1px solid rgba(200,47,0,0.15);
    border-radius: 100px;
    padding: 5px 14px;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: 18px;
    opacity: 0;
    animation: riseIn 0.8s ease 0.78s forwards;
  }

  .btn-primary-pf {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #07080d;
    background: var(--accent);
    border: none;
    border-radius: 100px;
    padding: 14px 32px;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .btn-primary-pf:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0,229,200,0.25);
    color: #07080d;
  }

  .btn-outline-pf {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text);
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 100px;
    padding: 14px 32px;
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s;
  }

  .btn-outline-pf:hover {
    border-color: rgba(232,228,222,0.25);
    background: rgba(232,228,222,0.04);
    color: var(--text);
  }

  /* ── HERO IMAGE ── */
  .hero-img-wrap {
    position: relative;
    z-index: 1;
    opacity: 0;
    animation: riseIn 0.9s ease 0.4s forwards;
  }

  .hero-img-frame {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    aspect-ratio: 3/4;
    max-height: 520px;
  }

  .hero-img-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(20%) contrast(1.05);
    transition: filter 0.4s;
  }

  .hero-img-frame:hover img { filter: grayscale(0%) contrast(1); }

  /* Teal overlay tint */
  .hero-img-frame::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      160deg,
      rgba(0,229,200,0.08) 0%,
      transparent 50%,
      rgba(99,102,241,0.08) 100%
    );
    pointer-events: none;
  }

  /* Decorative corner accent */
  .img-accent {
    position: absolute;
    bottom: -16px; right: -16px;
    width: 100px; height: 100px;
    border: 2px solid rgba(200,47,0,0.25);
    border-radius: 18px;
    z-index: -1;
  }

  .img-accent2 {
    position: absolute;
    top: -12px; left: -12px;
    width: 60px; height: 60px;
    background: rgba(200,47,0,0.06);
    border: 1px solid rgba(200,47,0,0.15);
    border-radius: 12px;
    z-index: -1;
  }

  /* Status pill */
  .status-pill {
    position: absolute;
    bottom: 20px; left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: var(--accent);
    background: rgba(7,8,13,0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(200,47,0,0.2);
    border-radius: 100px;
    padding: 7px 18px;
    white-space: nowrap;
  }

  .pulse-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 2s infinite;
  }

  /* ── KEYFRAMES ── */
  @keyframes riseIn {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%,100%{ box-shadow: 0 0 0 0 rgba(0,229,200,0.5); }
    50%{ box-shadow: 0 0 0 6px rgba(0,229,200,0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .pf-hero {
      grid-template-columns: 1fr;
      padding: calc(var(--nav-h) + 40px) 28px 60px;
      text-align: center;
    }
    .hero-img-wrap { order: -1; max-width: 280px; margin: 0 auto; }
    .hero-actions { justify-content: center; }
    .hero-tags { justify-content: center; }
    .pf-nav { padding: 0 24px; }
    .pf-links { gap: 20px; }
  }

  @media (max-width: 600px) {
    .pf-links { display: none; }
  }
`;

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#Skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

const TAGS = [
  'MERN Stack', 'REST APIs', 'JWT Auth', 'Socket.IO',
  'Stripe · Razorpay', 'PostgreSQL', 'React.js', 'Node.js',
];

/* ─── Component ─────────────────────────────────────────────── */
function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{css}</style>

      {/* ── NAVBAR ── */}
      <nav className={`pf-nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="pf-logo">AV.</a>

        <ul className="pf-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}><a href={href}>{label}</a></li>
          ))}
        </ul>

        <a href={aparna} className="pf-nav-cta" download>
          Resume ↓
        </a>
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="pf-hero">
        <div className="hero-grid" aria-hidden="true" />

        {/* Left: text */}
        <div className="hero-text">
          <div className="hero-greeting">Hello, I'm</div>

          <h1 className="hero-name">
            Aparna<br /><em>Vinod</em>
          </h1>

          <p className="hero-role">
            <span>MERN</span> Stack Web Developer
          </p>

          <p className="hero-desc">
            Over <strong>1 year of professional experience</strong> building scalable,
            production-grade web applications. Proficient in{' '}
            <strong>MongoDB, Express.js, React.js &amp; Node.js</strong> with hands-on expertise
            in RESTful API design, JWT authentication, real-time communication (Socket.IO),
            and third-party payment integrations — <strong>Stripe, Razorpay &amp; Cashfree</strong>.
          </p>

          <div className="hero-tags">
            {TAGS.map(t => <span className="htag" key={t}>{t}</span>)}
          </div>

          <div className="hero-actions">
            <a href={aparna} className="btn-primary-pf" download>
              Download Resume
            </a>
            <a href="#contact" className="btn-outline-pf">
              Hire Me →
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="hero-img-wrap">
          <div className="img-accent2" aria-hidden="true" />
          <div className="hero-img-frame">
            <img src={pic} alt="Aparna Vinod — MERN Stack Developer" />
            <div className="status-pill">
              <span className="pulse-dot" />
              Open to opportunities
            </div>
          </div>
          <div className="img-accent" aria-hidden="true" />
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default Portfolio;