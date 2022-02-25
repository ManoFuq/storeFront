import { productStore} from './../../models/products';
const product = new productStore();


describe('product Model Test', () => {
    describe('Models Test', () => {
      it('create method', () => {
        expect(product.create).toBeDefined();
      });
      it('index method', () => {
        expect(product.index).toBeDefined();
      });
      it('show method', () => {
        expect(product.show).toBeDefined();
      });
    })
    describe('Models Test are working', () => {
      it('Should create product', async() => {
        const result = await product.create({
          name: 'test',
          price: 50,
          category: 'test'
        })
        expect(result).toEqual({
          id:1,
          name: 'test',
          price: 50,
          category: 'test'
        })
      });
      it('Should index all products', async () => {
        const result = await product.index()
        expect(result).toEqual([{
          id:1,
          name: 'test',
          price: 50,
          category: 'test'
        }])
      });
      it('Should show product', async () => {
        const result = await product.show(1)
        expect(result).toEqual({
          id:1,
          name: 'test',
          price: 50,
          category: 'test'
        })
      });
    })
  })