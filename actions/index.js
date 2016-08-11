(function() {
  'use strict';
    var types = require('../constants');
    var Action = {
      login: function(username) {
        return {
          type: types.LOGIN_SERVER,
          data: username
        };
      },
      sendMessage: function(message) {

      },
      receiveMessage: function() {

      }
    };
    module.exports = Action;
}());
