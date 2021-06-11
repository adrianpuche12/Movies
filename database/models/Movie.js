module.exports = (sequelize, DataTypes) => {
    const alias = "Movie"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        awards: {
            type: DataTypes.INTEGER
        },
        length: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        genre_id: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "movies",
        timestamps: false
    }

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function (models) {
        

// belongsTo() pertenezco a una
        Movie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: 'genre_id'
        });

// belongsToMany() pertenezco a varias... de muchos a muchos
       Movie.belongsToMany(models.Actor, {
             as: 'actors', // apodo a utilizar el la vista y el controlador
            through: 'actor_movie', // nombre de la table 
            foreignKey: 'movie_id', // clave foranea que hace referencia a las pelicualas donde actua el actor
         otherKey: 'actor_id', // clave foranea que hace referencia a los actores
            timestamps: false // tengo que aclarar si la tabla tiene o nos los timestamps (const config)
         })
    }

    return Movie;
}
