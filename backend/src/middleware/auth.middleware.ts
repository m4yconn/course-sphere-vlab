import { AuthService } from "../services/auth.service";
import { Request, Response, NextFunction } from "express";

export const AuthMiddleware = {
    autheticated: (req: Request, res: Response, next: NextFunction ) => {
        try {
            const bearerToken = req.headers.authorization;
            if(!bearerToken) {
                return res.status(401).json({ message: "Bearer Token ausente"});
            }

            const token = bearerToken.split(" ")[1];
            AuthService.verifyToken(token);

            next();
        } catch (err) {
            if(err instanceof Error) {
                return res.status(401).json({ message: err.message})
            }

            return res.status(500);
        }
    }
}