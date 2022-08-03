import { DevToolsPosition } from "../DevTools";

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

  /** User's email */
  email: string;

  /** User's password */
  password: string;

  /** Set to true if the user is an admin */
  isAdmin: boolean;
}

export const endpoints = [
  "login",
  "getTodos",
  "addTodo",
  "deleteTodo",
  "toggleTodoCompleted",
] as const;

/** Union of app endpoint names. Used for DevTool labels */
export type Endpoint = typeof endpoints[number];

export type HttpSetting = {
  /** The HTTP endpoint being mocked */
  endpoint: Endpoint;

  /** Delay the response by a specified number of milliseconds. */
  delay?: number;

  /** HTTP status code to return for this call */
  status?: number;

  /** Optional response. */
  response?: string;
};

export interface MockUser extends User {
  /** Describes why this mock user exists and what makes the user unique.
   * NOTE: This is deliberately an object for 2 reasons:
   * 1. Assures new users are described clearly and consistently
   * 2. Helps avoid people changing a user without understanding why it exists as is
   * 3. Helps avoid creating multiple users with the same config.
   */
  description: {
    todos: string;
    role: string;
  };

  /** Array of todos */
  todos: Todo[];
}

/** The DevTools configuration */
export type DevToolsConfig = {
  /** Current User's Id */
  userId: number | "";

  /** A global delay to apply to all mock API responses */
  delay: number;

  /** HTTP settings for mock APIs */
  http: HttpSetting[];

  /** DevTool window position */
  position: DevToolsPosition;

  /** Set to true to open the DevTools window by default */
  openByDefault: boolean;

  /** Set to true to automatically hard reload the app when DevTools settings change */
  // autoReload: boolean;
};
