import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Star, Calendar, Users, Camera, Waves, Mountain, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const featuredDestinations = [
  {
    title: 'Port Blair',
    img: 'https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: '20+ Destinations',
    description: 'Port Blair is the capital city of the Andaman and Nicobar Islands, known for its rich history and beautiful beaches.',
    rating: 4.8,
    highlights: ['Cellular Jail', 'Corbyn\'s Cove Beach', 'Ross Island', 'North Bay Island'],
    bestTime: 'October to May',
    activities: ['Scuba Diving', 'Snorkeling', 'Island Hopping', 'Historical Tours']
  },
  {
    title: 'Rangat',
    img: 'https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: '15+ Destinations',
    description: 'Rangat is a peaceful town in Middle Andaman, famous for its mangroves and eco-tourism.',
    rating: 4.5,
    highlights: ['Cuthbert Bay Beach', 'Yerrata Mangrove Creek', 'Amkunj Beach', 'Dhani Nallah Beach'],
    bestTime: 'November to April',
    activities: ['Turtle Watching', 'Mangrove Safari', 'Beach Camping', 'Nature Walks']
  },
  {
    title: 'Diglipur',
    img: 'https://images.pexels.com/photos/28581876/pexels-photo-28581876/free-photo-of-beautiful-tropical-seascape-with-limestone-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: '25+ Destinations',
    description: 'Diglipur is the largest town in North Andaman, home to beautiful beaches and the highest peak in the islands.',
    rating: 4.7,
    highlights: ['Ross & Smith Islands', 'Saddle Peak', 'Kalipur Beach', 'Mud Volcanoes'],
    bestTime: 'December to March',
    activities: ['Trekking', 'Beach Hopping', 'Photography', 'Wildlife Spotting']
  },
  {
    title: 'Havelock Island',
    img: 'https://images.pexels.com/photos/10914023/pexels-photo-10914023.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: '25+ Destinations',
    description: 'Havelock Island is a popular destination for its white sandy beaches and crystal-clear waters.',
    rating: 4.9,
    highlights: ['Radhanagar Beach', 'Elephant Beach', 'Kalapathar Beach', 'Neil\'s Cove'],
    bestTime: 'October to May',
    activities: ['Scuba Diving', 'Parasailing', 'Kayaking', 'Sunset Viewing']
  },
  {
    title: 'Neil Island',
    img: 'https://images.pexels.com/photos/16827207/pexels-photo-16827207/free-photo-of-sea-coast-with-island.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: '25+ Destinations',
    description: 'Neil Island is known for its laid-back vibe and beautiful coral reefs.',
    rating: 4.6,
    highlights: ['Bharatpur Beach', 'Laxmanpur Beach', 'Sitapur Beach', 'Natural Bridge'],
    bestTime: 'November to April',
    activities: ['Snorkeling', 'Cycling', 'Coral Viewing', 'Beach Relaxation']
  },
  {
    title: 'Baratang Island',
    img: 'https://images.pexels.com/photos/10794420/pexels-photo-10794420.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: '25+ Destinations',
    description: 'Baratang Island is famous for its limestone caves and mud volcanoes.',
    rating: 4.4,
    highlights: ['Limestone Caves', 'Mud Volcanoes', 'Parrot Island', 'Mangrove Creek'],
    bestTime: 'October to March',
    activities: ['Cave Exploration', 'Boat Safari', 'Bird Watching', 'Adventure Tours']
  }
];

