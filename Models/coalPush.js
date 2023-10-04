const mongoose = require("mongoose");

const CoalSchema = new mongoose.Schema({
  Stock: { type: String, required: true },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("coalPush", CoalSchema);
