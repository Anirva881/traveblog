import React, { useState, useEffect } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">Get in Touch with Our Travel Experts</p>
        </div>
        <div className="floating-elements">
          <div className="float-1" style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}></div>
          <div className="float-2" style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.025}px)`
          }}></div>
        </div>
      </div>

      {/* Main Container */}
      <div className="contact-container">
        {/* Main Content */}
        <div className="main-content">
          <div className="content-wrapper">
            {/* Contact Form */}
            <div className="form-container">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>We'd love to hear from you and help plan your next adventure</p>
              </div>

              <div className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="input-group">
                    <label className="input-label">
                      <span className="label-text">Your Name</span>
                      <span className="label-icon">👤</span>
                    </label>
                    <div className={`input-wrapper ${focusedField === 'name' ? 'focused' : ''}`}>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        placeholder="Enter your full name"
                        className="modern-input"
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label className="input-label">
                      <span className="label-text">Email Address</span>
                      <span className="label-icon">✉️</span>
                    </label>
                    <div className={`input-wrapper ${focusedField === 'email' ? 'focused' : ''}`}>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        placeholder="your.email@example.com"
                        className="modern-input"
                      />
                    </div>
                  </div>

                  <div className="input-group full-width">
                    <label className="input-label">
                      <span className="label-text">Subject</span>
                      <span className="label-icon">📝</span>
                    </label>
                    <div className={`input-wrapper ${focusedField === 'subject' ? 'focused' : ''}`}>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField('')}
                        placeholder="What's this about?"
                        className="modern-input"
                      />
                    </div>
                  </div>

                  <div className="input-group full-width">
                    <label className="input-label">
                      <span className="label-text">Message</span>
                      <span className="label-icon">💬</span>
                    </label>
                    <div className={`input-wrapper ${focusedField === 'message' ? 'focused' : ''}`}>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        placeholder="Tell us how we can help you..."
                        className="modern-textarea"
                        rows="5"
                      />
                    </div>
                  </div>
                </div>

                <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="submit-button">
                  <div className="button-content">
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polygon points="22,2 15,22 11,13 2,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
                        </svg>
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                  <div className="button-glow" />
                </button>
              </div>
            </div>

            {/* Colorful Separator */}
            <div className="content-separator"></div>

            {/* Quick Contact Info */}
            <div className="quick-contact-section">
              <h3 className="section-title">Quick Contact</h3>
              <p className="section-description">
                Need immediate assistance? Contact Andaman Beacon Tours and Travels through any of these convenient channels.
              </p>
              
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-icon phone">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <h4>Phone</h4>
                    <p>+91 9933223033</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon email">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <h4>Email</h4>
                    <p>andamanbeacontoursandtravels@gmail.com</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon address">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <h4>Address</h4>
                    <p>Prem Nagar near New sagritara school port Blair</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon social">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="21.17" y1="8" x2="12" y2="8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="3.95" y1="6.06" x2="8.54" y2="14" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="10.88" y1="21.94" x2="15.46" y2="14" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                      <a href="https://wa.me/919933223033" className="social-link whatsapp" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" fill="currentColor"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/andamanbeacontoursandtravels?utm_source=qr&igsh=MTE4amRhMzZxZDFudA==" className="social-link instagram" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section - Full Width */}
          <div className="map-section-full">
            <div className="section-header" style={{marginLeft: '400px'}}>
              <h2 className="section-title">Find Us in Port Blair</h2>
              <p className="section-description">Located in the heart of Port Blair for easy access</p>
            </div>
            <div className="map-wrapper-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125238.65571423808!2d92.67365634750266!3d11.623017946059744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088d5e9c1c5e5e5%3A0x5f5f5f5f5f5f5f5f!2sPort%20Blair%2C%20Andaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1647889391270!5m2!1sen!2sin" 
                style={{border: 0, width: '100%', height: '100%'}}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow-x: hidden;
        }

        .hero-section {
          position: relative;
          width: 100vw;
          height: 60vh;
          background: url('https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(51, 65, 85, 0.5) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-title {
          color: #ffffff;
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .hero-subtitle {
          color: #e2e8f0;
          font-size: 1.25rem;
          font-weight: 400;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .float-1, .float-2 {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          filter: blur(60px);
        }

        .float-1 {
          width: 400px;
          height: 400px;
          top: 5%;
          right: 5%;
          animation: float 20s infinite ease-in-out;
        }

        .float-2 {
          width: 300px;
          height: 300px;
          bottom: 10%;
          left: 10%;
          animation: float 25s infinite ease-in-out reverse;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }

        .contact-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
          position: relative;
          padding: 40px 0;
          overflow: hidden;
        }

        .contact-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .main-content {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 20px;
          z-index: 10;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 4px 400px;
          gap: 60px;
          align-items: start;
          margin-bottom: 80px;
        }

        .content-separator {
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, 
            #6366f1 0%, 
            #8b5cf6 25%, 
            #06b6d4 50%, 
            #10b981 75%, 
            #f59e0b 100%);
          border-radius: 2px;
          position: relative;
          align-self: stretch;
          min-height: 600px;
        }

        .content-separator::before {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          border-radius: inherit;
          filter: blur(8px);
          opacity: 0.5;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        .form-container {
          position: relative;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%);
          backdrop-filter: blur(20px);
          border-radius: 32px;
          padding: 80px 70px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(255, 255, 255, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          border: 2px solid transparent;
          background-clip: padding-box;
          margin-top: 60px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideUp 0.8s ease-out;
          overflow: hidden;
        }

        .form-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #10b981);
          border-radius: 32px 32px 0 0;
        }

        .form-container:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 35px 70px rgba(0, 0, 0, 0.12),
            0 0 0 1px rgba(99, 102, 241, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .form-header {
          position: relative;
          text-align: center;
          margin-bottom: 60px;
        }

        .form-header::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 2px;
        }

        .form-header::after {
          content: '📬';
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 2rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }

        .form-header h2 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 12px;
          letter-spacing: -0.025em;
        }

        .form-header p {
          color: #64748b;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .input-group.full-width {
          grid-column: 1 / -1;
        }

        .input-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          color: #374151;
          font-size: 0.95rem;
          margin-bottom: 8px;
        }

        .label-icon {
          font-size: 1.1rem;
          opacity: 0.7;
          transition: transform 0.2s ease;
        }

        .input-wrapper {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .input-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
          border-radius: 12px;
          padding: 2px;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .input-wrapper.focused::before {
          opacity: 1;
        }

        .input-wrapper.focused .label-icon {
          transform: scale(1.2);
        }

        .modern-input,
        .modern-textarea {
          width: 100%;
          padding: 20px 24px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          color: #1e293b;
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
          resize: none;
          font-family: inherit;
          position: relative;
          z-index: 1;
        }

        .modern-input:hover,
        .modern-textarea:hover {
          border-color: #cbd5e1;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          background: linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%);
        }

        .modern-input:focus,
        .modern-textarea:focus {
          border-color: transparent;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15), 0 12px 35px rgba(0, 0, 0, 0.1);
          transform: translateY(-3px);
          background: #ffffff;
        }

        .modern-input::placeholder,
        .modern-textarea::placeholder {
          color: #94a3b8;
          transition: color 0.3s ease;
        }

        .modern-input:focus::placeholder,
        .modern-textarea:focus::placeholder {
          color: #cbd5e1;
        }

        .submit-button {
          position: relative;
          padding: 20px 50px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
          color: white !important;
          border: none;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          margin-top: 40px;
          transform-origin: center;
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .submit-button:hover::before {
          left: 100%;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #0891b2 100%);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
          z-index: 2;
          color: white !important;
        }

        .button-content span {
          color: white !important;
        }

        .button-content svg {
          color: white !important;
          stroke: white !important;
        }

        .button-content svg path,
        .button-content svg polygon {
          stroke: white !important;
          fill: white !important;
        }

        .button-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #4f46e5, #7c3aed, #0891b2);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }

        .submit-button:hover:not(:disabled) .button-glow {
          opacity: 1;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .quick-contact-section {
          position: sticky;
          top: 40px;
          margin-top: 60px;
          padding: 40px 30px;
          animation: slideUp 0.8s ease-out 0.2s both;
        }

        .section-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          letter-spacing: -0.025em;
        }

        .section-description {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #64748b;
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-card {
          position: relative;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 28px 32px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 24px;
          min-height: 80px;
        }

        .contact-card:hover {
          transform: translateX(8px);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
          background: transparent;
        }

        .contact-icon svg {
          width: 28px;
          height: 28px;
        }

        .contact-icon.phone svg { stroke: #6366f1; }
        .contact-icon.email svg { stroke: #8b5cf6; }
        .contact-icon.address svg { stroke: #06b6d4; }
        .contact-icon.social svg { stroke: #10b981; }

        .contact-card:hover .contact-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .contact-info h4 {
          color: #1e293b;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .contact-info p {
          color: #64748b;
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.4;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #f1f5f9;
          border-radius: 12px;
          text-decoration: none;
          color: #64748b;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          color: #1e293b;
          border-color: #cbd5e1;
        }

        .social-link.whatsapp:hover {
          background: #25d366;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        }

        .social-link.instagram:hover {
          background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(225, 48, 108, 0.3);
        }

        .map-section-full {
          margin: 80px 0;
          animation: slideUp 0.8s ease-out 0.4s both;
        }

        .map-wrapper-full {
          width: 100%;
          height: 600px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .map-wrapper-full:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .office-card {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .office-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          border-color: var(--accent-color);
        }

        .office-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .office-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .office-card:hover .office-image img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, var(--accent-color), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .office-card:hover .image-overlay {
          opacity: 0.3;
        }

        .office-content {
          padding: 32px 28px;
        }

        .office-city {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .office-card:hover .office-city {
          color: var(--accent-color);
        }

        .office-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .office-detail {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #64748b;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .office-card:hover .office-detail {
          color: #475569;
          transform: translateX(4px);
        }

        .detail-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .office-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }

        .office-card:hover .office-shine {
          left: 100%;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .content-separator {
            display: none;
          }

          .quick-contact-section {
            position: static;
            margin-top: 40px;
          }

          .form-container {
            margin-top: 30px;
          }

          .map-wrapper-full {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .main-content {
            padding: 20px 16px;
          }

          .form-container {
            padding: 40px 32px;
            border-radius: 20px;
            margin-top: 20px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .quick-contact-section {
            padding: 20px 15px;
            margin-top: 20px;
          }

          .contact-cards {
            gap: 16px;
          }

          .contact-card {
            padding: 24px 28px;
            gap: 20px;
            min-height: 70px;
          }

          .office-map-wrapper {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .office-grid {
            max-width: 400px;
          }

          .map-wrapper {
            height: 350px;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .section-description {
            text-align: center;
          }

          .contact-info p {
            font-size: 0.9rem;
          }

          .contact-info h4 {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default Contact;