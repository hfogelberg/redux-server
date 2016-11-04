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

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, function(err){
  if(err) throw err;
  console.log('App listening on port ' + port);
});
