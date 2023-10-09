const express       = require('express')
const cors          = require('cors')
const createError   = require('http-errors')
const cookieParser  = require('cookie-parser')
const logger        = require('morgan')

require('dotenv').config()

const { dbConn } = require('./api/db/conn.db')

var app = express();
dbConn()

app.use(logger('dev'));

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended: false }) )
app.use( cookieParser() )

app.use( '/api',  require('./api/routes/directorio.routes') )

app.use( function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send( { result:'Error'} );
});

app.listen( process.env.PORT, () => {
    console.log(`Conectado al puerto ${ process.env.PORT }`);
})
module.exports = app;