const express  = require("express");

const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

const app = express();

app.get("/", getToDo);

app.post("/save", saveToDo);

app.put('/update',updateToDo);

app.delete("/delete", deleteToDo);

module.exports = express;