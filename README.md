Store RESTAPI
About project

Default port is 5432.

Installation

Features

about
this project is a Fully secure Store api password-decryption and JWT authorization
created using Express and postgreSQL Database tested using Jasmine.
Installation and other scripts available
to install all required dependencies
npm install

package.json:

Scripts:
  "start": "nodemon build/server.js",
  "watch": "tsc-watch --esModuleInterop src/server.ts --outDir ./build --onSuccess 'node ./src/server.js'",
  "test": "set ENV=test&& npx db-migrate db:create store_front_test && npx db-migrate -e test up && npx jasmine && npx db-migrate db:drop store_front_test",
  "build": "npx tsc"

dependencies: 
     "@types/bcrypt": "^5.0.0",
    "@types/node": "^17.0.15",
    "bcrypt": "^5.0.1",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "db-migrate": "^0.11.13",
    "db-migrate-pg": "^1.2.2",
    "dotenv": "^15.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "nodemon": "^2.0.15",
    "pg": "^8.5.1",
    "postgres": "^1.0.2",
    "typescript": "^4.1.3"

devdependencies:
 "@types/body-parser": "^1.19.2",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.9",
    "@types/jsonwebtoken": "^8.5.8",
    "@types/nodemon": "^1.19.1",
    "@types/pg": "^7.14.7",
    "@types/supertest": "^2.0.11",
    "@types/typescript": "^2.0.0",
    "@typescript-eslint/eslint-plugin": "^5.11.0",
    "@typescript-eslint/parser": "^5.11.0",
    "eslint": "^8.8.0",
    "jasmine": "^4.0.2",
    "jasmine-spec-reporter": "^7.0.0",
    "jasmine-ts": "^0.3.3",
    "supertest": "^6.2.2",
    "ts-node": "^9.1.1",
    "tsc-watch": "^4.2.9"

database.json

Default port is 5432.
{
    "dev": {
      "driver": "pg",
      "host": "127.0.0.1",
      "database": "store_front",
      "user": "projectuser",
      "password": "secretpassword",
      "port": "5432"
    },
    "test": {
      "driver": "pg",
      "host": "127.0.0.1",
      "database": "store_front_test",
      "user": "projectuser",
      "password": "secretpassword",
      "port": "5432"
    }
  }

enviroment variables
database is running on default port (5432):

POSTGRES_HOST=127.0.0.1
POSTGRES_DB=store_front
POSTGRES_TEST_DB=store_front_test
POSTGRES_USER=projectuser 
POSTGRES_PASSWORD=secretpassword
ENV=dev
BCRYPT=speakfriendandenter
TOKEN_SECRET=thisismysecrettoken
SALT_ROUNDS=10
port=5432

to build production && start
npm run start

to test app
npm run test

testing 

tests should run in the exact order 
 {
  "spec_dir": "build/tests",
  "spec_files": [
   "./models/user.spec.js",
   "./models/product.spec.js",
   "./models/order.spec.js",
   "./endPoints/users.spec.js",
   "./endPoints/products.spec.js",
   "./endPoints/orders.spec.js",
    "./**/*[sS]pec.js"
  ],
  "helpers": [
      "helpers/**/*.js"
  ],
  "stopSpecOnExpectationFailure": false,
  "random": false
}

features

(users):
create user => token required                   Post request (http://localhost:3000/users)
index all users => token required               Get Get request (http://localhost:3000/users)
show user by id => token required               Get Get request (http://localhost:3000/users/1)
authenticate user data => token required        Post request (http://localhost:3000/users/authenticate )

(products):

1- create product => token required             Post request (http://localhost:3000/products)
2- index all products                           Get Get request (http://localhost:3000/products)
3- show product by id                           Get Get request (http://localhost:3000/products/1)

(orders):

1- create orders by user => token required              Post request (http://localhost:3000/orders)
2- index all orders by user => token required           Get request (http://localhost:3000/orders)     
3- show completed orders by user => token required     Get request (http://localhost:3000/orders/1)
4- currentRecord function  => token required            Get request (http://localhost:3000/order/current)
5- cart function  => token required                     Post request (http://localhost:3000/orders/1/products)

Urls:
Users:
1- Post request (http://localhost:3000/users)
2- Get request (http://localhost:3000/users)
3- Get request (http://localhost:3000/users/1)
4- Post request (http://localhost:3000/users/authenticate )

Products:
1- Post request (http://localhost:3000/products)
2- Get request (http://localhost:3000/products)
3- Get request (http://localhost:3000/products/1)

Orders: 
1-Post request (http://localhost:3000/orders)
2- Get request (http://localhost:3000/orders)  
3- Get request (http://localhost:3000/orders/1)
4- Get request (http://localhost:3000/order/current)
5- Post request (http://localhost:3000/orders/1/products)


