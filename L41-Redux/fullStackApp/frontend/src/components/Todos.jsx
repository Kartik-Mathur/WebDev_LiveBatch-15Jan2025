import React from "react";
import axios from "../utils/axios";
import { useEffect } from "react";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const { data } = await axios.get("/get-todos");
      console.log(data);
      setTodos(data.todos);
    }

    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Todos data:</h3>
      <ul>
        {todos.map((t, i) => {
          return <li key={i}>{t}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
