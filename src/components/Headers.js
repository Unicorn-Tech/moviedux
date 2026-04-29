import React from "react";
import "../styles.css";

function Header() {
  return (
    <div className="header">
      <svg
        width="200"
        height="120"
        viewBox="0 0 420 260"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#d4af37" />
            <stop offset="50%" stop-color="#ffd700" />
            <stop offset="100%" stop-color="#a67c00" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse
          cx="210"
          cy="210"
          rx="120"
          ry="20"
          fill="#111"
          stroke="url(#gold)"
          stroke-width="2"
        />
        <text
          x="110"
          y="215"
          font-size="20"
          fill="url(#gold)"
          font-family="Arial, sans-serif"
        >
          PANTHER CINEMA
        </text>
      </svg>
    </div>
  );
}

export default Header;
