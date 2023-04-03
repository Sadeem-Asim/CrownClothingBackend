const mongoose = require("mongoose");

const shopSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question Is Required"],
      unique: true,
    },
    options: [{ type: String, min: 2, max: 4 }],
    answer: { type: String, required: [true, "Answer Is Required"] },
    level: {
      type: Number,
      required: [true, "Level is required"],
      enum: [1, 2, 3],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// quizQuestionsSchema.virtual("timer").get(function () {
//   if (this.level === 1) {
//     return 10;
//   }
// });

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
