import { Router } from "express"
import { getAllBlogs } from "../controllers/blogController.mjs"


export const blogRoutes = Router()


blogRoutes.use("/api/v1", getAllBlogs)