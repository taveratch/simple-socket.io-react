(function() {
  'use strict';
  var actions = require('../actions');
  var Socket = function(store) {
    socket.on('login', function(username) {
      console.log('Receive from server -- login -- : ' + username);
      store.dispatch(actions.login(username));
    });
  };
  module.exports = Socket;
}());
