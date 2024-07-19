---
title: Environment Variables
description: An introduction to ZentinelJS
---
This is the default environtment variables for ZentinelJS. 

```bash
SERVER_NAME = "Zentinel"
SERVER_ENV = "local"
SERVER_VER = "v1.0.0"
SERVER_BASE = "http://localhost"
SERVER_PORT = 8800
JWT_SECRET = "test"

DATABASE_HOST = "localhost"
DATABASE_PORT = 3306
DATABASE_NAME = "zentinel_db"
DATABASE_USER = "root"
DATABASE_PASS = "Izukishun@30root"
DATABASE_TYPE = "mysql"
```
Below is an in-depth explanation for each environment variable. These environment variables play crucial roles in configuring and managing the application. By understanding the purpose and function of each variable, you can ensure that the application operates smoothly and efficiently. Each variable is designed to hold specific information or settings that are utilized throughout the application, contributing to its overall functionality and performance. 

##### `SERVER_NAME`
- The name of the server or application, typically used to identify the server in logs and monitoring tools.
- **Type:** String
- **Possible Values:** Any valid string representing the server name (e.g., "`MyAppServer`", "`AuthServer`").

##### `SERVER_ENV`
- The environment in which the server is running, such as development, testing, or production.
- **Type:** String
- **Possible Values:** "`development`", "`testing`", "`production`"

##### `SERVER_VER`
- The version of the server or application, useful for tracking deployments and ensuring compatibility with other services.
- **Type:** String
- **Possible Values:** Any valid version string (e.g., "`1.0.0`", "`2.1.3-beta`")

##### `SERVER_BASE`
- The base URL or path for the server, used to construct full URLs for API endpoints and other resources.
- **Type:** String
- **Possible Values:** Any valid URL path (e.g., "`/`", "`/api/v1`")

##### `SERVER_PORT`
- The port number on which the server listens for incoming HTTP requests.
- **Type:** Integer
- **Possible Values:** Any valid port number (e.g., `80`, `443`, `3000`)

##### `JWT_SECRET`
- The secret key used to sign JSON Web Tokens (JWTs), ensuring the integrity and authenticity of tokens.
- **Type:** String
- **Possible Values:** Any sufficiently long and complex string (e.g., "`supersecretkey`", "`3Hhfd93!fhDk0`")

##### `DATABASE_HOST`
- The hostname or IP address of the database server, used to establish a connection to the database.
- **Type:** String
- **Possible Values:** Any valid hostname or IP address (e.g., "`localhost`", "`192.168.1.100`")

##### `DATABASE_PORT`
- The port number of the database server, used to establish a connection to the database.
- **Type:** Integer
- **Possible Values:** Any valid port number (e.g., "`5432`" for PostgreSQL, "`3306`" for MySQL)

##### `DATABASE_NAME`
- The name of the specific database to connect to within the database server.
- **Type:** String
- **Possible Values:** Any valid database name (e.g., "`myappdb`", "`users_db`")

##### `DATABASE_USER`
- The username used to authenticate with the database server.
- **Type:** String
- **Possible Values:** Any valid username (e.g., "`admin`", "`dbuser`")

##### `DATABASE_PASS`
- The password used to authenticate with the database server.
- **Type:** String
- **Possible Values:** Any sufficiently strong password (e.g., "`password123`", "`S3cureP@ssw0rd`")

##### `DATABASE_TYPE`
- The type of database being used, such as postgresql, mysql, sqlite, etc. This is used to configure the database connection appropriately.
- **Type:** String
- **Possible Values:** "`postgresql`", "`mysql`", "`sqlite`", "`mongodb`", "`oracle`"



