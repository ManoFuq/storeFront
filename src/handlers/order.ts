import express, { Request, Response } from "express";
import { Order, orderStore } from "../models/orders";
import {auth} from "./../middleware/auth";

// Set the class to a variable
const store = new orderStore();

// The index function
const index = async (_req: Request, res: Response) => {
  try {
    const orders = await store.index();
    res.json(orders);
  } catch (error) {
    throw new Error(`Could not show all the orders ${error}`);
  }
};

// The show function
const show = async (_req: Request, res: Response) => {
  try {
    const singleOrder = await store.show(_req.body.id);
    res.json(singleOrder);
  } catch (error) {
    throw new Error(`Could not show the order ${error}`);
  }
};

// The create function
const create = async (req: Request, res: Response) => {
  const order: Order = {
    id: req.body.id,
    user_id: req.body.user_id,
    status: req.body.status,
  };
  try {
    const newOrder = await store.create(order);
    res.json(newOrder);
  } catch (error) {
    throw new Error(`Could not create the order ${error}`);
  }
};

// Get the active orders that user ordered by user id requires a token
const currentRecord = async (req: Request, res: Response) => {
  const id: number = req.body.id;
  try {
    const result = await store.currentRecord(id);
    res.send(result);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

//The cart function
const cart = async (req: Request, res: Response) => {
  const quantity: number = req.body.quantity;
  const orderId: string = req.body.orderId;
  const productId: string = req.body.productId;

  try {
    const addedProduct = await store.cart( quantity, orderId, productId);
    res.json(addedProduct);
  } catch (error) {
    res.status(400);
    throw new Error(`${error}`);
  }
};

// Export the routes
const orderRoutes = (app: express.Application) => {
  app.get("/orders", auth, index);
  app.get("/orders/:id", auth, show);
  app.post("/orders", auth, create);
  app.post("/orders/:id/products", auth, cart);
  app.get("/orders/current", auth, currentRecord);
};

export default orderRoutes;