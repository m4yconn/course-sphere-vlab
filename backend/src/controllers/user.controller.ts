import { Request, Response } from "express"
import { UserService } from "../services/user.service"
import { AuthService } from "../services/auth.service"

export const UserController = {
    
    create: async (req: Request, res: Response) => {
        try {
            const { name, password, email } = req.body
            const user = await UserService.create({
                name, password, email
            });

            return res.status(201).json({ user });
        } catch(err) {

            if(err instanceof Error) {
                res.status(400).json({ message: err.message })
            }
            
            res.status(500);
        }
    },

    getAuthenticatedUser: async ( req: Request, res: Response ) => {
        try {
            const bearerToken = req.headers.authorization
            if(!bearerToken) {
                return res.status(401).json({ message: "Bearer Token ausente."})
            }

            const token = bearerToken.split(" ")[1];
            const payload = AuthService.verifyToken(token);
            const user = await UserService.findByID(payload._id)

            return res.status(200).json(user);
        } catch (err) {

            if(err instanceof Error) {
                return res.status(401).json({ message: err.message })
            }

            return res.status(500);
        }
    }

}