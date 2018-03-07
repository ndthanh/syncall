var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/hub', function(req, res){
  	  var data = req.url;
  	  var s;
	  s = data.substring(5, data.length);
	  s = decodeURI(s);
	  console.log(s);
  	  io.emit('lead copied', s);
	  res.sendStatus(200);
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/server.html');
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});

