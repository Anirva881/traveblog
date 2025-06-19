// import React, { useState } from 'react'

// function Banner6() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="position-relative" style={{background: '#f8f8f8', padding: '100px 0'}}>
//      <div className="container">
//       <div className="row align-items-center">
//         <div className="col-md-5">
//           <div className="content-box" style={{paddingRight: '40px'}}>
//             <h6 style={{
//               color: '#ff9f1c',
//               fontSize: '18px',
//               fontWeight: '600',
//               textTransform: 'uppercase',
//               marginBottom: '15px',
//               fontFamily: 'Itim, cursive',

//             }}>Machu Picchu</h6>
            
//             <h2 style={{
//               fontSize: '30px',
//               fontWeight: '700',
//               marginBottom: '25px',
//               color: '#2a2a2a'
//             }}>LIMA TO AYACUCHO</h2>
            
//             <p style={{
//               fontSize: '14px',
//               lineHeight: '1.7',
//               color: '#666',
//               marginBottom: '30px',
//               fontWeight: '300'
//             }}>This trip offers a fascinating combination of the region's archaeological and cultural treasures. Retrace the steps of the Inca on a four-day trek along the Inca Trail to Machu Picchu.
// One of the world's best-known hikes.</p>

//            <div style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "8px",
//           marginBottom: "30px",
//           fontSize: "13px"
//         }}>
//           <div className="detail-row" style={{
//             display: "flex",
//             gap: "10px",
//             alignItems: "center"
//           }}>
//             <span style={{ color: "#4b5563", width: "150px" }}>TRAVEL STYLE:</span>
//             <span style={{ color: "#f97316", fontWeight: "500" }}>ACTIVE</span>
//           </div>
          
//           <div className="detail-row" style={{
//             display: "flex",
//             gap: "10px",
//             alignItems: "center"
//           }}>
//             <span style={{ color: "#4b5563", width: "150px" }}>SERVICE LEVEL:</span>
//             <span style={{ color: "#f97316", fontWeight: "500" }}>STANDARD</span>
//           </div>
          
//           <div className="detail-row" style={{
//             display: "flex",
//             gap: "10px",
//             alignItems: "center"
//           }}>
//             <span style={{ color: "#4b5563", width: "120px" }}>TRIP TYPE:</span>
//             <span style={{ color: "#f97316", fontWeight: "500" ,marginLeft: "29px"}}>SMALL GROUP</span>
//           </div>
//         </div>

//             <button 
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//               style={{
//                 background: isHovered ? '#e6880f' : '#ff9f1c',
//                 color: 'white',
//                 border: 'none',
//                 padding: '15px 35px',
//                 borderRadius: '30px',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 textTransform: 'uppercase',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 boxShadow: isHovered 
//                   ? '0 6px 20px rgba(255, 159, 28, 0.4)' 
//                   : '0 2px 10px rgba(255, 159, 28, 0.2)',
//                 transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
//               }}
//             >
//               Book Your Travel
//             </button>
//           </div>
//         </div>

//         <div className="col-md-7 position-relative">
//           <div style={{position: 'relative', width: '100%', height: '500px', overflow: 'hidden'}}>
//             <img 
//               src="https://images.pexels.com/photos/414122/pexels-photo-414122.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="Machu Picchu"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 borderRadius: '10px'
//               }}
//             />
            
//             <div className="price-badge position-absolute" style={{
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               background: '#ff9f1c',
//               width: '180px',
//               height: '180px',
//               borderRadius: '50%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: 'white',
//               zIndex: 2,
//               boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
//             }}>
//               <h2 style={{
//                 fontSize: '48px',
//                 fontWeight: '700',
//                 margin: '0',
//                 lineHeight: '1'
//               }}>$1500</h2>
//               <p style={{
//                 margin: '5px 0 0',
//                 fontSize: '16px',
//                 opacity: '0.9'
//               }}>9 DAYS</p>
//             </div>

//             <div className="map-overlay position-absolute" style={{
//               top: '-100px',
//               right: '-100px',
//               width: '1000px',
//               height: '1000px',
//               zIndex: 1
//             }}>
//               <img 
//                 src="https://images.pexels.com/photos/5370916/pexels-photo-5370916.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Peru Map"
//                 style={{
//                   width: '2000px',
//                   height: '1000px',
//                   objectFit: 'contain'
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//      </div>
//     </div>
//   )
// }

// export default Banner6