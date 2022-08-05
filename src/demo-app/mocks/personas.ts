import { Persona } from "../types";

export const noTodos: Persona = {
  id: 1,
  description: {
    todos: "No todos",
    role: "User",
  },
  name: "Cory",
  email: "cory@reactjsconsulting.com",
  password: "123",
  isAdmin: false,
  todos: [],
};

export const manyTodos: Persona = {
  id: 2,
  description: {
    todos: "Many todos",
    role: "admin",
  },
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
      todo: "Buy Twitter?",
      completed: false,
    },
  ],
};

export const mockUsers: Persona[] = [noTodos, manyTodos];