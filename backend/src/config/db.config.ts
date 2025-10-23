import mongoose from "mongoose";

export async function connectDB() {
    try {
        const mongo = await mongoose.connect("mongodb://localhost:27017/sphere");
        console.log(`MongoDB connected: ${mongo.connection.host}`)
    } catch (err) {

        if(err instanceof Error) {
            console.log("Fail in MongoDB connect", err.message)
        }

        throw err;
    }
}