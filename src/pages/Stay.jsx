import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Heart, Award, Shield, Phone, Percent } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Stay() {
  const [selectedActivity, setSelectedActivity] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [likedActivities, setLikedActivities] = useState(new Set());
  const navigate = useNavigate();

  const accommodations = [
    {
      id: 1,
      name: 'Scuba Diving',
      rating: 4.8,
      price: '₹3,500',
      duration: '3-4 hours',
      groupSize: '2-6 people',
      difficulty: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/37530/divers-scuba-divers-diving-underwater-37530.jpeg',
      description: 'Explore the vibrant underwater world of Andaman with certified instructors. Perfect for beginners and experienced divers.',
      highlights: ['PADI Certified', 'Equipment Included', 'Underwater Photography'],
      category: 'underwater',
      featured: true
    },
    {
      id: 2,
      name: 'Sea Walking',
      price: '₹4,500',
      rating: 4.9,
      duration: '30-45 minutes',
      groupSize: '1-4 people',
      difficulty: 'All Ages',
      image: 'https://images.pexels.com/photos/2645245/pexels-photo-2645245.jpeg',
      description: 'Walk on the ocean floor and breathe naturally underwater with our state-of-the-art sea walking helmets.',
      highlights: ['No Swimming Required', 'Safe for All Ages', 'Crystal Clear Visibility'],
      category: 'underwater',
      featured: true
    },
    {
      id: 3,
      name: 'Semi Submarine',
      rating: 4.6,
      price: '₹2,000',
      duration: '1 hour',
      groupSize: '20-30 people',
      difficulty: 'All Ages',
      image: 'https://images.pexels.com/photos/12302978/pexels-photo-12302978.jpeg',
      description: 'Experience underwater life without getting wet in our glass-bottom semi-submarine with panoramic views.',
      highlights: ['Dry Experience', 'Coral Reef Views', 'Marine Life Spotting'],
      category: 'sightseeing',
      featured: false
    },
    {
      id: 4,
      name: 'Kayaking',
      rating: 4.7,
      price: '₹1,200',
      duration: '2-3 hours',
      groupSize: '1-2 people',
      difficulty: 'Easy to Moderate',
      image: 'https://images.pexels.com/photos/2749500/pexels-photo-2749500.jpeg',
      description: 'Paddle through crystal clear waters and explore hidden lagoons and mangrove forests at your own pace.',
      highlights: ['Mangrove Exploration', 'Bird Watching', 'Peaceful Experience'],
      category: 'adventure',
      featured: false
    },
    {
      id: 5,
      name: 'Banana Boat Rides',
      rating: 4.7,
      price: '₹800',
      duration: '15-20 minutes',
      groupSize: '6-8 people',
      difficulty: 'Easy',
      image: 'https://images.pexels.com/photos/749061/pexels-photo-749061.jpeg',
      description: 'Enjoy a thrilling ride on our inflatable banana boat, perfect for families and groups seeking fun.',
      highlights: ['Group Activity', 'Family Friendly', 'Thrilling Ride'],
      category: 'adventure',
      featured: false
    },
    {
      id: 6,
      name: 'Jet Skiing',
      rating: 4.7,
      price: '₹2,500',
      duration: '30 minutes',
      groupSize: '1-2 people',
      difficulty: 'Moderate',
      image: 'https://images.pexels.com/photos/33046/jet-ski-water-sport-water-bike-water.jpg',
      description: 'Feel the adrenaline rush as you speed across the azure waters on high-performance jet skis.',
      highlights: ['High Speed Thrills', 'Professional Guidance', 'Safety Equipment'],
      category: 'adventure',
      featured: true
    },
    {
      id: 7,
      name: 'Parasailing',
      rating: 4.7,
      price: '₹3,000',
      duration: '15-20 minutes',
      groupSize: '1-2 people',
      difficulty: 'Easy',
      image: 'https://images.pexels.com/photos/8413807/pexels-photo-8413807.jpeg',
      description: 'Soar high above the beautiful Andaman coastline and enjoy breathtaking aerial views of the islands.',
      highlights: ['Aerial Views', 'Safe Harness System', 'Photography Included'],
      category: 'adventure',
      featured: true
    },
    {
      id: 8,
      name: 'Sea Kart',
      rating: 4.7,
      price: '₹4,000',
      duration: '45 minutes',
      groupSize: '1-2 people',
      difficulty: 'Moderate',
      image: 'https://th.bing.com/th/id/OIP.iQHG9TI6JSvHFCHipQglAAHaHa?rs=1&pid=ImgDetMain',
      description: 'Drive your own mini speedboat and explore the coastline with complete freedom and control.',
      highlights: ['Self-Drive Experience', 'Coastal Exploration', 'Unique Adventure'],
      category: 'adventure',
      featured: false
    }
  ];

  const featuredActivities = accommodations.filter(a => a.featured).slice(0, 3);

  const handleBookNow = (activity) => {
    setSelectedActivity(activity.id - 1);
  };

  const toggleLike = (id) => {
    const newLiked = new Set(likedActivities);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedActivities(newLiked);
  };

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', padding: '0' }}>
      <style>
        {`
          body, .container, .main-content, .sidebar, .featured-card {
            color: #444;
            font-weight: 300;
          }
          .hero-section {
            position: relative;
            height: 55vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: url('https://images.pexels.com/photos/12302978/pexels-photo-12302978.jpeg') center/cover no-repeat;
            z-index: 1;
          }
          .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: white;
            max-width: 800px;
            padding: 0 20px;
          }
          .hero-content h1 {
            font-size: 4rem;
            font-weight: 300;
            color: white;
            margin-bottom: 20px;
            text-shadow: 0 4px 8px rgba(0,0,0,0.3);
          }
          .hero-content p {
            font-size: 1.3rem;
            opacity: 0.9;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            font-weight: 300;
            color: #444;
          }
          .featured-section {
            margin-top: 70px;
            margin-bottom: 60px;
            position: relative;
            z-index: 4;
          }
          .featured-title {
            text-align: center;
            color: white;
            font-size: 2.2rem;
            font-weight: 300;
            margin-bottom: 18px;
            text-shadow: 0 2px 8px rgba(0,0,0,0.2);
          }
          .featured-row {
            display: flex;
            gap: 40px;
            justify-content: center;
            flex-wrap: nowrap;
            padding: 0 20px;
            min-height: 420px;
          }
          .featured-card {
            background: rgba(255,255,255,0.97);
            border-radius: 22px;
            box-shadow: 0 8px 32px rgba(102,126,234,0.10);
            overflow: hidden;
            width: 420px;
            min-width: 340px;
            max-width: 420px;
            margin-bottom: 0;
            position: relative;
            transition: transform 0.2s, box-shadow 0.2s;
            display: flex;
            flex-direction: column;
            min-height: 420px;
          }
          .featured-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 16px 40px rgba(102,126,234,0.18);
          }
          .featured-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            color: white;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 2;
            display: flex;
            align-items: center;
          }
          .featured-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
          }
          .featured-content {
            padding: 22px 22px 18px 22px;
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
          }
          .featured-title-card {
            font-size: 1.3rem;
            font-weight: 400;
            color: #222;
            margin-bottom: 8px;
          }
          .featured-meta {
            display: flex;
            gap: 18px;
            margin-bottom: 10px;
          }
          .featured-meta-item {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #555;
            font-size: 0.95rem;
            font-weight: 300;
          }
          .featured-rating {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 10px;
            font-weight: 300;
          }
          .featured-star {
            color: #ffd700;
            font-size: 1rem;
          }
          .featured-desc {
            color: #555;
            font-size: 1rem;
            margin-bottom: 14px;
            font-weight: 300;
          }
          .featured-highlights {
            margin-bottom: 14px;
          }
          .featured-highlight-tag {
            display: inline-block;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 3px 10px;
            border-radius: 13px;
            font-size: 0.8rem;
            margin: 2px 4px 2px 0;
            font-weight: 300;
          }
          .featured-btn {
            background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
            color: #4a3fa2;
            border: none;
            padding: 12px 0;
            border-radius: 18px;
            font-weight: 400;
            font-size: 1.08rem;
            width: 100%;
            transition: all 0.3s;
            cursor: pointer;
            margin-top: auto;
            box-shadow: 0 2px 8px rgba(102,126,234,0.07);
          }
          .featured-btn:hover {
            background: linear-gradient(90deg, #cfdef3 0%, #e0eafc 100%);
            color: #222;
          }
          .sidebar {
            background: rgba(255,255,255,0.95);
            border-radius: 20px;
            padding: 30px 0;
            min-width: 400px;
            max-width: 400px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.07);
            height: auto;
            min-height: 100%;
            overflow-y: auto;
          }
          .sidebar-title {
            font-size: 1.2rem;
            color: #764ba2;
            font-weight: 400;
            margin-left: 30px;
            margin-bottom: 20px;
          }
          .sidebar-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .sidebar-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 12px 30px;
            border-left: 4px solid transparent;
            cursor: pointer;
            transition: background 0.2s, border 0.2s;
          }
          .sidebar-item.selected {
            background: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%);
            border-left: 4px solid #764ba2;
          }
          .sidebar-img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #764ba2;
          }
          .sidebar-label {
            font-size: 1rem;
            color: #2d3748;
            font-weight: 300;
          }
          .main-content {
            background: rgba(255,255,255,0.98);
            border-radius: 25px;
            padding: 40px 40px 30px 40px;
            margin-left: 30px;
            min-height: 500px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.07);
            height: auto;
            min-height: 100%;
          }
          .tabs {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
          }
          .tab-btn {
            background: none;
            border: none;
            font-size: 1.1rem;
            color: #764ba2;
            font-weight: 300;
            padding: 8px 20px;
            border-radius: 20px;
            cursor: pointer;
            transition: background 0.2s, color 0.2s;
          }
          .tab-btn.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .activity-img {
            width: 100%;
            max-height: 320px;
            object-fit: cover;
            border-radius: 18px;
            margin-bottom: 25px;
          }
          .activity-title {
            font-size: 2.2rem;
            font-weight: 300;
            color: #222;
            margin-bottom: 10px;
          }
          .activity-meta {
            display: flex;
            gap: 30px;
            margin-bottom: 18px;
            font-weight: 300;
          }
          .meta-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #555;
            font-size: 1rem;
            font-weight: 300;
          }
          .star-rating {
            display: flex;
            gap: 2px;
          }
          .star {
            color: #ffd700;
            font-size: 1.1rem;
          }
          .rating-text {
            color: #555;
            font-size: 1rem;
            font-weight: 300;
          }
          .difficulty-badge {
            background: linear-gradient(135deg, #4ecdc4, #44a08d);
            color: white;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 0.9rem;
            font-weight: 300;
            margin-bottom: 15px;
            display: inline-block;
          }
          .highlight-tag {
            display: inline-block;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.9rem;
            margin: 2px 4px 2px 0;
            font-weight: 300;
          }
          .main-content .booknow-btn {
            background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
            color: #4a3fa2;
            border: none;
            padding: 14px 0;
            border-radius: 18px;
            font-weight: 400;
            font-size: 1.08rem;
            width: 220px;
            margin: 32px auto 0 auto;
            display: block;
            transition: all 0.3s;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(102,126,234,0.07);
          }
          .main-content .booknow-btn:hover {
            background: linear-gradient(90deg, #cfdef3 0%, #e0eafc 100%);
            color: #222;
          }
          .main-content .activity-description, .main-content .highlight-tag, .main-content .meta-item, .main-content .rating-text {
            font-weight: 300;
          }
          .main-content .activity-description {
            color: #555;
            font-size: 1.1rem;
            margin-top: 20px;
            margin-bottom: 18px;
          }
          .main-content .activity-meta {
            margin-bottom: 18px;
          }
          .main-content .difficulty-badge {
            margin-bottom: 15px;
          }
          @media (max-width: 1200px) {
            .featured-row { gap: 20px; }
            .featured-card { width: 320px; }
          }
          @media (max-width: 900px) {
            .main-flex { flex-direction: column; }
            .main-content { margin-left: 0; margin-top: 30px; }
            .featured-row { flex-wrap: nowrap; overflow-x: auto; min-height: 0; }
            .featured-card { min-width: 260px; max-width: 320px; }
          }
          .main-flex {
            display: flex;
            align-items: stretch;
            justify-content: center;
            min-height: 650px;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Water Activities</h1>
          <p>Experience Thrilling Adventures in the Andaman Sea</p>
        </div>
      </section>

      {/* Featured Activities */}
      <div className="featured-section">
        <div className="featured-title">Featured Adventures</div>
        <div className="featured-row">
          {featuredActivities.map((activity, idx) => (
            <div className="featured-card" key={activity.id}>
              <div className="featured-badge">
                <Award size={14} style={{ marginRight: '5px' }} />
                Featured
              </div>
              <img src={activity.image} alt={activity.name} className="featured-img" />
              <div className="featured-content">
                <div className="featured-title-card">{activity.name}</div>
                <div className="difficulty-badge">{activity.difficulty}</div>
                <div className="featured-meta">
                  <div className="featured-meta-item"><Clock size={15} /> {activity.duration}</div>
                  <div className="featured-meta-item"><Users size={15} /> {activity.groupSize}</div>
                </div>
                <div className="featured-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="featured-star" fill={i < Math.floor(activity.rating) ? '#ffd700' : 'none'} />
                  ))}
                  <span className="rating-text">{activity.rating} / 5</span>
                </div>
                <div className="featured-desc">{activity.description}</div>
                <div className="featured-highlights">
                  {activity.highlights.map((highlight, i) => (
                    <span key={i} className="featured-highlight-tag">{highlight}</span>
                  ))}
                </div>
                <button className="featured-btn" onClick={() => navigate('/booking')}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content: Sidebar + Detail View */}
      <div className="container" style={{ marginTop: 30, paddingBottom: 100 }}>
        <div className="main-flex">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-title">Other Activities</div>
            <ul className="sidebar-list">
              {accommodations.map((activity, idx) => (
                <li
                  key={activity.id}
                  className={`sidebar-item${selectedActivity === idx ? ' selected' : ''}`}
                  onClick={() => { setSelectedActivity(idx); setActiveTab('overview'); }}
                >
                  <img src={activity.image} alt={activity.name} className="sidebar-img" />
                  <span className="sidebar-label">{activity.name}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <section className="main-content" style={{ flex: 1 }}>
            <div className="tabs">
              <button className={`tab-btn${activeTab === 'overview' ? ' active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
              <button className={`tab-btn${activeTab === 'highlights' ? ' active' : ''}`} onClick={() => setActiveTab('highlights')}>Highlights</button>
              <button className={`tab-btn${activeTab === 'details' ? ' active' : ''}`} onClick={() => setActiveTab('details')}>Details</button>
            </div>
            <img src={accommodations[selectedActivity].image} alt={accommodations[selectedActivity].name} className="activity-img" />
            <h2 className="activity-title">{accommodations[selectedActivity].name}</h2>
            <div className="difficulty-badge">{accommodations[selectedActivity].difficulty}</div>
            <div className="activity-meta">
              <div className="meta-item"><Clock size={16} /> {accommodations[selectedActivity].duration}</div>
              <div className="meta-item"><Users size={16} /> {accommodations[selectedActivity].groupSize}</div>
              <div className="meta-item">
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="star" fill={i < Math.floor(accommodations[selectedActivity].rating) ? '#ffd700' : 'none'} />
                  ))}
                </div>
                <span className="rating-text">{accommodations[selectedActivity].rating} / 5</span>
              </div>
            </div>
            {activeTab === 'overview' && (
              <div className="activity-description">{accommodations[selectedActivity].description}</div>
            )}
            {activeTab === 'highlights' && (
              <div style={{ marginTop: 20 }}>
                {accommodations[selectedActivity].highlights.map((highlight, i) => (
                  <span key={i} className="highlight-tag">{highlight}</span>
                ))}
              </div>
            )}
            {activeTab === 'details' && (
              <div style={{ marginTop: 20 }}>
                <div><b>Price:</b> {accommodations[selectedActivity].price}</div>
                <div><b>Difficulty:</b> {accommodations[selectedActivity].difficulty}</div>
                <div><b>Group Size:</b> {accommodations[selectedActivity].groupSize}</div>
                <div><b>Duration:</b> {accommodations[selectedActivity].duration}</div>
              </div>
            )}
            <button className="booknow-btn" onClick={() => navigate('/booking')}>Book Now</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Stay;