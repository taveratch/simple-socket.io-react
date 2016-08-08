(function() {
  'use strict';
  var types = require('../constants');
  var initialState = {
    isWaiting: false,
    username: null
  };
  var Reducer = function(state, action) {
    state = typeof state !== 'undefined' ? state : initialState;
    switch(action.type) {
      case types.LOGIN:
        return _.merge({}, state, {
          isWaiting: true
        });
      case types.LOGIN_SERVER:
        return  _.merge({}, state, {
          isWaiting: false,
          username: action.data
        });
      default:
        return state;
    }
  };
  module.exports = Reducer;
}());
