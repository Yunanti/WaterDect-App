import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarLayout from '../components/layout';
import About from '../pages/about/About';
import Gallery from '../pages/gallery/Gallery';
import Home from '../pages/home/Home';

function AppRoute() {
  return (
    <Routes>
      <Route path='/' element={<NavbarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
