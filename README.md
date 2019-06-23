# NodeJS RESTful API

Simple CRUD with NodeJS

## Getting Started

To run the server, open the terminal and go to the directory
```
cd NodeJS_RESTfulAPI
npm install
node index.js

```

### Open any Browser
Type in the url

```
localhost:3000/inventory/items
```

## DATABASE CONFIGURATION

```
host: 'localhost',
    user: 'root',
    database: 'inventory'
```

### ADDITIONAL APPS
POSTMAN for checking the API ROUTES
### API ROUTES

To get all data in items table(GET)

```
localhost:3000/inventory/items
```
To get a single data in items table(GET)

```
localhost:3000/inventory/items/1
```
To add a single data in items table(POST)

```
localhost:3000/inventory/items
```
Sample JSON
```
{
"name":"Shampoo",
"qty": 100;
"amount": 6
}
```
To update a single data in items table(PUT)

```
localhost:3000/inventory/items/1
```
Sample JSON
```
{
"name":"Shampoo",
"qty": 100;
"amount": 6
}
```
To delete a single data in items table(DELETE)
```
localhost:3000/inventory/items/1
```









