import supertest from "supertest";
import app from "../../server";
import { userStore } from "../../models/users";

const user = new userStore();

const request = supertest(app);

describe('Products endPoints',() =>{
    let token: any;
     it("expect create route to return 200", async () => {
       await request
       .post('/users/authenticate')
       .send({
           userName: 'test',
           password: 'token'
       })
        .expect((x)=> {
            token = x.body.token
        })
        await request
       .post('/products')
       .set('Authorization', `Bearer ${token}`)
       .send({
           name:'coffee',
           price: 50,
           category: 'coffee'
       })
       .expect(200)
       
      
        // Post request http://localhost:3000/products
    })
    it("expect index route to return 200", async() => {
         await request
          .get("/products")
          .expect(200)
          // Get request http://localhost:3000/products
      });
      it("expect show route to return 200", async() => {
        await request
         .get("/products/1")
         .expect(200)
         // Get request http://localhost:3000/products/1
     });
    });