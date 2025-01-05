import express from "express"
import { createBlog, getBlogByCategory, getBlogFromSpecificUser, getBlogs } from "../controllers/blog.controller.js"
import { isAuthenticated } from "../middlewares/auth.middlware.js"
import { getPost } from "../controllers/user.controller.js"

const blogRouter = express.Router()

blogRouter.route("/create").post(isAuthenticated,createBlog)
blogRouter.route("/").get(getPost)
blogRouter.route("/user/:id").get(isAuthenticated,getBlogFromSpecificUser)
blogRouter.route("/blogs").get(getBlogs)
blogRouter.route("/blogs/:cat").get(getBlogByCategory)
export default blogRouter