import React from 'react';
import { FaCrown, FaGem, FaAward, FaClock } from 'react-icons/fa';

const About = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      color: 'white',
      fontFamily: "'Helvetica Neue', sans-serif"
    }}>
      <h2 style={{
        fontSize: '2.8rem',
        marginBottom: '3rem',
        background: 'linear-gradient(90deg, #e6f7ff, #66c2ff)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontWeight: 300,
        letterSpacing: '0.1em'
      }}>
        A Arte do Tempo
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        <div>
          <h3 style={{
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            color: '#b3e0ff',
            fontWeight: 400,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <FaClock style={{ fontSize: '1.5rem' }} />
            Nossa Jornada
          </h3>
          <p style={{ 
            lineHeight: '1.8', 
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.85)'
          }}>
            Desde 1995, a Luxury Timepieces tem redefinido os padrões da relojoaria de luxo. 
            Nossa história começa em Genebra, onde nosso fundador, um mestre relojoeiro 
            suíço, decidiu criar peças que unissem tradição e inovação.
          </p>
        </div>
        
        <div>
          <h3 style={{
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            color: '#b3e0ff',
            fontWeight: 400,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <FaGem style={{ fontSize: '1.5rem' }} />
            Artesanato
          </h3>
          <p style={{ 
            lineHeight: '1.8', 
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.85)'
          }}>
            Cada relógio é uma obra de arte, montado à mão por nossos artesãos. 
            Utilizamos apenas os melhores materiais: ouro 18k, platina, safiras 
            e mecanismos de precisão certificados COSC.
          </p>
        </div>
      </div>
      
      <section style={{ 
        marginBottom: '3rem',
        borderTop: '1px solid rgba(102, 194, 255, 0.2)',
        paddingTop: '2rem'
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          marginBottom: '2rem',
          color: '#b3e0ff',
          fontWeight: 400,
          textAlign: 'center'
        }}>
          Nossos Princípios
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { 
              icon: <FaCrown style={{ fontSize: '2rem', color: '#66c2ff' }} />,
              title: 'Excelência', 
              text: 'Padrões de qualidade impecáveis em cada detalhe' 
            },
            { 
              icon: <FaAward style={{ fontSize: '2rem', color: '#66c2ff' }} />,
              title: 'Precisão', 
              text: 'Cronometria certificada com tolerância de -4/+6 segundos por dia' 
            },
            { 
              icon: <FaGem style={{ fontSize: '2rem', color: '#66c2ff' }} />,
              title: 'Exclusividade', 
              text: 'Edições limitadas e peças únicas para colecionadores' 
            }
          ].map((item, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '1.5rem',
              background: 'rgba(10, 25, 47, 0.3)',
              borderRadius: '8px',
              border: '1px solid rgba(102, 194, 255, 0.1)'
            }}>
              <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '0.8rem',
                color: '#e6f7ff'
              }}>{item.title}</h4>
              <p style={{ 
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.7)'
              }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;