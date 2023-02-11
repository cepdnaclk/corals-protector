const router = require("express").Router();
const Device = require("../models/Device");
const bcrypt = require("bcrypt");
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new device
    const newDevice = new Device({

      username:req.body.username,
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

//get user's all posts

router.get("/alldevice/:username", async (req, res) => {
  try {
    const devices = await Device.find({ userID: req.params.username });
    res.status(200).json(devices);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update device
//delete device
//get a device

router.post("/test", async (req, res) => {
  try {
    //Create a new sensor reading
    // const d = req.deviceCode
    // const device = await Device.find({ deviceCode: req.deviceCode });
    // console.log(device)
    // device.map((p) => {
    //   console.log(p)
    // })
    // const user = await User.find({ username: device.username });
    // console.log(user)
    const reading = new SensorReading({
        // userID: req._id,
        deviceCode: req.deviceCode,
        temperature: req.Temperature,
        lightIntensity: req.LDR,
        pH: req.pH,
        locations: req.locations,
    });
    //
    // // Save the reading to the database
    // const read = reading.save();
    // console.log("New reading added  collection")
    res.status(200).json(reading);
  } catch (error) {
    res.status(200).json("can not add the reading")
  }
});

module.exports = router;
