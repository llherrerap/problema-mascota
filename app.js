var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Importando el modulo de express con handlebars
const {create} = require('express-handlebars')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mascotasRouter = require('./routes/index2');

var app = express();

const hbs = create({//recibe las configuraciones de express
  extname: ".hbs",//facilita el uso de la extension, dandole notacion .hbs
  partialsDir: ["views/componentes"],//componetes
  });
  
  // view engine setup
app.engine(".hbs", hbs.engine);//define motor de plantilla
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mascota', mascotasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
