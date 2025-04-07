import { Request, Response, NextFunction } from "express";

export const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  let authorization: string = req.get('authorization') ?? '';

  authorization = authorization.replace('Bearer ', '');

  if (authorization !== 'super_secure') { 
    res.status(401).json({message: `Unauthorized`});
  } else {
    next();
  }
};
