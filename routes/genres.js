var express = require('express');
var router = express.Router();
const genresController = require("../controllers/genresController")


/* GET home page. */
router.get('/', genresController.list)

/*
router.get("/detail/:id", genresController.detail)
router.get('/create', genresController.create)
router.post('/create', genresController.store)
router.get('/edit/:id', genresController.edit)
router.post('/edit/:id', genresController.update)
*/

module.exports = router;
