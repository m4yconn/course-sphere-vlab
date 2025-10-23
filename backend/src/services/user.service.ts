import { UserRepository } from "../repositories/user.repository";
import { User } from "../types/user";
import { hashPassword } from "../utils/crypto";

export const UserService = {
    create: async (data: User) => {
        const existingUser = await UserRepository.findByEmail(data.email);
        if(existingUser) {
            throw new Error("Usuario com este email ja existe");
        }

        data.password = hashPassword(data.password);
        const { _id, name, email} = await UserRepository.create(data);
        
        return { _id, name, email}; 
    }

}