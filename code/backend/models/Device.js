const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    serialNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Device", deviceSchema);
