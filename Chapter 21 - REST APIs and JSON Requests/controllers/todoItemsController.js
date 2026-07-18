const TodoItem = require("../models/TodoItem");

exports.createTodoItem = async (req, res, next) => {
    console.log(req.body);
    const { task, date } = req.body;
    const todoItem = new TodoItem({ task, date });
    await todoItem.save();
    res.status(201).json(todoItem);
}

exports.getTodoItems = async (req, res, next) => {
    const todoItems = await TodoItem.find();
    res.json(todoItems);
}