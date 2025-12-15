import "../../Style/Section/ParaglidingSection.css";
import paraglideIcon from "../../assets/paragliding.jpg";
import { Link } from "react-router-dom";

export default function ParaglidingSection() {
  return (
    <section className="para-section">

      {/* TITLE */}
      <h2 className="para-title">Paragliding with Summit Trails</h2>
      <div className="underline"></div>

      {/* INTRO CARD */}
      <div className="para-card animate-section">

        <p>If you’ve ever dreamed of flying, paragliding is the closest it gets.</p>

        <p>At Summit Trails, we make that dream real safely and beautifully.</p>

        <p>
          You’ll glide over forests, valleys, rivers, and hills with trained pilots and 
          top safety gear. No experience needed — just the courage to try something new.
        </p>

        <div className="para-icon-box">
          <img src={paraglideIcon} alt="Paragliding" />
        </div>
      </div>

      {/* WHERE YOU CAN FLY */}
      <h3 className="para-subtitle">Where You Can Fly</h3>

      <div className="para-list-card animate-section">
        <ul>
          <li>🪂 <strong>Thano, Dehradun</strong> – Gentle takeoff with beautiful forest views.</li>
          <li>🪂 <strong>Maldevta, Raipur (Dehradun)</strong> – Hills, riverbeds, and a peaceful valley below.</li>
          <li>🪂 <strong>Mussoorie – Bhadraj</strong> – Soar above the clouds with mountain views all around.</li>
          <li>🪂 <strong>Tehri Lake (Tehri Jheel)</strong> – Fly over water, cliffs, and wide open sky.</li>
        </ul>
      </div>

      {/* CTA SECTION */}
      <div className="para-cta animate-section">
        <h3>Ready to Fly?</h3>

        <p>
          Whether it’s your first time or your tenth, we promise it’ll feel like magic.
          Message us to book your flight or ask anything — we’re here to help.
        </p>

        {/* FIXED BUTTON */}
        <Link to="/contact" className="para-btn">
          Contact Us
        </Link>
      </div>

    </section>
  );
}
