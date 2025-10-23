import { AuthController } from "../controllers/auth.controller";
import express from "express"

const authRouter = express.Router();

authRouter.post("/auth", AuthController.login);

export { authRouter }