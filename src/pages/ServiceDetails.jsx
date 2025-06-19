import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceData = location.state?.serviceData;

  // Modern hero section styles
  const heroStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '260px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    textAlign: 'center',
    padding: '60px 0 40px 0',
    position: 'relative',
    zIndex: 2,
  };

  if (!serviceData) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 8px 32px rgba(31,38,135,0.10)', padding: 40, textAlign: 'center' }}>
          <h1 style={{ color: '#764ba2', fontSize: '2rem', marginBottom: 20 }}>Service not found</h1>
          <button onClick={() => navigate('/packages')} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: 18, padding: '12px 32px', fontWeight: 600, fontSize: '1.08rem', cursor: 'pointer' }}>Back to Packages</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0eafc 100%)', minHeight: '100vh', paddingBottom: 60 }}>
      {/* Hero Section */}
      <div style={heroStyles}>
        <img src={serviceData.image} alt={serviceData.title} style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 18, marginBottom: 18, boxShadow: '0 4px 16px rgba(102,126,234,0.13)' }} />
        <div style={{ marginBottom: 10 }}>
          <span style={{ background: 'linear-gradient(135deg, #ffb347 0%, #ffcc80 100%)', color: '#222', fontWeight: 600, borderRadius: 12, padding: '6px 18px', fontSize: '1rem', marginBottom: 10, display: 'inline-block' }}>{serviceData.badge}</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>{serviceData.title}</h1>
        <p style={{ color: '#e2e8f0', fontWeight: 400, fontSize: '1.15rem', marginTop: 12, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>{serviceData.description}</p>
      </div>

      {/* Main Content Card */}
      <div style={{ maxWidth: 1100, margin: '0 auto', marginTop: -60, background: 'white', borderRadius: 28, boxShadow: '0 8px 32px rgba(102,126,234,0.10)', padding: '48px 32px', display: 'flex', gap: 48, flexWrap: 'wrap', position: 'relative', zIndex: 3 }}>
        {/* Left: Info & Book Now */}
        <div style={{ flex: '1 1 320px', minWidth: 320, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1.5px solid #e0eafc', paddingRight: 32 }}>
          <div style={{ width: 80, height: 80, borderRadius: 20, background: 'linear-gradient(135deg, #ffb347 0%, #ffcc80 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 32, marginBottom: 20, boxShadow: '0 10px 20px rgba(255, 179, 71, 0.18)' }}>
            <i className={serviceData.icon}></i>
          </div>
          <button onClick={() => navigate('/booking')} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: 18, padding: '14px 0', fontWeight: 600, fontSize: '1.08rem', width: '100%', margin: '18px 0 0 0', cursor: 'pointer', boxShadow: '0 2px 8px rgba(102,126,234,0.07)' }}>Book Now</button>
          <button onClick={() => navigate('/packages')} style={{ background: 'linear-gradient(135deg, #ffb347 0%, #ffcc80 100%)', color: '#222', border: 'none', borderRadius: 18, padding: '12px 0', fontWeight: 600, fontSize: '1.08rem', width: '100%', margin: '18px 0 0 0', cursor: 'pointer', boxShadow: '0 2px 8px rgba(255,179,71,0.07)' }}>← Back to Packages</button>
          {/* Travel Tip Card */}
          <div style={{ background: 'rgba(255,255,255,0.97)', borderRadius: 22, boxShadow: '0 8px 32px 0 rgba(255, 179, 71, 0.13)', padding: '28px 18px', marginTop: 32, width: '100%', textAlign: 'center', border: '1.5px solid #ffe0b2' }}>
            <i className="fas fa-globe-asia" style={{ fontSize: '2.2rem', color: '#ffa726', marginBottom: 8 }}></i>
            <div style={{ color: '#222', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Travel Tip</div>
            <div style={{ color: '#666', fontSize: '1.05rem', lineHeight: 1.6 }}>Always keep digital and paper copies of your important documents when traveling abroad. Safe travels!</div>
          </div>
        </div>
        {/* Right: Details */}
        <div style={{ flex: '2 1 400px', minWidth: 320, paddingLeft: 32 }}>
          {/* Itinerary Section */}
          <div style={{ marginBottom: 36 }}>
            <h2 style={{ color: '#764ba2', fontWeight: 700, fontSize: '1.4rem', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}><i className="fas fa-route" style={{ color: '#ffa726' }}></i> Itinerary Details</h2>
            <div style={{ height: 4, width: 60, background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', borderRadius: 8, margin: '12px 0 24px 0' }}></div>
            <div style={{ display: 'grid', gap: 18 }}>
              {serviceData.days.map((day, index) => (
                <div key={index} style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 16, padding: 22, border: '1.5px solid #e0eafc', boxShadow: '0 4px 16px rgba(102,126,234,0.09)', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #ffb347 0%, #ffcc80 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>{index + 1}</div>
                    <h3 style={{ color: '#222', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>{day.name}</h3>
                  </div>
                  <p style={{ color: '#764ba2', marginBottom: 10, fontStyle: 'italic', fontWeight: 400 }}>{day.summary}</p>
                  <div style={{ display: 'grid', gap: 8 }}>
                    {Object.entries(day.details).map(([key, value]) => (
                      <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(102,126,234,0.06)', borderRadius: 8, padding: '8px 14px', color: '#222' }}>
                        <span style={{ color: '#764ba2', minWidth: 80, fontWeight: 500 }}>{key}</span>
                        <span style={{ color: '#222', flex: 1 }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Includes & Exclusions */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {/* Includes */}
            {serviceData.includes && (
              <div style={{ flex: 1, minWidth: 220, background: 'rgba(236,253,245,0.7)', borderRadius: 16, padding: 22, marginBottom: 18, boxShadow: '0 2px 8px rgba(16,185,129,0.07)' }}>
                <h3 style={{ color: '#10b981', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}><i className="fas fa-check-circle" style={{ color: '#10b981' }}></i> Package Includes</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                  {serviceData.includes.map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#222', fontWeight: 400 }}><span style={{ color: '#10b981', fontSize: '1.1rem' }}>✔️</span> {item}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Exclusions */}
            {serviceData.exclusions && (
              <div style={{ flex: 1, minWidth: 220, background: 'rgba(254,242,242,0.7)', borderRadius: 16, padding: 22, marginBottom: 18, boxShadow: '0 2px 8px rgba(239,68,68,0.07)' }}>
                <h3 style={{ color: '#ef4444', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}><i className="fas fa-times-circle" style={{ color: '#ef4444' }}></i> Exclusions</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                  {serviceData.exclusions.map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#222', fontWeight: 400 }}><span style={{ color: '#ef4444', fontSize: '1.1rem' }}>❌</span> {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;