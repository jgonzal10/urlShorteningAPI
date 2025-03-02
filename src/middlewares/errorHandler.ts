import { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import { logger } from "../utils/logger";

export const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err);
  res.status(500).json({ error: "Internal Server Error" });
};
