// components/Navbar.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFetchUserQuery } from "../services/api";

const Navbar = () => {
  const navigate = useNavigate();
  const { data: user } = useFetchUserQuery();

  const styles = {
    navbar: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #eaeaea",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "'Segoe UI', sans-serif",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    brand: {
      fontSize: "1.4rem",
      fontWeight: "bold",
      color: "#333",
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      gap: "1rem",
    },
    link: {
      textDecoration: "none",
      color: "#555",
      fontWeight: "500",
      transition: "color 0.3s ease",
    },
    activeLink: {
      color: "#007bff",
      borderBottom: "2px solid #007bff",
      paddingBottom: "4px",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand} onClick={() => navigate("/")}>
        MyApp
      </div>

      <div style={styles.navLinks}>
        {!user ? (
          <>
            <NavLink
              to="/signup"
              style={({ isActive }) =>
                isActive
                  ? { ...styles.link, ...styles.activeLink }
                  : styles.link
              }
            >
              Signup
            </NavLink>
            <NavLink
              to="/login"
              style={({ isActive }) =>
                isActive
                  ? { ...styles.link, ...styles.activeLink }
                  : styles.link
              }
            >
              Login
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/dashboard"
              style={({ isActive }) =>
                isActive
                  ? { ...styles.link, ...styles.activeLink }
                  : styles.link
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/admin"
              style={({ isActive }) =>
                isActive
                  ? { ...styles.link, ...styles.activeLink }
                  : styles.link
              }
            >
              Admin
            </NavLink>
            <NavLink
              to="/admin/new"
              style={({ isActive }) =>
                isActive
                  ? { ...styles.link, ...styles.activeLink }
                  : styles.link
              }
            >
              New Post
            </NavLink>

            <NavLink
              to="/admin/tags"
              style={({ isActive }) =>
                isActive
                  ? { ...styles.link, ...styles.activeLink }
                  : styles.link
              }
            >
              Tags
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
