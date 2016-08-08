var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var app = new express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var jsonfile = require('jsonfile');
var file = 'data.json';
var port = 8080;

var compiler = webpack(config);
app.use(express.static(__dirname + '/'));
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('user connected');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg) {
    console.log('Message : ' + msg);
  });
  socket.on('login', function(username) {
    console.log('login : ' + username);
    socket.emit('login', username);
  });
});

app.get('/data', function(req, res) {
  console.log('receive data');
  jsonfile.readFile(file, function(err,obj){
    res.send(obj);
  });
});

http.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
