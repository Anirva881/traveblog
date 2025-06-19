import React from 'react';

function Contact() {
  
  const offices = [
    {
      id: 1,
      city: "New York",
      address: "123 Travel Street, NY 10001",
      phone: "+1 (212) 555-0123",
      email: "newyork@unitravel.com",
      image: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      city: "London",
      address: "456 Adventure Road, London SW1A 1AA",
      phone: "+44 20 7123 4567",
      email: "london@unitravel.com",
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      city: "Tokyo",
      address: "789 Explorer Ave, Shibuya-ku, Tokyo",
      phone: "+81 3-1234-5678",
      email: "tokyo@unitravel.com",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{
        backgroundImage: 'url("https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        height: '100px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        
        }}></div>
        <div style={{position: 'relative', color: 'white', textAlign: 'center'}}>
          <h1 className="display-3 fw-bold">Contact Us</h1>
          <p className="lead">Get in Touch with Our Travel Experts</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-6 mb-4">
            <h2 className="mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-warning text-white">Send Message</button>
            </form>
          </div>

          {/* Quick Contact */}
          <div className="col-lg-6 mb-4">
            <h2 className="mb-4">Quick Contact</h2>
            <div className="mb-4">
              <h5><i className="fas fa-phone-alt text-warning me-2"></i>Phone</h5>
              <p className="text-muted">1 800 123 4567</p>
            </div>
            <div className="mb-4">
              <h5><i className="fas fa-envelope text-warning me-2"></i>Email</h5>
              <p className="text-muted">info@unitravel.com</p>
            </div>
            <div className="mb-4">
              <h5><i className="fas fa-clock text-warning me-2"></i>Working Hours</h5>
              <p className="text-muted">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
            </div>
            <div className="mb-4">
              <h5><i className="fas fa-map-marker-alt text-warning me-2"></i>Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-muted"><i className="fab fa-facebook fa-lg"></i></a>
                <a href="#" className="text-muted"><i className="fab fa-twitter fa-lg"></i></a>
                <a href="#" className="text-muted"><i className="fab fa-instagram fa-lg"></i></a>
                <a href="#" className="text-muted"><i className="fab fa-linkedin fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center mb-4">Our Offices</h2>
          </div>
          {offices.map(office => (
            <div key={office.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={office.image}
                  className="card-img-top"
                  alt={office.city}
                  style={{height: '200px', objectFit: 'cover'}}
                />
                <div className="card-body">
                  <h4 className="card-title">{office.city}</h4>
                  <p className="card-text">
                    <i className="fas fa-map-marker-alt text-warning me-2"></i>
                    {office.address}
                  </p>
                  <p className="card-text">
                    <i className="fas fa-phone-alt text-warning me-2"></i>
                    {office.phone}
                  </p>
                  <p className="card-text">
                    <i className="fas fa-envelope text-warning me-2"></i>
                    {office.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="ratio ratio-21x9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986548727506!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647889391270!5m2!1sen!2s" 
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

export default Contact; 