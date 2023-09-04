const mongoose = require("mongoose");

const mohamedSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Todo Must have Title "],
      trim: true,
      minLength: 2,
      maxLength: 40,
    },
    status: {
      type: String,
      enum: ["todo", "in progress", "done"],
      default: "todo",
    },

    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

const mohamed = mongoose.model("todo", mohamedSchema);

module.exports = mohamed;