import express from 'express';
import productRoutes from './handlers/product';
import userRoutes from './handlers/user';
import orderRoutes from './handlers/order'; 


const app: express.Application = express()
const address: string = "0.0.0.0:3000"
const port:number = 3000



app.use(express.json())
// Make the express app use the routes

orderRoutes(app);
userRoutes(app); 
productRoutes(app);


app.listen(3000, function () {
    console.log(`starting app on port: ${port} at address${address}`)
})

export default app;