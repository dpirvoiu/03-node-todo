// Responsible for handling incoming requests
// import them and callback them on routes
// Use the schema from models
// Inside the model we will find the CRUD methods

const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

// use try catch for async so we do not leave the user hanging
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(task);
    return res.status(201).json({ task });
  } catch (e) {
    res.status(500).json({ msg: e }); // this will not let the user hanging
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete  task");
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  getTask,
};
