import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setForm((f) => ({ ...f, [name]: value }));
  //   const handleChange = (ev) => {
  //     const propertyName = ev.target.name; // "email"
  //     const propertyValue = ev.target.value; // "kartik"

  //     setForm((prevState) => {
  //       return {
  //         ...prevState,
  //         [propertyName]: propertyValue,
  //       };
  //     });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(form);
      await signup(form.username, form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={form.username}
          name="username"
          onChange={handleChange}
          type="text"
          placeholder="Enter Username"
        />
        <input
          value={form.email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Enter Email"
        />
        <input
          value={form.password}
          name="password"
          onChange={handleChange}
          type="text"
          placeholder="Enter password"
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
