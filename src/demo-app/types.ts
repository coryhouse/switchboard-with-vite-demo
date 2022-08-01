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

export type HttpSetting = {
  /** Label to display in the devtools to describe the endpoint being mocked */
  label: string;

  /** Delay the response by a specified number of milliseconds. */
  delay: number;

  /** HTTP status code to return for this call */
  status: number;

  /** Optional response message. Useful when errors are thrown. */
  response?: string;
};

export interface MockUser extends User {
  /** Describes why this mock user exists and what makes the user unique. */
  description: string;

  /** Array of todos */
  todos: Todo[];
}

/** The DevTools configuration */
export type DevToolsConfig = {
  /** The current user */
  user: MockUser;

  /** A global delay to apply to all mock API responses */
  delay: number;

  /** HTTP settings for each API */
  httpSettings: HttpSetting[];

  /** Set to true to automatically hard reload the app when DevTools settings change */
  // autoReload: boolean;
};

/** Optional URL params for initializing the DevTools */
export type UrlConfig = {
  userId?: number;
  delay?: number;
};
