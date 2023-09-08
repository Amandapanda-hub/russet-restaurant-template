import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {BsYelp, BsGithub} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

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
    navStyle += ' -translate-y-full'; // This will move the navbar out of view
  }

  const location = useLocation();

  return (
    <div className={navStyle}>
      <div className="flex justify-between items-center text-white p-5">
        <Link to='/' className="text-white text-lg uppercase">Russet</Link>
        
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <div className="absolute top-0 right-0 w-64 bg-white p-4 h-screen">
              <button onClick={() => setIsMobileMenuOpen(false)}>X</button>
              <Link to="/" activeClassName="underline block my-2">Home</Link>
              <Link to="/menu" activeClassName="underline block my-2">Menu</Link>
              <Link to="/reservation" activeClassName="underline block my-2">Reservation</Link>
              {/* Other Links */}
              {/* React Icons */}
              <BsYelp className="mt-4" />
              <BsGithub className="mt-4" />
              <FaFacebook className="mt-4" />
            </div>
          ) : (
            <button onClick={() => setIsMobileMenuOpen(true)}>Hamburger Icon</button>
          )}
        </div>

        <div className="hidden md:flex space-x-4 md:space-x-6 lg:space-x-8">
        <Link to="/" style={{ textDecoration: location.pathname === "/" ? "underline" : "none" }}>Home</Link>
          <Link to="/menu" style={{ textDecoration: location.pathname === "/menu" ? "underline" : "none" }}>Menu</Link>
          <Link to="/reservation" style={{ textDecoration: location.pathname === "/reservation" ? "underline" : "none" }}>Reservation</Link>
          {/* Other Links */}
          <BsYelp className="ml-4 self-center" />
          <BsGithub className="ml-4 self-center" />
          <FaFacebook className="ml-4 self-center" />
        </div>
      </div>
    </div>
  );
}
