import { SwitchboardConfig } from "react-switchboard";
import { z } from "zod";

const todoSchema = z.object({
  id: z.number(),
  todo: z.string(),
  completed: z.boolean(),
});

export type Todo = z.infer<typeof todoSchema>;

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

// TODO: Eliminate the need for manually maintaining this type by composing a required endpointName with each msw RequestHandler. Or perhaps generate this by parsing the RequestHandler declaration before startup.
const handlers = [
  "POST /login",
  "GET /user",
  "GET /todos",
  "POST /todo",
  "DELETE /todo/:id",
  "PUT /todo/:id",
] as const;

/** Union of response handler names. Used for DevTool labels and within useWorker. */
export type Handler = (typeof handlers)[number];

/** A User with related data */
// TODO: Separate User and Todos instead of extending User. This way the fact that a Persona is a User and a list of Todos is clearer.
export interface Persona extends User {
  /** Array of todos */
  todos: Todo[];
}

export interface DevToolsConfig extends SwitchboardConfig {
  /** User ID to load */
  userId?: number;
}
