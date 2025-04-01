import React from 'react';
import WatchCards from './WatchCards';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToCollection = () => {
    navigate('/collection');
  };

  // Dados para os cards principais
  const watchCards = [
    {
      id: 1,
      title: "Relógios de Luxo",
      subtitle: "Coleção Masterpiece 2024",
      image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      cta: "Explorar"
    },
    {
      id: 2,
      title: "Precisão Suíça",
      subtitle: "Movimentos automáticos",
      image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "Descobrir"
    }
  ];

  // Dados para as promoções
  const promotions = [
    {
      id: 1,
      title: "Edição Limitada",
      subtitle: "Coleção Outono 2023",
      image: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "Descubra"
    },
    {
      id: 2,
      title: "Promoção Exclusiva",
      subtitle: "Até 30% de desconto",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "Aproveite"
    }
  ];

  return (
    <div style={{
      position: 'relative',
      zIndex: 2,
      paddingTop: '50px',
      minHeight: 'calc(100vh - 180px)'
    }}>
      {/* Seção Hero Simplificada */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {watchCards.map((watch) => ( // Removido o index não utilizado
            <div
              key={watch.id}
              style={{
                position: 'relative',
                height: '400px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${watch.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <h2 style={{
                  fontSize: '2.2rem',
                  fontWeight: 300,
                  marginBottom: '1rem',
                  letterSpacing: '0.1em'
                }}>{watch.title}</h2>
                <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '2rem',
                  fontWeight: 200
                }}>{watch.subtitle}</p>
                <button 
                  onClick={handleNavigateToCollection}
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.7)',
                    padding: '0.8rem 2.5rem',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      background: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {watch.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Promoções */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 5rem',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: 400,
          color: 'white',
          marginBottom: '2rem',
          textAlign: 'center',
          letterSpacing: '0.1em'
        }}>
          Ofertas Especiais
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {promotions.map((promo) => ( // Removido o index não utilizado
            <div
              key={promo.id}
              style={{
                position: 'relative',
                height: '300px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${promo.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 400,
                  marginBottom: '0.5rem'
                }}>{promo.title}</h2>
                <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '2rem'
                }}>{promo.subtitle}</p>
                <button 
                  onClick={handleNavigateToCollection}
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '1px solid white',
                    padding: '0.8rem 2rem',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      background: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {promo.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Destaques */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem 5rem'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: 400,
          color: 'white',
          marginBottom: '2rem',
          textAlign: 'center',
          letterSpacing: '0.1em'
        }}>
          Nossos Destaques
        </h2>
        <WatchCards />
      </div>
    </div>
  );
};

export default Home;