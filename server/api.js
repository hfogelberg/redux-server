module.exports = function(apiRouter){

  apiRouter.get('/', function(req, res) {
    res.json({message: 'Server responded'});
  });

  apiRouter.post('/', function(req, res){
    console.log(req);
    res.json({message: 'POST ok'})
  });
};
