var express = require('express');
var router = express.Router();
const actorsController = require("../controllers/actorsController")


router.get("/detail/:id", actorsController.detail)

module.exports = router;