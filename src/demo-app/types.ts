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

export type MockHttpResponse = {
  /** HTTP delay for this call */
  delay: number;

  /** HTTP status code to return for this call */
  status: number;
};

export interface MockUser extends User {
  /** Describes why this mock user exists and what makes the user unique. */
  description: string;

  /** Array of todos */
  todos: Todo[];
}

export type DevToolsConfig = {
  user: MockUser;
  /** Global HTTP delay */
  delay: number;
  apiResponse: {
    getTodos: MockHttpResponse;
    addTodo: MockHttpResponse;
    markTodoCompleted: MockHttpResponse;
  };
};
