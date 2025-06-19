import React, { useState } from "react";
import "./App.css";

function Banner5() {
  const days = [
    "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8",
  ];
  const [selectedDay, setSelectedDay] = useState("Day 1");
  const [activeIndex, setActiveIndex] = useState(0);

  const itineraryData = {
    "Day 1": {
      image: "https://th.bing.com/th/id/OSK.HEROUSNawIGlOLb0so4SzWbVmbGuL3Hoet47EM5zw-I-kTk?w=312&h=200&c=15&rs=2&o=6&dpr=1.5&pid=SANGAM",
      text:
        "Neil Island is a small island in the southern part of the Andaman archipelago, located between Havelock Island and Port Blair. Known for its laid-back charm.",
    },
    "Day 2": {
      image: "https://media.gettyimages.com/id/968845558/photo/cellular-jail-port-blair-andaman-islands.jpg?b=1&s=612x612&w=0&k=20&c=AHvL2fj8VjyQ9tG8Vr2pE8TUZ8JzH-Snx6j1779XgvQ=",
      text:
            "Port Blair is the capital and largest city of the Andaman and Nicobar Islands. With a growing population and rich cultural blend, Port Blair serves as the main gateway."    },
    "Day 3": {
      image: "https://www.andamanislands.com/uploads/andamanislands/blog/main/616d3d9cecec3188_10-2.png",
      text:
            "Mayabunder is a small town in the northern part of Middle Andaman, located near tranquil creeks and mangrove-lined shores. It is the largest settlement in that region."    },
    "Day 4": {
      image: "https://th.bing.com/th/id/OIP.p6u0cHL6XuEUzNhnYs04AQHaEK?rs=1&pid=ImgDetMain",
      text:
        "it is the capital and largest city of the Arequipa Region.Arequipa is the second most industrialized and commercialized city in peru",
    },
    "Day 5": {
      image: "https://cdn.britannica.com/04/242304-050-6B22FC09/Cellular-Jail-India-.jpg",
      text:
          "The Cellular Jail is a colonial-era prison built in the early 20th century, located in Port Blair. It stands as the most iconic symbol of India’s freedom struggle ."    },
    "Day 6": {
      image: "https://th.bing.com/th/id/OIP.UAv4w_Y8GqSJZmIlwHl51AHaFL?rs=1&pid=ImgDetMain",
      text:
        "Mancora is a town and beach resort in the Piura Region,in northwestern Peru,It is known for its turquoise beaches and good waves.",
    },
    "Day 7": {
      image: "https://th.bing.com/th/id/OIP.PBDTOMpNcdQNPSx-G4ZvYwHaFb?rs=1&pid=ImgDetMain",
      text:
            "Havelock Island, now known as Swaraj Dweep, is a popular island and beach destination in the Andaman Islands. Located northeast of Port Blair, it is famous for its turquoise."
              },
    "Day 8": {
      image: "https://th.bing.com/th/id/OIP.LcgD_dLiduudkcE6nFgPPwHaE7?rs=1&pid=ImgDetMain",
      text:
      "Diglipur is the main commercial and administrative center of North Andaman. Surrounded by natural beauty, it is one of the most important destinations for eco-tourism and adventure."    },
  };

  // Update selected day and active dot index on click
  const handleDayClick = (day, index) => {
    setSelectedDay(day);
    setActiveIndex(index);
  };

  return (
    <div
      className="banner text-white"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/10671403/pexels-photo-10671403.jpeg)`,
        height: "1000px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        paddingLeft: "80px",
        paddingRight: "20px",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1500px", color: "white", marginLeft: "300px", marginTop: "100px" }}>
        <h1 className="display-3 fw-bold">PERFECT YOUR DREAM</h1>
        <h1 className="display-3 fw-bold">VACATION</h1>
        <p className="lead mt-4" style={{ color: "white", width: "660px" }}>
          This is one of the world's best-known hikes and will reward those willing to break a sweat with a stunning combination of mountainscapes, cloud forests,
          and jungles.
        </p>

        {/* Day buttons */}
        <div className="container text-center p-5" style={{display: 'flex', flexDirection: 'column'}}>
         

          {/* Itinerary card */}
          <div style={{marginRight: "500px",marginBottom: "1px",marginTop: "10px"}}>
          <div className="card shadow-lg" style={{ width: "200px", height: "300px" }}>
            <img
              src={itineraryData[selectedDay].image}
              className="card-img-top"
              alt={selectedDay}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body" style={{ backgroundColor: "white", color: "#333", padding: "20px" }}>
              <p className="card-text" style={{ fontSize: "13px",fontWeight: "300", margin: 0 }}>{itineraryData[selectedDay].text}</p>
            </div>
          </div>
          </div>

          {/* Timeline dots and lines */}
          <div className="timeline-container mt-5">
            <div className="line-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center",marginTop: "15px" }}>
              {days.map((day, index) => (
                <React.Fragment key={day}>
                  <div
                    className={`dot ${activeIndex === index ? "active" : ""}`}
                    onClick={() => handleDayClick(day, index)}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: activeIndex === index ? "orange" : "white",
                      cursor: "pointer",
                      margin: "0 8px",
                    }}
                  ></div>
                  {index < days.length - 1 && (
                    <div
                      className="line"
                      style={{
                        height: "4px",
                        width: "30px",
                        backgroundColor: "white",
                      }}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Labels below dots */}
            <div
              className="label-wrapper d-flex justify-content-center mt-3 "
              style={{ gap: "27px"  }}
            >
              {days.map((day, index) => (
                <div
                  key={day}
                  style={{
                    color: activeIndex === index ? "orange" : "white",
                    fontWeight: activeIndex === index ? "bold" : "normal",
                    minWidth: "50px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDayClick(day, index)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner5;
