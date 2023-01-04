# Udacity storefront backend

database schema and and API route information can be found in the [requirements doc](REQUIREMENTS.md).

## technologies

- Runtime: Node.js
- server app: Express
- Language: TypeScript
- Database: Postgres
- Testing: Jasmine and Supertest

## Installation Instructions

### Test mode

IMPORTANT : if you are using windows operating system so kindly replace
test script line in package.jsom with this line of code :-
{"test": "db-migrate up -e test && npm run build &&set NODE_ENV=test&& jasmine && npm run reset-test-db"
}

To install the app's dependencies and use the app in test mode, run the following:

`npm i && npm run create-test-db`

To run the tests execute `npm run test`.

NOTE: It is not necessary to run `db-migrate up` at the command line because its embeded in scripts.

### Dev mode

To install the app's dependencies and use the app in dev mode, run the following:

`npm i && npm run db:up`

To run the app in dev mode execute `npm run dev`.

### Ports

The application runs on port `3000` with database on `5432`.

### Environment variables

practise of using env

```
NODE_ENV=dev
PORT=3000

POSTGRES_HOST=localhost
POSTGRES_USER=admin
POSTGRES_PASSWORD=secret
POSTGRES_DB=postgres
POSTGRES_TEST_DB=test_db
POSTGRES_PORT=5432

```
