import {userStore} from './../../models/users';

const store = new userStore();

describe('User Model Tests', () => {
    
      it('create method', () => {
        expect(store.create).toBeDefined();
      });
      it('index method', () => {
        expect(store.index).toBeDefined();
      });
      it('show method', () => {
        expect(store.show).toBeDefined();
      });
      it('auth method', () => {
          expect(store.authenticate).toBeDefined();
      })
      it('Should create user', async() => {
        const result = await store.create({
          firstName: 'user',
          lastName: 'user',
          userName: 'testUser',
          password: 'token'
        })
        expect(result).toBeTruthy();
      });
      it('Should index all users', async () => {
        const result = await store.index()
        expect(result).toBeTruthy();
      });
      it('Should show user', () => {
        expect(store.show).toBeTruthy();
      });
      it("Should check exist user", async ()=>{
        const result = await store.authenticate('testUser','token')
        expect(result).toBeTruthy();
      })
  })

