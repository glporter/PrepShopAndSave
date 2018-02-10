var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
bodyParser = require('body-parser');

//routes go here


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));


app.get('/', function(req, res){
    res.sendFile("index.html");
});

//change this to work with our recipe api
// app.use('/api/todos', todoRoutes);



app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})