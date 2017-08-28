var express = require('express');
var toDoController = require('./controllers/toDoController');

var app = express();

// set-up templating engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
toDoController(app);

// listen to which port

app.listen(3000);
console.log('listening to port 3000');
