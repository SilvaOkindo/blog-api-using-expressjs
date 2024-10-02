import express from "express"
import { blogRoutes } from "./routes/blogRoutes.mjs"
import { dbConnection } from "./config/dbConnection.mjs"

const app = express()

// database connection
dbConnection()



app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to my blog"})
})

app.use(blogRoutes)

const PORT = 3000

app.listen(PORT, () => {
    console.log("Serving is running on " + PORT)
})