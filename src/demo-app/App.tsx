import React, { useEffect, useState } from "react";
import { addTodo, getTodos, markTodoComplete } from "../apis/todo-apis";
import Button from "./Button";
import Input from "./Input";
import { Todo } from "./types";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [submitError, setSubmitError] = useState<Error | null>(null);

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
    try {
      const savedTodo = await addTodo(todo);
      setTodos((currentTodos) => [...currentTodos, savedTodo]);
      setTodo("");
    } catch (err) {
      setSubmitError(err as Error);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (submitError) throw submitError;

  return (
    <React.StrictMode>
      <main className="grid h-screen place-content-center">
        <h1 className="text-3xl pb-4">Demo App</h1>
        <form onSubmit={onSubmit}>
          <Input
            id="todo"
            label="What do you need to do?"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button type="submit" className="ml-1">
            Add
          </Button>
        </form>

        {todos.length > 0 && (
          <>
            <h2 className="text-2xl pt-4">Stuff to do</h2>
            <ul>
              {todos.map((t) => (
                <li key={t.id}>
                  <input
                    type="checkbox"
                    className="mr-1"
                    onChange={() => markTodoComplete(t.id)}
                  />
                  {t.todo}
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </React.StrictMode>
  );
}
