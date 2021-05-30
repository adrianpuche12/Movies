const db = require("../database/models")

const actorsController = {
 
    detail: async (req, res, next) => {
        const id = req.params.id
    
        const actor = await db.Actor.findByPk(id, {
          include: ['movies']
          
        });
        console.log(id);

        res.render("actors/detail", {actor})
      },
}


module.exports = actorsController;