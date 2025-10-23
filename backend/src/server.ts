import { connectDB } from "./config/db.config"
import express from "express"

import { userRouter } from "./routes/user.route";

const app = express();

app.use(express.json());
app.use(userRouter);

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