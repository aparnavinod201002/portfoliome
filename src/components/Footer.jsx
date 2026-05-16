import React, { useState } from 'react';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/aparnavinod201002',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    accent: '#c82f00',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aparna-vinod-234aa5311',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    accent: '#c82f00',
  },
  {
    label: 'Email',
    href: 'mailto:aparnavinod083@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
    accent: '#c82f00',
  },
];

function SocialButton({ social }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={social.href}
      target={social.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      aria-label={social.label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '46px',
        height: '46px',
        borderRadius: '12px',
        border: `1px solid ${hovered ? social.accent + '60' : 'rgba(255,255,255,0.08)'}`,
        background: hovered ? `${social.accent}15` : 'rgba(255,255,255,0.04)',
        color: hovered ? social.accent : 'rgba(255,255,255,0.45)',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 8px 24px ${social.accent}25` : 'none',
      }}
    >
      {social.icon}
    </a>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500;600&display=swap');
        #footer-root * { box-sizing: border-box; }
        #footer-root a { text-decoration: none !important; }
      `}</style>

      <footer
        id="contact"
        style={{
          position: 'relative',
          background: '#020817',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          fontFamily: "'DM Sans', sans-serif",
          overflow: 'hidden',
        }}
      >
        <div id="footer-root">

          {/* Ambient glow */}
          <div style={{
            position: 'absolute', bottom: 0, left: '50%',
            transform: 'translateX(-50%)',
            width: '600px', height: '200px',
            background: 'radial-gradient(ellipse, rgba(200,47,0,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Top CTA strip */}
          <div style={{
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            padding: '3.5rem 2rem',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c82f00',
              display: 'block',
              marginBottom: '1rem',
            }}>
              Get in Touch
            </span>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              color: '#f1f5f9',
              letterSpacing: '-0.03em',
              margin: '0 0 0.75rem',
              lineHeight: 1.15,
            }}>
              Let's work together
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: '0.95rem',
              maxWidth: '420px',
              margin: '0 auto 1.8rem',
              lineHeight: 1.7,
            }}>
              Have a project in mind or just want to say hello? My inbox is always open.
            </p>
            <a
              href="mailto:aparnavinod083@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                color: '#020817',
                background: '#c82f00',
                borderRadius: '12px',
                padding: '12px 28px',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              aparnavinod083@gmail.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Bottom bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            padding: '1.8rem 2rem',
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* Name + copyright */}
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: '#f1f5f9',
                margin: '0 0 2px',
                letterSpacing: '-0.02em',
              }}>
                Aparna Vinod
              </p>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.68rem',
                color: '#c82f00',
                margin: 0,
                letterSpacing: '0.06em',
              }}>
                © {year} · All rights reserved
              </p>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {socials.map(s => <SocialButton key={s.label} social={s} />)}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;