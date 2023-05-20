const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//  middleware so we can use access data that uses JSON

app.use(express.json()); // we need this for data in req.body, Missed function invocation, led to loop

// routes
app.get("/hello", (req, res) => {
  res.send(`task manager app`);
});

app.use("/api/v1/tasks", tasks); // this is the root path

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
