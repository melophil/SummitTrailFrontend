import React, { useState, useEffect } from "react";
import "../../Style/Section/TreksSection.css";
import Footer from "../common/Footer";
import videoFile from "../common/Images/video.mp4";
import DetailSection from "./DetailSection";
import api from "../../api";

export default function RockClimbingSection() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  /* ---------- Load Rock Climbing ---------- */
  useEffect(() => {
    api.get("/climbing/featured")
      .then(res => setItems(res.data))
      .catch(err => console.log("Error loading rock climbing:", err));
  }, []);

  /* ---------- Filter ---------- */
  const filtered = items.filter(
    i => filter === "all" || i.difficulty?.toLowerCase().includes(filter)
  );

  /* ---------- Scroll Animation ---------- */
  useEffect(() => {
    const cards = document.querySelectorAll(".trek-card");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card, i) => {
      card.style.animationDelay = `${i * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filtered]);

  /* ---------- Detail View ---------- */
  if (selected) {
    return <DetailSection trek={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div>
      <section className="treks-video-section">
        <video className="treks-video" src={videoFile} autoPlay loop muted />
        <div className="treks-video-overlay">
          <h1 className="treks-video-title">Rock Climbing</h1>
        </div>
      </section>

      <div className="treks-page">

        {/* FILTER */}
        <div className="treks-filter-container">
          <label className="filter-label">Filter:</label>
          <select value={filter} onChange={e => setFilter(e.target.value)} className="filter-select">
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* GRID */}
        <div className="treks-grid">
          {filtered.map((c, index) => (
            <div className="trek-card" key={c._id || index}>
              <div className="trek-image-container">
                <img src={c.image} alt={c.title} className="trek-image" />
              </div>

              <div className="trek-card-details">
                <h2 className="trek-title">{c.title}</h2>

                {c.location && <p><strong>Location:</strong> {c.location}</p>}
                {c.height && <p><strong>Wall Height:</strong> {c.height}</p>}
                {c.difficulty && <p><strong>Difficulty:</strong> {c.difficulty}</p>}

                {c.description && (
                  <p className="trek-about">{c.description.slice(0, 100)}...</p>
                )}

                <button className="detail-btn" onClick={() => setSelected(c)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
