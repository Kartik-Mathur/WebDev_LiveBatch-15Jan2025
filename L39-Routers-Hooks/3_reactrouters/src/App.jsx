import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div>

      {/* <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link> */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={<About />}>About</Route>
        <Route path='/contact' element={<Contact />}>About</Route>
      </Routes>
      
    </div>
  );
};

export default App;
