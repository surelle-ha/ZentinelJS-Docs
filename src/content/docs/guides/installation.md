---
title: Installation
description: How to install Zentinel JS
---

To install and start developing with Zentinel, follow these steps:
Clone the repository:
```bash 
git clone https://github.com/surelle-ha/zentineljs.git
cd zentineljs
npx rimraf ./.git
```
Navigate to the directory and install the dependencies using `npm`:
```bash 
npm install
```
Set the environment variables
```bash
cp .env.example .env
# open .env and modify the environment variables (if needed)
```
Migrate Database
```bash 
npx sequelize-cli db:migrate
```
Seed Default Data
```bash 
npx sequelize-cli db:seed:all
```
Start Server
```bash
npm run dev
```