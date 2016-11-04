var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    path = require('path'),
    port = process.env.PORT || 3000,
    cors = require('cors');

const apiRouter = require('express').Router();

// Basic config
app.set('port', port);
app.use(cors());
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// API routing
require('./api')(apiRouter);
app.use('/api', apiRouter);

// Default route
app.get('*', function(req, res) {
 res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, function(err){
  if(err) throw err;
  console.log('App listening on port ' + port);
});
