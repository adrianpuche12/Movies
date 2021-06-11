const db = require("../database/models")

const seriesController = {
    list: async (req, res, next) => {
        const series = await db.Serie.findAll();
        res.render("series/listado", { series })
    }

};

module.exports = seriesController