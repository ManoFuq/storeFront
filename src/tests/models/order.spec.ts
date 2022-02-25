
import { orderStore } from '../../models/orders';
const order = new orderStore();

describe('Order Model Test', () => {
  describe('Models Test ', () => {
    it('create method', () => {
      expect(order.create).toBeDefined();
    });
    it('index method', () => {
      expect(order.index).toBeDefined();
    });
    it('show method', () => {
      expect(order.show).toBeDefined();
    });
    it('current method', () => {
      expect(order.currentRecord).toBeTruthy();
    });
    it('cart method', () => {
      expect(order.cart).toBeTruthy();
    })
  })
  describe('DataBase tests',  () => {
    it('create order', async () => {
      const result = await order.create({
        user_id: '1',
        status: 'Active'
      });
      expect(result).toEqual({
        id:1,
        user_id: '1',
        status: 'Active'
      })
    });
    it('index all orders', async () => {
      const result = await order.index()
      expect(result).toEqual([{
        id:1,
        user_id: '1',
        status: 'Active' 
      }])
    });
    it('show order', async () => {
      const result = await order.show(1);
      expect(result).toEqual({
        id:1,
        user_id: '1',
        status: 'Active'
      })
      expect(order.show).toBeDefined();
    });
    it('current order', async() => {
      const result = await order.currentRecord(1)
      expect(result).toEqual({
        id:1,
        user_id: '1',
        status: 'Active'
      });
    });
    it('cart function', async() => {
      const result = await order.cart(
          5,
         '1',
         '1'
      )
      expect(result).toEqual
    })
  })
})