import { AuthService } from "../services/auth.service"
import type { Request, Response } from "express"

export const AuthController = {
    login: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body
            const result = await AuthService.login({ email, password })

            return res.status(200).json({ user: result.user, token: result.token});
        } catch (err) {

            if(err instanceof Error) {
                return res.status(401).json({ message: err.message })
            }

            return res.status(401)
        }
    }
}