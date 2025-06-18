import React, { lazy, Suspense } from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
import { useState } from "react";
import { Link, Route, Routes, Navigate } from "react-router";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<div>Loading data ...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
