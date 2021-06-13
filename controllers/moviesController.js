const db = require("../database/models")

const moviesController = {
  list: async (req, res, next) => {
    const movies = await db.Movie.findAll({
      include: [{ association: 'genre' }]
    });
    res.render("movies/listado", { movies })
  },

  detail: async (req, res, next) => {
    const movie = await db.Movie.findByPk(req.params.id, {
      include: ['genre', 'actors']
    });

    res.render("movies/detail", { movie })
  },

  create: async (req, res) => {
    const genres = await db.Genre.findAll();
    res.render('movies/add', { genres: genres });
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
    const movie = await db.Movie.findByPk(req.params.id);
    const genres = await db.Genre.findAll();

    res.render('movies/edit', { movie: movie, genres: genres })
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
    res.redirect('/movies/edit/' + req.params.id)
  },

  delete:async (req, res, next) => {
    db.Movie.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect("/movies")
  },

  top: async (req, res, next) => {
    const movies = await db.Movie.findAll({
      where: {
        rating: { [db.Sequelize.Op.gt]: 8 }

      },

      order: [
        ['rating', 'DESC']
      ],
      limit: 10

    }

    );
    res.render("movies/top", { movies })
  },


  movies_by_genre: async (req, res, next) => {
    const genre_by_movies = await db.Movie.findAll({
      where: {
        genre_id: req.params.id 
      }
    });
    res.render("movies/genre_by_movies", {genre_by_movies: genre_by_movies})
  }

}





module.exports = moviesController