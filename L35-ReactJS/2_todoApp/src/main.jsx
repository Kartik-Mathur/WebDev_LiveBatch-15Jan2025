import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function TodoInput({todos, setTodos, taskValue, setTaskValue}){
  
  const addTodosHelper  = (ev)=>{
    ev.preventDefault();
    // We need task ki value here, so that I can add it to my todos state
    setTodos([...todos, taskValue]); // todos ko immutable kaha hai, toh we cannot change it
  }

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
  return (
    <ul className="tasklist">
      {todos.map((todo,indx)=>
        <li key={indx}>{todo}</li>
      )}
    </ul>
  );
}

function TodoApp() {
  const [todos, setTodos]=useState([]);
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