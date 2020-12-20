const fs = require('fs')
const config = JSON.parse(fs.readFileSync('config.json', "utf8"));

let express = require('express'),
      app = express(),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      http = require('http').Server(app),
      router = express.Router(),
      session = require('express-session');

let morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('../fend/dist'))
//app.use(cookieParser(config.sessionSecret));
//app.use(bodyParser.json());

// Passport settings
//app.use(session({ secret: config.sessionSecret, 
//                  resave: false, 
//                  saveUninitialized: false}));
//app.use(passport.initialize());
//app.use(passport.session());

console.log("Server started, listening on port", config.port);
app.listen(config.port);
