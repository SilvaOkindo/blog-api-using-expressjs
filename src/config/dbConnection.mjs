import mongoose from "mongoose"

export const dbConnection = async () => {
    mongoose.connect("mongodb://localhost/blog")
        .then(() => console.log("DB connected"))
        .catch((err) => console.log(err))
}