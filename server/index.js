const express = require('express'),
            app = express(),
            logger = require('morgan'),
            PORT = process.env.PORT || 9000,
            apiRouter = express.Router();

// Basic config
app.set('port', port);
app.use(express.static('public'));
app.use(logger('dev'));

// API routing
require('./server/api')(apiRouter);
app.use('/api', apiRouter);

// Default route
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


app.listen(config.port, function(err){
  if(err) throw err;
  console.log('App listening on port ' + port);
});







// 'use strict';
// const app = require('./app');
// const PORT = process.env.PORT || 9000;
//
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
// });
