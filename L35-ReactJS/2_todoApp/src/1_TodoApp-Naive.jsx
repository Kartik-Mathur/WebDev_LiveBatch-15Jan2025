import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function TodoApp() {
  // todos ka array is immutable, cannot do todos = []
  const [todos, setTodos]=useState([]);

  // Picking value with the help of state
  const [taskValue, setTaskValue] = useState("");

  const addTodosHelper  = (ev)=>{
    ev.preventDefault();
    // We need task ki value here, so that I can add it to my todos state
    setTodos([...todos, taskValue]); // todos ko immutable kaha hai, toh we cannot change it
  }

  return (
    <div>
      <h1>Todo Application</h1>
      
      {/* Jab bhi form submit hoga toh addTodosHelper function run hoga -> todos ki state mei, data 
      add krenge */}
      <form action="#" onSubmit={addTodosHelper}>

        <input onChange={(ev)=>{
          // console.log(ev.target.value)
          setTaskValue(ev.target.value); 
        }} type="text" name="task" id="task" placeholder="Enter Task Name" /> <br />
        <button type="submit">Add Task</button>

      </form>


      <ul className="tasklist">
        {todos.map((todo,indx)=>
          <li key={indx}>{todo}</li>
        )}
      </ul>
      
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
        