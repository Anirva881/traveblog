import React from 'react';
import Banner from '../Banner';
import Banner2 from '../Banner2';
import Banner3 from '../Banner3';
// import Banner4 from '../Banner4';
import Banner5 from '../Banner5';
// import Banner6 from '../Banner6';
// import Banner7 from '../Banner7';
// import Banner8 from '../Banner8';
// import Banner9 from '../Banner9';

function Home() {
  return (
    <div style={{
      overflowX: 'hidden',
      width: '100%',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
      boxSizing: 'border-box',
      maxWidth: '100%',
    }}>
      {/* Banner section full width */}
      <div style={{width: '100%'}}>
        <Banner />
      </div>
      {/* Main content constrained to 1400px */}
      <div style={{width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: 32}}>
        <Banner2 />
        <Banner3 />
        {/* <Banner4 /> */}
        <Banner5 />
        {/* <Banner6 /> */}
        {/* <Banner7 /> */}
        {/* <Banner8 /> */}
        {/* <Banner9 /> */}
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1400px) {
          div[style*='maxWidth: 1400px'] {
            max-width: 98vw !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 600px) {
          div[style*='maxWidth: 1400px'] {
            padding: 0 !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Home; 