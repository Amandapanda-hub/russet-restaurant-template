import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import MenuPage from '../pages/MenuPage/MenuPage';
import Footer from '../components/Footer/Footer';

export default function RouteManager() {
  return (
    <>
        <Router>
        <Routes>
                <Route path='/' element={
                    <Home/>
                } />

                <Route path='/menu' element={
                    <MenuPage/>
                } />
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}
