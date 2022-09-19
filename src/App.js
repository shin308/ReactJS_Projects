import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home  from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
