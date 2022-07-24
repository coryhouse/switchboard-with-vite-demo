import React, { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Array<string>>([]);

  return (
    <React.StrictMode>
      <h1 className="text-3xl">To Do App</h1>
      <form
        onSubmit={() => setTodos((currentTodos) => [...currentTodos, todo])}
      >
        <label htmlFor="todo">To do</label>
        <input
          id="todo"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>

      <h2>To dos</h2>
      <ul>
        {todos.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </React.StrictMode>
  );
}
