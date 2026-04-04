# Backend Task – REST API Project

## Overview
- This project is a backend application built using Node.js and Express  
- It demonstrates how REST APIs work and how data is handled on the server  
- Data is stored in a JSON file instead of a database  

---

## Features
- Create and run an Express server  
- REST API endpoints:
  - GET /items → Fetch all items  
  - POST /items → Add a new item  
  - DELETE /items/:id → Delete an item  
  - PUT /items/:id → Update an item  
  - GET /items/search?q=keyword → Search items  
- Unique ID generation using timestamps  
- Basic input validation  
- Error handling for invalid routes and missing data  
- Clean and modular folder structure  

---

## Tech Stack
- JavaScript  
- Node.js  
- Express.js  

---

## Project Structure
- server.js → Entry point of the application  
- routes/ → Handles API endpoints  
- controllers/ → Contains business logic  
- data/ → Stores JSON data  
- .gitignore → Excludes unnecessary files  

---

## How to Run Locally
1. Clone the repository  
2. Install dependencies:
   npm install  
3. Start the server:
   node server.js  
4. Open:
   http://localhost:3000  

---

## API Testing
- Tested using Thunder Client (VS Code)  

---

## Deployment
- Project is deployed here:  
👉 https://backend-task-production-0955.up.railway.app/items

---

## What I Learned
- How REST APIs work  
- How backend projects are structured  
- How routing and controllers interact  
- How to manage data without a database  
- Basics of Git and GitHub  
