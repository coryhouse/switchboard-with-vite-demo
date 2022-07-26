import { MockUser } from "../types";

export const mockUsers: MockUser[] = [
  {
    id: 1,
    description: "No todos",
    name: "Cory",
    todos: [],
  },
  {
    id: 2,
    description: "Some todos",
    name: "Tom",
    todos: [
      {
        id: 1,
        todo: "Eat chili",
        completed: false,
      },
    ],
  },
  {
    id: 3,
    description: "Many todos",
    name: "Elon",
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
  },
];
