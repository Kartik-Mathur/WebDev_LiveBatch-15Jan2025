import React from "react";
import { useParams } from "react-router";

const TeamPlayer = () => {
  const { id } = useParams();

  const playerInfo = [
    {
      name: "MS Dhoni",
      id: 1,
      url: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      age: 43,
      position: "Wicketkeeper-Batsman",
    },
    {
      name: "Virat Kohli",
      id: 2,
      url: "https://documents.bcci.tv/resizedimageskirti/164_compress.png",
      age: 36,
      position: "Top-order Batsman",
    },
  ];

  return (
    <div className="card">
      <img src={playerInfo[id].url} alt="Player Image" />
      <div className="card-body">
        <h2>{playerInfo[id].name}</h2>
        <p>Age: {playerInfo[id].age}</p>
        <p>Position: {playerInfo[id].position}</p>
      </div>
    </div>
  );
};

export default TeamPlayer;
