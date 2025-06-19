import React from 'react';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Must-Visit Hidden Gems in Europe",
      excerpt: "Discover the lesser-known but equally stunning destinations across Europe that most tourists miss...",
      date: "March 15, 2024",
      author: "Sarah Wilson",
      category: "Travel Tips",
      image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "A Food Lover's Guide to Tokyo",
      excerpt: "From street food to Michelin-starred restaurants, explore the diverse culinary scene of Tokyo...",
      date: "March 12, 2024",
      author: "Mike Chen",
      category: "Food & Culture",
      image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Sustainable Travel: Tips for Eco-Friendly Adventures",
      excerpt: "Learn how to minimize your environmental impact while exploring the world...",
      date: "March 10, 2024",
      author: "Emma Green",
      category: "Sustainable Travel",
      image: "https://images.pexels.com/photos/695794/pexels-photo-695794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Photography Tips for Travel Enthusiasts",
      excerpt: "Capture stunning travel memories with these professional photography techniques...",
      date: "March 8, 2024",
      author: "David Lee",
      category: "Photography",
      image: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const categories = [
    "All",
    "Travel Tips",
    "Food & Culture",
    "Adventure",
    "Photography",
    "Sustainable Travel"
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        height: '500px',
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
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}></div>
        <div style={{position: 'relative', color: 'white', textAlign: 'center'}}>
          <h1 className="display-3 fw-bold">Travel Blog</h1>
          <p className="lead">Stories, Tips, and Inspiration for Your Next Adventure</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container my-5">
        {/* Categories */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`btn ${index === 0 ? 'btn-warning text-white' : 'btn-outline-warning'}`}
                >
                  {category}
                </button>
                
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="row">
          {blogPosts.map(post => (
            <div key={post.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={post.image}
                  className="card-img-top"
                  alt={post.title}
                  style={{height: '250px', objectFit: 'cover'}}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-warning text-white">{post.category}</span>
                    <small className="text-muted">{post.date}</small>
                  </div>
                  <h4 className="card-title">{post.title}</h4>
                  <p className="card-text text-muted">{post.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-user-circle me-2"></i>
                      <span className="text-muted">{post.author}</span>
                    </div>
                    <button className="btn btn-link text-warning">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-light p-4 rounded-3 text-center">
              <h3>Subscribe to Our Newsletter</h3>
              <p className="text-muted">Get the latest travel stories and tips delivered to your inbox.</p>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Enter your email address"
                      aria-label="Email address"
                    />
                    <button className="btn btn-warning text-white">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog; 