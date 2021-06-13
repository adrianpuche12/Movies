const db = require("../database/models")

const actorsController = {
 
    detail: async (req, res, next) => {
        const id = req.params.id
    
        const actor = await db.Actor.findByPk(id);
    
        res.render("actors/detail", {actor})
      },

      list:  async (req, res, next) => {

        const actor = await db.Actor.findAll();
    
        res.render("actors/list", {actor})
    
      },
      

}
module.exports = actorsController;