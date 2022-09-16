// import supertest from "supertest"
// import dotenv from "dotenv"
// import mongoose from "mongoose"
// import { server } from "../server"
// import UserModel from '../api/users/model'
// import { verifyAccessToken } from "../lib/auth/tools"


// dotenv.config()

// const validUser = {
//   name: "Sidath",
//   surname: "Dabare",
//   email: "sidath@email.com",
//   password: "123456",
//   role: "Host"
// }


// const client = supertest(server)

// beforeAll(async () => {
//   if (process.env.MONGO_CON_URL) await mongoose.connect(process.env.MONGO_CON_URL)
//   const newUser = new UserModel(validUser)
//   await newUser.save()
// })

// afterAll(async () => {
//   await UserModel.deleteMany()
//   await mongoose.connection.close()
// })

// describe("testing database", () => {
//   test("should test that endpoint /accomodations returns an array", async () => {
//     const response = await client.get("/accomodations")
//     expect(Array.isArray(response.body)).toBe(true)
//   })

//   test("should test that /accomodations/:userId returns instances with id of the user specified in request.params.userId else 404", async () => {
//     const response = await client.post("/users/login").send({ email: validUser.email, password: validUser.password })
//     const token = await verifyAccessToken(response.body.accessToken)
//     await client.post("/accomodations").set("Authorization", `Bearer ${response.body.accessToken}`)
//       .send({
//         name: "Caorle",
//         host: token?._id,
//         description: 'close to see',
//         maxGuests: '5',
//         city: 'Caorle, Italy'
//       })

//     const list = await client.get(`/accomodations/${token?._id}`).set("Authorization", `Bearer ${response.body.accessToken}`)
//     expect(list.body[0].host).toEqual(token?._id)
//   })

//   test("should test that endpoint /me returns my information without a password", async () => {
//     const response = await client.post("/users/login").send({ email: validUser.email, password: validUser.password })
//     const me = await client.get("/users/me").set("Authorization", `Bearer ${response.body.accessToken}`)
//     console.log("BODY:", me.body)
//     expect(me.body._id).toBeDefined()
//     expect(me.body.password).not.toBeDefined()
//   })


// })