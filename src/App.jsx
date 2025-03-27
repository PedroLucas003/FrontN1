import React from 'react';
import StarsBackground from './components/StarsBackground';

function App() {
  return (
    <>
      <StarsBackground />

      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        zIndex: 100
      }}>
        {/* SUBSTITUA O NOME DA LOJA POR ISSO: */}
        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          letterSpacing: '0.5rem',
          color: 'transparent',
          background: 'linear-gradient(to right, #e6f7ff, #b3e0ff, #66c2ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          textShadow: '0 0 15px rgba(102, 194, 255, 0.3)',
          margin: 0,
          fontWeight: 400,
          textTransform: 'uppercase',
          position: 'relative',
          display: 'inline-block',
          paddingBottom: '0.5rem',
          animation: 'diamondPulse 3s ease-in-out infinite'
        }}>
          LUXURY TIMEPIECES
          <span style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, #66c2ff, transparent)',
            boxShadow: '0 0 10px rgba(102, 194, 255, 0.5)'
          }}></span>
        </h1>

        <nav style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/collection" style={navLinkStyle}>Coleção</a>
          <a href="/about" style={navLinkStyle}>Sobre</a>
          <a href="/contact" style={navLinkStyle}>Contato</a>
        </nav>
      </header>

      <main style={{
        position: 'relative',
        paddingTop: '180px',
        minHeight: '100vh',
        zIndex: 1
      }}>
        {/* Seu conteúdo */}
      </main>
    </>
  );
}

const navLinkStyle = {
  color: 'var(--diamond-primary)',
  textDecoration: 'none',
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  letterSpacing: '0.2rem',
  position: 'relative',
  padding: '0.5rem 1rem',
  transition: 'all 0.4s ease-out'
};

export default App;