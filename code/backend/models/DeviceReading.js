const mongoose = require("mongoose");

const DeviceReadingSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  temperature: { type: Number, required: true },
  lightIntensity: { type: Number, required: true },
  location: { type: { type: String }, coordinates: [Number] },
  timestamp: { type: Date, required: true },
});

const SensorReading = mongoose.model("DeviceReading", DeviceReadingSchema);

module.exports = SensorReading;
