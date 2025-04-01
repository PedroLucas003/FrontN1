import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock as FaBusinessHours } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      color: 'white',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      fontFamily: "'Helvetica Neue', sans-serif"
    }}>
      <section>
        <h2 style={{
          fontSize: '2.8rem',
          marginBottom: '2.5rem',
          background: 'linear-gradient(90deg, #e6f7ff, #66c2ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontWeight: 300,
          letterSpacing: '0.1em'
        }}>
          Fale Conosco
        </h2>
        
        <div style={{ 
          marginBottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ color: '#66c2ff', fontSize: '1.5rem' }}>
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.3rem',
                marginBottom: '0.5rem',
                color: '#b3e0ff'
              }}>Nosso Ateliê</h3>
              <p style={{ 
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.85)'
              }}>
                Boa Viagem, 1000 - 15º andar<br/>
                Recife - PE, 01310-100
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ color: '#66c2ff', fontSize: '1.5rem' }}>
              <FaPhone />
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.3rem',
                marginBottom: '0.5rem',
                color: '#b3e0ff'
              }}>Telefone</h3>
              <p style={{ 
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.85)'
              }}>
                +55 (11) 1234-5678<br/>
                Seg-Sex: 9h às 18h
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ color: '#66c2ff', fontSize: '1.5rem' }}>
              <FaEnvelope />
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.3rem',
                marginBottom: '0.5rem',
                color: '#b3e0ff'
              }}>Email</h3>
              <p style={{ 
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.85)'
              }}>
                contato@luxurytimepieces.com<br/>
                atendimento@luxurytimepieces.com
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ color: '#66c2ff', fontSize: '1.5rem' }}>
              <FaBusinessHours />
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.3rem',
                marginBottom: '0.5rem',
                color: '#b3e0ff'
              }}>Horário Comercial</h3>
              <p style={{ 
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.85)'
              }}>
                Segunda a Sexta: 9h - 18h<br/>
                Sábado: 10h - 14h<br/>
                Domingo: Fechado
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h3 style={{
          fontSize: '1.8rem',
          marginBottom: '2rem',
          color: '#b3e0ff',
          fontWeight: 400
        }}>
          Envie sua Mensagem
        </h3>
        <form style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem'
        }}>
          <div>
            <label htmlFor="name" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'rgba(255,255,255,0.8)'
            }}>Nome Completo</label>
            <input
              id="name"
              type="text"
              required
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                background: 'rgba(10, 25, 47, 0.5)',
                border: '1px solid rgba(102, 194, 255, 0.3)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="email" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'rgba(255,255,255,0.8)'
            }}>Email</label>
            <input
              id="email"
              type="email"
              required
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                background: 'rgba(10, 25, 47, 0.5)',
                border: '1px solid rgba(102, 194, 255, 0.3)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="message" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'rgba(255,255,255,0.8)'
            }}>Mensagem</label>
            <textarea
              id="message"
              rows="5"
              required
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                background: 'rgba(10, 25, 47, 0.5)',
                border: '1px solid rgba(102, 194, 255, 0.3)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                resize: 'vertical'
              }}
            ></textarea>
          </div>
          
          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #e6f7ff, #66c2ff)',
              color: '#0a192f',
              padding: '1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              marginTop: '1rem'
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