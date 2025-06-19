import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleItemClick = (item) => {
    // Implement item click handling
  };

  // Mock Link component for demonstration
  const Link = ({ to, children, className, onClick }) => (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  );

  const navigationItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'packages', label: 'Packages', href: '/packages' },
    { id: 'destination', label: 'Destinations', href: '/destination' },
    { id: 'stay', label: 'Activities', href: '/stay' },
    { id: 'booking', label: 'Booking', href: '/booking' },
    { id: 'contacts', label: 'Contact', href: '/contacts' },
  ];

  return (
    <>
      <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          {/* Logo Section */}
          <Link className="navbar-brand" to="/">
            <div  className="logo-wrapper">
              <img  src="/navlog.png" alt="Reef Logo" className="logo-image" />
              
            </div>
          </Link>

          {/* Navigation Links */}
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-links">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.id}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to={item.href}
                  end={item.href === '/'}
                >
                  {item.label}
                  <div className="nav-underline"></div>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="navbar-actions">
            

            <Link className="enquiry-btn" to="/contacts">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              <span> ENQUIRY</span>
              <div className="btn-shine"></div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="toggle-bar bar-1"></span>
              <span className="toggle-bar bar-2"></span>
              <span className="toggle-bar bar-3"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      </nav>

      <style jsx>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-container.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(20px);
        }

        .navbar-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          position: relative;
        }

        .navbar-brand {
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .navbar-brand:hover {
          transform: translateY(-1px);
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-image {
          height: 90px;
          width: 108px;
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        
        }

        .navbar-brand:hover .logo-image {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
          transform: scale(1.02);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .brand-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          line-height: 1;
          letter-spacing: -0.025em;
        }

        .brand-tagline {
          font-size: 0.65rem;
          color: #6b7280;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .nav-menu {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          color: gray !important;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
          transition: all 0.2s ease;
          padding: 8px 0;
        }

        .nav-link:hover {
          color: #f59e0b;
        }

        .nav-link.active {
          color: #f59e0b;
        }

        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f59e0b, #d97706);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover .nav-underline,
        .nav-link.active .nav-underline {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .phone-section {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 8px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .phone-section:hover {
          background: rgba(16, 185, 129, 0.15);
          transform: translateY(-1px);
        }

        .phone-icon {
          width: 24px;
          height: 24px;
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .phone-section:hover .phone-icon {
          transform: scale(1.1);
        }

        .phone-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .phone-label {
          font-size: 0.65rem;
          color: #10b981;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .phone-number {
          font-size: 0.85rem;
          color: #374151;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        .enquiry-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-radius: 6px;
          transition: all 0.2s ease;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
        }

        .enquiry-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(245, 158, 11, 0.4);
          color: white;
          text-decoration: none;
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .enquiry-btn:hover .btn-shine {
          left: 100%;
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          gap: 4px;
        }

        .toggle-bar {
          width: 24px;
          height: 2px;
          background: #4b5563;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 1px;
        }

        .mobile-toggle.active .bar-1 {
          transform: rotate(45deg) translate(5px, 5px);
          background: #f59e0b;
        }

        .mobile-toggle.active .bar-2 {
          opacity: 0;
          transform: translateX(20px);
        }

        .mobile-toggle.active .bar-3 {
          transform: rotate(-45deg) translate(7px, -6px);
          background: #f59e0b;
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }

        .mobile-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .navbar-content {
            padding: 0 20px;
          }

          .nav-links {
            gap: 24px;
          }

          .navbar-actions {
            gap: 20px;
          }
        }

        @media (max-width: 992px) {
          .nav-links {
            gap: 20px;
          }

          .nav-link {
            font-size: 0.85rem;
          }

          .phone-info {
            display: none;
          }

          .phone-section {
            padding: 10px;
          }
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: flex;
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1000;
            padding: 100px 32px 32px;
            box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            width: 100%;
          }

          .nav-link {
            width: 100%;
            padding: 16px 0;
            font-size: 1rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          .nav-underline {
            height: 1px;
          }

          .phone-section {
            display: none;
          }

          .brand-text {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .navbar-content {
            padding: 0 16px;
            height: 70px;
          }

          .logo-image {
            height: 38px;
          }

          .enquiry-btn {
            padding: 10px 18px;
            font-size: 0.8rem;
          }

          .nav-menu {
            width: 280px;
          }
        }

        @media (max-width: 480px) {
          .navbar-content {
            padding: 0 12px;
          }

          .nav-menu {
            width: 100%;
            padding: 80px 24px 24px;
          }

          .enquiry-btn {
            padding: 8px 16px;
            font-size: 0.75rem;
          }
        }

        /* Animation performance optimization */
        .nav-link,
        .enquiry-btn,
        .mobile-toggle,
        .logo-image {
          will-change: transform;
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;