import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../demo-app/apis/todo-apis";
import { Todo } from "../demo-app/demo-app-types";

const queryKey = ["todos"];

export function useTodos() {
  const getTodosQuery = useQuery({
    queryFn: getTodos,
    queryKey,
    useErrorBoundary: true,
  });

  const queryClient = useQueryClient();

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    useErrorBoundary: true,
  });

  const toggleTodoMutation = useMutation({
    mutationFn: updateTodo,
    useErrorBoundary: true,
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    useErrorBoundary: true,
  });

  function setTodos(todos: Todo[]) {
    queryClient.setQueryData(queryKey, todos);
  }

  return {
    todos: getTodosQuery,
    addTodo: addTodoMutation,
    toggleTodo: toggleTodoMutation,
    deleteTodo: deleteTodoMutation,
    setTodos,
  };
}
