import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsYelp, BsGithub, BsList, BsX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let navStyle = 'transition-all duration-300 fixed w-full p-4';
  if (scrollPosition < 50) {
    navStyle += ' bg-black';
  } else if (scrollPosition >= 50 && scrollPosition < 100) {
    navStyle += ' bg-transparent';
  } else {
    navStyle += ' -translate-y-full';
  }

  let textColor = "text-white";
  if (scrollPosition >= 50 && scrollPosition < 100) {
    textColor = "text-black"; 
  }

  const location = useLocation();

  return (
    <div className={navStyle}>
      <div className={`flex justify-between items-center p-5 ${textColor}`}>
        <Link to='/' className={`text-lg uppercase ${isMobileMenuOpen ? 'text-black' : textColor}`}>Russet</Link>

        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8">
              <Link to="/" className="text-black">Home</Link>
              <Link to="/menu" className="text-black">Menu</Link>
              <Link to="/reservation" className="text-black">Reservation</Link>
              <Link to="/locations" className="text-black">Locations</Link>
              <div className="flex space-x-4 mt-8">
                <BsYelp className="text-black" />
                <BsGithub className="text-black" />
                <FaFacebook className="text-black" />
              </div>
              <div className="absolute top-5 right-10">
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <BsX size={32} className="text-black" />
                </button>
              </div>
            </div>
          ) : (
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <BsList size={32} className={textColor} />
            </button>
          )}
        </div>

        <div className={`hidden md:flex space-x-4 md:space-x-6 lg:space-x-8 ${textColor}`}>
          <Link to="/" style={{ textDecoration: location.pathname === "/" ? "underline" : "none" }}>Home</Link>
          <Link to="/menu" style={{ textDecoration: location.pathname === "/menu" ? "underline" : "none" }}>Menu</Link>
          <Link to="/reservation" style={{ textDecoration: location.pathname === "/reservation" ? "underline" : "none" }}>Reservation</Link>
          <Link to="/locations" style={{ textDecoration: location.pathname === "/locations" ? "underline" : "none" }}>Locations</Link>
          <BsYelp className="ml-4 self-center" />
          <BsGithub className="ml-4 self-center" />
          <FaFacebook className="ml-4 self-center" />
        </div>
      </div>
    </div>
  );
}
