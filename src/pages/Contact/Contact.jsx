import React from 'react';

const Contact = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      color: 'white',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem'
    }}>
      <section>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          background: 'linear-gradient(to right, #e6f7ff, #66c2ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Entre em Contato
        </h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#b3e0ff'
          }}>
            Informações
          </h3>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Email:</strong> contato@luxurytimepieces.com
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Telefone:</strong> (11) 1234-5678
          </p>
          <p>
            <strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo/SP
          </p>
        </div>
      </section>
      
      <section>
        <h3 style={{
          fontSize: '1.5rem',
          marginBottom: '1rem',
          color: '#b3e0ff'
        }}>
          Envie uma Mensagem
        </h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Seu nome"
            required
            style={{
              padding: '0.8rem',
              background: 'rgba(10, 25, 47, 0.7)',
              border: '1px solid rgba(102, 194, 255, 0.3)',
              borderRadius: '5px',
              color: 'white'
            }}
          />
          <input
            type="email"
            placeholder="Seu email"
            required
            style={{
              padding: '0.8rem',
              background: 'rgba(10, 25, 47, 0.7)',
              border: '1px solid rgba(102, 194, 255, 0.3)',
              borderRadius: '5px',
              color: 'white'
            }}
          />
          <textarea
            placeholder="Sua mensagem"
            rows="5"
            required
            style={{
              padding: '0.8rem',
              background: 'rgba(10, 25, 47, 0.7)',
              border: '1px solid rgba(102, 194, 255, 0.3)',
              borderRadius: '5px',
              color: 'white'
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              background: 'linear-gradient(to right, #e6f7ff, #66c2ff)',
              color: '#0a192f',
              padding: '0.8rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;