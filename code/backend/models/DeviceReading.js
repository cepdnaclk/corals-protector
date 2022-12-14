const mongoose = require("mongoose");

const DeviceReadingSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  temperature: { type: Number, required: true },
  lightIntensity: { type: Number, required: true },
  location: { type: { type: String }, coordinates: [Number] },
  timestamp: { type: Date, required: true },
});

module.exports = mongoose.model("DeviceReading", DeviceReadingSchema);
