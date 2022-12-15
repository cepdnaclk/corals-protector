const router = require("express").Router();
const User = require("../models/Device");
const bcrypt = require("bcrypt");
const Device = require("../models/Device");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newDevice = new Device({
      deviceId: req.body.deviceId,
      password: hashedPassword,
    });

    //save user and respond
    const device = await newDevice.save();
    res.status(200).json(device);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
