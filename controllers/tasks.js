// Responsible for handling incoming requests
// import them and callback them on routes
// Use the schema from models
// Inside the model we will find the CRUD methods

const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error }); // this will not let the user hanging
  }
};

// use try catch for async so we do not leave the user hanging
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(task);
    return res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error }); // this will not let the user hanging
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    res.status(200).json({ task });

  } catch (error) {
    res.status(500).json({ msg: error }); // this will not let the user hanging
  }
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
