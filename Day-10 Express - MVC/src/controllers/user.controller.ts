import {User, UserModel} from "../models/user.model"

export async function getAllUsers(){
    const usersList = await UserModel.find().limit(10)
    return usersList;
}

export async function getUserById(id:string){
    const user = await UserModel.findById(id)
    return user;
}