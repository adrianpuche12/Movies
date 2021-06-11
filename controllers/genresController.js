const db = require("../database/models")

const genresController = {
    list: async (req, res, next) => {
        const genres = await db.Genre.findAll();
        res.render("genres/listado", {genres})
    }
};

module.exports = genresController