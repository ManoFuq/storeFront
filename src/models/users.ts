// Import the database
import client from '../database';
// Import bcrypt library and pepper to be able to hash the password
import bcrypt from 'bcrypt'; 

// Create the user type and exports it
export type User ={
    id?:number,
    firstName:string,
    lastName:string,
    userName:string,
    password:string,
}
// Create class the contains the data and exports it
export class userStore {

    // Index function
    async index(): Promise<User[]>{
   
            const conn = await client.connect();
            const sql = 'SELECT * FROM users';
            const result = await conn.query(sql)
            conn.release();
            return result.rows;   
      
    }
    // Show function
    async show(id: number): Promise<User> {
        
            const conn = await client.connect();
            const sql = 'SELECT * FROM users WHERE id=($1)';
            const result = await conn.query(sql, [id])
            conn.release();
            return result.rows[0]
      
    }

   // Create function
    async create (u:User): Promise<User> {
        
            const conn = await client.connect();
            const sql = 'INSERT INTO users (first_name, last_name, user_name, password_digest) VALUES($1, $2, $3, $4) RETURNING * ';
            // Creating hashed password at sign-up 
            const hash = bcrypt.hashSync(
                u.password as string ,
                parseInt(process.env.SALT_ROUNDS as string)
            );

            // Return the hashed password with the user params
            const result = await conn.query(sql,[u.firstName, u.lastName ,u.userName, hash])
            const user = result.rows[0];
            conn.release()
            return user;
       
    }
    

    // Auth function checks is the user already exists to login
    async authenticate(userName: string, password: string): Promise<User | null> {
        const conn = await client.connect()
        const sql = 'SELECT * FROM users WHERE user_name=($1)'
        
        
        const result = await conn.query(sql, [userName])
        const user = result.rows[0]
        conn.release()
    
        if(user) {
          // Compare the password that user created with the password he tries to sign-in with
          const x = bcrypt.compareSync(password as string  ,user.password_digest as string)
          if(x){
            return user
          }
        }
          
        return null
      }
      async Authorization (userName: string, id: string): Promise<User | null> {
        const conn = await client.connect()
        const sql = 'SELECT * FROM users WHERE user_name=($1) AND id=($2)'
         
        const result = await conn.query(sql, [userName, id])
    
          const user = result.rows[0]

          return user
        
      }
      
}
