# Understanding React Hooks: A Practical Guide

React Hooks are special functions that let you hook into React state and lifecycle features from functional components. They simplify the code, improve readability, and eliminate the need for class-based components. All hooks in React follow the naming convention of starting with `use`.

## Table of Contents
1. What are Hooks?
2. Lifecycle Features in Functional Components
3. Commonly Used Hooks
4. Practical Example: A Todo App Using `useEffect`

---

## 1. What are Hooks?
Hooks allow you to manage state, perform side effects, and access lifecycle features in functional components. They provide the functionality of React class components without the complexity of managing `this` and lifecycle methods.

### Common Hooks
- `useState`
- `useEffect`
- `useMemo`
- `useCallback`
- `useRef`
- `useReducer`
- `useContext`
- `useLayoutEffect`

---

## 2. Lifecycle Features in Functional Components
In class-based components, lifecycle methods such as `componentDidMount` and `componentWillUnmount` manage the lifecycle of a component. Functional components, however, rely on hooks like `useEffect` to achieve similar functionality.

### Comparison of Lifecycle Events
| Class Component Lifecycle | Functional Component Hook |
|----------------------------|---------------------------|
| `componentDidMount`       | `useEffect` with empty dependency array `[]` |
| `componentDidUpdate`      | `useEffect` with dependencies |
| `componentWillUnmount`    | Cleanup function in `useEffect` |

---

## 3. Commonly Used Hooks

### `useEffect`
`useEffect` is used to perform side effects in functional components. It replaces `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` with a single API.

#### Dependency Array
The dependency array determines when the `useEffect` callback should run:
- **Empty array `[]`**: Runs only once when the component mounts.
- **Specific dependencies `[state]`**: Runs when the specified state or props change.
- **No array**: Runs on every render (not recommended for most cases).

#### Example: Logging Component Mount
```jsx
import React, { useEffect } from "react";

function Logger() {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return <p>Check the console for logs.</p>;
}
```

---

## 4. Practical Example: A Todo App Using `useEffect`
We’ll build a simple Todo app that fetches tasks from a backend and allows us to view the details of a task when clicked.

### Complete Code
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // Fetch todos when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(response.data.slice(0, 10)); // Limit to 10 todos
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // Fetch the details of a selected todo
  useEffect(() => {
    if (selectedTodo) {
      const fetchTodoDetails = async () => {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${selectedTodo}`);
          console.log("Selected Todo Details:", response.data);
        } catch (error) {
          console.error("Error fetching todo details:", error);
        }
      };

      fetchTodoDetails();
    }
  }, [selectedTodo]);

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => setSelectedTodo(todo.id)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

### Key Points
1. **Fetching Todos on Mount**:
   - The first `useEffect` runs once to fetch the list of todos from the backend.
2. **Fetching Todo Details**:
   - The second `useEffect` fetches details of the selected todo when `selectedTodo` changes.

### Preventing Infinite Loops
To avoid infinite loops, ensure that:
- State updates inside `useEffect` are not part of the dependency array unless necessary.
- Use conditionals inside `useEffect` to manage dependent behavior.

#### Example of Infinite Loop
```jsx
useEffect(() => {
  const fetchTodos = async () => {
    const res = await axios.get("url");
    setTodos(res.data.todos);
  };

  fetchTodos();
}, [todos]); // This creates an infinite loop
```

#### Fixed Version
```jsx
useEffect(() => {
  const fetchTodos = async () => {
    const res = await axios.get("url");
    setTodos(res.data.todos);
  };

  fetchTodos();
}, []); // Empty array prevents re-triggering
```
---
