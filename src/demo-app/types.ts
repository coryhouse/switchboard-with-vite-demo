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

  /** Set to true if the user is an admin */
  isAdmin: boolean;
}

export type HttpSetting = {
  /** Label to display in the devtools to describe the endpoint being mocked */
  label: string;

  /** Delay the response by a specified number of milliseconds. */
  delay: number;

  /** HTTP status code to return for this call */
  status: number;

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

export type DevToolsPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

/** The DevTools configuration */
export type DevToolsConfig = {
  /** The current user and their todos */
  user: MockUser;

  /** A global delay to apply to all mock API responses */
  delay: number;

  /** HTTP settings for mock APIs */
  http: HttpSetting[];

  /** Set to true to automatically hard reload the app when DevTools settings change */
  // autoReload: boolean;
};

/** Optional URL params for initializing the DevTools
 * Similar to DevToolsConfig, but designed for the URL so it has a slightly different structure,
 * and all properties are optional to keep the URL lean.
 */
export type UrlConfig = {
  userId?: number;
  delay?: number;
  position?: DevToolsPosition;
  http?: HttpSetting[];
};
