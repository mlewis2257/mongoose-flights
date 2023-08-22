const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { flights });
}

async function create(req, res) {}

function newFlight(req, res) {}
