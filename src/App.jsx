// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

import Home from './pages/Home';
import About from './pages/About';
import Travel from './pages/Travel';
import Stay from './pages/Stay';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Booking from './pages/Booking';
import Destination from './pages/Destination';
import Details from './pages/Details';
import PremiumServiceCategories from './pages/Details';
import ServiceDetails from './pages/ServiceDetails';
import DestinationDetails from './pages/DestinationDetails';
import BookingDetails from './pages/BookingDetails';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:index" element={<ServiceDetails />} />
        <Route path="/details/:id" element={<Details />} />

        {/* Add other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Travel />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/destination/:name" element={<DestinationDetails />} />
        <Route path="/booking-details" element={<BookingDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
