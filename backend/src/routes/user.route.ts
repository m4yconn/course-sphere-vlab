import { UserController } from "../controllers/user.controller";
import express from "express"

const userRouter = express.Router();

userRouter.post("/users", UserController.create);


export { userRouter };