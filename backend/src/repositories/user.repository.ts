import { UserModel } from "../model/user.model"
import { User } from "../types/user"

export const UserRepository = {
    
    create: async (data: User) => {
        return await UserModel.create(data);
    },

    findByEmail: async (email: string) => {
        return await UserModel.findOne({ email });
    }
}