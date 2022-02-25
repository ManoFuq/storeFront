import supertest from "supertest";

import app from "../../server";

const request = supertest(app);

describe('Users endPoints',() =>{
    let token: string;
     it("expect create route to return 200",  async() => {
        await request
        .post('/users')
        .send({
            firstName: 'user',
            lastName: 'user',
            userName: 'test',
            password: 'token'
        })
        .expect((user) =>{
            expect(user.status).toEqual(200)
            token = user.body.token;
            
        })
        
        // Post request http://localhost:3000/users
    })
    it("expect index route to return 200", async () => {
         await request
          .get("/users")
          .set('Authorization', `Bearer ${token}`)
          .expect(200)
          // Get request http://localhost:3000/users
      });
      it("expect show route to return 200", () => {
        request
         .get("/users/1")
         .set('Authorization', `Bearer ${token}`)
         .expect(200)
         // Get request http://localhost:3000/users/1
     });
    });
    /* I created this one as top level suite to understand 
    the logic of top level suites as it was the easiest one to try it on */
     it("expect authenticate to return 200", async () => {
        await request.post('/users/authenticate')
        .send({
            userName: 'test',
            password: 'token'
        })
        .expect(200)
    });
 