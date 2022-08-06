import React, { useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./apis/todo-apis";
import Button from "../components/Button";
import Input from "../components/Input";
import { Todo, User } from "./demo-app-types";
import cx from "clsx";
import Spinner from "./Spinner";
import DeleteButton from "../components/DeleteButton";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "./apis/user-apis";

// TODO: Handle status separately for each HTTP call (perhaps via react-query)
type Status = "idle" | "loading" | "adding" | "toggling-complete";

type Todos = {
  userId: number;
};

export default function Todos() {
  const [status, setStatus] = useState<Status>("loading");
  const [user, setUser] = useState<User | null>(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    // HACK: A real app would typically have a cookie/jwt as an auth token,
    // and would implement protected route above this page instead.
    async function loadUserSession() {
      const userId = localStorage.getItem("userId");
      if (!userId) return navigate("/");
      const user = await fetchUser();
      setUser(user);
    }
    loadUserSession();
  }, []);

  useEffect(() => {
    async function fetchTodos() {
      setStatus("loading");
      try {
        const resp = await getTodos();
        setTodos(resp);
      } catch (err) {
        setError(err as Error);
      } finally {
        setStatus("idle");
      }
    }
    fetchTodos();
  }, [user]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setStatus("adding");
      const savedTodo = await addTodo(todo);
      setTodos((currentTodos) => [...currentTodos, savedTodo]);
      setTodo("");
    } catch (err) {
      setError(err as Error);
    } finally {
      setStatus("idle");
    }
  }

  async function toggleComplete(todo: Todo) {
    try {
      // Optimistically mark completed. Don't wait for HTTP call
      setTodos(
        todos.map((t) => {
          return t.id === todo.id ? { ...todo, completed: !todo.completed } : t;
        })
      );

      const callTimedOut = "Call timed out";

      // Use this to timeout the call below after 3 seconds.
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(resolve, 3000, callTimedOut);
      });

      setStatus("toggling-complete");
      const result = await Promise.race([timeoutPromise, updateTodo(todo)]);

      if (result === callTimedOut) {
        throw new Error("Oops! Updating the todo failed.");
      }

      setStatus("idle");
    } catch (err) {
      setError(err as Error);
    }
  }

  if (error) throw error;
  // TODO: Eliminate this when the statuses are separated above
  if (!user) return <Spinner />;

  return (
    <main className="grid h-screen place-content-center">
      {status === "loading" ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-3xl pb-4">Hi {user.name} 👋</h1>

          {todos.length === 0 && (
            <p className="mb-4">Welcome! Start entering your todos below.</p>
          )}

          <form onSubmit={onSubmit}>
            <Input
              id="todo"
              label="What do you need to do?"
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button
              type="submit"
              className={cx("ml-1 bg-blue-600 text-white", {
                "bg-slate-300": status === "adding",
              })}
            >
              Add{status === "adding" && "ing..."}
            </Button>
          </form>

          {todos.length > 0 && (
            <>
              <h2 className="text-2xl pt-4">Stuff to do</h2>
              <ul>
                {todos.map((t) => (
                  <li key={t.id} className="flex items-center">
                    {user.isAdmin && (
                      <DeleteButton
                        aria-label={`Delete ${t.todo}`}
                        onClick={async () => {
                          await deleteTodo(t.id);
                          setTodos(todos.filter(({ id }) => id !== t.id));
                        }}
                      />
                    )}
                    <input
                      id={t.id.toString()}
                      type="checkbox"
                      checked={t.completed}
                      className="mr-1"
                      onChange={() => toggleComplete(t)}
                    />
                    <label
                      htmlFor={t.id.toString()}
                      className={cx({
                        "text-decoration-line line-through text-slate-400":
                          t.completed,
                      })}
                    >
                      {t.todo}
                    </label>
                  </li>
                ))}
              </ul>

              {status === "toggling-complete" && (
                <div aria-live="polite" className="absolute bottom-2 right-2">
                  <span className="flex">
                    Saving...
                    <Spinner className="ml-4" />
                  </span>
                </div>
              )}
            </>
          )}
        </>
      )}
    </main>
  );
}
