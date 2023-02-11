const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const deviceRoute = require("./routes/device");
const readingRoute = require("./routes/reading");

const awsIot = require('./iotCore');
const path = require('path');

dotenv.config()

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB")
  awsIot.run();
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/devices", deviceRoute);
app.use("/api/reading", readingRoute);

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});

app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running!");
});


