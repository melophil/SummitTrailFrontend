import "../../Style/Section/CareersSection.css";

export default function CareersSection() {
  return (
    <div className="careers-page">

      {/* HERO / INTRO SECTION */}
      <section className="careers-header">
        <h1>Careers at Summit Trails</h1>
        <p className="intro">
          Some of us were never made for desk jobs. We felt most alive walking forest trails,
          climbing rocks, sleeping under stars, or flying above valleys.
        </p>

        <p className="intro">
          That’s how Summit Trails began — and if that sounds like you too, maybe your journey starts here.
        </p>

        <p className="highlight">
          We do treks, hikes, expeditions, paragliding, camping, rock climbing, and more.
        </p>
      </section>

      {/* WHAT WE OFFER SECTION */}
      <section className="careers-section-card">
        <h2>What We Offer</h2>

        <div className="offer-list">
          <div className="offer-item">
            <h3>Training & Mentorship</h3>
            <p>
              Learn the ropes, trails, wilderness first aid, risk management, and leadership skills  
              — with safety at the core.
            </p>
          </div>

          <div className="offer-item">
            <h3>Opportunities to Explore</h3>
            <p>Work across beautiful trails in Uttarakhand and beyond.</p>
          </div>

          <div className="offer-item">
            <h3>Community & Purpose</h3>
            <p>
              Be part of a warm, purpose-driven team that truly cares about people and nature.
            </p>
          </div>
        </div>
      </section>

      {/* ROLES SECTION */}
      <section className="careers-section-card">
        <h2>Roles You Can Grow Into</h2>

        <div className="roles-grid">
          <ul>
            <li>Trek Leader</li>
            <li>Expedition Guide</li>
            <li>Paragliding Pilot</li>
            <li>Camp Operations & Support</li>
            <li>Trail Research & Route Design</li>
            <li>Content & Photography</li>
            <li>Logistics & Guest Management</li>
            <li>Nature Educator</li>
            <li>Internships for Students & New Explorers</li>
          </ul>

          <div className="roles-images">
            <img src="/career/guide.png" alt="Guide" />
            <img src="/career/map.png" alt="Map" />
            <img src="/career/climber.png" alt="Climber" />
          </div>
        </div>
      </section>

      {/* SKILL SECTION */}
      <section className="careers-section-card">
        <h2>Skill Growth</h2>

        <div className="skill-list">
          <div>
            <h3>Skill-Based Growth</h3>
            <p>
              Whether it's wilderness survival, trek leadership, logistics, or content creation  
              — we support multi-skill learning.
            </p>
          </div>

          <div>
            <h3>Real Work</h3>
            <p>
              Help people enjoy nature and truly feel alive.
            </p>
          </div>

          <img src="/career/hikers.png" alt="Hikers illustration" className="skill-img" />
        </div>
      </section>

      {/* JOIN SECTION */}
      <section className="careers-final">
        <h2>Ready to join?</h2>

        <p>
          You don’t need a fancy CV — just love for the outdoors and a wish to grow.
        </p>

        <p>
          Email us at <span className="bold">team.summittrails@gmail.com</span>  
          <br />
          Instagram: <span className="bold">@summittrailsindia</span>  
          <br />
          WhatsApp: <span className="bold">+91 70608 24379</span>
        </p>

        <p>Let’s build something meaningful together.</p>
      </section>

    </div>
  );
}
