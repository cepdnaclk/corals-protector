const mongoose = require("mongoose");

const ReadingSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    lightIntensity: {
      type: Number,
      required: true,
    },
    locations: [
      {
        longitude: {
          type: Number,
        },
        latitude: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reading", ReadingSchema);
