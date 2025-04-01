import React from 'react';

const About = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      color: 'white'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        background: 'linear-gradient(to right, #e6f7ff, #66c2ff)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}>
        Sobre a Luxury Timepieces
      </h2>
      
      <section style={{ marginBottom: '3rem' }}>
        <h3 style={{
          fontSize: '1.8rem',
          marginBottom: '1rem',
          color: '#b3e0ff'
        }}>
          Nossa História
        </h3>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
          Fundada em 1995, a Luxury Timepieces tem sido sinônimo de excelência em relojoaria.
          Cada peça em nossa coleção é meticulosamente elaborada por mestres relojoeiros,
          combinando tradição centenária com inovação contemporânea.
        </p>
      </section>
      
      <section>
        <h3 style={{
          fontSize: '1.8rem',
          marginBottom: '1rem',
          color: '#b3e0ff'
        }}>
          Nossos Valores
        </h3>
        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
          {[
            'Artigos feitos à mão com materiais premium',
            'Precisão suíça em cada mecanismo',
            'Design atemporal e elegante',
            'Compromisso com a excelência'
          ].map((item, index) => (
            <li key={index} style={{
              marginBottom: '0.8rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: '#66c2ff',
                borderRadius: '50%',
                marginRight: '1rem'
              }}></span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;