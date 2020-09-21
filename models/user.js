const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class user extends Model {
      static associate(models) {
      }
  };
        user.init({
                idUser: {
                  type: DataTypes.INTEGER,
                  primaryKey: true,
                  autoIncrement: true 
                },
                userName: DataTypes.STRING,
                creation_date: DataTypes.DATE,
              }, {
                sequelize,
                modelName: 'user',
              });

              user.associate = function(models) {
                brand.hasMany(models.item,{
                  as:'posts',
                  foreignKey:'idUser'
                });
  };

  return user;
};