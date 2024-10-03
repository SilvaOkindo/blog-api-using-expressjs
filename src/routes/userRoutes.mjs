import { Router } from "express"
import { createUser, editUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/userController.mjs"

const userRouter = Router()

userRouter.get("/users", getAllUsers)
userRouter.get("/users/:id", getUserById)
userRouter.post("/users", createUser)
userRouter.put("/users/:id", updateUser)
userRouter.patch("/users", editUser)
userRouter.delete("/users/:id", deleteUser)