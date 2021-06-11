module.exports = (sequelize, DataTypes) => {
    const alias = "Serie"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        
        }
    }
    const config = {
        tableName: "series",
        timestamps: false
    }

    const Serie = sequelize.define(alias, cols, config);

  
         

     
    return Serie;
}
