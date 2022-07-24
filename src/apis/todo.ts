import { Todo } from "../demo-app/types";

// NOTE: These fetch calls are intercepted by msw when mocking is enabled.
// Mock Service Worker intercepts the call made in the browser
// and returns a mock response instead.
export async function getTodos(): Promise<Todo[]> {
  const resp = await fetch("/todos");
  if (!resp.ok) throw resp;
  return resp.json() as Promise<Todo[]>;
}

export async function addTodo(todo: string): Promise<Todo> {
  const resp = await fetch("/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!resp.ok) throw resp;
  return resp.json() as Promise<Todo>;
}

export async function markTodoComplete(todoId: number): Promise<void> {
  const resp = await fetch(`/todo${todoId}`, {
    method: "PUT",
  });
  if (!resp.ok) throw resp;
}
