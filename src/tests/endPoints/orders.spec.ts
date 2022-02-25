import supertest from "supertest";
import app from "../../server";

const request = supertest(app);

describe('orders endPoints',() =>{
    let token :any
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
        .post('/orders')
        .set('Authorization', `Bearer ${token}`)
        .send({
            user_id: "1",
            status: "Active"
        })
        .expect(200)
        // Post request http://localhost:3000/orders
    })
     it("expect index route to return 200", async () => {
         await request
          .get("/orders")
          .set('Authorization', `Bearer ${token}`)
          .then((x) =>{
              expect(x.status).toEqual(200)
          })
          // Get request http://localhost:3000/orders
      }); 
      
      it("expect show route to return 200", async() => {
        await request
         .get("/orders/1")
         .set('Authorization', `Bearer ${token}`)
         .expect(200)
         // Get request http://localhost:3000/orders/1
     });
     it("expect current route to return 200", async() => {
        await request
         .get("/orders/current")
         .set('Authorization', `Bearer ${token}`)
         .expect(200)
         // Get request http://localhost:3000/orders/current
     });
     it("expect cart route to return 200", async() => {
        await request
         .post("/orders/1/products")
         .set('Authorization', `Bearer ${token}`)
         .expect(200)
         // Get request http://localhost:3000/orders/1/products
     });
});