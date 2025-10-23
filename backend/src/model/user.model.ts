import { User } from "@/types/user";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }
)


let UserModel: mongoose.Model<User> = mongoose.models.User
if(!UserModel) {
    UserModel = mongoose.model("User", UserSchema);
}

export { UserModel }