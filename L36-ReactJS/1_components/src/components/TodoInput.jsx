export default function TodoInput({todos, setTodos, taskValue, setTaskValue}){
  
  const addTodosHelper  = (ev)=>{
    ev.preventDefault();
    // We need task ki value here, so that I can add it to my todos state
    setTodos([...todos, taskValue]); // todos ko immutable kaha hai, toh we cannot change it
    setTaskValue("");
  }

  return (
    <form action="#" onSubmit={addTodosHelper}>
      <input onChange={(ev)=>{
        // console.log(ev.target.value)
        setTaskValue(ev.target.value); 
      }} type="text" value={taskValue} name="task" id="task" placeholder="Enter Task Name" /> <br />
      <button type="submit">Add Task</button>
    </form>
  );
}