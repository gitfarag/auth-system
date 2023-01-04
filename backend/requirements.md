# API Requirements

imagination of the ux withing shopping in storefront webapp

## API Endpoints

## Products

---

- Index (GET `/api/products/` )
- Show (GET `/api//product?id`) query
- Create (POST `/api/products/add`) { Token Required }
- Update (PUT `/api/products/:id`) { Token Required }
- Delete (DELETE `/api/products/:id`) { Token Required }

---

#### Users

- Index (GET `/api/auth/all`) { Token Required }
- login (POST `/api/auth/login`)
- Create (POST `/api/auth/register`)
- Update (PUT `/api/auth/update`) { Token Required }
- Delete (DELETE `/api/auth/delete`) { Token Required }

#### Order

- Index (GET `/api/orders`) { Token Required }
- Show (GET `/api/orders/current/:id`) { Token Required }
- Create (POST `/api/orders/create`) { Token Required }
  note : this following endpoint only update the status of order
- Update (PUT `/api/orders/current/update/:id`) { Token Required }
- Delete (DELETE `/api/orders/trash/:id`) { Token Required }
- ADD-TO-CART (POST `/api/orders/order/product`) { Token Required }
- SHOW-PRODUCTS-IN-CART (GET `/api/orders/shopping-cart/:uoid`) { Token Required }

## Data Shapes

#### Product

The table includes the following fields:

- id
- name
- cat
- price
- qty
  The SQL schema for this table is as follows:

```sql
create table products (
    id serial primary key,
    name varchar(80) not null,
    cat varchar(80) not null,
    price float not null,
    qty integer not null
);
```

#### User

The table includes the following fields:

- id
- username
- firstName
- name
- password
- token
  The SQL schema for this table is as follows:

```sql
create table users (
    id serial primary key,
    name varchar(80) not null,
    username varchar(80) not null,
    password varchar(80) not null,
    token varchar(80)
);
```

#### Orders

The table includes the following fields:

- id
- uid
- status
  The SQL schema for this table is as follows:

```sql

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    uid bigint REFERENCES order_product(uid) ON DELETE CASCADE,
    status varchar(100) NOT NULL
);
```

#### Order_product

The table includes the following fields:

- id
- uid
- pid
- qty
  The SQL schema for this table is as follows:

```sql

CREATE TABLE order_product (
    id SERIAL PRIMARY KEY,
    uid bigint REFERENCES users(id) ON DELETE CASCADE,
    pid bigint REFERENCES products(id) ON DELETE CASCADE,
    qty INT NOT NULL
);
```

## appreciate your time sir :)\*
