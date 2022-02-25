import express ,{Request, Response} from 'express';
import { Product, productStore } from '../models/products';
import {auth} from './../middleware/auth';

// Set the class to a variable
const store = new productStore();

// The index function
const index = async (_req: Request, res: Response) =>{
    try{ 
        const products = await store.index();
        res.json(products);
    }catch(error){
        res.status(401)
        res.json(`Access denied ${error}`);
        
    };
};

// The show function
const show = async (req:Request, res:Response) => {
    try{
        const single_product = await store.show(req.body.id);
        res.json(single_product);
    }catch(error){
        throw new Error(`Could not find product  Error: ${error}`);
    };
};

// The create function requires a token
const create = async (req:Request, res:Response) =>{
   
    try{
        const product:Product = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        };
        const newProduct = await store.create(product);
        res.json(newProduct);
    }catch(error){
        throw new Error(`Invalid entry ${error}`);
    };
};

  // Export the routes
const productRoutes= (app:express.Application) =>{
    app.get('/products',index);
    app.get('/products/:id', show);
    app.post('/products', auth , create);
};

export default productRoutes;