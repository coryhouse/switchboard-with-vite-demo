import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import cx from "clsx";
import Spinner from "./Spinner";
import DeleteButton from "../components/DeleteButton";
import { useUserContext } from "./contexts/UserContext";
import { useTodos } from "../hooks/useTodos";

type Todos = {
  userId: number;
};

export default function Todos() {
  const [todo, setTodo] = useState("");
  const { user, logout } = useUserContext();
  const { todos, addTodo, toggleTodo, deleteTodo, setTodos } = useTodos();

  return (
    <main className="grid h-screen place-content-center">
      {!user || !todos.data ? (
        <Spinner />
      ) : (
        <>
          <div className="flex items-center pb-4">
            <h1 className="text-3xl inline-block">Hi {user.name} 👋</h1>{" "}
            <a href="#" className="text-blue-600 pl-4" onClick={logout}>
              Logout
            </a>
          </div>

          {todos.data?.length === 0 && (
            <p className="mb-4">Welcome! Start entering your todos below.</p>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTodo.mutate(todo, {
                onSuccess: (savedTodo) => {
                  setTodos([...todos.data, savedTodo]);
                  setTodo("");
                },
              });
            }}
          >
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
                "bg-slate-300": addTodo.isLoading,
              })}
            >
              Add{addTodo.isLoading && "ing..."}
            </Button>
          </form>
          {todos.data.length > 0 && (
            <>
              <h2 className="text-2xl pt-4">Stuff to do</h2>
              <ul>
                {todos.data.map((t) => (
                  <li key={t.id} className="flex items-center">
                    {user.isAdmin && (
                      <DeleteButton
                        aria-label={`Delete ${t.todo}`}
                        onClick={() => {
                          // Optimistically delete from UI. Don't wait for HTTP call
                          setTodos(todos.data.filter(({ id }) => id !== t.id));
                          deleteTodo.mutate(t.id);
                        }}
                      />
                    )}
                    <input
                      id={t.id.toString()}
                      type="checkbox"
                      checked={t.completed}
                      className="mr-1"
                      onChange={() => {
                        // Optimistically mark completed. Don't wait for HTTP call
                        setTodos(
                          todos.data.map((todo) => {
                            return todo.id === t.id
                              ? { ...todo, completed: !todo.completed }
                              : todo;
                          })
                        );
                        toggleTodo.mutate(t);
                      }}
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

              {toggleTodo.isLoading ||
                deleteTodo.isLoading ||
                (addTodo.isLoading && (
                  <div aria-live="polite" className="absolute bottom-2 right-2">
                    <span className="flex">
                      Saving...
                      <Spinner className="ml-4" />
                    </span>
                  </div>
                ))}
            </>
          )}
        </>
      )}
    </main>
  );
}
