const router = require("express").Router();
const SensorReading = require("../models/Reading");
const bcrypt = require("bcrypt");
const Device = require("../models/Device");


//Save the reading
router.post("/sensor-reading", async (req, res) => {
  try {
    // Create a new sensor reading
    const reading = new SensorReading({
      userID:req.body.userID,
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

router.get("/all", function (req, res) {
  SensorReading.find({}, function (err, readings) {
    var readingsMap = {};

    readings.forEach(function (reading) {
      readingsMap[readings._id] = readings;
    });

    res.send(readingsMap);
  });
});

router.get("/allreadings/:username", async (req, res) => {
  try {
    const readings = await SensorReading.find({ userID: req.params.username });
    res.status(200).json(readings);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/allphreadings/:username", async (req, res) => {
  let final = []
  let newArr = [];
  try {
    const readings = await SensorReading.find({ userID: req.params.username });
    readings.map((p) => {
      p.pH.map((ps,index)=>
          {newArr.push({ Reading:index+1, Ph: ps })
          }
      )
      final.push({
        dataSource: newArr,
        xName: 'Reading',
        yName: 'Ph',
        name: p.locations,
        width: '2',
        marker: {visible: true, width: 10, height: 10},
        type: 'Line'
      })
      newArr =[]


    })
    res.status(200).json(final);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/alllightreadings/:username", async (req, res) => {
  let final = []
  let newArr = [];
  try {
    const readings = await SensorReading.find({ userID: req.params.username });
    readings.map((p) => {
      p.lightIntensity.map((ps,index)=>
          {newArr.push({ Reading:index+1, Ph: ps })
          }
      )
      final.push({
        dataSource: newArr,
        xName: 'Reading',
        yName: 'Ph',
        name: p.locations,
        width: '2',
        marker: {visible: true, width: 10, height: 10},
        type: 'Line'
      })
      newArr =[]


    })
    res.status(200).json(final);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/alltemperaturetreadings/:username", async (req, res) => {
  let final = []
  let newArr = [];
  try {
    const readings = await SensorReading.find({ userID: req.params.username });
    readings.map((p) => {
      p.temperature.map((ps,index)=>
          {newArr.push({ Reading:index+1, Ph: ps })
          }
      )
      final.push({
        dataSource: newArr,
        xName: 'Reading',
        yName: 'Ph',
        name: p.locations,
        width: '2',
        marker: {visible: true, width: 10, height: 10},
        type: 'Line'
      })
      newArr =[]


    })
    res.status(200).json(final);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
