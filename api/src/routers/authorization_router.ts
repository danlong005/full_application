import { Router, Request, Response } from "express";

export const authorizationRouter = Router();


authorizationRouter.get('/token', (req: Request, res: Response) => {

  const username: string = req.query.username as string ?? '';
  const password: string = req.query.password as string ?? '';

  if (username !== 'dlong' && password !== 'dlong') throw new Error(`Unauthorized`);

  res.status(200).json({
    auth_token: "super_secure"
  });
})