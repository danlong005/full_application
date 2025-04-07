 import { Router, Request, Response } from "express";
import { User } from '../types/user.type';

export const todosRouter = Router();
 
let users: User[] = [];
 
todosRouter.get('/:id/todos', (req: Request, res: Response) => {
  let todos = users.find((user) => user.id === req.params.id)?.todos ?? [];
  res.status(200).json(todos);
});

todosRouter.post('/:id/todos', (req: Request, res: Response) => {
  let user = users.find((user) => user.id === req.params.id);

  if (user === undefined) {
    user = { id: req.params.id, todos: [] };
    users.push(user);
  }

  user?.todos.push(req.body as never);

  res.status(201).json(req.body);
});