const mongoose = require("mongoose");

const ReadingSchema = new mongoose.Schema(
  {
      deviceCode: {
          type: String,
          required: true,
      },
    temperature: {
        type: Array,
        default: [],
    },
    lightIntensity: {
        type: Array,
        default: [],
    },
      pH: {
          type: Array,
          default: [],
      },
    locations: {
        type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reading", ReadingSchema);
