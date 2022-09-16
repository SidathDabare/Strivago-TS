import { Model, Document, ObjectId } from "mongoose"

interface User {
name: string
maxGuest: string
location: string
description: string
user: ObjectId
}

export interface AccomadationDocument extends User, Document {}

export interface AccomadationModel extends Model<AccomadationDocument> {
  
}
