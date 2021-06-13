var express = require('express');
var router = express.Router();
const actorsController = require("../controllers/actorsController")



// lista con todos los actores
router.get("/list", actorsController.list)


// detalle de cada actor
router.get("/detail/:id", actorsController.detail)



module.exports = router;