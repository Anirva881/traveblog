import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import emailjs from 'emailjs-com';

// Import activities, destinations, and packages data
import { activitiesList } from '../data/activities';
import { destinationsList } from '../data/destinations';
import { packagesList } from '../data/packages';

function Booking() {
  const form = useRef();



  const emailsend = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bpd0sdi', 'template_22i5gjj', form.current, 'rrf3ari749KxgfBFs')
      .then((result) => {
        console.log(result.text);
        alert("Message sent!");

        // ✅ Clear input values
    setFormData({
      firstname: '',
      lastname: '',
      age: '',
      travelers: '',
      kids: '',
      phone: '',
      email: '',
      customRequest: '',
      activities: [],
      destinations: [],
      packages: [],
    });

    // ✅ Reset actual form (optional)
    form.current.reset();

    setIsSubmitting(false);
    
      }, (error) => {
        console.log(error.text);
        alert("Error sending message.");
      });
  };




  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    age: '',
    travelers: '',
    kids: '',
    phone: '',
    email: '',
    customRequest: '',
    activities: [],
    destinations: [],
    packages: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState('');

  // Prepare options for react-select
  const activityOptions = activitiesList.map(a => ({ value: a.name, label: a.name }));
  const destinationOptions = destinationsList.map(d => ({ value: d.title, label: d.title }));
  const packageOptions = packagesList.map(p => ({ value: p.title, label: p.title }));

  const sendEmail = async () => {
    // Validate required fields
    if (!formData.firstname || !formData.lastname || !formData.age || !formData.travelers || !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    // Simulate sending email
    setTimeout(() => {
      alert('Booking request sent!\n' + JSON.stringify(formData, null, 2));
      setFormData({
        firstname: '', lastname: '', age: '', travelers: '', kids: '', phone: '', email: '', customRequest: '', activities: [], destinations: [], packages: [],
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendEmail();
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => {
      const arr = Array.isArray(value) ? value : [value];
      return { ...prev, [field]: arr };
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: '🌟', text: 'Personalized Recommendations', color: '#6366f1' },
    { icon: '🎯', text: 'Tailored Itineraries', color: '#8b5cf6' },
    { icon: '💼', text: 'Professional Support', color: '#06b6d4' },
    { icon: '🚀', text: '24/7 Customer Service', color: '#10b981' },
    { icon: '⚡', text: 'Quick Response - We typically respond within 2-4 hours', color: '#f59e0b' }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Booking & Enquiry</h1>
          <p className="hero-subtitle">Experience the world like never before with our personalized travel solutions. From exotic destinations to luxury accommodations – we've got you covered.</p>
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
      <div className="booking-container">
        {/* Main Content */}
        <div className="main-content">
          <div className="content-wrapper">
            {/* Booking Form */}
            <div className="form-container">
              <div className="form-header">
                <h2>Book Your Journey</h2>
                <p>Fill in your details and preferences below</p>
              </div>
              <form ref={form} onSubmit={emailsend} className="booking-form">
                <div className="form-grid">
                  <div className="input-group">
                    <label className="input-label">First Name</label>
                    <div className={`input-wrapper ${focusedField === 'firstname' ? 'focused' : ''}`}>
                      <input name="user_name" type="text" value={formData.firstname} onChange={e => handleInputChange('firstname', e.target.value)} onFocus={() => setFocusedField('firstname')} onBlur={() => setFocusedField('')} className="modern-input" placeholder="First Name" required />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Last Name</label>
                    <div className={`input-wrapper ${focusedField === 'lastname' ? 'focused' : ''}`}>
                      <input type="text" name='last_name' value={formData.lastname} onChange={e => handleInputChange('lastname', e.target.value)} onFocus={() => setFocusedField('lastname')} onBlur={() => setFocusedField('')} className="modern-input" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Age</label>
                    <div className={`input-wrapper ${focusedField === 'age' ? 'focused' : ''}`}>
                      <input type="numberss" min="1" value={formData.age} onChange={e => handleInputChange('age', e.target.value)} onFocus={() => setFocusedField('age')} onBlur={() => setFocusedField('')} className="modern-input" placeholder="Age" required/>
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Number of Travelers</label>
                    <div className={`input-wrapper ${focusedField === 'travelers' ? 'focused' : ''}`}>
                      <input type="number" name='numbers' min="1" value={formData.travelers} onChange={e => handleInputChange('travelers', e.target.value)} onFocus={() => setFocusedField('travelers')} onBlur={() => setFocusedField('')} className="modern-input" placeholder="Travelers" required/>
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Kids</label>
                    <div className={`input-wrapper ${focusedField === 'kids' ? 'focused' : ''}`}>
                      <input type="number" name='num' min="0" value={formData.kids} onChange={e => handleInputChange('kids', e.target.value)} onFocus={() => setFocusedField('kids')} onBlur={() => setFocusedField('')} className="modern-input" placeholder="Number of Kids" required/>
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Phone Number</label>
                    <div className={`input-wrapper ${focusedField === 'phone' ? 'focused' : ''}`}>
                      <input type="tel" name='number' value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField('')} className="modern-input" placeholder="Phone Number" required />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Email Address</label>
                    <div className={`input-wrapper ${focusedField === 'email' ? 'focused' : ''}`}>
                      <input name="user_email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField('')} className="modern-input" placeholder="Email Address" required />
                    </div>
                  </div>
                  <div className="input-group full-width">
                    <label className="input-label">Custom Request</label>
                    <div className={`input-wrapper ${focusedField === 'customRequest' ? 'focused' : ''}`}>
                      <textarea name="message" value={formData.customRequest} onChange={e => handleInputChange('customRequest', e.target.value)} onFocus={() => setFocusedField('customRequest')} onBlur={() => setFocusedField('')} className="modern-textarea" placeholder="Any special requests or requirements?" rows="3" required/>
                    </div>
                  </div>
                  {/* Activities Multi-Select */}
                  <div className="input-group full-width">
                    <label className="input-label white-label">Select Activities</label>
                    <Select
                      isMulti
                      options={activityOptions}
                      value={activityOptions.filter(opt => formData.activities.includes(opt.value))}
                      onChange={selected => handleMultiSelect('activities', selected.map(opt => opt.value))}
                      classNamePrefix="rs"
                      styles={{
                        control: (base) => ({ ...base, background: '#fff', borderColor: '#ccc', minHeight: 44 }),
                        multiValue: (base) => ({ ...base, background: '#764ba2', color: '#fff' }),
                        multiValueLabel: (base) => ({ ...base, color: '#fff' }),
                        option: (base, state) => ({ ...base, color: state.isSelected ? '#fff' : '#222', background: state.isSelected ? '#764ba2' : '#fff' }),
                      }}
                    />
                  </div>
                  {/* Destinations Multi-Select */}
                  <div className="input-group full-width">
                    <label className="input-label white-label">Select Destinations</label>
                    <Select
                      isMulti
                      options={destinationOptions}
                      value={destinationOptions.filter(opt => formData.destinations.includes(opt.value))}
                      onChange={selected => handleMultiSelect('destinations', selected.map(opt => opt.value))}
                      classNamePrefix="rs"
                      styles={{
                        control: (base) => ({ ...base, background: '#fff', borderColor: '#ccc', minHeight: 44 }),
                        multiValue: (base) => ({ ...base, background: '#764ba2', color: '#fff' }),
                        multiValueLabel: (base) => ({ ...base, color: '#fff' }),
                        option: (base, state) => ({ ...base, color: state.isSelected ? '#fff' : '#222', background: state.isSelected ? '#764ba2' : '#fff' }),
                      }}
                    />
                  </div>
                  {/* Packages Multi-Select */}
                  <div className="input-group full-width">
                    <label className="input-label white-label">Select Packages</label>
                    <Select
                      isMulti
                      options={packageOptions}
                      value={packageOptions.filter(opt => formData.packages.includes(opt.value))}
                      onChange={selected => handleMultiSelect('packages', selected.map(opt => opt.value))}
                      classNamePrefix="rs"
                      styles={{
                        control: (base) => ({ ...base, background: '#fff', borderColor: '#ccc', minHeight: 44 }),
                        multiValue: (base) => ({ ...base, background: '#764ba2', color: '#fff' }),
                        multiValueLabel: (base) => ({ ...base, color: '#fff' }),
                        option: (base, state) => ({ ...base, color: state.isSelected ? '#fff' : '#222', background: state.isSelected ? '#764ba2' : '#fff' }),
                      }}
                    />
                  </div>
                </div>
                <button type="submit"  disabled={isSubmitting} className="submit-button">
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
                        <span>Send My Request</span>
                      </>
                    )}
                  </div>
                  <div className="button-glow" />
                </button>
              </form>
            </div>

            {/* Colorful Separator */}
            <div className="content-separator"></div>

            {/* Features Section - Right Side */}
            <div className="features-section">
              <h3 className="features-title">Why Choose Us?</h3>
              <p className="features-description">
                With over 15 years of experience in luxury travel, we've curated unforgettable journeys for thousands of travelers. Our dedicated team of travel specialists works around the clock to ensure every detail of your trip exceeds expectations, from hand-picked accommodations to exclusive local experiences.
              </p>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card" style={{ '--accent-color': feature.color }}>
                    <div className="feature-icon">
                      <span>{feature.icon}</span>
                    </div>
                    <p className="feature-text">{feature.text}</p>
                    <div className="feature-shine" />
                  </div>
                ))}
              </div>
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
          height: 70vh;
          background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
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

        .floating-elements::before {
          content: '';
          position: absolute;
          top: 20%;
          left: 30%;
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(30px);
          animation: float 18s infinite ease-in-out;
        }

        .floating-elements::after {
          content: '';
          position: absolute;
          bottom: 30%;
          right: 25%;
          width: 150px;
          height: 150px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          filter: blur(35px);
          animation: float 22s infinite ease-in-out reverse;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }

        .booking-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
          position: relative;
          padding: 40px 0;
          overflow: hidden;
        }

        .booking-container::before {
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

        .booking-container::after {
          content: '';
          position: absolute;
          top: 10%;
          right: 10%;
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          border-radius: 50%;
          filter: blur(40px);
          animation: float 15s infinite ease-in-out;
          pointer-events: none;
        }

        .main-content {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 20px;
          z-index: 10;
        }

        .main-content::before {
          content: '';
          position: absolute;
          top: -100px;
          left: -100px;
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08));
          border-radius: 50%;
          filter: blur(60px);
          animation: float 25s infinite ease-in-out;
          pointer-events: none;
        }

        .main-content::after {
          content: '';
          position: absolute;
          bottom: -150px;
          right: -150px;
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, rgba(6, 182, 212, 0.06), rgba(16, 185, 129, 0.06));
          border-radius: 50%;
          filter: blur(80px);
          animation: float 30s infinite ease-in-out reverse;
          pointer-events: none;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 4px 400px;
          gap: 40px;
          align-items: start;
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
          padding: 60px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(255, 255, 255, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          border: 2px solid transparent;
          background-clip: padding-box;
          margin-bottom: 0;
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

        .form-container::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 50%);
          animation: rotate 20s linear infinite;
          pointer-events: none;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .form-container:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 35px 70px rgba(0, 0, 0, 0.12),
            0 0 0 1px rgba(99, 102, 241, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          border-color: rgba(99, 102, 241, 0.1);
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

        .form-header {
          position: relative;
          text-align: center;
          margin-bottom: 50px;
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
          content: '✈️';
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

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
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
          margin-bottom: 4px;
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

        .modern-input,
        .modern-textarea {
          width: 100%;
          padding: 18px 24px;
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

        .input-wrapper.focused .label-icon {
          transform: scale(1.2);
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
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          margin-top: 30px;
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

        .submit-button:active:not(:disabled) {
          transform: translateY(-1px) scale(0.98);
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        .submit-button:active:not(:disabled) {
          transform: translateY(-1px) scale(0.98);
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

        .features-section {
          position: sticky;
          top: 40px;
          text-align: left;
          animation: slideUp 0.8s ease-out 0.2s both;
        }

        .features-title {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 600;
          color: #222;
        }

        .features-description {
          font-family: 'Inter', Arial, sans-serif;
          color: #6c7a89;
          font-weight: 300;
          font-size: 1.13rem;
          margin-top: 10px;
          margin-bottom: 18px;
        }

        .features-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-card {
          position: relative;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 20px 24px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .feature-card:hover {
          transform: translateX(8px);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
          border-color: var(--accent-color);
        }

        .feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--accent-color);
          border-radius: 12px;
          font-size: 1.25rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .feature-text {
          color: #475569;
          font-weight: 500;
          font-size: 0.95rem;
          margin: 0;
          transition: color 0.3s ease;
          flex: 1;
        }

        .feature-card:hover .feature-text {
          color: #1e293b;
        }

        .feature-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }

        .feature-card:hover .feature-shine {
          left: 100%;
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .content-separator {
            display: none;
          }

          .features-section {
            position: static;
            text-align: center;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .feature-card {
            flex-direction: column;
            text-align: center;
            padding: 24px;
          }

          .feature-card:hover {
            transform: translateY(-8px);
          }

          .feature-icon {
            width: 56px;
            height: 56px;
            margin-bottom: 16px;
          }

          .features-description {
            text-align: center;
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
            padding: 32px 24px;
            border-radius: 20px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .form-header h2 {
            font-size: 1.875rem;
          }

          .features-title {
            font-size: 1.75rem;
          }

          .features-description {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 50vh;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .form-container {
            padding: 24px 20px;
          }

          .submit-button {
            padding: 16px 32px;
          }
        }

        .form-select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f8f9fa;
          font-size: 1rem;
          margin-bottom: 15px;
        }

        .white-label {
          color: #fff !important;
          font-weight: 500;
        }
        .send-btn {
          color: #fff !important;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
      `}</style>
    </>
  );
}

export default Booking;