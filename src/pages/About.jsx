import React, { useState, useEffect } from 'react';

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Carousel images
  const images = [
    "https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/28581876/pexels-photo-28581876/free-photo-of-beautiful-tropical-seascape-with-limestone-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  // Andaman testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Our Andaman trip was absolutely magical! The crystal clear waters of Radhanagar Beach and the underwater coral garden at Havelock Island were beyond imagination. The team arranged everything perfectly - from comfortable stays to exciting water sports. My family and I created memories that will last a lifetime!",
      rating: 5,
      experience: "Family Trip - 7 Days"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "As a solo traveler, I was initially nervous about visiting Andaman, but this tour company made everything seamless. The scuba diving at Neil Island was incredible - I saw colorful fish and coral reefs up close! The local seafood and the sunset at Corbyn's Cove Beach were unforgettable highlights.",
      rating: 5,
      experience: "Solo Adventure - 5 Days"
    },
    {
      name: "Sneha & Arjun Patel",
      location: "Ahmedabad, Gujarat",
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Perfect honeymoon destination! The romantic beach walks at sunset, candlelight dinner by the shore, and the peaceful boat rides through the mangroves created the most romantic atmosphere. Port Blair's Cellular Jail gave us a glimpse of history too. Highly recommend for couples!",
      rating: 5,
      experience: "Honeymoon - 6 Days"
    },
    {
      name: "Dr. Anita Menon",
      location: "Kochi, Kerala",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "The biodiversity of Andaman is remarkable! As a nature enthusiast, I was thrilled to see the endemic species and pristine beaches. The glass boat ride showed us amazing marine life without getting wet. The guides were knowledgeable about local ecology and conservation efforts.",
      rating: 5,
      experience: "Nature Exploration - 8 Days"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Adventure lover's paradise! The jet skiing, parasailing, and deep-sea fishing exceeded all expectations. The limestone caves at Baratang and the mud volcano were unique experiences. Great organization, professional water sports instructors, and safety was never compromised.",
      rating: 5,
      experience: "Adventure Sports - 4 Days"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Carousel functions
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="modern-about">
      <style>
        {`
          .modern-about {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
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
            background: url("https://images.pexels.com/photos/11434418/pexels-photo-11434418.jpeg");
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

          .breadcrumb {
            background: rgba(255, 255, 255, 0.1);
            ackdrop-filter: blur(10px);
            border-radius: 25px;
            padding: 8px 20px;
            margin-top: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            width : 80%;
            margin-left:20px
          }

          .breadcrumb a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
                        margin-left:10px

          }

          .breadcrumb a:hover {
            color: #ffd700;
          }

          .about-content {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-radius: 30px;
            padding: 60px 40px;
            margin: 60px 0;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
          }

          .about-content::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }

          .explore-title {
            background: linear-gradient(135deg, #ff9a9e 0%,rgb(255, 172, 229) 50%,rgb(233, 177, 215) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 15px;
            animation: titleGlow 2s ease-in-out infinite alternate;
          }

          @keyframes titleGlow {
            from { filter: brightness(1); }
            to { filter: brightness(1.2); }
          }

          .main-title {
            color: #2d3748;
            font-weight: 700;
            font-size: 2.2rem;
            margin-bottom: 25px;
            position: relative;
          }

          .main-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 150px;
            height: 4px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            border-radius: 2px;
            animation: lineExpand 1s ease-out 0.5s both;
          }

          @keyframes lineExpand {
            from { width: 0; }
            to { width: 80px; }
          }

          .description-text {
            color: #4a5568;
            font-size: 1.1rem;
            line-height: 1.8;
            font-weight: 400;
            margin-bottom: 30px;
            animation: fadeInUp 1s ease-out 0.3s both;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .carousel-container {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            background: white;
            padding: 10px;
          }

          .carousel-container:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 35px 70px rgba(0, 0, 0, 0.2);
          }

          .carousel-nav-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
            border: none !important;
            width: 50px;
            height: 50px;
            border-radius: 50% !important;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            backdrop-filter: blur(10px);
          }

          .carousel-container:hover .carousel-nav-button {
            opacity: 1;
          }

          .carousel-nav-button:hover {
            transform: scale(1.15);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
          }

          .carousel-indicator {
            transition: all 0.3s ease;
            border-radius: 10px;
            overflow: hidden;
          }

          .carousel-indicator:hover {
            transform: scale(1.2);
          }

          .carousel-image {
            transition: all 0.5s ease;
            border-radius: 15px;
          }

          .carousel-image:hover {
            transform: scale(1.03);
          }

          .marquee-container {
            overflow: hidden;
            padding: 60px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: relative;
          }

          .marquee-container::before, .marquee-container::after {
            content: '';
            position: absolute;
            top: 0;
            width: 100px;
            height: 100%;
            z-index: 2;
          }

          .marquee-container::before {
            left: 0;
            background: linear-gradient(to right, #667eea, transparent);
          }

          .marquee-container::after {
            right: 0;
            background: linear-gradient(to left, #764ba2, transparent);
          }

          .marquee-track {
            display: flex;
            animation: marquee 25s linear infinite;
            gap: 20px;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .marquee-track img {
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 15px;
            transition: all 0.3s ease;
            filter: brightness(0.8);
          }

          .marquee-track img:hover {
            transform: scale(1.05);
            filter: brightness(1);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          }

          .testimonials-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 80px 0;
            position: relative;
            overflow: hidden;
          }

          .testimonials-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            animation: backgroundMove 20s linear infinite;
          }

          @keyframes backgroundMove {
            0% { transform: translateX(0) translateY(0); }
            100% { transform: translateX(60px) translateY(60px); }
          }

          .testimonials-title {
            color: white;
            text-align: center;
            margin-bottom: 50px;
            position: relative;
            z-index: 2;
          }

          .testimonials-title h2 {
            font-size: 3rem;
            font-weight: 300;
            margin-bottom: 10px;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }

          .testimonials-title p {
            font-size: 1.2rem;
            opacity: 0.9;
          }

          .testimonial-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 25px;
            padding: 40px;
            margin: 0 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .testimonial-card::before {
            content: '"';
            position: absolute;
            top: -20px;
            left: 20px;
            font-size: 120px;
            color: rgba(102, 126, 234, 0.1);
            font-family: serif;
            line-height: 1;
          }

          .testimonial-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          }

          .testimonial-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
          }

          .testimonial-avatar {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 20px;
            border: 4px solid #667eea;
            transition: all 0.3s ease;
          }

          .testimonial-card:hover .testimonial-avatar {
            transform: scale(1.1);
            border-color: #764ba2;
          }

          .testimonial-info h4 {
            color: #2d3748;
            font-weight: 600;
            margin-bottom: 5px;
            font-size: 1.1rem;
          }

          .testimonial-location {
            color: #667eea;
            font-size: 0.9rem;
            font-weight: 500;
          }

          .testimonial-text {
            color: #4a5568;
            font-size: 1rem;
            line-height: 1.7;
            margin-bottom: 25px;
            font-style: italic;
          }

          .testimonial-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
          }

          .rating {
            display: flex;
            gap: 5px;
          }

          .star {
            color: #ffd700;
            font-size: 1.2rem;
          }

          .experience-tag {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
          }

          .testimonial-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-top: 40px;
            position: relative;
            z-index: 2;
          }

          .testimonial-nav-button {
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .testimonial-nav-button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
          }

          .testimonial-indicators {
            display: flex;
            gap: 10px;
          }

          .testimonial-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .testimonial-dot.active {
            background: white;
            transform: scale(1.2);
          }

          .testimonial-dot:hover {
            background: rgba(255, 255, 255, 0.7);
          }

          .stats-section {
            background: white;
            padding: 60px 0;
            text-align: center;
          }

          .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
          }

          .stat-item {
            padding: 30px 20px;
            border-radius: 15px;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .stat-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          }

          .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: #667eea;
            margin-bottom: 10px;
          }

          .stat-label {
            color: #4a5568;
            font-weight: 500;
            font-size: 1.1rem;
          }

          @media (max-width: 768px) {
            .explore-title {
              font-size: 2rem;
            }
            
            .main-title {
              font-size: 1.8rem;
            }
            
            .about-content {
              padding: 40px 20px;
              margin: 30px 0;
            }
            
            .testimonial-card {
              margin: 0 10px;
              padding: 30px 20px;
            }
            
            .testimonials-title h2 {
              font-size: 2rem;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="hero-section" style={{
        height: '95vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div className="hero-content" style={{
          textAlign: 'center',
          color: 'white',
          maxWidth: '600px',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '300',
            marginBottom: '20px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}>
            ABOUT US
          </h1>
          <div className="breadcrumb">
            <a href="/" style={{ marginRight: '10px' }}>HOME</a>
            <span style={{ margin: '0 10px', opacity: '0.7' }}>/</span>
            <span>ABOUT US</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* About Content */}
        <div className="about-content">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h2 className="explore-title">
                Explore with Us
              </h2>
              <h3 className="main-title">
                Discover the World, One Journey at a Time
              </h3>
              <p className="description-text">
                Embark on a journey of discovery with us. From pristine beaches to cultural landmarks,
                we bring you closer to the world's most captivating destinations. Our expertly curated
                packages ensure an unforgettable travel experience tailored to your dreams. With over
                a decade of experience, we've helped thousands of travelers create memories that last
                a lifetime in the stunning Andaman Islands.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <div className="carousel-container" style={{ position: 'relative' }}>
                {/* Navigation indicators */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 10
                }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`carousel-indicator ${currentSlide === index ? 'bg-white' : 'bg-white opacity-50'}`}
                        style={{
                          width: '40px',
                          height: '4px',
                          border: 'none',
                          cursor: 'pointer',
                          borderRadius: '2px'
                        }}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Images */}
                <div style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <div style={{
                    display: 'flex',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: 'transform 0.5s ease-in-out'
                  }}>
                    {images.map((src, index) => (
                      <div key={index} style={{ flexShrink: 0, width: '100%' }}>
                        <img
                          style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover'
                          }}
                          src={src}
                          className="carousel-image"
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation buttons */}
                <button
                  className="carousel-nav-button"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '15px',
                    transform: 'translateY(-50%)'
                  }}
                  onClick={prevSlide}
                >
                  <span style={{ color: 'white', fontSize: '24px' }}>‹</span>
                </button>

                <button
                  className="carousel-nav-button"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '15px',
                    transform: 'translateY(-50%)'
                  }}
                  onClick={nextSlide}
                >
                  <span style={{ color: 'white', fontSize: '24px' }}>›</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Travelers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Destinations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          <img src="https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Andaman Beach" />
          <img src="https://images.pexels.com/photos/28581876/pexels-photo-28581876/free-photo-of-beautiful-tropical-seascape-with-limestone-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Limestone Cliffs" />
          <img src="https://images.pexels.com/photos/10914023/pexels-photo-10914023.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Crystal Waters" />
          <img src="https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Port Blair" />
          <img src="https://images.pexels.com/photos/10794420/pexels-photo-10794420.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tropical Paradise" />
          <img src="https://images.pexels.com/photos/10794387/pexels-photo-10794387.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Island Life" />
          <img src="https://images.pexels.com/photos/7970769/pexels-photo-7970769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sunset Beach" />
          <img src="https://images.pexels.com/photos/16827207/pexels-photo-16827207/free-photo-of-sea-coast-with-island.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Coastal Beauty" />
          {/* Duplicate for seamless loop */}
          <img src="https://images.pexels.com/photos/7970786/pexels-photo-7970786.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Andaman Beach" />
          <img src="https://images.pexels.com/photos/28581876/pexels-photo-28581876/free-photo-of-beautiful-tropical-seascape-with-limestone-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Limestone Cliffs" />
          <img src="https://images.pexels.com/photos/10914023/pexels-photo-10914023.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Crystal Waters" />
          <img src="https://images.pexels.com/photos/30188165/pexels-photo-30188165/free-photo-of-colorful-boat-on-crystal-clear-waters-in-port-blair.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Port Blair" />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="container">
          <div className="testimonials-title">
            <h2>What Our Travelers Say</h2>
            <p>Real experiences from real people who discovered Andaman with us</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <div className="testimonial-location">
                    📍 {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
              
              <div className="testimonial-text">
                {testimonials[currentTestimonial].text}
              </div>
              
              <div className="testimonial-footer">
                <div className="rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <div className="experience-tag">
                  {testimonials[currentTestimonial].experience}
                </div>
              </div>
            </div>

            <div className="testimonial-nav">
              <button 
                className="testimonial-nav-button"
                onClick={prevTestimonial}
              >
                ‹
              </button>
              
              <div className="testimonial-indicators">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`testimonial-dot ${currentTestimonial === index ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                  ></div>
                ))}
              </div>
              
              <button 
                className="testimonial-nav-button"
                onClick={nextTestimonial}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;