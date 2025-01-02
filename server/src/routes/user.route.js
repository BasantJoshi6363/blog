import express from "express"
import { createusUser, loginUser, logoutUser } from "../controllers/user.controller.js"

const userRouter = express.Router()

userRouter.route("/api/v1/create").post(createusUser)
userRouter.route("/api/v1/login").post(loginUser)
userRouter.route("/api/v1/logout").get(logoutUser)

export default userRouter