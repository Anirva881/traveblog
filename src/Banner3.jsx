import React, { useState, useEffect } from 'react';

function Banner3() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "40px auto",
      padding: "20px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "30px",
      alignItems: "start",
      position: "relative"
    }}>
      {/* Left Image Stack */}
      <div style={{
        flex: "1.5",
        position: "relative",
        height: isMobile ? "400px" : "600px",
        marginBottom: isMobile ? "40px" : "0"
      }}>
        {/* Bottom Image */}
        <div style={{
          position: "absolute",
          top: isMobile ? "60px" : "90px",
          left: isMobile ? "0px" : "-100px",
          width: "100%",
          height: isMobile ? "300px" : "450px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          zIndex: 1,
          marginLeft: "1px"
        }}>
          <img 
            src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1740&q=80"
            alt="Peru Landscape"
            style={{
              width: "120%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Top Image */}
        <div style={{
          position: "absolute",
          top: 0,
          left: isMobile ? "0px" : "70px",
          width: isMobile ? "100%" : "550px",
          height: isMobile ? "250px" : "450px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          zIndex: 2,
          width:'87%'
        }}>
          <img 
            src="https://i.pinimg.com/736x/79/ee/95/79ee952da56758c83d1e7b1e85e12916.jpg" 
            alt="Machu Picchu"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />

          {/* Price Circle */}
          {!isMobile && (
            <div style={{
              position: "absolute",
              top: "40px",
              right: "10px",
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              backgroundColor: "#f97316",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
              zIndex: 4,
            }}>
              <div style={{
                fontSize: "42px",
                fontWeight: "bold"
              }}>6 Day</div>
              <div style={{
                fontSize: "16px",
                marginTop: "5px"
              }}>7 NIGHT</div>
            </div>
          )}
        </div>
      </div>

      {/* Right Content */}
      <div style={{
        flex: "1",
        padding: "20px 0",
        position: "relative",
        zIndex: 1
      }}>
        <h3 style={{
          color: "#f97316",
          fontSize: "22px",
          fontFamily: 'Itim, cursive',
          marginBottom: "10px",
          textAlign: isMobile ? "center" : "left"
        }}>CELLULAR JAIL</h3>
        
        <h2 style={{
          fontSize: isMobile ? "24px" : "32px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#1f2937",
          textAlign: isMobile ? "center" : "left"
        }}>PORT BLAIR TO DIGLIPUR</h2>
        
        <p style={{
          color: "#4b5563",
          fontSize: "14px",
          lineHeight: "1.6",
          marginBottom: "30px",
          fontWeight: "300",
          textAlign: isMobile ? "center" : "left"
        }}>
          Perfect for travelers eager to uncover the region's rich archaeological and cultural heritage in just a few days, this adventure features an unforgettable four-day trek along the legendary Inca Trail.
        </p>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "30px",
          fontSize: "13px"
        }}>
          {[
            { label: "TRAVEL STYLE:", value: "ACTIVE" },
            { label: "SERVICE LEVEL:", value: "STANDARD" },
            { label: "TRIP TYPE:", value: "SMALL GROUP" }
          ].map(({ label, value }, idx) => (
            <div key={idx} style={{
              display: "flex",
              justifyContent: isMobile ? "center" : "start",
              gap: "10px",
              alignItems: "center"
            }}>
              <span style={{ color: "#4b5563", width: "150px", textAlign: isMobile ? "right" : "left" }}>{label}</span>
              <span style={{ color: "#f97316", fontWeight: "500" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Book Button */}
        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: isHovered ? "#ea580c" : "#f97316",
              color: "white",
              border: "none",
              padding: "15px 40px",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: isHovered 
                ? "0 6px 20px rgba(249, 115, 22, 0.4)" 
                : "0 4px 12px rgba(249, 115, 22, 0.2)",
              transform: isHovered ? "translateY(-2px)" : "translateY(0)"
            }}
          >
            BOOK YOUR TRAVEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner3;



















// import React from 'react'
































// import './App.css'
// //import mapImage from "./assets./map.jpg";

// function Banner3() {
//   return (
//     <div id='banner3'>
//                 <img src="https://images.pexels.com/photos/8828329/pexels-photo-8828329.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width: "600px",height:"600px", padding: "20px" ,marginTop:"130px"}} alt="" />

//       <div className="row">
//         <div className="col">
//             <img src="https://images.pexels.com/photos/8828329/pexels-photo-8828329.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//             <h1>fghj</h1>
//         </div>
//         <div className="col"></div>
    
//       </div>
//     </div>
//   )
// }













































// import React from 'react';

// function TravelPackageCard() {
//   return (
//     <>
//       <style jsx>{`
//         .hero-section {
//           position: relative;
//           height: 500px;
//           background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
//                       url('https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
//           background-size: cover;
//           background-position: center;
//           background-attachment: fixed;
//         }
        
//         .map-section {
//           position: absolute;
//           left: 0;
//           top: 0;
//           width: 200px;
//           height: 100%;
//           background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6));
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           color: #f97316;
//         }
        
//         .peru-text {
//           writing-mode: vertical-rl;
//           text-orientation: mixed;
//           font-size: 64px;
//           font-weight: bold;
//           letter-spacing: 10px;
//           opacity: 0.9;
//         }
        
//         .map-lines {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           opacity: 0.3;
//         }
        
//         .main-image {
//           position: absolute;
//           right: 10px;
//           top: 50px;
//           width: 400px;
//           height: 300px;
//           background: url('https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
//           background-size: cover;
//           background-position: center;
//           border-radius: 10px;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.3);
//         }
        
//         .price-circle {
//           position: absolute;
//           right: 50px;
//           top: 200px;
//           width: 180px;
//           height: 180px;
//           background: linear-gradient(135deg, #f97316, #fb923c);
//           border-radius: 50%;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           color: white;
//           box-shadow: 0 20px 40px rgba(249, 115, 22, 0.4);
//           z-index: 10;
//         }
        
//         .price-text {
//           font-size: 42px;
//           font-weight: bold;
//           margin-bottom: 5px;
//         }
        
//         .days-text {
//           font-size: 14px;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//         }
        
//         .content-section {
//           background: white;
//           padding: 60px 0;
//         }
        
//         .package-title {
//           color: #f97316;
//           font-size: 28px;
//           font-weight: 300;
//           font-style: italic;
//           margin-bottom: 15px;
//         }
        
//         .main-title {
//           color: #2d3748;
//           font-size: 54px;
//           font-weight: bold;
//           text-transform: uppercase;
//           margin-bottom: 30px;
//           line-height: 1.1;
//         }
        
//         .description {
//           color: #718096;
//           font-size: 18px;
//           line-height: 1.7;
//           margin-bottom: 40px;
//           max-width: 600px;
//         }
        
//         .details-row {
//           display: flex;
//           gap: 60px;
//           margin-bottom: 40px;
//           flex-wrap: wrap;
//         }
        
//         .detail-item {
//           display: flex;
//           flex-direction: column;
//         }
        
//         .detail-label {
//           color: #4a5568;
//           font-size: 14px;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           margin-bottom: 8px;
//         }
        
//         .detail-value {
//           color: #f97316;
//           font-size: 18px;
//           font-weight: bold;
//           text-transform: uppercase;
//         }
        
//         .book-button {
//           background: linear-gradient(135deg, #f97316, #fb923c);
//           color: white;
//           border: none;
//           padding: 18px 45px;
//           font-size: 16px;
//           font-weight: bold;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           border-radius: 50px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
//         }
        
//         .book-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 12px 30px rgba(249, 115, 22, 0.4);
//         }
        
//         @media (max-width: 768px) {
//           .hero-section {
//             height: 400px;
//           }
          
//           .map-section {
//             width: 120px;
//           }
          
//           .peru-text {
//             font-size: 36px;
//             letter-spacing: 6px;
//           }
          
//           .main-image {
//             right: 20px;
//             top: 30px;
//             width: 280px;
//             height: 200px;
//           }
          
//           .price-circle {
//             right: 10px;
//             top: 150px;
//             width: 140px;
//             height: 140px;
//           }
          
//           .price-text {
//             font-size: 32px;
//           }
          
//           .main-title {
//             font-size: 36px;
//           }
          
//           .details-row {
//             flex-direction: column;
//             gap: 20px;
//           }
//         }
//       `}</style>

//       <div>
//         {/* Hero Section with Background Image */}
//         <div className="hero-section">
//           {/* Map Section on Left */}
//           <div className="map-section">
//             <div className="peru-text">PERU</div>
//             <svg className="map-lines" viewBox="0 0 200 500">
//               <path d="M20 100 Q 50 80, 80 100 L 120 140 Q 150 120, 170 150 L 180 200 Q 160 220, 130 210 L 90 190 Q 60 170, 40 140 Z" 
//                     fill="none" stroke="#f97316" strokeWidth="2" opacity="0.6"/>
//               <circle cx="70" cy="120" r="4" fill="#f97316"/>
//               <circle cx="140" cy="170" r="4" fill="#f97316"/>
//               <text x="80" y="130" fill="#f97316" fontSize="12" fontFamily="Arial">Lima</text>
//               <text x="150" y="180" fill="#f97316" fontSize="12" fontFamily="Arial">Cusco</text>
//             </svg>
//           </div>
          
//           {/* Main Image on Top of Background */}
//           <div className="main-image"></div>
          
//           {/* Price Circle on Top of Main Image */}
//           <div className="price-circle">
//             <div className="price-text">$1500</div>
//             <div className="days-text">9 Days</div>
//           </div>
//         </div>
        
//         {/* Content Section */}
//         <div className="content-section">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8">
//                 <h3 className="package-title">Machu Picchu</h3>
//                 <h1 className="main-title">Lima to Cusco</h1>
                
//                 <p className="description">
//                   Perfect for those looking to experience the region's archaeological and cultural 
//                   treasures in a short amount of time, this adventure includes a four-day trek 
//                   along the Inca Trail.
//                 </p>
                
//                 <div className="details-row">
//                   <div className="detail-item">
//                     <span className="detail-label">Travel Style:</span>
//                     <span className="detail-value">Active</span>
//                   </div>
//                   <div className="detail-item">
//                     <span className="detail-label">Service Level:</span>
//                     <span className="detail-value">Standard</span>
//                   </div>
//                   <div className="detail-item">
//                     <span className="detail-label">Trip Type:</span>
//                     <span className="detail-value">Small Group</span>
//                   </div>
//                 </div>
                
//                 <button className="book-button">
//                   Book Your Travel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

//export default Banner3;