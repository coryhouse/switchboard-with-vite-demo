import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../demo-app/apis/todo-apis";

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
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const toggleTodoMutation = useMutation({
    mutationFn: updateTodo,
    useErrorBoundary: true,
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    useErrorBoundary: true,
  });

  return {
    todos: getTodosQuery,
    addTodo: addTodoMutation,
    toggleTodo: toggleTodoMutation,
    deleteTodo: deleteTodoMutation,
  };
}
