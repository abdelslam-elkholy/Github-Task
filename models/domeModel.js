const mongoose = require("mongoose");

const domeSchema = new mongoose.Schema(
  {
    domeTitle: {
      type: String,
      required: [true, "dome Must have Title "],
      trim: true,
    },
});

const dome = mongoose.model("dome", domeSchema);

module.exports = dome;