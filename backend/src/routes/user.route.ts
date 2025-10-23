import { UserController } from "../controllers/user.controller";
import express from "express"

const userRouter = express.Router();

userRouter.post("/users", UserController.create);
userRouter.get("/users/me", UserController.getAuthenticatedUser);

export { userRouter };