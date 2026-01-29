import React from "react";
import "./crousal.css";

const CrousalLogo = () => {
  const items = [
    "Kailali Nation Academy",
    "Indxo AI",
    "Empower International",
    "Bright Future",
    "Electrono",
    "Nata Academy",
  ];

  return (
    <section className="logo-section">
      <div className="section-header">
        <span className="line"></span>
        <p className="subtitle">Collaborating with Excellence</p>
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {/* Double the items for a seamless loop */}
          {[...items, ...items].map((name, index) => (
            <div key={index} className="card">
              <span className="brand-name">{name}</span>
              <span className="dot"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrousalLogo;