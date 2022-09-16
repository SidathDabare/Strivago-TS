import { ObjectId } from "mongoose"

export type TokenPayload = {
  _id: ObjectId
  role: "Host" | "Guest"
}