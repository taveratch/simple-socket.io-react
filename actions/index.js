(function() {
  'use strict';
    var types = require('../constants');
    var Action = {
      login: function(username) {
        return {
          type: types.LOGIN,
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
