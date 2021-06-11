var express = require('express');
var router = express.Router();
const seriesController = require("../controllers/seriesController")


/* GET home page. */
router.get('/', seriesController.list)


module.exports = router;
