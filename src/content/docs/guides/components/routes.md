---
title: Routes
description: An introduction to ZentinelJS
---

A route is essentially a way to define how different URLs or web addresses are handled by the application. Think of it as a map that connects a URL to a specific controller and action within your application.

Here's the default route syntax.

```js
module.exports = function (app) {
	var UserController = app.controllers.User;

	app.post("/api/v1/users", UserController.createUser);
	app.get("/api/v1/users", UserController.getAllUsers);
	app.get("/api/v1/users/:user_id", UserController.getUser);
	app.patch("/api/v1/users/:user_id", UserController.updateUser);
	app.delete("/api/v1/users", UserController.deleteAllUsers);
	app.delete("/api/v1/users/:user_id", UserController.deleteUser);
};
```
`module.exports` is a fundamental feature in Node.js for exporting functions, objects, or other values from a module so they can be used in other files. In the context of routing, `module.exports` is used to encapsulate and organize your routing logic. Here’s why it’s beneficial:

#### Encapsulation and Organization:
By wrapping your route definitions in a function and exporting that function, you create a modular and organized way of managing routes. Each route configuration can be isolated in its own file, making your codebase easier to navigate and maintain.

```js
module.exports = function (app) {
    // Route definitions
};
```
This approach allows you to define a clear structure for how different URLs are handled, promoting better separation of concerns.

#### Dependency Injection:
When you export a function using module.exports, you can pass dependencies (like the app object in Express.js) into that function. This pattern, known as dependency injection, helps keep your routes flexible and adaptable, as you can easily swap out or modify dependencies without changing the route definitions themselves.

```js
module.exports = function (app) {
    var UserController = app.controllers.User;
    // Route definitions
};
```
Here, app.controllers.User is injected into the route configuration, allowing you to leverage the UserController methods directly.

#### Modular Codebase:
Exporting route configurations using module.exports allows you to keep your routing logic modular. Instead of having all routes defined in a single file, you can split them across multiple files based on functionality or domain. This modular approach enhances readability and makes it easier to manage large applications.

For example, you could have separate route files for users, products, and orders, each exporting its own function to configure routes:

```js
// routes/users.js
module.exports = function (app) {
    var UserController = app.controllers.User;
    app.post("/api/v1/users", UserController.createUser);
    // Other user routes
};
```
```js
// routes/products.js
module.exports = function (app) {
    var ProductController = app.controllers.Product;
    app.get("/api/v1/products", ProductController.getAllProducts);
    // Other product routes
};
```

#### Reusability:
Using module.exports allows you to reuse route configurations across different parts of your application. For instance, you might have a set of routes that are common across multiple environments (development, staging, production), and exporting them via module.exports enables easy reuse.

Example
Here’s a complete example demonstrating how module.exports is used in route configuration:

```js
module.exports = function (app) {
    var UserController = app.controllers.User;

    // Route to create a new user
    app.post("/api/v1/users", UserController.createUser);

    // Route to retrieve all users
    app.get("/api/v1/users", UserController.getAllUsers);

    // Route to retrieve a specific user by ID
    app.get("/api/v1/users/:user_id", UserController.getUser);

    // Route to update a user by ID
    app.patch("/api/v1/users/:user_id", UserController.updateUser);

    // Route to delete all users
    app.delete("/api/v1/users", UserController.deleteAllUsers);

    // Route to delete a specific user by ID
    app.delete("/api/v1/users/:user_id", UserController.deleteUser);
};
```
In this example, the routes are defined within a function that’s exported, allowing you to integrate these routes into your Express.js application setup. This structure supports a clean, organized, and modular approach to routing in your Node.js application.
