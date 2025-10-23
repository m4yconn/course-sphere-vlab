import { Request, Response } from "express"
import { UserService } from "../services/user.service"

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
    }

}