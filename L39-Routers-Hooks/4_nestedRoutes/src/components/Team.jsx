import React from "react";
import { useNavigate } from "react-router";

const Team = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        Our Team
        <button onClick={() => navigate("/about/team/0")}>MS Dhoni</button>
        <button onClick={() => navigate("/about/team/1")}>Virat Kohli</button>
      </ul>
    </div>
  );
};

export default Team;
