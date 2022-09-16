/** @format */

import { RequestHandler } from "express"
import createHttpError from "http-errors"
import { IUserRequest } from "./JWTMiddleware";


export const adminMiddleware: RequestHandler = (req: IUserRequest, res, next) => {
  if (req.user?.role !== "Host") {
    next(createHttpError(403, "Unauthorized access. Host only."));
  }
  next();
}
