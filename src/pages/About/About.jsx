import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>Sobre a Luxury Timepieces</h2>
      
      <section className={styles.aboutSection}>
        <h3 className={styles.aboutSubtitle}>Nossa História</h3>
        <p>
          Fundada em 1995, a Luxury Timepieces tem sido sinônimo de excelência em relojoaria.
          Cada peça em nossa coleção é meticulosamente elaborada por mestres relojoeiros,
          combinando tradição centenária com inovação contemporânea.
        </p>
      </section>
      
      <section>
        <h3 className={styles.aboutSubtitle}>Nossos Valores</h3>
        <ul className={styles.aboutList}>
          {[
            'Artigos feitos à mão com materiais premium',
            'Precisão suíça em cada mecanismo',
            'Design atemporal e elegante',
            'Compromisso com a excelência'
          ].map((item, index) => (
            <li key={index} className={styles.aboutListItem}>
              <span className={styles.bullet}></span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
