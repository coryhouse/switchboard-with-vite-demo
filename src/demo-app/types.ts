export type NewTodo = {
  todo: string;
};

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

export interface User {
  id: number;
  name: string;
  todos: Todo[];
}

interface MockUser extends User {
  description: string;
}

export type DevToolsConfig = {
  user: MockUser;
  httpDelay: number;
  apiResponse: {
    getTodos: "none" | "many" | "error";
    addTodo: "success" | "error";
    markTodoCompleted: "success" | "error";
  };
};
