import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {initPassport} from './config/passport-config';
// import passport from 'passport'
import session from 'express-session';

// We want to setup the env variables before going into our imports
dotenv.config();

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import authRouter from './routes/auth';
import db from './models'

const app = express();
const PORT = process.env.PORT || 3000;

console.log("test logging")
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));
initPassport(app)


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter)

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
  next(createError(404));
});

// error handler
// There appears to be no nice premade Error type in @types/express for this usage
// As a temporary measure I am ignoring this warning until we make a error type for this situation
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(function(err: any, req: express.Request, res: express.Response) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.on('listening', () => {
  console.log("this is a listening test")
})

// connects to the database and test to see if credentials are valid if they are we start the server
db.sequelize.authenticate().then(() => {
  app.listen(PORT, () => {
    console.log("server is successfully running!");
  });
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


module.exports = app;
