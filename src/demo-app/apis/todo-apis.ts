import { Todo } from "../demo-app-types";
import ky from "ky";

// Global ky config
const config = {
  // Disable retries
  retry: 0,
};

// NOTE: For simplicity, real endpoints don't actually exist in this demo.
// These fetch calls are intercepted by msw when mocking is enabled.
// Mock Service Worker intercepts the call made in the browser
// and returns a mock response instead.
export async function getTodos(): Promise<Todo[]> {
  return ky.get(`/todos`, config).json();
}

export async function addTodo(todo: string): Promise<Todo> {
  return ky
    .post("/todo", {
      json: todo,
      ...config,
    })
    .json();
}

export async function updateTodo(todo: Todo): Promise<void> {
  return ky.put(`/todo/${todo.id}`, { json: todo, ...config }).json();
}

export async function deleteTodo(todoId: number): Promise<void> {
  return ky.delete(`/todo/${todoId}`, config).json();
}
