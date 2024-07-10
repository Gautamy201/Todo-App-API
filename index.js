const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

// Function to read todos from db.json
const getTodos = () => {
  const data = fs.readFileSync("db.json");
  return JSON.parse(data).todos;
};

// Function to write todos to db.json
const saveTodos = (todos) => {
  fs.writeFileSync("db.json", JSON.stringify({ todos }));
};

// Get all todos
app.get("/todos", (req, res) => {
  const todos = getTodos();
  res.json(todos);
});

// Add a new todo
app.post("/todos", (req, res) => {
  const todos = getTodos();
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    status: false,
  };
  todos.push(newTodo);
  saveTodos(todos);
  res.status(201).json(newTodo);
});

// Update status of even ID todos from false to true
app.put("/todos/update-even", (req, res) => {
  let todos = getTodos();
  todos = todos.map((todo) => {
    if (todo.id % 2 === 0 && todo.status === false) {
      return { ...todo, status: true };
    }
    return todo;
  });
  saveTodos(todos);
  res.json(todos);
});

// Delete todos with status true
app.delete("/todos/delete-true", (req, res) => {
  let todos = getTodos();
  todos = todos.filter((todo) => todo.status !== true);
  saveTodos(todos);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
