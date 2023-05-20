// Responsible for handling incoming requests
// import them and callback them on routes

const getAllTasks = (req, res) => {
  res.send("all items from controllers");
};

module.exports = {
  getAllTasks,
};
