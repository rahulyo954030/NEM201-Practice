import {Schema, model} from "mongoose"

export type User = {
    name : string;
    profile : string;
    email: string;
    karma : number;
}

const UserSchema = new Schema<User>({
    name : String,
    profile : String,
    email: String,
    karma : Number,
})

export const UserModel = model("user", UserSchema )
 
