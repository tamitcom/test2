var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var consignmentRouter = require('./routes/consignment');
var contactRouter = require('./routes/contact');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var logoutRouter = require('./routes/logout');
var orderProcessRouter = require('./routes/order-process');
var profileRouter = require('./routes/profile');
var questionRouter = require('./routes/question');
var registerRouter = require('./routes/register');
var searchRouter = require('./routes/search');
var productsRouter = require('./routes/products');

var blankRouter = require('./routes/blank');


var app = express();

var device = require('express-device');
app.use(device.capture());

app.get('/hello',function(req,res) {
  res.send("Hi to "+req.device.type.toUpperCase()+" User");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/consignment', consignmentRouter);
app.use('/contact', contactRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/order-process', orderProcessRouter);
app.use('/profile', profileRouter);
app.use('/question', questionRouter);
app.use('/register', registerRouter);
app.use('/search', searchRouter);
app.use('/products', productsRouter);

app.use('/blank', blankRouter);

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

  res.header("Content-Type", "application/json; charset=utf-8");
});

module.exports = app;
