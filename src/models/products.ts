// Import the database 
import client from '../database';

// Create the product type and exports it
export type Product = {
    id?: number;
    name: string;
    price: number;
    category: string;
};

// Create class the contains the data and exports it
export class productStore {

    // Index function
    async index(): Promise<Product[]>{
        
        
            const conn = await client.connect()
            const sql = 'SELECT * FROM products';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
            

}

// Show function
    async show(id: number): Promise<Product> {
        
            const conn = await client.connect();
            const sql = 'SELECT * FROM products WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0]
            
    }
    // Create function
    async create(p: Product): Promise<Product | undefined> {
        
            const conn = await client.connect();
            const sql = 'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *';
            const result = await conn.query(sql, [ p.name, p.price, p.category])
            conn.release();
            
            return result.rows[0] ;
    }
}
