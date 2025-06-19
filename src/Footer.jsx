import React, { useState, useEffect } from 'react';
import logo from '../public/logo.png'

const ModernFooter = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      alert('Thank you for subscribing! You will receive a confirmation email shortly.');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const infoLinks = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: '🏝️' },
    { name: 'Packages', href: '/packages', icon: '🎁' },
    { name: 'Destinations', href: '/destination', icon: '📍' },
    { name: 'Activities', href: '/stay', icon: '🏄‍♂️' },
    { name: 'Booking', href: '/booking', icon: '📝' },
    { name: 'Contact', href: '/contacts', icon: '📞' },
  ];

  return (
    <footer className="footer-advanced">
      {/* Animated background elements */}
      <div className="footer-bg-elements">
        <div className="floating-element" style={{ '--x': `${mousePosition.x * 0.01}px`, '--y': `${mousePosition.y * 0.01}px` }}></div>
        <div className="floating-element" style={{ '--x': `${mousePosition.x * -0.02}px`, '--y': `${mousePosition.y * 0.015}px` }}></div>
        <div className="floating-element" style={{ '--x': `${mousePosition.x * 0.015}px`, '--y': `${mousePosition.y * -0.01}px` }}></div>
      </div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-column info-column">
            <div className="column-header">
              <h3>
                <span className="header-icon">🌟</span>
                Info
              </h3>
            </div>
            <ul className="links-list">
              {infoLinks.map((link, idx) => (
                <li key={idx} className="link-item">
                  <a href={link.href} className="nav-link">
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.name}</span>
                    <span className="link-arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column contact-column">
            <div className="column-header">
              <h3>
                <span className="header-icon">📞</span>
                Contact Us
              </h3>
            </div>
            <div className="contact-info">
              <div className="brand-info">
                <h4 className="brand-name" >Andaman Reef Tours</h4>
                <p className="brand-tagline" style={{fontSize: '10px'}}>Your Gateway to Paradise</p>
              </div>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span  style={{fontSize: '20px'}}>Port Blair, Andaman & Nicobar Islands</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:andamanbeacontoursandtravels@gmail.com" className="contact-link">
                    andamanbeacontoursandtravels@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="tel:18001234567" className="contact-link">1 800 123 4567</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-column newsletter-column">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
              <img src="/navlog.png" alt="Andaman Reef Tours Logo" style={{ width: 70, height: 70, borderRadius: 16, marginBottom: 10, boxShadow: '0 4px 16px rgba(99,102,241,0.12)' }} />
            </div>
            <div className="column-header">
              <h3>
                <span className="header-icon">💌</span>
                Stay Updated
              </h3>
            </div>
            <div className="newsletter-content">
              <p className="newsletter-description">
                Subscribe for exclusive deals and travel inspiration
              </p>
              <div className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="email-input"
                    onKeyPress={(e) => e.key === 'Enter' && handleNewsletterSubmit(e)}
                  />
                  <button onClick={handleNewsletterSubmit} className="submit-btn">
                    <span className="btn-text">Subscribe</span>
                    <span className="btn-icon">✨</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <div className="logo-container">
              <div className="logo-placeholder"><img src={logo} alt="" width={'130px'} /></div>
              <div className="brand-text">
                <span className="brand-title">Andaman Reef Tours</span>
                <span className="brand-subtitle">& Travels</span>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <div className="social-title">Follow Us</div>
            <div className="social-links">
              {/* WhatsApp */}
              <a href="https://wa.me/918001234567" className="social-link whatsapp" title="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.05C13.41 27.633 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.13 0-2.238-.188-3.287-.558l-.235-.08-4.646 1.217 1.24-4.53-.153-.236C7.188 18.238 7 17.13 7 16c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.145-1.71-.844-1.974-.94-.264-.097-.456-.145-.648.145-.193.29-.744.94-.912 1.134-.168.193-.336.217-.626.072-.29-.145-1.225-.452-2.334-1.44-.863-.77-1.445-1.72-1.616-2.01-.168-.29-.018-.447.127-.592.13-.13.29-.336.435-.504.145-.168.193-.29.29-.483.097-.193.048-.362-.024-.507-.072-.145-.648-1.566-.888-2.146-.234-.563-.472-.486-.648-.495-.168-.007-.362-.009-.555-.009-.193 0-.507.072-.773.362-.264.29-1.01.984-1.01 2.397 0 1.413 1.034 2.778 1.178 2.97.145.193 2.037 3.116 4.938 4.25.69.298 1.228.476 1.647.609.692.22 1.323.189 1.82.115.555-.082 1.71-.698 1.953-1.372.24-.674.24-1.252.168-1.372-.072-.12-.264-.193-.555-.338z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/andamanbeacontoursandtravels?utm_source=qr&igsh=MTE4amRhMzZxZDFudA==" className="social-link instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© 2025 Andaman Reef Tours and Travels.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} title="Scroll to top">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      <style>{`
        .footer-advanced {
          position: relative;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: #e2e8f0;
          padding: 80px 0 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow: hidden;
        }

        .footer-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-element {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          animation: float 20s infinite ease-in-out;
          transform: translate(var(--x, 0), var(--y, 0));
          transition: transform 0.3s ease-out;
        }

        .floating-element:nth-child(1) {
          top: 10%;
          left: 20%;
          animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
          top: 60%;
          right: 15%;
          animation-delay: -7s;
        }

        .floating-element:nth-child(3) {
          bottom: 20%;
          left: 10%;
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .footer-content {
          position: relative;
          z-index: 1;
          max-width: 90%;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-column {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .footer-column::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          transition: left 0.6s;
        }

        .footer-column:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
        }

        .footer-column:hover::before {
          left: 100%;
        }

        .column-header {
          margin-bottom: 28px;
        }

        .column-header h3 {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f8fafc;
          margin: 0;
          letter-spacing: -0.025em;
        }

        .header-icon {
          font-size: 1.5rem;
          filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.5));
        }

        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-item {
          margin-bottom: 16px;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: #cbd5e1;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          transition: left 0.4s;
        }

        .nav-link:hover {
          color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
          transform: translateX(8px);
        }

        .nav-link:hover::before {
          left: 100%;
        }

        .link-icon {
          font-size: 1.1rem;
          transition: transform 0.3s;
        }

        .nav-link:hover .link-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .link-text {
          flex: 1;
          font-weight: 500;
        }

        .link-arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s;
          color: #6366f1;
        }

        .nav-link:hover .link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .brand-info {
          text-align: center;
          padding: 20px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 16px;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .brand-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #6366f1;
          margin: 0 0 8px 0;
        }

        .brand-tagline {
          font-size: 0.9rem;
          color: #94a3b8;
          margin: 0;
          font-style: italic;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          transition: background 0.3s;
          flex-wrap: wrap;
          min-width: 0;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .contact-icon {
          font-size: 1.1rem;
          width: 24px;
          text-align: center;
        }

        .contact-link {
          color: #e2e8f0;
          text-decoration: none;
          transition: color 0.3s;
          word-break: break-all;
          max-width: 100%;
          display: inline-block;
        }

        .contact-link:hover {
          color: #6366f1;
        }

        .newsletter-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .newsletter-description {
          color: #94a3b8;
          line-height: 1.6;
          margin: 0;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .email-input {
          padding: 16px 20px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          color: #f1f5f9;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .email-input:focus {
          outline: none;
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .email-input::placeholder {
          color: #64748b;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 24px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .btn-icon {
          transition: transform 0.3s;
        }

        .submit-btn:hover .btn-icon {
          transform: rotate(180deg) scale(1.2);
        }

        .footer-bottom {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 40px 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.2);
          border-radius: 20px 20px 0 0;
          backdrop-filter: blur(10px);
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .logo-placeholder {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
          transition: transform 0.3s;
        }

        .logo-placeholder:hover {
          transform: scale(1.1) rotate(-5deg);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #f8fafc;
          line-height: 1.2;
        }

        .brand-subtitle {
          font-size: 0.9rem;
          color: #6366f1;
          font-weight: 500;
        }

        .footer-social {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .social-title {
          font-size: 0.9rem;
          color: #94a3b8;
          margin-bottom: 12px;
          font-weight: 500;
          text-align: center;
        }

        .social-links {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          color: #e2e8f0;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }

        .social-link:hover {
          transform: translateY(-4px);
          border-color: currentColor;
        }

        .social-link:hover::before {
          left: 100%;
        }

        .social-link.whatsapp:hover {
          color: #25d366;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
        }

        .social-link.instagram:hover {
          color: #e4405f;
          box-shadow: 0 10px 25px rgba(228, 64, 95, 0.3);
        }

        .footer-copyright {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.5;
          text-align: right;
          min-width: 0;
        }

        .scroll-top-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
          backdrop-filter: blur(10px);
          animation: pulse 2s infinite;
        }

        .scroll-top-btn:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5), 0 0 0 10px rgba(99, 102, 241, 0.1); }
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: center;
            gap: 24px;
            text-align: center;
            padding-left: 16px;
            padding-right: 16px;
          }

          .footer-brand,
          .footer-social,
          .footer-copyright {
            justify-content: center;
            text-align: center;
            width: 100%;
          }

          .footer-copyright {
            margin-top: 12px;
          }
        }

        @media (max-width: 768px) {
          .footer-advanced {
            padding: 60px 0 0;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-column {
            padding: 24px;
          }

          .input-group {
            flex-direction: column;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
      </footer>
  );
};

export default ModernFooter;