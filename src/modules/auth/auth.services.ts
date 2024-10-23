
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import jwt from 'jsonwebtoken'
import config from "../../config";


const loginUser = async (payload: TLoginUser) => {
    const user = await User.findOne({ email : payload.email });

    // check user existence 
    if(!user){
        throw new AppError(401, 'user not exist')
    }
    // check password 
    if(user.password !== payload.password){
        throw new AppError(403, 'Password incorrect')
    }
    // create a token for user 
    const jwtPayload = { 
        name : user.name,
        email : user.email,
        role : user.role,
        image :user.image,
        }
    const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn : '30d'});

    user.password = ""
    return { user, token}
}

export const authServices = {
    loginUser
}