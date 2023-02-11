const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    deviceCode: {
      type: String,
      required: true,
    },
      username: {
          type: String,
      },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Device", deviceSchema);
