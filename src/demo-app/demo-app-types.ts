import { RequestHandlerConfigBase } from "../types/types";

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
  "getUser",
  "getTodos",
  "addTodo",
  "deleteTodo",
  "toggleTodoCompleted",
] as const;

/** Union of app endpoint names. Used for DevTool labels */
export type Endpoint = typeof endpoints[number];

/** A User with related data */
// TODO: Separate User and Todos instead of extending User. This way the fact that a Persona is a User and a list of Todos is clearer.
export interface Persona extends User {
  /** Describes why this persona exists and what makes it unique.
   * Why this is an object:
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

/** Custom RequestHandler configuration settings that extend the base config */
export interface RequestHandlerConfig extends RequestHandlerConfigBase {
  /** Current User's Id */
  userId: number | "";
}
