Backend Task – REST API Project

This project is a simple backend application built using Node.js and Express. The goal was to understand how APIs work, how data is handled on the server side, and how different parts of a backend system are structured.

Overview

The application allows basic operations on items such as creating, reading, updating, deleting, and searching. Each item contains an ID, title, description, and a timestamp.

Instead of using a database, data is stored in a JSON file to keep things simple and focused on backend logic.

Features
Create and run an Express server
REST API endpoints:
GET /items → fetch all items
POST /items → add a new item
DELETE /items/ → delete an item
PUT /items/ → update an item
GET /items/search?q=keyword → search items by title
Unique ID generation using timestamps
Basic input validation
Error handling for invalid routes and missing data
Clean and modular folder structure
Tech Stack
JavaScript
Node.js
Express.js
Project Structure
server.js → Entry point of the application
routes/ → Handles API routes
controllers/ → Contains logic for each API
data/ → Stores JSON data
.gitignore → Excludes unnecessary files
How to Run Locally
Clone the repository

Install dependencies:

npm install

Start the server:

node server.js

Open in browser or API client:

http://localhost:3000
API Testing

All endpoints were tested using Thunder Client inside VS Code.

Deployment

The project is deployed and accessible here:
(Add your deployed link here)

What I Learned

While building this project, I understood:

How REST APIs work
How to structure a backend project
How routing and controllers interact
How to handle data without a database
Basics of Git and GitHub workflow
