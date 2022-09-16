/** @format */

import { Request, RequestHandler } from "express"
import createHttpError from "http-errors"
import { verifyAccessToken } from "./tools"
import { UserDocument } from "../../models/types/users"

export interface IUserRequest extends Request {
  user?: Partial<UserDocument>
}

export const JWTAuthMiddleware: RequestHandler = async (req: IUserRequest, res, next) => {
  if (!req.headers.authorization) {
    next(
      createHttpError(
        401,
        "Please provide Bearer token in the authorization header!"
      )
    )
  } else {
    try {
      const token = req.headers.authorization.replace("Bearer ", "")

      const payload = await verifyAccessToken(token)

      req.user = {
        _id: payload!._id,
        role: payload!.role,
      }

      next()
    } catch (error) {
      console.log(error)
      next(createHttpError(401, "Token not valid!"))
    }
  }
}
