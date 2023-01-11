const router = require("express").Router();
const SensorReading = require("../models/Reading");
const bcrypt = require("bcrypt");

//Save the reading
router.post("/sensor-reading", async (req, res) => {
  try {
    // Create a new sensor reading
    const reading = new SensorReading({
      deviceCode: req.body.deviceCode,
      temperature: req.body.temperature,
      lightIntensity: req.body.lightIntensity,
      pH: req.body.pH,
      locations: req.body.locations,
    });

    // Save the reading to the database
    const read = await reading.save();
    res.status(201).json(read);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
