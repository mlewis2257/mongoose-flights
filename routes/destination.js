var express = require("express");
var router = express.Router();
const destCtrl = require("../controllers/destinations");

router.get("flights/:id/destination", destCtrl.create);

module.exports = router;
