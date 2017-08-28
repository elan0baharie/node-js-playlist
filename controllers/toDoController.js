var bodyParser = require('body-parser');

var data = [{item: 'walk the dog'}, {item: 'learn node js'}, {item: 'learn express'}, {item: 'learn express-mailer'}]
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
  app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    console.log("stuff" + data);
    res.json(data);
  });

  app.delete('/todo', function(req, res){

  });
};
