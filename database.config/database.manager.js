
const Sequelize = require("sequelize");
const sequelizeConnection = require('../database.config/db.connection.js');

// modelos
const UserModel = require("../models/user");
const PostModel = require("../models/post");


const User = UserModel (sequelizeConnection, Sequelize);
const Post = PostModel (sequelizeConnection, Sequelize);


const models = {
  User: User,
  Post: Post,
};


// Crear objeto de BD
const db = {
    ...models,
    sequelizeConnection
};
  
module.exports = db;
