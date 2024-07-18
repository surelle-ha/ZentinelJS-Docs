---
title: Change Logs
description: A reference page in my new Starlight docs site.
---

## Recently Added
The Project is constantly being optimized and updated. Here are the new features I recently implemented.
- Rate Limit - a mechanism used to control the number of requests a server receives within a certain period of time. It helps to prevent abuse, ensure fair usage, and protect the server from being overwhelmed by excessive requests, which could lead to performance degradation or denial of service.
```js
/* Default Rate Limit Configuration */
const RateLimit = rateLimit({
    /* 15 minutes */
	windowMs: 15 * 60 * 1000, 

    /* Request Limit Per IP Per Window */
	limit: 100, 

    /* draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header */
	standardHeaders: 'draft-7',

    /* Disable the `X-RateLimit-*` headers */
	legacyHeaders: false, 
})
```
- Sequelize ORM - Object/Relational Mapping (ORM) framework for Node. js applications. It enables JavaScript developers to work with relational databases, including support for features such as solid transaction support, relations, read replication, and more.

## Goal Checklist
<input type="checkbox" checked disabled> Add Rate Limit <br>
<input type="checkbox" checked disabled> Integrate Mongoose ORM <br>
<input type="checkbox" checked disabled> Integrate Sequelize ORM <br>
<input type="checkbox" disabled> Add Socket.io as Native Feature <br>
<input type="checkbox" disabled> Add Logger Utility <br>
<input type="checkbox" disabled> Recreate Zentinel CLI <br>