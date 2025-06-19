import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const PremiumServiceCategories = () => {
  // Service data
  const serviceData = [
    {
      title: "2 Days 3 Nights",
      icon: "fas fa-mountain",
      badge: "Popular",
      description: "Perfect for weekend getaways and short trips. Experience the best of your destination in a compact itinerary.",
      bgClass: "bg-primary",
      days: [
        {
          name: "Day 1",
          summary: " Arrival in Port Blair",
          details: {
            "Morning": "Arrive at Port Blair Airport and transfer to your hotel",
            "Afternoon": " Visit the historic Cellular Jail and enjoy the mesmerizing Light & Sound Show",
            "Evening": "Welcome dinner at local restaurant",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 2",
          summary: "Havelock Island – Radhanagar Beach",
          details: {
            "Morning": "Take a ferry to Havelock Island and spend time at the breathtaking Radhanagar Beach.",
            "Afternoon": "Relax on the pristine white sand and enjoy the serene waves",
            
            "Night": "Overnight stay in Havelock."
          }
        },
        {
          name: "Day 3",
          summary: "Return to Port Blair – Departure",
          details: {
            "Morning": "Return to Port Blair by ferry.",
            "Afternoon": " Enjoy some last-minute shopping before transferring to the airport for departure.",
           
          }
        }
      ]
    },
    {
      title: "3 Days 4 Nights",
      icon: "fas fa-umbrella-beach",
      badge: "Best Value",
      description: "Experience the beauty of the Andaman Islands with this comprehensive package.",
      bgClass: "bg-success",
      days: [
        {
          name: "Day 1",
          summary: " Arrival in Port Blair – Cellular Jail & Light Show",
          details: {
            "Morning": "Arrive at Port Blair Airport and transfer to your hotel.",
            "Afternoon": "Visit the historic Cellular Jail and enjoy the Light & Sound Show.",
           
            "Night": "Overnight stay in Port Blair."
          }
        },
        {
          name: "Day 2",
          summary: "Havelock Island – Radhanagar Beach",
          details: {
            "Morning": "Take a ferry to Havelock Island ",
            "Afternoon": "Relax at the stunning Radhanagar Beach",
            "Evening": "Enjoy the white sandy shores and crystal-clear waters.",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 3",
          summary: "Elephant Beach – Snorkeling & Return to Port Blair",
          details: {
            "Morning": "Visit Elephant Beach for exciting water activities",
            "Afternoon": "Enjoy snorkeling and jet skiing",
            "Evening": "Return to Port Blair",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 4",
          summary: "Departure from Andaman",
          details: {
            "Morning": "Breakfast at the hotel",
            "Afternoon": "Check out and transfer to the airport",
            "Evening": "Departure from Andaman"
          }
        }
      ]
    },
    {
      title: "4 Days 5 Nights",
      icon: "fas fa-landmark",
      badge: "Premium",
      description: "Comprehensive Andaman exploration with premium activities. Experience the best of Port Blair and Havelock Island with this well-planned itinerary.",
      bgClass: "bg-secondary",
      days: [
        {
          name: "Day 1",
          summary: "Arrival in Port Blair – Sightseeing",
          details: {
            "Morning": "Arrive at Port Blair Airport and transfer to your hotel",
            "Afternoon": "Visit the iconic Cellular Jail",
            "Evening": "Witness the captivating Light & Sound Show",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 2",
          summary: "Havelock Island – Radhanagar Beach",
          details: {
            "Morning": "Board a ferry to Havelock Island",
            "Afternoon": "Visit the stunning Radhanagar Beach",
            "Evening": "Spend your day relaxing by the turquoise waters",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 3",
          summary: "Elephant Beach – Water Activities",
          details: {
            "Morning": "Explore Elephant Beach",
            "Afternoon": "Enjoy snorkeling & jet skiing",
            "Evening": "Return to Havelock",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 4",
          summary: "Return to Port Blair – Corbyn's Cove Beach",
          details: {
            "Morning": "Take a ferry back to Port Blair",
            "Afternoon": "Visit the serene Corbyn's Cove Beach",
            "Evening": "Enjoy a peaceful evening",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 5",
          summary: "Departure from Andaman",
          details: {
            "Morning": "Breakfast at the hotel",
            "Afternoon": "Check out and transfer to Port Blair Airport",
            "Evening": "Departure with unforgettable memories"
          }
        }
      ],
      includes: [
        "Accommodation with breakfast",
        "Private transfers & ferry tickets",
        "Sightseeing as per itinerary"
      ],
      exclusions: [
        "Airfare & personal expenses",
        "Water sports & additional activities"
      ]
    },
    {
      title: "5 Days 6 Nights",
      icon: "fas fa-city",
      badge: "Business",
      description: "Comprehensive Andaman exploration with premium activities. Experience the best of Port Blair, Havelock, and Neil Island with this well-planned itinerary.",
      bgClass: "bg-warning",
      days: [
        {
          name: "Day 1",
          summary: "Arrival in Port Blair – Cellular Jail",
          details: {
            "Morning": "Arrive at Port Blair Airport and transfer to your hotel",
            "Afternoon": "Explore the historic Cellular Jail",
            "Evening": "Enjoy the Light & Sound Show",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 2",
          summary: "Havelock Island – Radhanagar Beach",
          details: {
            "Morning": "Take a ferry to Havelock Island",
            "Afternoon": "Visit the stunning Radhanagar Beach",
            "Evening": "Relax amidst the white sand and blue waters",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 3",
          summary: "Elephant Beach – Snorkeling & Water Sports",
          details: {
            "Morning": "Visit Elephant Beach for adventure activities",
            "Afternoon": "Enjoy snorkeling, glass-bottom boat rides, and jet skiing",
            "Evening": "Return to Havelock",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 4",
          summary: "Neil Island – Natural Bridge & Beaches",
          details: {
            "Morning": "Travel to Neil Island",
            "Afternoon": "Visit Bharatpur Beach and Laxmanpur Beach",
            "Evening": "Explore the iconic Natural Bridge",
            "Night": "Overnight stay in Neil Island"
          }
        },
        {
          name: "Day 5",
          summary: "Return to Port Blair – Shopping & Leisure",
          details: {
            "Morning": "Return to Port Blair",
            "Afternoon": "Explore local markets for souvenirs",
            "Evening": "Enjoy an evening stroll at Corbyn's Cove Beach",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 6",
          summary: "Departure from Andaman",
          details: {
            "Morning": "Breakfast at the hotel",
            "Afternoon": "Check out and transfer to Port Blair Airport",
            "Evening": "Departure with unforgettable memories"
          }
        }
      ],
      includes: [
        "Accommodation with breakfast",
        "Private transfers & ferry tickets",
        "Sightseeing as per itinerary",
        "Light & Sound Show tickets"
      ],
      exclusions: [
        "Airfare & personal expenses",
        "Water sports & additional activities",
        "Meals other than breakfast"
      ]
    },
    {
      title: "6 Days 7 Nights",
      icon: "fas fa-spa",
      badge: "Luxury",
      description: "Experience the ultimate Andaman adventure with this comprehensive package. Explore Port Blair, Havelock, and Neil Island with premium activities and comfortable stays.",
      bgClass: "bg-info",
      days: [
        {
          name: "Day 1",
          summary: "Arrival in Port Blair – Cellular Jail & Light Show",
          details: {
            "Morning": "Arrive at Port Blair Airport and transfer to your hotel",
            "Afternoon": "Visit the historic Cellular Jail",
            "Evening": "Witness the Light & Sound Show",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 2",
          summary: "Havelock Island – Radhanagar Beach",
          details: {
            "Morning": "Take a ferry to Havelock Island",
            "Afternoon": "Visit the breathtaking Radhanagar Beach",
            "Evening": "Relax on the soft white sands",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 3",
          summary: "Elephant Beach – Snorkeling & Water Sports",
          details: {
            "Morning": "Visit Elephant Beach for thrilling activities",
            "Afternoon": "Enjoy snorkeling, jet skiing, and glass-bottom boat rides",
            "Evening": "Return to Havelock",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 4",
          summary: "Kalapathar Beach – Leisure Time",
          details: {
            "Morning": "Spend a peaceful morning at Kalapathar Beach",
            "Afternoon": "Enjoy leisure time exploring Havelock",
            "Evening": "Return to the hotel",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 5",
          summary: "Neil Island – Natural Bridge & Beaches",
          details: {
            "Morning": "Travel to Neil Island",
            "Afternoon": "Visit Bharatpur Beach and Laxmanpur Beach",
            "Evening": "Explore the iconic Natural Bridge",
            "Night": "Overnight stay in Neil Island"
          }
        },
        {
          name: "Day 6",
          summary: "Return to Port Blair – Shopping & Sightseeing",
          details: {
            "Morning": "Return to Port Blair",
            "Afternoon": "Explore local markets for souvenirs",
            "Evening": "Visit Corbyn's Cove Beach",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 7",
          summary: "Departure from Andaman",
          details: {
            "Morning": "Breakfast at the hotel",
            "Afternoon": "Check out and transfer to Port Blair Airport",
            "Evening": "Departure with unforgettable memories"
          }
        }
      ],
      includes: [
        "Luxury accommodation with breakfast",
        "Private transfers & ferry tickets",
        "Sightseeing as per itinerary",
        "Light & Sound Show tickets",
        "Welcome drink on arrival"
      ],
      exclusions: [
        "Airfare & personal expenses",
        "Water sports & additional activities",
        "Meals other than breakfast",
        "Any other services not mentioned in includes"
      ]
    },
    {
      title: "7 Days 8 Nights",
      icon: "fas fa-route",
      badge: "Adventure",
      description: "Experience the complete Andaman adventure with this premium package. Explore Port Blair, Havelock, Neil Island, and Ross Island with a perfect blend of adventure, history, and natural beauty.",
      bgClass: "bg-dark",
      days: [
        {
          name: "Day 1",
          summary: "Arrival in Port Blair – Cellular Jail & Light Show",
          details: {
            "Morning": "Arrive at Port Blair Airport and transfer to your hotel",
            "Afternoon": "Visit the historic Cellular Jail",
            "Evening": "Enjoy the Light & Sound Show",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 2",
          summary: "Havelock Island – Radhanagar Beach",
          details: {
            "Morning": "Take a ferry to Havelock Island",
            "Afternoon": "Visit the picturesque Radhanagar Beach",
            "Evening": "Enjoy the scenic beauty and unwind",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 3",
          summary: "Elephant Beach – Snorkeling & Water Sports",
          details: {
            "Morning": "Visit Elephant Beach for adventure sports",
            "Afternoon": "Enjoy snorkeling, jet skiing, and glass-bottom boat rides",
            "Evening": "Return to Havelock",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 4",
          summary: "Kalapathar Beach – Leisure & Exploration",
          details: {
            "Morning": "Spend a serene morning at Kalapathar Beach",
            "Afternoon": "Enjoy free time to explore local attractions",
            "Evening": "Relax by the beach",
            "Night": "Overnight stay in Havelock"
          }
        },
        {
          name: "Day 5",
          summary: "Neil Island – Natural Bridge & Beaches",
          details: {
            "Morning": "Travel to Neil Island",
            "Afternoon": "Visit Bharatpur Beach and Laxmanpur Beach",
            "Evening": "Explore the famous Natural Bridge",
            "Night": "Overnight stay in Neil Island"
          }
        },
        {
          name: "Day 6",
          summary: "Ross Island – Historical Excursion",
          details: {
            "Morning": "Head to Ross Island",
            "Afternoon": "Explore fascinating ruins and wildlife",
            "Evening": "Return to Port Blair",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 7",
          summary: "Chidiya Tapu – Sunset Point",
          details: {
            "Morning": "Visit Chidiya Tapu",
            "Afternoon": "Enjoy birdwatching and nature exploration",
            "Evening": "Witness stunning sunset view",
            "Night": "Overnight stay in Port Blair"
          }
        },
        {
          name: "Day 8",
          summary: "Departure from Andaman",
          details: {
            "Morning": "Breakfast at the hotel",
            "Afternoon": "Check out and transfer to Port Blair Airport",
            "Evening": "Departure with unforgettable memories"
          }
        }
      ],
      includes: [
        "Premium accommodation with breakfast",
        "Private transfers & ferry tickets",
        "Sightseeing as per itinerary",
        "Light & Sound Show tickets",
        "Welcome drink on arrival",
        "All entry fees to monuments"
      ],
      exclusions: [
        "Airfare & personal expenses",
        "Water sports & additional activities",
        "Meals other than breakfast",
        "Any other services not mentioned in includes"
      ]
    },
   
  ];

  // State for particles
  const [particles, setParticles] = useState([]);

  // Particle effect
  useEffect(() => {
    const createParticle = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const newParticle = {
        id,
        left: Math.random() * window.innerWidth,
        animationDuration: Math.random() * 3 + 3 // 3-6 seconds
      };
      
      setParticles(prev => [...prev, newParticle]);
      
      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, newParticle.animationDuration * 1000);
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <style jsx>{`
        :root {
          --primary-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          --secondary-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          --success-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          --warning-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          --info-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          --dark-gradient: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .app-container {
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                      url('https://i.pinimg.com/736x/d6/76/76/d676766f119c08fbe3353b3ff421e722.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .app-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 49%, rgba(255, 128, 9, 0.05) 50%, transparent 51%),
                      linear-gradient(-45deg, transparent 49%, rgba(255, 140, 66, 0.05) 50%, transparent 51%),
                      radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 140, 66, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 60% 40%, rgba(255, 165, 0, 0.08) 0%, transparent 50%);
          background-size: 60px 60px, 60px 60px, 800px 800px, 600px 600px, 1000px 1000px;
          animation: backgroundShift 20s ease-in-out infinite;
          pointer-events: none;
          z-index: -2;
        }

        .hero-section {
          width: 100vw;
          height: 98vh;
          min-height: 400px;
          margin: 0;
          padding: 0;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                      url('https://i.pinimg.com/736x/1a/bd/fc/1abdfc0cb2cd7470a0cf82ec958b3bed.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          backdrop-filter: blur(5px);
          text-align: center;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(255, 107, 53, 0.2) 0%,
            rgba(255, 140, 66, 0.2) 50%,
            rgba(255, 165, 0, 0.2) 100%);
          animation: gradientShift 15s ease infinite;
          pointer-events: none;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: white;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
          margin-bottom: 20px;
          animation: fadeInUp 1s ease-out;
          position: relative;
          z-index: 1;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 300;
          animation: fadeInUp 1s ease-out 0.2s both;
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          padding: 0 20px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          padding: 60px 20px;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease both;
          backdrop-filter: blur(10px);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .service-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 25px;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
          font-size: 24px;
          color: white;
          box-shadow: 0 10px 20px rgba(255, 184, 53, 0.3);
          animation: pulse 2s infinite;
          flex-shrink: 0;
          background: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
        }

        .service-description {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.4;
          margin: 0;
        }

        .service-badge {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          margin-left: 12px;
          box-shadow: 0 2px 8px rgba(255, 184, 53, 0.2);
        }

        .main-dropdown-btn {
          width: 100%;
          background: linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%);
          color: white;
          border: none;
          border-radius: 15px;
          padding: 15px 20px;
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(255, 140, 66, 0.3);
        }

        .main-dropdown-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 140, 66, 0.4);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 10px 20px rgba(255, 184, 53, 0.3);
          }
          50% {
            box-shadow: 0 15px 30px rgba(255, 184, 53, 0.5);
          }
          100% {
            box-shadow: 0 10px 20px rgba(255, 184, 53, 0.3);
          }
        }

        @keyframes backgroundShift {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(20px) translateY(-20px);
          }
          50% {
            transform: translateX(-20px) translateY(20px);
          }
          75% {
            transform: translateX(20px) translateY(20px);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 50vh;
            min-height: 350px;
          }
          
          .hero-title {
            font-size: 2.5rem;
            letter-spacing: 1px;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            padding: 0 30px;
          }
          
          .service-card {
            padding: 20px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 40px 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="app-container">
        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle particle-animate"
            style={{
              left: `${particle.left}px`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}

        {/* Hero Section - Full Width */}
        <div className="hero-section">
          <h1 className="hero-title">Premium Service Categories</h1>
          <p className="hero-subtitle">Discover Our Exclusive Travel, Event & Hospitality Services</p>
        </div>

        {/* Main Content */}
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();
  
  const handleViewMore = () => {
    navigate(`/service/${index}`, { 
      state: { 
        serviceData: {
          ...service,
          index: index
        }
      } 
    });
  };
  
  return (
    <div className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="service-header">
        <div className={`service-icon ${service.bgClass}`}> <i className={service.icon}></i> </div>
        <div className="service-title-container" id='detailscroll'>
          <h3 className="service-title">
            {service.title}
            <span className="service-badge">
              <i className="fas fa-star"></i>
              {service.badge}
            </span>
          </h3>
          <p className="service-description">{service.description}</p>
        </div>
      </div>
      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <button
          className="main-dropdown-btn"
          style={{ 
            width: 'auto', 
            minWidth: 160, 
            padding: '12px 32px', 
            fontWeight: 600, 
            fontSize: '1rem',
            cursor: 'pointer'
          }}
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default PremiumServiceCategories;