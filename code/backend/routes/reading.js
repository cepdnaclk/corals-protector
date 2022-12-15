const router = require("express").Router();
const SensorReading = require("../models/Reading");
const bcrypt = require("bcrypt");

//Save the reading
router.post("/sensor-reading", async (req, res) => {
  try {
    // Create a new sensor reading
    const reading = new SensorReading({
      temperature: req.body.temperature,
      humidity: req.body.humidity,
      timestamp: new Date(),
    });

    // Save the reading to the database
    await reading.save();
    res.status(201).json("Save the reading to the database");
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
