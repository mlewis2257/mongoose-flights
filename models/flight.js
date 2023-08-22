const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["United", "Southwest", "Frontier", "Alaskan"],
      default: "DEN",
    },
    airport: {
      type: String,
      enum: ["DEN", "SFO", "LAX", "HTX", "OAK"],
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
      default: 500,
      //   date: Date(),
    },
    // departs: Date(),
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
