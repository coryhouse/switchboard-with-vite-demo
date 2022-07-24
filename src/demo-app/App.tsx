import React, { useEffect, useState } from "react";
import { addTodo, getTodos, markTodoComplete } from "../apis/todo";
import { Todo } from "./types";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const todosResp = await getTodos();
      setTodos(todosResp);
      setLoading(false);
    }
    fetchTodos();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const savedTodo = await addTodo(todo);
    setTodos((currentTodos) => [...currentTodos, savedTodo]);
    setTodo("");
  }

  if (loading) return "Loading...";

  return (
    <React.StrictMode>
      <h1 className="text-3xl pb-4">Demo Todo App</h1>
      <form onSubmit={onSubmit}>
        <label className="block" htmlFor="todo">
          To do
        </label>
        <input
          id="todo"
          className="border-slate-400 border-solid border p-1"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          className="border-slate-400 border-solid border p-1"
          type="submit"
          value="Add"
        />
      </form>

      {todos.length > 0 && (
        <>
          <h2 className="text-2xl pt-4">To dos</h2>
          <ul>
            {todos.map((t) => (
              <li>
                <input
                  type="checkbox"
                  onChange={() => markTodoComplete(t.id)}
                />
                {t.todo}
              </li>
            ))}
          </ul>
        </>
      )}
    </React.StrictMode>
  );
}
