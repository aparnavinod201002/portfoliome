import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

  .about-wrap {
    font-family: 'DM Sans', sans-serif;
    background: #0a0a0f;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 24px;
    position: relative;
    overflow: hidden;
  }

  .about-wrap::before {
    content: '';
    position: absolute;
    top: -120px;
    left: -120px;
    width: 420px;
    height: 420px;
    background: radial-gradient(circle, rgba(0,200,180,0.12) 0%, transparent 70%);
    pointer-events: none;
  }

  .about-wrap::after {
    content: '';
    position: absolute;
    bottom: -80px;
    right: -80px;
    width: 320px;
    height: 320px;
    background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  .about-inner {
    max-width: 760px;
    width: 100%;
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateY(28px);
    animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s forwards;
  }

  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  .section-label {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #c82f00;
    margin-bottom: 20px;
    opacity: 0;
    animation: fadeUp 0.7s ease 0.3s forwards;
  }

  .section-label::before {
    content: '';
    display: block;
    width: 28px;
    height: 1px;
    background: #c82f00;
  }

  .about-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 6vw, 58px);
    font-weight: 700;
    color: #f0ede8;
    line-height: 1.1;
    margin: 0 0 40px;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.45s forwards;
  }

  .about-heading span {
    color: #c82f00;
  }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 28px;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.6s forwards;
  }

  .stat-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    padding: 22px 24px;
    transition: border-color 0.25s, background 0.25s;
  }

  .stat-card:hover {
    border-color: rgba(200,47,0,0.3);
    background: rgba(200,47,0,0.04);
  }

  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 700;
    color: #c82f00;
    line-height: 1;
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 13px;
    font-weight: 400;
    color: rgba(240,237,232,0.5);
    letter-spacing: 0.02em;
  }

  .about-body {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-left: 3px solid #c82f00;
    border-radius: 0 14px 14px 0;
    padding: 28px 32px;
    margin-bottom: 28px;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.75s forwards;
  }

  .about-body p {
    font-size: 16px;
    font-weight: 300;
    color: rgba(240,237,232,0.78);
    line-height: 1.8;
    margin: 0;
  }

  .about-body p strong {
    color: #f0ede8;
    font-weight: 500;
  }

  .skills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.9s forwards;
  }

  .skill-pill {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: rgba(240,237,232,0.7);
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 100px;
    padding: 7px 16px;
    transition: all 0.2s;
    cursor: default;
  }

  .skill-pill:hover {
    background: rgba(200,47,0,0.1);
    border-color: rgba(200,47,0,0.4);
    color: #c82f00;
  }

  .availability-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 500;
    color: #c82f00;
    background: rgba(200,47,0,0.08);
    border: 1px solid rgba(200,47,0,0.2);
    border-radius: 100px;
    padding: 7px 16px;
    margin-bottom: 32px;
    opacity: 0;
    animation: fadeUp 0.7s ease 0.2s forwards;
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #c82f00;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%,100%{ box-shadow: 0 0 0 0 rgba(200,47,0,0.5); }
    50%{ box-shadow: 0 0 0 5px rgba(200,47,0,0); }
  }
`;

const skills = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB',
  'REST APIs', 'JavaScript (ES6+)', 'Git & GitHub',
  'Tailwind CSS', 'ASP.NET Core',
];

const stats = [
  { number: '1+', label: 'Year of professional experience' },
  { number: 'MERN', label: 'Full-stack specialisation' },
  { number: '∞', label: 'Passion for clean code' },
  { number: '24/7', label: 'Problem-solving mindset' },
];

function About() {
  return (
    <>
      <style>{styles}</style>
      <section id="about" className="about-wrap">
        <div className="about-inner">

          {/* Availability badge */}
          <div className="availability-badge">
            <span className="dot" />
            Open to new opportunities
          </div>

          {/* Section label */}
          <div className="section-label">About me</div>

          {/* Heading */}
          <h2 className="about-heading">
            Crafting digital<br />
            experiences that <span>scale.</span>
          </h2>

          {/* Stats grid */}
          <div className="card-grid">
            {stats.map(({ number, label }) => (
              <div className="stat-card" key={label}>
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="about-body">
            <p>
              I'm a <strong>Full-Stack MERN Developer</strong> with a year of hands-on experience
              building production-ready web applications. I specialise in architecting seamless user
              experiences — translating complex requirements into{' '}
              <strong>efficient, scalable, and maintainable</strong> solutions across the entire stack.
              <br /><br />
              From crafting responsive React interfaces to designing robust Node.js APIs and managing
              MongoDB data models, I take ownership of the product end-to-end. I’m currently looking for <strong>new opportunities where I can contribute to scalable, high-impact products while continuing</strong> to grow as a full-stack developer.
            </p>
          </div>

          {/* Skills */}
          <div className="skills-row">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>{skill}</span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default About;