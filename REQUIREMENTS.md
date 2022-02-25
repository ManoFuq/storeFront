
# API Endpoints
## Products:
1- Create [token required]
'/products'[POST]

2- Index
'/products'[GET]

3- Show
'/products/:id'[GET]

## Users
1- Create [return token]
'/users'[POST]

2- Index [token required]
'/users'[GET]

3- Show [token required]
'/users/:id'[GET]

4- Authenticate[token required]
'/users/authenticate'[POST]

## Orders
1- Create [token required]
'/orders'[POST]

2- Index [token required]
'/orders'[GET]

3- Show [token required]
'/orders/:id'[GET]

4- Current Order by user (args: user id)[token required]
'/orders/:id'[GET]

5- CART [token required]
'/orders/:id/products'[POST]


# Data Shapes

## Products
### products Table UP
CREATE TABLE products (
    id SERIAL PRIMARY  KEY,
    name VARCHAR(150) NOT NULL,
    price integer NOT NULL,
    category VARCHAR(200) NOT NULL
);
### product table down
DROP TABLE products; 

## Users
### users Table UP
CREATE TABLE users (
    id SERIAL PRIMARY  KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    user_name VARCHAR(100) NOT NULL UNIQUE,
    password_digest VARCHAR NOT NULL
);
### user table down
DROP TABLE users;

## orders 
### Orders Table up
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(15) NOT NULL,
    user_id bigint REFERENCES users(id) NOT NULL
);
### Orders table down 
DROP TABLE orders;

## order-products
### order-products up 
CREATE TABLE order_products(
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES products(id)
)
### order-products down 
DROP TABLE order_products;
