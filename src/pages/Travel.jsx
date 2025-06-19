import React from 'react';
import { useNavigate } from 'react-router-dom';

// Modern package data from Details.jsx
const serviceData = [
  {
    title: "2 Days 3 Nights",
    icon: "fas fa-mountain",
    badge: "Popular",
    description: "Perfect for weekend getaways and short trips. Experience the best of your destination in a compact itinerary.",
    bgClass: "bg-primary",
    image: "https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=600",
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
          "Afternoon": " Enjoy some last-minute shopping before transferring to the airport for departure."
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
    image: "https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    image: "https://images.pexels.com/photos/28581876/pexels-photo-28581876/free-photo-of-beautiful-tropical-seascape-with-limestone-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    image: "https://images.pexels.com/photos/10914023/pexels-photo-10914023.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    image: "https://images.pexels.com/photos/16827207/pexels-photo-16827207/free-photo-of-sea-coast-with-island.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    image: "https://images.pexels.com/photos/10794420/pexels-photo-10794420.jpeg?auto=compress&cs=tinysrgb&w=600",
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

function Travel() {
   const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/service/${id}`, { state: { serviceData: serviceData[id] } });
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
        backgroundImage: 'url("https://i.pinimg.com/736x/31/df/6c/31df6c75469e0538348590e80486bda2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        background: 'rgba(0,0,0,0.55)',
        zIndex: 0,
      }} />
      <div style={{position: 'relative', zIndex: 1}}>
        {/* Hero Section */}
        <div className="hero-section" style={{
          background: 'transparent',
          height: '300px',
          marginTop: '100px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{position: 'relative', color: 'white', textAlign: 'center'}}>
            <h1 className="display-3 fw-bold travel-title-animate">Our Travel Packages</h1>
            <p className="lead">Discover Amazing Destinations Around the World</p>
          </div>
        </div>
        {/* Modern Package Cards Section */}
        <div className="container" style={{marginTop: 48, marginBottom: 40}}>
          <div className="row" style={{display: 'flex', flexWrap: 'wrap', gap: '38px 32px', justifyContent: 'center'}}>
            {serviceData.map((card, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4" style={{flex: '1 1 30%', maxWidth: '32%', minWidth: 320, display: 'flex'}}>
                <div className="service-card" style={{background: 'rgba(255,255,255,0.97)', borderRadius: 22, boxShadow: '0 8px 32px 0 rgba(255, 179, 71, 0.18), 0 2px 8px 0 rgba(31, 38, 135, 0.08)', padding: '0 0 28px 0', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', transition: 'box-shadow 0.2s', border: '1.5px solid #ffe0b2', overflow: 'hidden', height: 510, width: '100%'}}>
                  {/* Card Image */}
                  <img src={card.image} alt={card.title} style={{width: '100%', height: 170, objectFit: 'cover', borderTopLeftRadius: 22, borderTopRightRadius: 22}} />
                  <div style={{padding: '28px 22px', width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <div  className={`service-icon ${card.bgClass}`} style={{marginLeft: '90px',fontSize: '2.5rem', color: '#ffa726', marginBottom: 8, width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 20, background: 'linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%)', boxShadow: '0 10px 20px rgba(255, 184, 53, 0.3)'}}>
                      <i  className={card.icon}></i>
                    </div>
                    <h3 className="service-title" style={{marginLeft:'50px', color: '#222', fontWeight: 700, fontSize: '1.4rem', marginBottom: 6, textAlign: 'left'}}>
                      {card.title}
                      <span className="service-badge" style={{marginLeft: 12, fontSize: '1rem', color: '#ff8c42', fontWeight: 600, background: '#fff3e0', borderRadius: 8, padding: '2px 10px', display: 'inline-flex', alignItems: 'center'}}>
                        <i className="fas fa-star" style={{marginRight: 4}}></i>
                        {card.badge}
                      </span>
                    </h3>
                    <p className="service-description" style={{color: '#666', fontSize: '0.60rem', textAlign: 'left', lineHeight: 1.4, minHeight: 60, maxHeight: 82, fontWeight: 300, fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '0.01em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>{card.description}</p>
                    <button
                      className="main-dropdown-btn"
                      style={{width: 'auto', minWidth: 160, padding: '12px 32px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', background: 'linear-gradient(135deg, rgb(255, 184, 53) 0%, #ff8c42 100%)', color: 'white', border: 'none', borderRadius: 15, marginTop: 1, boxShadow: '0 4px 15px rgba(255, 140, 66, 0.3)'}}
                      onClick={() => handleViewDetails(idx)}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            .travel-title-animate {
              opacity: 0;
              transform: translateY(40px);
              animation: fadeUpTitle 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
            }
            @keyframes fadeUpTitle {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @media (max-width: 900px) {
              .hero-section {
                height: 180px !important;
                margin-top: 60px !important;
              }
              .row {
                gap: 24px 0 !important;
              }
              .col-12.col-md-6.col-lg-4 {
                max-width: 48% !important;
                flex-basis: 48% !important;
              }
              .service-card {
                height: 400px !important;
                max-width: 98vw !important;
              }
              .service-card img {
                height: 90px !important;
              }
            }
            @media (max-width: 1400px) {
              div[style*='maxWidth: 1400px'] {
                max-width: 98vw !important;
                gap: 20px !important;
              }
              .col-12.col-md-6.col-lg-4 {
                max-width: 32% !important;
                flex-basis: 32% !important;
              }
            }
            @media (max-width: 600px) {
              div[style*='maxWidth: 1400px'] {
                padding: 0 !important;
                gap: 12px !important;
              }
              .hero-section {
                height: 120px !important;
                margin-top: 30px !important;
              }
              .row {
                gap: 16px 0 !important;
              }
              .col-12.col-md-6.col-lg-4 {
                max-width: 98vw !important;
                flex-basis: 98vw !important;
              }
              .service-card {
                height: 320px !important;
                max-width: 98vw !important;
              }
              .service-card img {
                height: 60px !important;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

export default Travel; 