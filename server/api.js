module.exports = function(apiRouter){

  apiRouter.get('/', function(req, res) {
    console.log('API called');
    res.json({message: 'Server responded'});
  });

  apiRouter.get('/foo', function(req, res) {
    console.log('Foo called');
    res.json({message: 'Foo says hello'});
  });

  apiRouter.post('/', function(req, res){
    console.log(req);
    res.json({message: 'POST ok'})
  });
};
