import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: error.message
  });
}