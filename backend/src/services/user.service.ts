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
        return await UserRepository.create(data);
    },

    findByEmail: async (email: string) => {
        const user = await UserRepository.findByEmail(email);
        if(!user) {
            throw new Error("Email invalido");
        }
        
        return user
    },

    findByID: async (id: string) => {
        return await UserRepository.findByID(id);
    }

}