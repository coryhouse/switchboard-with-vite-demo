export type NewTodo = {
  todo: string;
};

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

export interface User {
  /** User's ID */
  id: number;

  /** User's name */
  name: string;
}

export interface MockUser extends User {
  /** Describes why this mock user exists and what makes the user unique. */
  description: string;

  /** Array of todos */
  todos: Todo[];
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
