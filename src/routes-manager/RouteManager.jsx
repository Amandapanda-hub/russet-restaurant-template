import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import MenuPage from '../pages/MenuPage/MenuPage';
import Footer from '../components/Footer/Footer';
import ReservationPage from '../pages/ReservationPage/ReservationPage';
import NavBar from '../components/NavBar/NavBar';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import PageRouteTitle from '../components/PageRouteTitle/PageRouteTitle';
import LocationsPage from '../pages/Locations/LocationsPage';

export default function RouteManager() {
  return (
    <>
        <Router>
            <PageRouteTitle/>
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
               <Route path='/locations' element={
                    <LocationsPage/>
                } /> 
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}
