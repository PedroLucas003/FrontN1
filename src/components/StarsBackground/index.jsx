import React from 'react';
import './StarsBackground.module.css';

export default function StarsBackground() {
  return (
    <div className="stars-bg">
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="shooting-star"
          style={{
            left: `${Math.random() * 50}vw`,
            top: `${Math.random() * 100}vh`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${1 + Math.random() * 3.5}s`
          }}
        />
      ))}
    </div>
  );
}