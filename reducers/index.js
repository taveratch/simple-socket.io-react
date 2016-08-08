(function() {
	'use strict';
  var combineReducers = Redux.combineReducers;
  var chatReducer = require('./chat-reducer');
  var reducers = combineReducers({reducer: chatReducer});
  module.exports = reducers;
}());