const DestinationDetails = () => {
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  
  const destination = featuredDestinations[selectedDestination];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleBack = () => {
    navigate('/destination');
  };

  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <div className="min-vh-100 position-relative overflow-hidden">
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      {/* Custom Styles */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('${destination.img}') center/cover;
          opacity: 0.3;
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
        }
        
        .destination-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .destination-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .fade-in-delay {
          animation-delay: 0.3s;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-gradient:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }
        
        .rating-stars {
          color: #ffc107;
        }
        
        .highlight-card {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border: 1px solid rgba(102, 126, 234, 0.2);
          transition: all 0.3s ease;
        }
        
        .highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.15);
        }
        
        .tab-button {
          background: transparent;
          border: 2px solid rgba(102, 126, 234, 0.3);
          color: #667eea;
          transition: all 0.3s ease;
        }
        
        .tab-button.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
        }
        
        .destination-selector {
          max-height: 400px;
          overflow-y: auto;
        }
        
        .destination-option {
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .destination-option:hover,
        .destination-option.active {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.1);
        }
        
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .floating-icon {
          position: absolute;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .wave-animation {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
          clip-path: polygon(0 20px, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
      
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <Waves className="floating-icon" style={{top: '10%', left: '10%', fontSize: '3rem'}} />
        <Mountain className="floating-icon" style={{top: '20%', right: '15%', fontSize: '2.5rem', animationDelay: '2s'}} />
        <Compass className="floating-icon" style={{bottom: '30%', left: '5%', fontSize: '2rem', animationDelay: '4s'}} />
        <Camera className="floating-icon" style={{top: '60%', right: '10%', fontSize: '2.5rem', animationDelay: '1s'}} />
      </div>
      
      {/* Hero Section */}
      <div className="hero-section py-5">
        <div className="container hero-content">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={`fade-in ${isLoaded ? '' : 'opacity-0'}`}> 
                <h1 className="display-3 fw-bold text-white mb-3">
                  Discover {destination.title}
                </h1>
                <p className="lead text-white-50 mb-4 fs-4">
                  {destination.description}
                </p>
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <div className="rating-stars me-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={24} 
                        fill={i < Math.floor(destination.rating) ? '#ffc107' : 'none'}
                        className="me-1"
                      />
                    ))}
                  </div>
                  <span className="text-white fs-5 fw-bold">{destination.rating}</span>
                  <span className="text-white-50 ms-2">({destination.text})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-animation"></div>
      </div>
      
      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Destination Selector */}
          <div className="col-lg-3 mb-4">
            <div className="destination-card rounded-4 p-4 h-100">
              <h5 className="gradient-text fw-bold mb-3">
                <MapPin className="me-2" size={20} />
                Other Destinations
              </h5>
              <div className="destination-selector">
                {featuredDestinations.map((dest, index) => (
                  <div
                    key={index}
                    className={`destination-option rounded-3 p-3 mb-2 ${index === selectedDestination ? 'active' : ''}`}
                    onClick={() => setSelectedDestination(index)}
                  >
                    <div className="d-flex align-items-center">
                      <img 
                        src={dest.img} 
                        alt={dest.title}
                        className="rounded-circle me-3"
                        style={{width: '50px', height: '50px', objectFit: 'cover'}}
                      />
                      <div>
                        <h6 className="mb-1 fw-semibold">{dest.title}</h6>
                        <small className="text-muted">{dest.text}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="col-lg-9">
            <div className="destination-card rounded-4 p-4 mb-4">
              {/* Tab Navigation */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {['overview', 'highlights', 'activities'].map((tab) => (
                  <button
                    key={tab}
                    className={`tab-button btn rounded-pill px-4 py-2 ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="fade-in">
                  <div className="row">
                    <div className="col-md-6">
                      <img 
                        src={destination.img} 
                        alt={destination.title}
                        className="img-fluid rounded-4 mb-4 w-100"
                        style={{height: '300px', objectFit: 'cover'}}
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="gradient-text fw-bold mb-3">{destination.title}</h3>
                      <p className="text-muted mb-4">{destination.description}</p>
                      
                      <div className="row g-3">
                        <div className="col-6">
                          <div className="highlight-card rounded-3 p-3 text-center">
                            <Calendar className="text-primary mb-2" size={24} />
                            <h6 className="fw-semibold mb-1">Best Time</h6>
                            <small className="text-muted">{destination.bestTime}</small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="highlight-card rounded-3 p-3 text-center">
                            <Users className="text-primary mb-2" size={24} />
                            <h6 className="fw-semibold mb-1">Rating</h6>
                            <small className="text-muted">{destination.rating}/5.0</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'highlights' && (
                <div className="fade-in">
                  <h4 className="gradient-text fw-bold mb-4">Must-Visit Highlights</h4>
                  <div className="row g-3">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="col-md-6">
                        <div className="highlight-card rounded-3 p-4">
                          <MapPin className="text-primary mb-2" size={20} />
                          <h6 className="fw-semibold">{highlight}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'activities' && (
                <div className="fade-in">
                  <h4 className="gradient-text fw-bold mb-4">Popular Activities</h4>
                  <div className="row g-3">
                    {destination.activities.map((activity, index) => (
                      <div key={index} className="col-md-6">
                        <div className="highlight-card rounded-3 p-4">
                          <Compass className="text-primary mb-2" size={20} />
                          <h6 className="fw-semibold">{activity}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Booking Section */}
            <div className="destination-card rounded-4 p-4 text-center">
              <h4 className="gradient-text fw-bold mb-3">Ready for Your Adventure?</h4>
              <p className="text-muted mb-4">Book your trip to {destination.title} and create unforgettable memories</p>
              <button 
                className="btn btn-gradient btn-lg rounded-pill px-5 py-3 text-white fw-semibold"
                onClick={handleBookNow}
              >
                Book Your Trip Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Destinations Button at the bottom */}
      <div className="container py-4 text-center">
        <button 
          onClick={handleBack}
          className="btn btn-light btn-lg rounded-pill px-4"
        >
          <ArrowLeft className="me-2" size={20} />
          Back to Destinations
        </button>
      </div>
    </div>
  );
};

export default DestinationDetails;