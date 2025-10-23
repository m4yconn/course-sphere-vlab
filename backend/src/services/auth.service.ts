import { UserService } from "./user.service"
import { verifyPassword } from "../utils/crypto";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export const AuthService = {
    login: async (data: { email: string, password: string }) => {
        const user = await UserService.findByEmail(data.email);
        
        const isValidPassword = verifyPassword(user.password, data.password);
        if(!isValidPassword) {
            throw new Error("Credenciais invalida")
        }

        const secret = process.env.AUTH_SECRET!
        const token = jwt.sign({ _id: user._id }, secret, { expiresIn: "1h"})

        return { user, token };
    }
}