import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Centers from "./components/Centers";
import Team from "./components/Team";
import TeamPlayer from "./components/TeamPlayer";

const App = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="team/:id" element={<TeamPlayer />} />
          <Route path="center" element={<Centers />} />
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
