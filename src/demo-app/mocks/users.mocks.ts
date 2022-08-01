import { MockUser } from "../types";

export const noTodos: MockUser = {
  id: 1,
  description: "No todos",
  name: "Cory",
  isAdmin: false,
  todos: [],
};

export const manyTodos: MockUser = {
  id: 2,
  description: "Many todos",
  name: "Elon",
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
  ],
};

export const mockUsers: MockUser[] = [noTodos, manyTodos];
