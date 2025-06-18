import React, { useContext } from "react";
import { MoneyContext, TodoContext } from "./App";

const GrandChild = () => {
  const data = useContext(MoneyContext);
  const { todos, addTodos } = useContext(TodoContext);
    console.log("Running GrandChild");
  return (
    <div>
      {data.money} : {data.description}
      {todos.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
      <button onClick={() => addTodos("Coding")}>Add Todo</button>
    </div>
  );
};

// const GrandChild = () => {
//   return (
//     <TodoContext.Consumer>
//       {(TodoData) => {
//         return (
//           <MoneyContext.Consumer>
//             {(moneyData) => {
//               return (
//                 <>
//                   <li>{moneyData.money}</li>
//                   <li>{moneyData.description}</li>
//                   {TodoData.map((t, i) => (
//                     <li key={i}>{t}</li>
//                   ))}
//                 </>
//               );
//             }}
//           </MoneyContext.Consumer>
//         );
//       }}
//     </TodoContext.Consumer>
//   );
// };

export default GrandChild;
