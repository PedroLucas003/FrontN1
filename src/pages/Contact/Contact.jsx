import React from 'react';
import styles from './Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock as FaBusinessHours } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <section>
        <h2 className={styles.contactTitle}>Fale Conosco</h2>
        
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactIcon}><FaMapMarkerAlt /></div>
            <div>
              <h3>Nosso Ateliê</h3>
              <p className={styles.contactDetails}>
                Boa Viagem, 1000 - 15º andar<br/>
                Recife - PE, 01310-100
              </p>
            </div>
          </div>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactIcon}><FaPhone /></div>
            <div>
              <h3>Telefone</h3>
              <p className={styles.contactDetails}>
                +55 (11) 1234-5678<br/>
                Seg-Sex: 9h às 18h
              </p>
            </div>
          </div>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactIcon}><FaEnvelope /></div>
            <div>
              <h3>Email</h3>
              <p className={styles.contactDetails}>
                contato@luxurytimepieces.com<br/>
                atendimento@luxurytimepieces.com
              </p>
            </div>
          </div>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactIcon}><FaBusinessHours /></div>
            <div>
              <h3>Horário Comercial</h3>
              <p className={styles.contactDetails}>
                Segunda a Sexta: 9h - 18h<br/>
                Sábado: 10h - 14h<br/>
                Domingo: Fechado
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h3 className={styles.contactTitle}>Envie sua Mensagem</h3>
        <form className={styles.contactForm}>
          <div>
            <label htmlFor="name">Nome Completo</label>
            <input id="name" type="text" required className={styles.contactInput} />
          </div>
          
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required className={styles.contactInput} />
          </div>
          
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" rows="5" required className={styles.contactTextarea}></textarea>
          </div>
          
          <button type="submit" className={styles.contactButton}>Enviar Mensagem</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
