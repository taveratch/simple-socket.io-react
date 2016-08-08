(function() {
  'use strict';
    var lib = {
      login: function(username) {
        socket.emit('login', username);
      }
    };
    module.exports = lib;
}());
