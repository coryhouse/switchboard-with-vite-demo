import { Todo } from "../demo-app-types";

// NOTE: For simplicity, no real endpoints exist in this demo.
// These calls are intercepted by msw when mocking is enabled.
// Mock Service Worker intercepts the call made in the browser
// and returns a mock response instead.
import ky, { KyResponse } from "ky";

const timeout = 2000;

export async function getTodos(): Promise<Todo[]> {
  return ky.get(`/todos`, { timeout }).json<Todo[]>();
}

export async function addTodo(todo: string): Promise<Todo> {
  return ky.post("/todo", { timeout, json: { todo } }).json<Todo>();
}

export async function updateTodo(todo: Todo): Promise<KyResponse> {
  return ky.put(`/todo/${todo.id}`, { timeout, json: { todo } });
}

export async function deleteTodo(todoId: number): Promise<KyResponse> {
  return ky.delete(`/todo/${todoId}`, { timeout });
}
