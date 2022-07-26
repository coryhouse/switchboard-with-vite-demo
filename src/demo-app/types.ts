export type NewTodo = {
  todo: string;
};

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

export type MockUser = {
  id: number;
  description: string;
  name: string;
  todos: Todo[];
};

export type DevToolsConfig = {
  user: MockUser;
  httpDelay: number;
  apiResponse: {
    getTodos: "none" | "many" | "error";
    addTodo: "success" | "error";
    markTodoCompleted: "success" | "error";
  };
};
