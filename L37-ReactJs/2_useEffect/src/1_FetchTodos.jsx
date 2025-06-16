import React, { useEffect, useState } from "react";

const FetchTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      async function getTodos() {
        let url = `https://dummyjson.com/todos`;
        let data = await fetch(url);
        data = await data.json();
        console.log(data);
        setTodos(data.todos);
      }

      getTodos();
    }, 1000);
  }, []);

  return (
    <div>
      Todos Application
      {todos.map((t, indx) => {
        return <li key={indx}>{t.todo}</li>;
      })}
    </div>
  );
};

export default FetchTodos;
