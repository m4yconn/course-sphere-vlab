import { UserService } from "./user.service"
import { verifyPassword } from "../utils/crypto";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

const authSecret = process.env.AUTH_SECRET!

export const AuthService = {
    login: async (data: { email: string, password: string }) => {
        const user = await UserService.findByEmail(data.email);
        
        const isValidPassword = verifyPassword(user.password, data.password);
        if(!isValidPassword) {
            throw new Error("Credenciais invalida")
        }

        const token = jwt.sign({ _id: user._id }, authSecret, { expiresIn: "1h"})

        return { user, token };
    },

    verifyToken: (token: string) => {
        try {
            return jwt.verify(token, authSecret) as { _id: string };
        }
        catch(err) {
            throw new Error("Token invalido")
        }
    }
}