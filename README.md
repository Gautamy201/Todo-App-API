# Todo App API

## Overview

This project is a basic Todo Application API created using Node.js and Express. It performs CRUD operations on todo data stored in a `db.json` file.

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Get All Todos

- **Endpoint:** `/todos`
- **Method:** `GET`
- **Description:** `Retrieves all todos from the database db.json`

### Add a New Todos

- **Endpoint:** `/todos`
- **Method:** `POST`
- **Description:** `Adds a new todo to the database db.json`
- **Body Parameters:** `task (string) : The task description.`

### Update Status of Even ID Todos

- **Endpoint:** `/todos/even-status`
- **Method:** `PUT`
- **Description:** ` Updates the status of todos with even IDs from false to true`

### Delete Todos with Status True

- **Endpoint:** `/todos/even-status`
- **Method:** `DELETE`
- **Description:** ` Deletes all todos with a status of true`

## Dependencies

- **_Express_**
- **_Nodemon_**
