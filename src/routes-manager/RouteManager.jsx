import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import MenuPage from '../pages/MenuPage/MenuPage';
import Footer from '../components/Footer/Footer';
import ReservationPage from '../pages/ReservationPage/ReservationPage';
import NavBar from '../components/NavBar/NavBar';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export default function RouteManager() {
  return (
    <>
        <Router>
            <ScrollToTop/>
            <NavBar/>
        <Routes>
                <Route path='/' element={
                    <Home/>
                } />

                <Route path='/menu' element={
                    <MenuPage/>
                } />

                 <Route path='/reservation' element={
                    <ReservationPage/>
                } />
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}
