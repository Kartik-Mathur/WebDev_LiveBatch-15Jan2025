import React from "react";
import { Outlet, Link, useNavigate } from "react-router";

const About = () => {

  return (
    <div>
      <h1>About Us</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis quod,
        at voluptates necessitatibus aperiam corporis excepturi quo vel non
        laboriosam voluptatibus, illo eveniet impedit accusamus, iusto nostrum
        sed alias eaque quam nulla voluptas? Aliquid optio ducimus
        necessitatibus veniam iure?
      </p>

      <Outlet />


    </div>
  );
};

export default About;
