var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

/* GET users listing. */
router.get("/", flightsCtrl.index);
// router.post()

module.exports = router;
