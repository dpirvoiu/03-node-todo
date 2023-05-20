// Responsible for handling incoming requests
// import them and callback them on routes

const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const password = "KCf5UBHUbx_n3Cd"

const getTask = (req, res) => {
  res.send("Get single  task");
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
