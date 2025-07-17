import React, { useState } from "react";
import {
  useGetTodosNumberQuery,
  useGetTodosQuery,
} from "../redux/slices/todoSlice";
import ErrorMessage from "./Error";
import Loading from "./Loading";

const Todos = () => {
  //   const { data, error, isLoading } = useGetTodosQuery(); // https://dummyjson.com/todos

  const [todosCount, setTodosCount] = useState(5);
  const { data, error, isLoading } = useGetTodosNumberQuery(todosCount);
  console.log(data);
  return (
    <div>
      <div>
        <button onClick={() => setTodosCount(3)}>3 Todos Item</button>
        <button onClick={() => setTodosCount(10)}>10 Todos Item</button>
        <button onClick={() => setTodosCount(20)}>20 Todos Item</button>
      </div>
      Todos Data:
      {error ? (
        <ErrorMessage message={error} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <div>
          {data.todos.map((t, indx) => {
            return <li key={t.id}>{t.todo}</li>;
          })}
        </div>
      )}
    </div>
  );
};

export default Todos;
