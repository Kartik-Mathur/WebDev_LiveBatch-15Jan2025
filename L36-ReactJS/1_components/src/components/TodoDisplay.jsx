export default function TodoDisplay({todos}){
  return (
    <ul className="tasklist">
      {todos.map((todo,indx)=>
        <li key={indx}>{todo}</li>
      )}
    </ul>
  );
}