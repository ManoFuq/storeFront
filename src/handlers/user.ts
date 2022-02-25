import express ,{Request, Response} from 'express';
import {User, userStore} from '../models/users';
import jwt from 'jsonwebtoken';
import {auth} from './../middleware/auth';

// Set the class to a variable
const store = new userStore();

// The create function requires a token
const create = async (req:Request, res:Response) =>{
    try{
        const user:User = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: req.body.password
        }
        const newUser = await store.create(user)
        var token = jwt.sign(newUser , process.env.TOKEN_SECRET as string)
        res.send({token, newUser})
    }catch(error){
        throw new Error(`Unable to create new user ${error}`)
    }
}

// The index function requires a token
const index = async (_req: Request, res: Response) =>{
    try{

        const users = await store.index()
        res.send(users)
        return
        
    }catch(error){
        res.status(401)
        res.json(`Access denied, invalid token ${error}`)
        return
    }
  
    
}
// The show function requires a token
const show = async (_req:Request, res:Response) => {
    try{
        
        const single_user = await store.show(_req.body.id)
        res.send(single_user);
    }
    
 
    catch(error){
        res.status(401)
        res.send(`Access denied, no user to show ${error}`);
        
        return
    }
    
}



// The auth function signs a token
const authenticate = async (req: Request, res: Response) => {
    try {
        const u = await store.authenticate( req.body.userName, req.body.password)
        var token = jwt.sign({...u}  , process.env.TOKEN_SECRET as string);
        res.send({token, u})
    } catch(error) {
        res.status(401)
        res.send({ error })
    }
  }

  // Export the routes
const userRoutes= (app:express.Application) =>{
    app.post('/users',create)
    app.get('/users', auth, index)
    app.get('/users/:id', auth, show)
    app.post('/users/authenticate', authenticate)
}



export default userRoutes; 