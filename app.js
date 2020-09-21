var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.route');
var postsRouter = require('./routes/posts.route');


// base de datos
const dbManager = require ("./database.config/database.manager");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);


dbManager.sequelizeConnection.authenticate()
  .then(() => {
    console.log('****Conexion establecida correctamente ****');
    // Recrear los modelos en BD si no existen
    dbManager.sequelizeConnection.sync().then(() => {
        console.log("Database Synced");
      });

  })
  .catch(err => {
    console.error('Error al conectar a BD:', err);
  });

module.exports = app;
