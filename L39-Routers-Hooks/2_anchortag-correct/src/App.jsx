import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const btnCSS = {
    // backgroundColor: "blue",
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-evenly'
  }

  return (
    <div>
      <div className="btnGroups" style={btnCSS}>
        <button onClick={()=> setCurrentPage('home')}>Home</button>
        <button onClick={()=> setCurrentPage('about')}>About</button>
        <button onClick={()=> setCurrentPage('contact')}>Contact</button>
      </div>

      {currentPage == "about" && <About />}
      {currentPage == "contact" && <Contact />}
      {currentPage == "home" && <Home />}
    </div>
  );
};

export default App;
