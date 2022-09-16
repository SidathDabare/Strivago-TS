/** @format */

import mongoose from "mongoose"
import { AccomadationDocument, AccomadationModel } from "../../models/types/accomadation"

const { Schema, model } = mongoose

const AccomadationSchema = new Schema(
  {
    name: { type: String, required: true },
    maxGuest: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "Users" },
    //commentHistory: [{ comment: String, rate: Number, created_At: Date }],
  },
  {
    timestamps: true,
  }
)

//export default model<AccomadationDocument, AccomadationModel>("Accomadation", AccomadationSchema)
export default model("Accomadation", AccomadationSchema)
