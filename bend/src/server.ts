const express = require('express'),
      app = express(),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      http = require('http').Server(app),
      router = express.Router(),
      session = require('express-session'),
      pg = require('pg'),
      morgan = require('morgan')('dev');

const fs = require('fs'),
      config = JSON.parse(fs.readFileSync('config.json', "utf8"));

const db = new pg.Client({
  user: config.db_user,
  host: config.db_host,
  database: config.db_name,
  password: config.db_pw,
  port: config.db_port
});


const MonthlyWidget = require('./widgets/MonthlyWidget')(db);

// middlewares
app.use(morgan);
//app.use(cookieParser(config.sessionSecret));
app.use(bodyParser.json());
// serve SPA scaffold
app.use(express.static('../fend/dist'));

// widgets
app.use('/monthly_widget', MonthlyWidget);

db.connect((err: Error) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started, listening on port', config.port);
    app.listen(config.port);
  }
});
