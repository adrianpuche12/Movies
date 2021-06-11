var express = require('express');
var router = express.Router();
const moviesController = require("../controllers/moviesController")


/* GET home page. */
router.get('/', moviesController.list)

router.get('/movies_by_genre/:id', moviesController.movies_by_genre)


router.get('/top', moviesController.top)

router.get("/detail/:id", moviesController.detail)
router.get('/create', moviesController.create)
router.post('/create', moviesController.store)
router.get('/edit/:id', moviesController.edit)
router.post('/edit/:id', moviesController.update)
router.post('/delete/:id', moviesController.delete)

module.exports = router;
