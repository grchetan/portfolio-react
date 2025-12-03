import React from "react";
import "../style/education.css";

export default function Education() {
  return (
    <div className="edu-body">
      <div className="relative-container">
        <div className="title-wrapper">
          <div className="marker-highlight marker-yellow title-marker"></div>
          <h1 className="sketch-title">Education</h1>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="edu-list">
            {/* 1 — KIS X */}
            <div className="edu-item">
              <div className="timeline-dot"></div>

              <div className="sketch-card">
                <div className="marker-highlight marker-blue card-marker"></div>

                <div className="institution-name">KIS</div>
                <div className="degree-text">
                  Secondary Education – X (CBSE)
                </div>
                <div className="location-text">
                  Keshav International School, Jhabua, Madhya Pradesh
                </div>
                <div className="year-text">2020 – 2021</div>

                <div className="doodle card-d1">→</div>
                <div className="doodle card-d2">⭐</div>
              </div>
            </div>

            {/* 2 — Rebenok */}
            <div className="edu-item">
              <div className="timeline-dot"></div>

              <div className="sketch-card">
                <div className="marker-highlight marker-pink card-marker"></div>

                <div className="institution-name">Rebenok Infotech</div>
                <div className="degree-text">Computer Institute</div>
                <div className="location-text">
                  Rebenok Infotech, Mumbai, Maharashtra
                </div>
                <div className="year-text">2021 – 2022</div>

                <div className="doodle card-d3">💻</div>
                <div className="doodle card-d4">◯</div>
              </div>
            </div>

            {/* 3 — KIS XII */}
            <div className="edu-item">
              <div className="timeline-dot"></div>

              <div className="sketch-card">
                <div className="marker-highlight marker-yellow card-marker"></div>

                <div className="institution-name">KIS</div>
                <div className="degree-text">Senior Secondary – XII (CBSE)</div>
                <div className="location-text">
                  Keshav International School, Jhabua, Madhya Pradesh
                </div>
                <div className="year-text">2023 – 2024</div>

                <div className="doodle card-d5">↗</div>
                <div className="doodle card-d6">★</div>
              </div>
            </div>

            {/* 4 — Sage University */}
            <div className="edu-item">
              <div className="timeline-dot timeline-dot-primary"></div>

              <div className="sketch-card sketch-card-primary">
                <div className="marker-highlight marker-green card-marker"></div>

                <div className="institution-name primary-text">
                  Sage University
                </div>
                <div className="degree-text primary-text">
                  BCA – Cybersecurity
                </div>
                <div className="location-text">
                  Sage University, Indore, Madhya Pradesh
                </div>
                <div className="year-text year-primary">2024 – Present</div>

                <div className="current-badge">Current!</div>

                <div className="doodle card-d7">🔒</div>
                <div className="doodle card-d8">✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
