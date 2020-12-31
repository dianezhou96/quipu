const fs = require('fs'),
      config = JSON.parse(fs.readFileSync('config.json', "utf8"));

let express = require('express'),
    app = express(),
    morgan = require('morgan');

const cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  http = require('http').Server(app),
  router = express.Router(),
  session = require('express-session'),
  {Client} = require('pg');

const db = new Client({
  user: config.db_user,
  host: config.db_host,
  database: config.db_name,
  password: config.db_pw,
  port: config.db_port
});


let MonthlyWidget = require('./widgets/MonthlyWidget')(db);

app.use(morgan('dev'));
// serve SPA scaffold
app.use(express.static('../fend/dist'));
app.use('/monthly_widget', MonthlyWidget);

//app.use(cookieParser(config.sessionSecret));
//app.use(bodyParser.json());

// Passport settings
//app.use(session({ secret: config.sessionSecret, 
//                  resave: false, 
//                  saveUninitialized: false}));
//app.use(passport.initialize());
//app.use(passport.session());

db.connect((err: Error) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started, listening on port', config.port);
    app.listen(config.port);
  }
});
