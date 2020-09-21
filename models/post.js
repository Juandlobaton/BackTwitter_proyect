const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    static associate(models) {
      }
  };
              post.init({
                          idPost: DataTypes.INTEGER,
                          idUser: DataTypes.INTEGER,
                          message: DataTypes.STRING,
                          published_date: DataTypes.DATE
                        }, {
                          sequelize,
                          modelName: 'posts',
                        }
                );

              post.associate = function(models) {
                brand.belongsTo(models.item,{
                  as:'users',
                  foreignKey:'idUser'
                });
              };

  return post;
};