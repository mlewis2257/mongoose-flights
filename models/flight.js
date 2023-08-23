const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["DEN", "SFO", "LAX", "HTX", "OAK"],
  },
  arrival: {
    type: Date,
  },
});

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["United", "Southwest", "Frontier", "Alaskan"],
      default: "",
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
    },
    destination: [destinationSchema],
    departs: {
      type: Date,
      default: function () {
        const today = new Date();
        return today.setFullYear(today.getFullYear() + 1);
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
