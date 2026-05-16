import React, { useState } from 'react';
import coffe from '../assets/coffe.png';
import budget from '../assets/budget.png';
import season from '../assets/season.png';
import connectChat from '../assets/connectChat.png';
import readMax from '../assets/readMax.png';
import kalagraham from '../assets/kalagraham.png';

const projects = [
  {
    id: 1,
    title: 'Connect Chat',
    category: 'Web App',
    description: 'Built a real-time chat application with user registration and JWT-based authentication, enabling secure and personalisedmessaging experiences.',
    image: connectChat,
    link: 'https://connect-chat-frontend.vercel.app/',
    tags: ['React', 'Node.js'],
    accent: '#c82f00',
  },
  {
    id: 2,
    title: 'ReadMax Educational',
    category: 'Web App',
    description: 'A full-featured educational platform delivering structured learning content and resources to students.',
    image: readMax,
    link: 'https://www.readmaxeducational.com/',
    tags: ['React', 'Node.js'],
    accent: '#c82f00',
  },
  {
    id: 3,
    title: 'Kalagraham',
    category: 'Web App',
    description: 'A creative cultural platform showcasing arts, performances, and heritage with an elegant digital presence.',
    image: kalagraham,
    link: 'https://kalagraham.vercel.app/',
    tags: ['React', 'Vercel'],
    accent: '#c82f00',
  },
  {
    id: 4,
    title: 'Cup & Coffee',
    category: 'Landing Page',
    description: 'A warm, inviting café landing page with a modern layout built to attract and convert visitors.',
    image: coffe,
    link: 'https://cupandcoffee.netlify.app/',
    tags: ['HTML', 'CSS', 'JS'],
    accent: '#c82f00',
  },
  {
    id: 5,
    title: 'Budget Calculator',
    category: 'Tool',
    description: 'A clean, intuitive budget planning tool that helps users track income, expenses, and savings goals.',
    image: budget,
    link: 'https://budcalculator.netlify.app/',
    tags: ['JavaScript', 'CSS'],
    accent: '#c82f00',
  },
  {
    id: 6,
    title: 'Seasons of India',
    category: 'Web App',
    description: 'An immersive visual journey through India\'s seasons, celebrating culture, nature, and traditions.',
    image: season,
    link: 'https://seasonsofin.netlify.app/',
    tags: ['React', 'CSS'],
    accent: '#c82f00',
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? project.accent + '50' : 'rgba(255,255,255,0.07)'}`,
        background: 'rgba(15,23,42,0.7)',
        backdropFilter: 'blur(12px)',
        transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 24px 60px -16px ${project.accent}35` : '0 4px 20px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        animation: `fadeSlideUp 0.5s ease forwards`,
        animationDelay: `${index * 100}ms`,
        opacity: 0,
      }}
    >
      {/* Image container */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            display: 'block',
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, rgba(15,23,42,1) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)`,
          }}
        />
        {/* Category badge */}
        <span
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: project.accent,
            background: `${project.accent}18`,
            border: `1px solid ${project.accent}35`,
            borderRadius: '999px',
            padding: '4px 12px',
          }}
        >
          {project.category}
        </span>

        {/* Index number */}
        <span
          style={{
            position: 'absolute',
            top: '14px',
            left: '16px',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.25)',
            fontWeight: 500,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.4rem 1.5rem 1.6rem' }}>
        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: '1.1rem',
            color: '#f1f5f9',
            margin: '0 0 0.5rem',
            letterSpacing: '-0.02em',
            transition: 'color 0.3s',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.85rem',
            color: '#64748b',
            lineHeight: 1.65,
            margin: '0 0 1.2rem',
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.3rem' }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.4)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '3px 10px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: '0.82rem',
            color: project.accent,
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'gap 0.25s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.gap = '14px')}
          onMouseLeave={e => (e.currentTarget.style.gap = '8px')}
        >
          View Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />
    </div>
  );
}

function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500;600&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(-24px, 20px); }
        }

        #projects * { box-sizing: border-box; }

        #projects a:hover { text-decoration: none !important; }
      `}</style>

      <section
        id="projects"
        style={{
          position: 'relative',
          padding: '6rem 1.5rem',
          background: '#020817',
          overflow: 'hidden',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Ambient glow blobs */}
        <div style={{
          position: 'absolute', top: '5%', left: '-10%',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(200,47,0,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'drift 16s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '0', right: '-8%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(200,47,0,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'drift 20s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }} />

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#c82f00',
            display: 'block',
            marginBottom: '1rem',
          }}>
            Selected Work
          </span>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            margin: '0 0 1rem',
            lineHeight: 1.1,
          }}>
            Projects
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            A collection of real-world applications I've designed and built — from platforms to tools.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '2rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c82f00' }} />
            <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          </div>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1140px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom label */}
        <p style={{
          textAlign: 'center',
          marginTop: '4rem',
          color: '#1e293b',
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1,
        }}>
          More projects on GitHub
        </p>
      </section>
    </>
  );
}

export default Projects;