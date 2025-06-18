import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const btnGroupCSS = {
    // backgroundColor: "blue",
    // border: '1px solid black',
    display: "flex",
    justifyContent: "space-evenly",
  };

  //   const LinkCSS = { color: "black", textDecoration: "none" };

  return (
    <div style={btnGroupCSS}>
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/about">About Us</NavLink>
      <NavLink className="navlink" to="/contact">Contact Us</NavLink>
    </div>
  );
};

export default Navbar;
