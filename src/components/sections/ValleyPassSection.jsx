import React, { useState, useEffect } from "react";
import "../../Style/Section/TreksSection.css";
import Footer from "../common/Footer";
import videoFile from "../common/Images/video.mp4";
import DetailSection from "./DetailSection";
import api from "../../api";

export default function ValleyPassSection() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  /* ---------- Load Valley Pass ---------- */
  useEffect(() => {
    api.get("/valley-pass/featured")
      .then(res => setItems(res.data))
      .catch(err => console.log("Error loading valley pass:", err));
  }, []);

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
  }, [items]);

  /* ---------- Detail View ---------- */
  if (selected) {
    return <DetailSection trek={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div>
      <section className="treks-video-section">
        <video className="treks-video" src={videoFile} autoPlay loop muted />
        <div className="treks-video-overlay">
          <h1 className="treks-video-title">Valley Pass</h1>
        </div>
      </section>

      <div className="treks-page">
        <div className="treks-grid">
          {items.map((v, index) => (
            <div className="trek-card" key={v._id || index}>
              <div className="trek-image-container">
                <img src={v.image} alt={v.title} className="trek-image" />
              </div>

              <div className="trek-card-details">
                <h2 className="trek-title">{v.title}</h2>

                {v.location && <p><strong>Location:</strong> {v.location}</p>}
                {v.duration && <p><strong>Duration:</strong> {v.duration}</p>}

                {v.description && (
                  <p className="trek-about">{v.description.slice(0, 100)}...</p>
                )}

                <button className="detail-btn" onClick={() => setSelected(v)}>
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
