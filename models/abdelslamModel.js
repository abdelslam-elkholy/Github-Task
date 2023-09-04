const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      trim: true,
      minLength: 2,
      maxLength: 400,
    },
    rate: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      default: 3,
    },

    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
