import React, { useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./apis/todo-apis";
import Button from "../components/Button";
import Input from "../components/Input";
import { Todo } from "./demo-app-types";
import cx from "clsx";
import Spinner from "./Spinner";
import DeleteButton from "../components/DeleteButton";
import { useUserContext } from "./contexts/UserContext";
import { toast } from "sonner";

// TODO: Handle status separately for each HTTP call (perhaps via react-query)
type Status = "idle" | "loading" | "adding";

type Todos = {
  userId: number;
};

export default function Todos() {
  const [status, setStatus] = useState<Status>("loading");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const { user, logout } = useUserContext();

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

      toast.promise(updateTodo(todo), {
        loading: "Toggling...",
        success: () => "Toggled",
        error: "Toggling the todo failed.",
      });

      setStatus("idle");
    } catch (err) {
      setError(err as Error);
    }
  }

  if (error) throw error;

  return (
    <main className="grid place-content-center mt-4">
      {!user || status === "loading" ? (
        <Spinner />
      ) : (
        <>
          <div className="flex items-center pb-4">
            <h1 className="text-3xl inline-block">Hi {user.name} 👋</h1>{" "}
            <a href="#" className="text-blue-600 pl-4" onClick={logout}>
              Logout
            </a>
          </div>

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
            <section>
              <h2 className="text-2xl pt-4 sr-only">Stuff to do</h2>
              <ul>
                {todos.map((t) => (
                  <li key={t.id} className="flex items-center">
                    {user.isAdmin && (
                      <DeleteButton
                        aria-label={`Delete ${t.todo}`}
                        onClick={async () => {
                          try {
                            toast.promise(deleteTodo(t.id), {
                              loading: "Deleting...",
                              success: () => {
                                setTodos(todos.filter(({ id }) => id !== t.id));
                                return "Todo deleted";
                              },
                              error: "Error",
                            });
                          } catch (err) {
                            setError(new Error("Delete failed"));
                          }
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
            </section>
          )}
        </>
      )}
    </main>
  );
}
