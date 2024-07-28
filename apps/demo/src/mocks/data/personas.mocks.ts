import { Persona } from "../../types/demo-app-types";
import { MockResponse } from "../mocks.types";

/** Describes why this persona exists and what makes it unique.
 * Why this is an object:
 * 1. Assures mock data is described clearly and consistently
 * 2. Avoids developers changing mock data without understanding why it exists as is
 * 3. Avoids developers creating multiple mock users with the same config.
 * 4. Supports searching or filtering the list programmatically since the metadata is structured.
 */
type Description = {
  /** Describe this user's mock todo data */
  todos: string;

  /** Describe this user's role  */
  role: "user" | "admin";
};

type MockPersona = MockResponse<Persona, Description>;

export const noTodos: MockPersona = {
  id: 1,
  description: {
    todos: "No todos",
    role: "user",
  },
  response: {
    id: 1,
    name: "Cory",
    email: "cory@reactjsconsulting.com",
    password: "123",
    isAdmin: false,
    todos: [],
  },
};

export const manyTodos: MockPersona = {
  id: 2,
  description: {
    todos: "Many todos",
    role: "admin",
  },
  response: {
    id: 2,
    name: "Elon",
    email: "elon@tesla.com",
    password: "123",
    isAdmin: true,
    todos: [
      {
        id: 1,
        todo: "Ship Model S",
        completed: true,
      },
      {
        id: 2,
        todo: "Ship Model 3",
        completed: true,
      },
      {
        id: 3,
        todo: "Ship Model X",
        completed: true,
      },
      {
        id: 4,
        todo: "Ship Cybertruck",
        completed: false,
      },
      {
        id: 5,
        todo: "Ship Semi",
        completed: false,
      },
      {
        id: 6,
        todo: "Buy Twitter",
        completed: false,
      },
    ],
  },
};

export const mockPersonas: MockPersona[] = [noTodos, manyTodos] as const;
