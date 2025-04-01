import React from 'react';
import WatchCard from "../Home/WatchCards";
import styles from './Collection.module.css';

const Collection = () => {
  const watches = [
    {
      id: 1,
      name: 'Chronograph Royal',
      price: 'R$ 8.900.000',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'premium',
      limited: false
    },
    {
      id: 2,
      name: 'Tourbillon Élite',
      price: 'R$ 6.750.000',
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'premium',
      limited: false
    },
    {
      id: 3,
      name: 'Heritage 1945',
      price: 'R$ 3.200.000',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'limited',
      limited: true,
      editionNumber: '12/50'
    },
    {
      id: 4,
      name: 'Moonphase Celeste',
      price: 'R$ 4.500.000',
      image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'limited',
      limited: true,
      editionNumber: '08/25'
    },
    {
      id: 5,
      name: 'Classique 1903',
      price: 'R$ 1.950.000',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975a17b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'classic',
      limited: false
    },
    {
      id: 6,
      name: 'Mariner Chrono',
      price: 'R$ 2.300.000',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      category: 'classic',
      limited: false
    }
  ];

  const categories = [
    {
      id: 'premium',
      name: 'COLEÇÃO PREMIUM',
      description: 'Peças exclusivas com mecanismos de alta precisão',
      watches: watches.filter(watch => watch.category === 'premium')
    },
    {
      id: 'limited',
      name: 'EDIÇÕES LIMITADAS',
      description: 'Relógios numerados com produção restrita',
      watches: watches.filter(watch => watch.category === 'limited')
    },
    {
      id: 'classic',
      name: 'CLÁSSICOS ATEMPORAIS',
      description: 'Designs icônicos que transcendem tendências',
      watches: watches.filter(watch => watch.category === 'classic')
    }
  ];

  return (
    <div className={styles.collectionPage}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>NOSSA COLEÇÃO</h1>
          <p className={styles.heroSubtitle}>Onde a precisão encontra a elegância</p>
          <div className={styles.scrollIndicator}>
            <div className={styles.arrowDown}></div>
          </div>
        </div>
      </header>

      <main className={styles.collectionContent}>
        {categories.map((category) => (
          <section key={category.id} className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>{category.name}</h2>
            </div>
            
            <div className={styles.watchesContainer}>
              <div className={styles.watchesGrid}>
                {category.watches.map(watch => (
                  <WatchCard 
                    key={watch.id}
                    name={watch.name}
                    price={watch.price}
                    image={watch.image}
                    limited={watch.limited}
                    editionNumber={watch.editionNumber}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Collection;