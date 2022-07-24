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
  name: string;
  todos: Todo[];
};

export type DevToolsOptions = {
  user: MockUser;
  httpDelay: number;
  apiResponse: {
    getTodos: "none" | "many" | "error";
    addTodo: "success" | "error";
    markTodoCompleted: "success" | "error";
  };
};
