const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { flights });
}

async function create(req, res) {
  console.log(req.body);
  try {
    const flight = await Flight.create(req.body);
    res.redirect(`/flights/${flight._id}`);
  } catch (error) {
    console.log(error);
    res.render("flights/new", { errorMsg: error.message });
  }
}

function newFlight(req, res) {
  res.render("flights/new", { errorMsg: "" });
}
async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render("flights/show", { title: "Flight Details", flight });
}
