module.exports = (sequelize, DataTypes) => {
    const alias = "Genre"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: "genres",
        timestamps: false
    }


    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = function (models) {
        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }

    return Genre;

}