const db = require("../database/models")

const moviesController = {
  list: async (req, res, next) => {
    const movies = await db.Movie.findAll();
    res.render("movies/listado", { movies })
  },
  detail: async (req, res, next) => {
    const id = req.params.id

    const movie = await db.Movie.findByPk(id, {
      include: ['genre', 'actors']
    });

    res.render("movies/detail", { movie })
  },
  create: async (req, res) => {
    const genres = await db.Genre.findAll();
    res.render('movies/add', { genres });
  },
  store: async (req, res) => {
    await db.Movie.create({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      length: req.body.length,
      release_date: req.body.release_date,
      genre_id: req.body.genre
    });
    res.redirect('/movies');
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const movie = await db.Movie.findByPk(id);
    const genres = await db.Genre.findAll();

    res.render('movies/edit', {
      movie,
      genres
    })
  },
  update: async (req, res) => {
    await db.Movie.update({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      length: req.body.length,
      release_date: req.body.release_date,
      genre_id: req.body.genre
    }, {
      where: [{
        id: req.params.id
      }]
    });
    res.redirect('/movies')
  }
}

module.exports = moviesController