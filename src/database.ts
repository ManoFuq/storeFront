// Import dotenv to create env variables
import  * as dotenv from 'dotenv';
// Import pool to be able to create the database
import { Pool } from 'pg';

dotenv.config();

// The env variables from .env file
const { 
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USER, 
    POSTGRES_PASSWORD,
    ENV,
    
 
} = process.env

let client: Pool

// The test database
if (ENV === 'test'){
    client =new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        
        
    })
    
}

// The dev database
else{ 
        client =new Pool({
            host: POSTGRES_HOST,
            database: POSTGRES_DB,
            user: POSTGRES_USER,
            password: POSTGRES_PASSWORD,
        });
    }

export default client;