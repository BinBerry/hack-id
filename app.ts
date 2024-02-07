import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import db from './models'

const app = express();
dotenv.config();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req: any, res: any, next: any) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(() => {
  console.log(`Express app listening`)
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(function () {
    console.log("server is successfully running!");
  });
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


module.exports = app;