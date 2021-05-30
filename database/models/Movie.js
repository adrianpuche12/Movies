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
        // hasMany() tengo muchas.
        // belongsTo() pertenezco a una... 
        // belongsToMany() pertenezco a varias... 

        Movie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: 'genre_id'
        });

        Movie.belongsToMany(models.Actor, {
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        })
    }

    return Movie;
}
