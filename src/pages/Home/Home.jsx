import React from 'react';
import WatchCards from './WatchCards';

const Home = () => {
  return (
    <div style={{
      position: 'relative',
      zIndex: 2,
      paddingTop: '50px',  // Reduzi o espaçamento superior
      minHeight: 'calc(100vh - 180px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <WatchCards />
      </div>
    </div>
  );
};

export default Home;