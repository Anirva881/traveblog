// import React from 'react';

// function Banner4() {
//   return (
//     <div style={{ marginBottom: '90px'}}>
//       {/* Header */}
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           padding: '0px',
//           marginTop: '3px',
//           marginLeft: '400px',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
         
//         }}
//       >
//         <h5
//           style={{
//             fontFamily: 'Itim, cursive',
//             marginLeft: '110px',
//             color: 'orange',
//             fontWeight: 'bold',
//           }}
//         >
//           Testimonials 
//         </h5>
//         <h3 style={{ marginLeft: '1px' }}>THE PEOPLE WHO KNOW BEST</h3>
//       </div>



//       {/* Carousel */}
//       <div
//         id="carouselExampleDark"
//         className="carousel carousel-dark slide"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>

//         <div className="carousel-inner">
//           {/* Slide 1 */}
//           <div className="carousel-item active" data-bs-interval="10000">
//             <div className="text-center">
//               <img
//                 src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/team-4-1.jpg"
//                 className="rounded-circle d-block mx-auto"
//                 style={{
//                   width: '150px',
//                   height: '150px',
//                   objectFit: 'cover',
//                 }}
//                 alt="testimonial"
//               />
//               <div className="mt-4 px-5 text-center" style={{maxWidth: '500px', textAlign: 'center',marginLeft: "330px"}}>
//                 <p className=" fs-6">
//                   Our travel agent was excellent for us and considered our
//                   unique needs and planned our itinerary. I would definitely
//                   work with you again as you made our trip easy and
//                   stress-free. It was a delight to work with UniTravel. Thank
//                   you so much.
//                 </p>
//                 <h5
//                   className="fw-bold mt-3"
//                   style={{ fontSize: '9px' }}
//                 >
//                   JANET ARNOLD
//                 </h5>
//               </div>
//             </div>
//           </div>

//           {/* Slide 2 (same as Slide 1) */}
//           <div className="carousel-item" data-bs-interval="2000">
//             <div className="text-center">
//               <img
//                 src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/team-2-1.jpg"
//                 className="rounded-circle d-block mx-auto"
//                 style={{
//                   width: '150px',
//                   height: '150px',
//                   objectFit: 'cover',
//                 }}
//                 alt="testimonial"
//               />
//               <div className="mt-4 px-5" style={{maxWidth: '500px', textAlign: 'center',marginLeft: "330px"}}>
//                 <p className=" fs-6">
//                  I just returned from the kenya Wildlife Safari trip and I can't stop raving.the trip far exceeded my expectations.Everything from the guides to the accommodations and food was wonderful.Going to Africa was a truly life changing experiecnce
//                 </p>
//                 <h5
//                   className="fw-bold mt-3"
//                   style={{ fontSize: '9px' }}
//                 >
//                   TERI ALLEN
//                 </h5>
//               </div>
//             </div>
//           </div>

//           {/* Slide 3 (same as Slide 1) */}
//           <div className="carousel-item" data-bs-interval="2000">
//             <div className="text-center">
//               <img
//                 src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/testimonials-1.jpg"
//                 className="rounded-circle d-block mx-auto"
//                 style={{
//                   width: '150px',
//                   height: '150px',
//                   objectFit: 'cover',
//                 }}
//                 alt="testimonial"
//               />
//               <div className="mt-4 px-5" style={{maxWidth: '500px', textAlign: 'center',marginLeft: "330px"}}>
//                 <p className="text-muted fs-6">
//                   We have a trip in Cusco and Machu Picchu .From the trip advisory to the local travel guide , all are very professional and dedicate to brint us an enjoyable and unforgettable trip in Peru. Our tour guide is very professional and dedicate to bring us an enjoyable and unforgettable trip in Peru. Our tour guide is very knowledgeable and passionate
//                 </p>
//                 <h5
//                   className="fw-bold mt-3"
//                   style={{ fontSize: '9px' }}
//                 >
//                   LINDA WALKER
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Carousel controls */}
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleDark"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleDark"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Banner4;










// // import React from 'react';
// // import './App.css';

// // function Banner4() {
// //   return (
// //     <section className="testimonial-section py-5">
// //       <div className="container text-center">
// //         <h6 className="text-orange">Testimonials</h6>
// //         <h2 className="mb-5 text-uppercase fw-bold">The People Who Know Best</h2>

// //         <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
// //           <div className="carousel-inner">
// //             <div className="carousel-item active">
// //               <img
// //                 src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/team-4-1.jpg"
// //                 className="rounded-circle mx-auto d-block"
// //                 style={{ width: '150px', height: '150px', objectFit: 'cover' }}
// //                 alt="testimonial"
// //               />
// //               <div className="mt-4 px-5">
// //                 <p className="text-muted fs-5">
// //                   Our travel agent was excellent for us and considered our unique needs and planned our itinerary. I would definitely work with you again as you made our trip easy and stress-free. It was a delight to work with UniTravel. Thank you so much.
// //                 </p>
// //                 <h5 className="fw-bold mt-4">JANET ARNOLD</h5>
// //               </div>
// //             </div>

// //             <div className="carousel-item active">
// //               <img
// //                 src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/team-4-1.jpg"
// //                 className="rounded-circle mx-auto d-block"
// //                 style={{ width: '150px', height: '150px', objectFit: 'cover' }}
// //                 alt="testimonial"
// //               />
// //               <div className="mt-4 px-5">
// //                 <p className="text-muted fs-5">
// //                   Our travel agent was excellent for us and considered our unique needs and planned our itinerary. I would definitely work with you again as you made our trip easy and stress-free. It was a delight to work with UniTravel. Thank you so much.
// //                 </p>
// //                 <h5 className="fw-bold mt-4">JANET ARNOLD</h5>
// //               </div>
// //             </div>

// //             <div className="carousel-item active">
// //               <img
// //                 src="https://unitravel.ancorathemes.com/wp-content/uploads/2016/12/team-4-1.jpg"
// //                 className="rounded-circle mx-auto d-block"
// //                 style={{ width: '150px', height: '150px', objectFit: 'cover' }}
// //                 alt="testimonial"
// //               />
// //               <div className="mt-4 px-5">
// //                 <p className="text-muted fs-5">
// //                   Our travel agent was excellent for us and considered our unique needs and planned our itinerary. I would definitely work with you again as you made our trip easy and stress-free. It was a delight to work with UniTravel. Thank you so much.
// //                 </p>
// //                 <h5 className="fw-bold mt-4">JANET ARNOLD</h5>
// //               </div>
// //             </div>

// //             {/* You can duplicate this .carousel-item block to add more slides */}
// //           </div>

// //           {/* Controls */}
// //           <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
// //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// //             <span className="visually-hidden">Previous</span>
// //           </button>
// //           <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
// //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
// //             <span className="visually-hidden">Next</span>
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Banner4;

