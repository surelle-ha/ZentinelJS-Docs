---
title: Models
description: An introduction to ZentinelJS
---

In ZentinelJS, the Model serves as the core component responsible for managing and interacting with the data of the application. It defines the structure of the application's data, encapsulating all data-related logic, including validation, manipulation, and business rules. By interacting with a database, the Model facilitates the retrieval, storage, and updating of data.

Below is an example of a User model defined using Sequelize:
```js
const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize) {
	class User extends Model {}

	User.init(
		{
			first_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			middle_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			}
		},
		{
			sequelize,
			modelName: "User",
			timestamps: true,
		}
	);

	return User;
};
```
A Model typically represents a table in the database. Each property of the Model corresponds to a column in the table. Models are defined using an Object-Relational Mapping (ORM) library, such as Sequelize in this example, which abstracts database operations and provides an intuitive interface for interacting with data.

##### Encapsulation and Organization
By defining your Models in a modular way and exporting them, you create a well-organized and maintainable structure for managing your application's data. Each Model can be isolated in its own file, making it easier to navigate and update your data management logic.

```js
module.exports = function (sequelize) {
	class User extends Model {}

	User.init(
		// Model definition
	);

	return User;
};
```
This approach supports clear separation of concerns, allowing you to define and manage your data structure independently from other application components.

##### Data Definition and Validation
Each property in the Model represents a column in the database table, with specific data types and constraints:
- Data Types: Defines the type of data that can be stored in each field (e.g., `DataTypes.STRING`, `DataTypes.INTEGER`).
- Constraints: Specifies rules for data entry, such as allowNull: false to ensure a field is not left empty, or unique: true to enforce uniqueness.

```js
first_name: {
	type: DataTypes.STRING,
	allowNull: false,
}
```
These definitions ensure that your data adheres to the expected format and business rules before being saved to the database.

##### Timestamps and Metadata
The timestamps: true option automatically adds createdAt and updatedAt fields to your Model. These fields help track when records are created and last updated, providing useful metadata for managing data history.

```js
{
	sequelize,
	modelName: "User",
	timestamps: true,
}
```

##### Modular Codebase
Exporting Models using module.exports allows you to keep your data definitions modular. Instead of placing all Models in a single file, you can create separate files for each Model, promoting a cleaner and more organized codebase.

For example, you might have separate files for different entities:

```js
// models/user.js
module.exports = function (sequelize) {
	// User model definition
};
```
```js
// models/product.js
module.exports = function (sequelize) {
	// Product model definition
};
```
##### Reusability
Using module.exports for Model definitions enables easy reuse and integration across different parts of your application. You can import and use these Models wherever needed, ensuring consistent data management practices.

Example:
```js
const { User, Product } = app.models; 
```