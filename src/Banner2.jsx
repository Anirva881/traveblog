import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner2() {
  const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const navigate = useNavigate();

  const goToBooking = () => {
    navigate('/booking');
  };

  return (
    <div>
    <div className="container" style={{}}>
      <div
        className="text-center text-md-start py-4 " style={{marginLeft:'388px'}}
      >
        <h5
          style={{
            fontFamily: 'Itim, cursive',
            color: 'orange',
            fontWeight: 'bold',
            marginLeft: '80px'
          }}
        >
          Tours
        </h5>
        <h3>Other destinations</h3>
      </div>
       </div>

      <div className="row g-4" style={{padding:'6%'}}>
        {[
          {
            src: 'https://images.pexels.com/photos/26524492/pexels-photo-26524492/free-photo-of-close-up-of-a-myna-perched-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'DIGLIPUR',
            desc: 'Diglipur is ripe for discovery, offering a little bit of everything — lush green forests, serene beaches, crystal-clear rivers, and the majestic Saddle Peak, the highest point in the Andaman Islands. A hidden gem waiting to be explored.',
          },
          {
            src: 'https://th.bing.com/th/id/OSK.HEROfSJ40JoMCCMHeGGu69xzr8qVgjaRyiYz-DCTqBKpKV4?w=312&h=200&c=7&rs=1&o=6&dpr=1.5&pid=SANGAM',
            title: 'BARATANG',
            desc: "It might sound like a cliché to say Baratang feels both wild and peaceful — but the moment you witness its dense mangrove forests, limestone caves, and the rare mud volcano, you'll be amazed that such untouched beauty still exists.",
          },
          {
            src: 'https://images.pexels.com/photos/12475573/pexels-photo-12475573.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'HAVELOCK',
            desc: 'But today,the Vietnamese are focused on rocketing into furthure.In this new era of confident self-determination the atmosphere is one of palpable optimism.is known for its stunning white-sand beaches.',
          },
        ].map((item, index) => (
          <div className="col-12 col-md-4" key={index}>
            <img
              style={imageStyle}
              src={item.src}
              alt={item.title}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                e.target.style.filter = 'brightness(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                e.target.style.filter = 'brightness(1)';
              }}
            />
            <h4 className="mt-3 text-center">{item.title}</h4>
            <p className="px-2" style={{ fontSize: '12px' }}>{item.desc}</p>
            <div className="text-center">
              <button
                className="btn btn-outline-warning"
                style={{ borderRadius: '20px', borderWidth: '2px' }}
                onClick={goToBooking}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4 " style={{padding:'6%'}}>
        {[
          {
            src: 'https://th.bing.com/th/id/OSK.HERO2VO1uFErHZIjEsJaEEFjswDE49C2fsSuFmG2JDYp6RY?w=312&h=200&c=15&rs=2&o=6&dpr=1.5&pid=SANGAM',
            title: 'NORTHBAY',
            desc: 'North Bay is a treasure waiting to be explored, offering a bit of everything — vibrant coral reefs, golden sandy beaches, clear blue waters, and thrilling underwater adventures. It\'s a paradise for nature lovers and adventure seekers alike.',
          },
          {
            src: 'https://th.bing.com/th/id/R.5691088987fd0812abe9eaae0d72b6a6?rik=3s526oooiQbanA&riu=http%3a%2f%2fwww.go2india.in%2fandaman%2fimages%2fwandoorbeach.JPG&ehk=IhhS3cg0Z%2fIAnStTa4rU8Gymv4IbbCmsWZdaSrJc8DM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
            title: 'WANDOOR',
            desc: 'It may sound like a cliché to say Wandoor is both serene and spectacular — but arriving at its peaceful shores, lush forests, and coral-rich marine park still manages to surprise and delight every traveler.',
          },
          {
            src: 'https://www.tourmyindia.com/states/andaman/images/viper-island1.jpg',
            title: 'VIPER',
            desc: 'Once marked by its colonial past, Viper Island now looks ahead with quiet strength. In this new era of restoration and remembrance, the island carries an air of calm resilience and timeless beauty.',
          },
        ].map((item, index) => (
          <div className="col-12 col-md-4" key={index}>
            <img
              style={imageStyle}
              src={item.src}
              alt={item.title}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                e.target.style.filter = 'brightness(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                e.target.style.filter = 'brightness(1)';
              }}
            />
            <h4 className="mt-3 text-center">{item.title}</h4>
            <p className="px-2" style={{ fontSize: '12px' }}>{item.desc}</p>
            <div className="text-center">
              <button
                className="btn btn-outline-warning"
                style={{ borderRadius: '20px', borderWidth: '2px' }}
                
                onClick={goToBooking}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
   
  );
}

export default Banner2;
