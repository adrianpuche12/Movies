module.exports = (sequelize, DataTypes) => {
    const alias = "Actor"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DOUBLE
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "actors",
        timestamps: false
    }


    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = function (models) {
        Actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            otherKey: 'movie_id',
            foreignKey: 'actor_id',
            timestamps: false
        })
    }

    return Actor;

}