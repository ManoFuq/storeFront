// Import the database
import client from "../database";

// Create type order and exports it
export type Order = {
  id?: number,
  user_id: string,
  status: string,
};

// Create class the contains the data and exports it

export class orderStore {
  // Index function
  async index(): Promise<Order[]> {
    
      const conn = await client.connect();
      const sql = "SELECT * FROM orders";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
 
  }

  // Show function
  async show(id: number): Promise<Order> {
    
      const conn = await client.connect();
      const sql = "SELECT * FROM orders WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
  
    // Create function
  }
  async create(order: Order): Promise<Order> {
    
      const conn = await client.connect();
      const sql =
        "INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *";
      const result = await conn.query(sql, [
        
        order.user_id,
        order.status,
      ]);
      conn.release();

      return result.rows[0];
  
  }

  // Get the active orders that user ordered by user id
  async currentRecord(id: number): Promise<Order> {
    const connect = await client.connect();
    const sql = "SELECT * FROM orders WHERE status='Active' AND user_id=($1)";
    const result = await connect.query(sql, [id]);
    const currentOrder: Order = result.rows[0];
    connect.release();
    return currentOrder;
  }

  // Cart functions contains the id of the order and the id of the product
  async cart(
    quantity: number,
    orderId: string,
    productId: string
  ): Promise<Order> {
 
      const sql =
        "INSERT INTO order_products ( quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *";
      //@ts-ignore
      const conn = await client.connect();

      const result = await conn.query(sql, [ quantity, orderId, productId]);

      const order = result.rows[0];

      conn.release();

      return order;
  
  }
}