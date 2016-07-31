(function() {
  'use strict';
  var lib = {
    EXcreateMessage: function(message, username) {
      return {
        id: new Date().getTime(),
        user: username,
        message: message
      };
    },
    EXformat: function(arr) {
      var str = JSON.stringify(arr);
      return str.substring(0,str.length);
    }
  };
  module.exports = lib;
}());
