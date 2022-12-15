const router = require("express").Router();
const Device = require("../models/Device");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new device
    const newDevice = new Device({
      deviceCode: req.body.code,
      password: hashedPassword,
    });

    //save device and respond
    const device = await newDevice.save();
    res.status(200).json(device);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all devices
router.get("/all", function (req, res) {
  Device.find({}, function (err, devices) {
    var deviceMap = {};

    devices.forEach(function (device) {
      deviceMap[device._id] = device;
    });

    res.send(deviceMap);
  });
});

module.exports = router;
