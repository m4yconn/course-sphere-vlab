import express, { Request, Response } from "express"
import { connectDB } from "./config/db.config"

const app = express();
app.use(express.json());


async function startServer() {
    try {
        await connectDB();
        app.listen(3000, () => console.log("server is running"));
    } catch(err) {
        console.log("Fail in start server");
        process.exit(1);
    }
}

startServer();