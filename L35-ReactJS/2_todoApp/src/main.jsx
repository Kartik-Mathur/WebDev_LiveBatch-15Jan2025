import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import InfiniteLoop from "./InfiniteLoop";

function TodoInput({todos, setTodos, taskValue, setTaskValue}){
  
  const addTodosHelper  = (ev)=>{
    ev.preventDefault();
    // We need task ki value here, so that I can add it to my todos state
    setTodos([...todos, taskValue]); // todos ko immutable kaha hai, toh we cannot change it
  }

  console.log("Running Todo Inp")
  return (
    <form action="#" onSubmit={addTodosHelper}>
      
      <input onChange={(ev)=>{
        // console.log(ev.target.value)
        setTaskValue(ev.target.value); 
      }} type="text" name="task" id="task" placeholder="Enter Task Name" /> <br />

      <button type="submit">Add Task</button>
    </form>
  );
}


function TodoDisplay({todos}){
  console.log("Running Todo Display")
  return (
    <ul className="tasklist">
      {todos.map((todo,indx)=>
        <li key={indx}>{todo}</li>
      )}
    </ul>
  );
}

function TodoApp() {
  console.log("Running Todo App")

  const [todos, setTodos]=useState(["Cricket"]);
  const [taskValue, setTaskValue] = useState("");

  return (
    <div>
      <h1>Todo Application - Component Wise</h1>
      
      <TodoInput 
        todos={todos} 
        setTodos={setTodos} 
        taskValue={taskValue} 
        setTaskValue={setTaskValue}
      />

      <TodoDisplay todos={todos} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
        


{/* <input type="text" name="description" id="description" placeholder="Enter Description" /> <br /> */}