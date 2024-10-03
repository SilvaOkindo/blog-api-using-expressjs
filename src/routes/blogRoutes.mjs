import { Router } from "express"
import { createBlog, deleteBlog, editBlog, getAllBlogs, getBlogById, updateBlog } from "../controllers/blogController.mjs"


export const blogRoutes = Router()


blogRoutes.get("/blogs", getAllBlogs)
blogRoutes.get("/blogs/:id", getBlogById)
blogRoutes.post("/blogs", createBlog)
blogRoutes.delete("/blogs/:id", deleteBlog)
blogRoutes.patch("/blogs/:id", updateBlog)
blogRoutes.put("/blogs/:id", updateBlog)

