import React, { useEffect, useRef } from 'react';

const skills = [
   {
    name: 'JavaScript',
    category: 'Frontend',
    level: 100,
    icon: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
    color: '#F7DF1E',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    level: 100,
    icon: 'https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png',
    color: '#4DB33D',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    level: 100,
    icon: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png',
    color: '#c82f00',
  },
  {
    name: 'React.js',
    category: 'Frontend',
    level: 100,
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.png?f=webp&w=256',
    color: '#c82f00',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    level: 100,
    icon: 'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png',
    color: '#c82f00',
  },
  {
    name: 'Angular',
    category: 'Frontend',
    level: 100,
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSVsyTE3Rq2DeKnZ9DvrUCTjEv6k0NTDNvw&s',
    color: '#c82f00',
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    level: 100,
    icon: 'https://www.vedantu.com/seo/content-images/0c7a192d-61bd-4e70-b94a-6ab7a4085d92.png',
    color: '#c82f00',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 100,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1280px-Postgresql_elephant.svg.png',
    color: '#c82f00',
  },

];

const categoryColors = {
  Frontend: { bg: '#0f172a', accent: '#c82f00' },
  Backend: { bg: '#0f172a', accent: '#c82f00' },
  Database: { bg: '#0f172a', accent: '#c82f00' },
};

function SkillCard({ skill, index }) {
  const barRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (barRef.current) {
        barRef.current.style.width = `${skill.level}%`;
      }
    }, 200 + index * 80);
    return () => clearTimeout(timer);
  }, [skill.level, index]);

  const cat = categoryColors[skill.category];

  return (
    <div
      style={{
        background: 'rgba(15,23,42,0.6)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        padding: '1.5rem',
        backdropFilter: 'blur(12px)',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        animation: `fadeSlideUp 0.5s ease forwards`,
        animationDelay: `${index * 80}ms`,
        opacity: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = `${cat.accent}55`;
        e.currentTarget.style.boxShadow = `0 16px 40px -12px ${cat.accent}30`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.2rem' }}>
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            padding: '8px',
          }}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.1))' }}
          />
        </div>
        <div>
          <p style={{ margin: 0, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '1rem', color: '#f1f5f9', letterSpacing: '-0.01em' }}>
            {skill.name}
          </p>
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: cat.accent,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {skill.category}
          </span>
        </div>
        <div style={{ marginLeft: 'auto', fontFamily: "'DM Mono', monospace", fontSize: '0.85rem', fontWeight: 600, color: cat.accent }}>
          {skill.level}%
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: '4px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '999px',
          overflow: 'hidden',
        }}
      >
        <div
          ref={barRef}
          style={{
            height: '100%',
            width: '0%',
            borderRadius: '999px',
            background: `linear-gradient(90deg, ${cat.accent}88, ${cat.accent})`,
            transition: 'width 1.1s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500;600&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(30px, -20px) scale(1.05); }
        }

        #Skills-section * { box-sizing: border-box; }
      `}</style>

      <section
        id="Skills"
        style={{
          position: 'relative',
          padding: '6rem 1rem',
          background: '#020817',
          overflow: 'hidden',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Ambient blobs */}
        <div
          style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(200,47,0,0.07) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'drift 14s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: '0', left: '-8%',
            width: '420px', height: '420px',
            background: 'radial-gradient(circle, rgba(200,47,0,0.07) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'drift 18s ease-in-out infinite reverse',
            pointerEvents: 'none',
          }}
        />

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c82f00',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            What I work with
          </span>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#f1f5f9',
              letterSpacing: '-0.03em',
              margin: '0 0 1rem',
              lineHeight: 1.1,
            }}
          >
            Technical Skills
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            A curated set of technologies I use to build full-stack, production-ready applications.
          </p>

          {/* Divider line */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '2rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c82f00' }} />
            <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          </div>
        </div>

        {/* Category legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          {Object.entries(categoryColors).map(([cat, { accent }]) => (
            <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: accent }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.06em' }}>{cat}</span>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Bottom tagline */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '3.5rem',
            color: '#c82f00',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Always learning · Always building
        </p>
      </section>
    </>
  );
}

export default Skills;