import React, { useState } from 'react';
import './WatchCards.css';

const WatchCards = () => {
  const [cart, setCart] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const watches = [
    {
      id: 1,
      name: 'Chronograph Royal',
      price: 'R$ 12.500',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      name: 'Heritage Automatic',
      price: 'R$ 8.900',
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'Diver Professional',
      price: 'R$ 15.200',
      image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      name: 'Moonphase Elite',
      price: 'R$ 18.700',
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      name: 'Skeleton Premium',
      price: 'R$ 22.300',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      name: 'GMT Master',
      price: 'R$ 14.800',
      image: 'https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      name: 'Turbillon Classic',
      price: 'R$ 28.900',
      image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 8,
      name: 'Aviator Chrono',
      price: 'R$ 17.500',
      image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 9,
      name: 'Regatta Ocean',
      price: 'R$ 21.300',
      image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 10,
      name: 'Celestial Diamond',
      price: 'R$ 32.500',
      image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 11,
      name: 'Minimalist Art',
      price: 'R$ 9.800',
      image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 12,
      name: 'Grand Complication',
      price: 'R$ 45.000',
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const addToCart = (watch, e) => {
    e.preventDefault();
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === watch.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === watch.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...watch, quantity: 1 }];
    });
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  return (
    <section className="watches-section">
      {/* Notificação do Carrinho */}
      {showCartNotification && (
        <div className="cart-notification">
          <p>Item adicionado ao carrinho!</p>
          <div className="cart-preview">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>Qtd: {item.quantity}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="watches-row">
        {watches.map(watch => (
          <div key={watch.id} className="watch-col">
            <div className="watch-card">
              <div 
                className="watch-cover"
                style={{ backgroundImage: `url(${watch.image})` }}
              >
                <h1>{watch.name}</h1>
                <span className="watch-price">{watch.price}</span>
                <div className="watch-card-back">
                  <a href="#" onClick={(e) => addToCart(watch, e)}>Add to cart</a>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WatchCards;