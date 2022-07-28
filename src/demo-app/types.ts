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

export type MockApi = {
  /** Label to display in the devtools to describe the endpoint being mocked */
  label: string;

  /** Delay the response by a specified number of milliseconds. */
  delay: number;

  /** HTTP status code to return for this call */
  status: number;
};

  /** Optional response message. Useful when errors are thrown. */
  response?: string;
};

export interface MockUser extends User {
  /** Describes why this mock user exists and what makes the user unique. */
  description: string;

  /** Array of todos */
  todos: Todo[];
}

export type DevToolsConfig = {
  /** The current user */
  user: MockUser;

  /** A global delay to apply to all mock API responses */
  delay: number;
  apiResponse: {
    getTodos: MockHttpResponse;
    addTodo: MockHttpResponse;
    markTodoCompleted: MockHttpResponse;
  };
};
