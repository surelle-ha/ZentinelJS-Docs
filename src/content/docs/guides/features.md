---
title: Features
description: List of ZentinelJS Features
---

Below are the features of Zentinel.JS:

#### Interconnected Components
In Zentinel, the various components, such as controllers, models, and middleware, are designed to be seamlessly interconnected. This integration ensures that these components work together efficiently without the need for explicit imports between them. By avoiding direct imports, the bootstrapper minimizes the lines of code and reduces the overall file size, leading to a cleaner and more maintainable codebase. This design philosophy promotes a more modular and cohesive structure, making it easier for developers to manage and scale their applications.

#### Builtin Authentication using JSON Web Token.
Zentinel makes it easy to handle authentication right from the start, thanks to its built-in support for JSON Web Tokens (JWT) as Bearer Tokens. This feature simplifies the process, so developers can spend less time dealing with authentication and more time working on other parts of their application. By using JWT, Zentinel provides a secure and efficient way to manage user sessions without needing to maintain server-side state, which helps improve the app's scalability and performance. Plus, with JWT as Bearer Tokens, you get an extra layer of security, ensuring that only users with the right tokens can access protected parts of your application.

#### Builtin Role-Based Access Control as Authorization.
Zentinel comes equipped with a built-in Role-Based Access Control (RBAC) system for authorization. This feature allows you to easily manage user permissions and access levels, ensuring that only the right people can access specific parts of your application. With RBAC, you can define roles and assign them to users, making it simple to control who can do what within your app.

#### Configured Sequelize ORM for Databases
Zentinel has Sequelize ORM pre-configured for managing your databases. This makes it straightforward to interact with various databases using an object-relational mapping approach. With Sequelize, you can define models, perform database migrations, and handle complex queries with ease. It simplifies database management, allowing you to focus more on building your application rather than dealing with database intricacies.

#### Configured CORS, Helmet and Securities
Zentinel takes security seriously by having CORS, Helmet, and other security features pre-configured. CORS (Cross-Origin Resource Sharing) is set up to control which domains can access your resources, adding an extra layer of security. Helmet helps secure your app by setting various HTTP headers, protecting it from common vulnerabilities. These built-in security measures ensure that your application is safeguarded against a wide range of potential threats right from the start.

### Sequelize ORM Code Generator
Zentinel goes further by offering a Sequelize ORM code generator, automating repetitive tasks in database schema and model creation. This tool accelerates development by generating boilerplate code for Sequelize models, migrations, and seeders based on defined schemas. By automating these processes, developers can focus more on application logic and innovation, rather than manual database management.

### Deployment Ready
Zentinel is crafted with deployment-readiness in mind, making it easy to deploy your application seamlessly to production environments. It comes equipped with pre-configured settings tailored for different deployment scenarios, whether on cloud platforms or dedicated servers. This thoughtful design simplifies the deployment process, ensuring that your application moves smoothly from development to live environments. This approach not only reduces downtime but also enhances reliability, allowing you to focus more on delivering a robust user experience.