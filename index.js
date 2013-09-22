var express = require('express');
var app = express();
require('mongoose').connect('mongodb://localhost/gym');

app.use(express.bodyParser());
app.use(express.static('public'));
app.use(express.cookieParser());
app.use(express.session({secret: 'gym-secret'}));

app.use('/clients', require('./routes/clients').middleware);

app.listen(3000);
console.log('Listening on port 3000');