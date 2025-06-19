import React, { useState, useEffect } from 'react';
import { Plus, Save, X, MapPin, Calendar, Trash2, Heart, Star, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Destination() {
  const [isCreating, setIsCreating] = useState(false);
  const [itineraries, setItineraries] = useState([]);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [likedDestinations, setLikedDestinations] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState('all');

  const [newItinerary, setNewItinerary] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: ''
  });

  const navigate = useNavigate();

  const createItinerary = () => {
    if (
      newItinerary.title &&
      newItinerary.destination &&
      newItinerary.startDate &&
      newItinerary.endDate
    ) {
      const itinerary = {
        id: Date.now(),
        ...newItinerary,
        days: [
          {
            id: 1,
            date: newItinerary.startDate,
            activities: []
          }
        ]
      };
      setItineraries([...itineraries, itinerary]);
      setNewItinerary({ title: '', destination: '', startDate: '', endDate: '' });
      setIsCreating(false);
    }
  };

  const deleteItinerary = (id) => {
    setItineraries(itineraries.filter((it) => it.id !== id));
  };

  const toggleLike = (index) => {
    const newLiked = new Set(likedDestinations);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedDestinations(newLiked);
  };

  const featuredDestinations = [
    {
      title: 'Port Blair',
      img: 'https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '20+ Destinations',
      description: 'Port Blair is the capital city of the Andaman and Nicobar Islands, known for its rich history and beautiful beaches.',
      rating: 4.8,
      category: 'city',
      highlights: ['Cellular Jail', 'Corbyn\'s Cove Beach', 'Anthropological Museum']
    },
    {
      title: 'Rangat',
      img: 'https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '15+ Destinations',
      description: 'Rangat is a peaceful town in Middle Andaman, famous for its mangroves and eco-tourism.',
      rating: 4.5,
      category: 'nature',
      highlights: ['Mangrove Creek', 'Eco Parks', 'Bird Watching']
    },
    {
      title: 'Diglipur',
      img: 'https://images.pexels.com/photos/28581876/pexels-photo-28581876/free-photo-of-beautiful-tropical-seascape-with-limestone-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '25+ Destinations',
      description: 'Diglipur is the largest town in North Andaman, home to beautiful beaches and the highest peak in the islands.',
      rating: 4.7,
      category: 'adventure',
      highlights: ['Ross & Smith Island', 'Turtle Nesting', 'Saddle Peak']
    },
    {
      title: 'Havelock Island',
      img: 'https://images.pexels.com/photos/10914023/pexels-photo-10914023.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '25+ Destinations',
      description: 'Havelock Island is a popular destination for its white sandy beaches and crystal-clear waters.',
      rating: 4.9,
      category: 'beach',
      highlights: ['Radhanagar Beach', 'Elephant Beach', 'Scuba Diving']
    },
    {
      title: 'Neil Island',
      img: 'https://images.pexels.com/photos/16827207/pexels-photo-16827207/free-photo-of-sea-coast-with-island.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '25+ Destinations',
      description: 'Neil Island is known for its laid-back vibe and beautiful coral reefs.',
      rating: 4.6,
      category: 'beach',
      highlights: ['Bharatpur Beach', 'Coral Reefs', 'Snorkeling']
    },
    {
      title: 'Baratang Island',
      img: 'https://images.pexels.com/photos/10794420/pexels-photo-10794420.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: '25+ Destinations',
      description: 'Baratang Island is famous for its limestone caves and mud volcanoes.',
      rating: 4.4,
      category: 'adventure',
      highlights: ['Limestone Caves', 'Mud Volcano', 'Mangrove Safari']
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Crystal Clear Waters',
      location: 'Havelock Island'
    },
    {
      src: 'https://images.pexels.com/photos/10914023/pexels-photo-10914023.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Pristine Beach',
      location: 'Radhanagar Beach'
    },
    {
      src: 'https://images.pexels.com/photos/28581876/pexels-photo-28581876/free-photo-of-beautiful-tropical-seascape-with-limestone-cliffs.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Limestone Cliffs',
      location: 'Diglipur'
    },
    {
      src: 'https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Colorful Boats',
      location: 'Port Blair'
    },
    {
      src: 'https://images.pexels.com/photos/16827207/pexels-photo-16827207/free-photo-of-sea-coast-with-island.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coastal Paradise',
      location: 'Neil Island'
    },
    {
      src: 'https://images.pexels.com/photos/10794420/pexels-photo-10794420.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tropical Landscape',
      location: 'Baratang'
    },
    {
      src: 'https://images.pexels.com/photos/10794387/pexels-photo-10794387.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sunset Views',
      location: 'Andaman Sea'
    },
    {
      src: 'https://images.pexels.com/photos/7970769/pexels-photo-7970769.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Island Paradise',
      location: 'Andaman Islands'
    }
  ];

  const filteredDestinations = activeFilter === 'all' 
    ? featuredDestinations 
    : featuredDestinations.filter(dest => dest.category === activeFilter);

  const filterCategories = [
    { id: 'all', label: 'All Destinations', icon: '🏝️' },
    { id: 'beach', label: 'Beaches', icon: '🏖️' },
    { id: 'city', label: 'Cities', icon: '🏙️' },
    { id: 'nature', label: 'Nature', icon: '🌿' },
    { id: 'adventure', label: 'Adventure', icon: '⛰️' }
  ];

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      <style>
        {`
          .modern-destinations {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
          }

          .hero-section {
            position: relative;
            background: none;
            overflow: hidden;
          }

          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            background-size: cover;
            background-position: center;
            opacity: 1;
            z-index: 1;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            animation: heroSlideUp 1s ease-out;
          }

          @keyframes heroSlideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .floating-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
          }

          .particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }

          .filter-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border-radius: 25px;
            padding: 20px;
            margin: 40px 0;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .filter-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            padding: 12px 24px;
            border-radius: 20px;
            margin: 5px;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            backdrop-filter: blur(10px);
            cursor: pointer;
          }

          .filter-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }

          .filter-btn.active {
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            border-color: transparent;
            transform: scale(1.05);
          }

          .destination-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 25px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 1px solid rgba(255, 255, 255, 0.3);
            position: relative;
            cursor: pointer;
            height: 100%;
          }

          .destination-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, transparent 0%, rgba(102, 126, 234, 0.1) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
          }

          .destination-card:hover::before {
            opacity: 1;
          }

          .destination-card:hover {
            transform: translateY(-15px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          }

          .card-image-container {
            position: relative;
            overflow: hidden;
            height: 250px;
          }

          .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.4s ease;
          }

          .destination-card:hover .card-image {
            transform: scale(1.1);
          }

          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .destination-card:hover .image-overlay {
            opacity: 1;
          }

          .like-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 2;
            cursor: pointer;
          }

          .like-btn:hover {
            background: white;
            transform: scale(1.1);
          }

          .like-btn.liked {
            background: #ff6b6b;
            color: white;
          }

          .card-content {
            padding: 25px;
            position: relative;
            z-index: 2;
          }

          .destination-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 10px;
            line-height: 1.2;
          }

          .destination-subtitle {
            color: #667eea;
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .destination-description {
            color: #4a5568;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 20px;
          }

          .rating-container {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 15px;
          }

          .star-rating {
            display: flex;
            gap: 2px;
          }

          .star {
            color: #ffd700;
            font-size: 1rem;
          }

          .rating-text {
            color: #4a5568;
            font-size: 0.9rem;
            font-weight: 500;
          }

          .highlights {
            margin-bottom: 20px;
          }

          .highlight-tag {
            display: inline-block;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.8rem;
            margin: 2px 4px 2px 0;
            font-weight: 500;
          }

          .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
          }

          .explore-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 20px;
            font-weight: 600;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .explore-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
          }

          .gallery-section {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 80px 0;
            margin-top: 60px;
          }

          .gallery-title {
            text-align: center;
            margin-bottom: 50px;
          }

          .gallery-title h2 {
            font-size: 3rem;
            font-weight: 300;
            color: #2d3748;
            margin-bottom: 15px;
          }

          .gallery-title p {
            font-size: 1.2rem;
            color: #4a5568;
          }

          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            aspect-ratio: 4/3;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .gallery-item:nth-child(1) { animation: slideInLeft 0.6s ease-out 0.1s both; }
          .gallery-item:nth-child(2) { animation: slideInUp 0.6s ease-out 0.2s both; }
          .gallery-item:nth-child(3) { animation: slideInRight 0.6s ease-out 0.3s both; }
          .gallery-item:nth-child(4) { animation: slideInLeft 0.6s ease-out 0.4s both; }
          .gallery-item:nth-child(5) { animation: slideInUp 0.6s ease-out 0.5s both; }
          .gallery-item:nth-child(6) { animation: slideInRight 0.6s ease-out 0.6s both; }
          .gallery-item:nth-child(7) { animation: slideInLeft 0.6s ease-out 0.7s both; }
          .gallery-item:nth-child(8) { animation: slideInUp 0.6s ease-out 0.8s both; }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .gallery-item:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          .gallery-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .gallery-item:hover .gallery-image {
            transform: scale(1.1);
          }

          .gallery-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
            color: white;
            padding: 20px;
            transform: translateY(100%);
            transition: transform 0.3s ease;
          }

          .gallery-item:hover .gallery-overlay {
            transform: translateY(0);
          }

          .gallery-overlay h4 {
            margin: 0 0 5px 0;
            font-size: 1.1rem;
            font-weight: 600;
          }

          .gallery-overlay p {
            margin: 0;
            font-size: 0.9rem;
            opacity: 0.9;
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .modal-content {
            max-width: 90vw;
            max-height: 90vh;
            position: relative;
            animation: zoomIn 0.3s ease;
          }

          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .modal-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 15px;
          }

          .modal-close {
            position: absolute;
            top: -40px;
            right: 0;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: white;
            font-size: 24px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .modal-close:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            .gallery-grid {
              grid-template-columns: 1fr;
              gap: 15px;
            }
            
            .gallery-title h2 {
              font-size: 2rem;
            }
            
            .destination-card {
              margin-bottom: 20px;
            }
          }
        `}
      </style>

      <div className="modern-destinations">
        {/* Hero Section */}
        <div className="hero-section" style={{
          height: '55vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div className="floating-particles">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 4}px`,
                  height: `${Math.random() * 6 + 4}px`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${Math.random() * 4 + 4}s`
                }}
              />
            ))}
          </div>
          
          <div className="hero-content" style={{
            textAlign: 'center',
            color: 'white',
            maxWidth: '800px',
            padding: '0 20px'
          }}>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: '300',
              marginBottom: '20px',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}>
              Discover Destinations
            </h1>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '0',
              opacity: '0.9',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Explore the World's Most Beautiful Places in Andaman
            </p>
          </div>
        </div>

        <div className="container">
          {/* Filter Section */}
          <div className="filter-container">
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: '20px', fontWeight: '300' }}>
                Filter Destinations
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {filterCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    <span style={{ marginRight: '8px' }}>{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Destinations */}
          <div style={{ padding: '40px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '300', 
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                Featured Destinations
              </h2>
            </div>

            <div className="row">
              {filteredDestinations.map((dest, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="destination-card">
                    <div className="card-image-container">
                      <img
                        src={dest.img}
                        alt={dest.title}
                        className="card-image"
                      />
                      <div className="image-overlay"></div>
                      <button
                        className={`like-btn ${likedDestinations.has(index) ? 'liked' : ''}`}
                        onClick={() => toggleLike(index)}
                      >
                        <Heart 
                          size={20} 
                          fill={likedDestinations.has(index) ? 'white' : 'none'}
                        />
                      </button>
                    </div>
                    
                    <div className="card-content">
                      <h3 className="destination-title">{dest.title}</h3>
                      
                      <div className="destination-subtitle">
                        <MapPin size={16} />
                        {dest.text}
                      </div>
                      
                      <div className="rating-container">
                        <div className="star-rating">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="star"
                              fill={i < Math.floor(dest.rating) ? '#ffd700' : 'none'}
                            />
                          ))}
                        </div>
                        <span className="rating-text">{dest.rating} / 5</span>
                      </div>
                      
                      <p className="destination-description">
                        {dest.description}
                      </p>
                      
                      <div className="highlights">
                        {dest.highlights.map((highlight, i) => (
                          <span key={i} className="highlight-tag">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="card-footer">
                        <button className="explore-btn" onClick={() => navigate('/booking')}>
                          Book Now
                        </button>
                        <Camera size={20} color="#667eea" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-section">
          <div className="gallery-title">
            <h2>Visual Journey</h2>
            <p>Immerse yourself in the beauty of Andaman Islands</p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setSelectedGalleryImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <h4>{image.title}</h4>
                  <p>
                    <MapPin size={14} />
                    {image.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedGalleryImage && (
          <div 
            className="modal-overlay"
            onClick={() => setSelectedGalleryImage(null)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedGalleryImage(null)}
              >
                <X size={20} />
              </button>
              <img
                src={selectedGalleryImage.src}
                alt={selectedGalleryImage.title}
                className="modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Destination;