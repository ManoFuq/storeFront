import jwt from 'jsonwebtoken';
import {Request , Response} from 'express'

import {userStore} from './../models/users';

const person = new userStore();

export const auth = async (req:Request | any, res:Response, next:any) =>{
    try{
        const token  = req.header('Authorization')
        .split(' ')[1]
        const decode: any = jwt.verify(token, process.env.TOKEN_SECRET as string)
        const user = await person.Authorization(decode.user_name , decode.id)
        if(!user){
            throw new Error()
        }
        req.user = user
        next()
    }catch(error){
        res.status(401)
        .send('failed auth')
    }
}
