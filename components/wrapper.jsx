var ReactDOM = require("react-dom");
var Provider = ReactRedux.Provider;
var reducers = require('../reducers');
var createStore = Redux.createStore;
var store = createStore(reducers);
var App = require('./app.jsx');
var chatSocket = require('../libs/chat-socket');
chatSocket(store);
(function() {
	'use strict';

	module.exports = React.createClass({
		render: function() {
			return (
				<Provider store={store}>
					<App/>
				</Provider>
			);
		}
	});

}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(
	<Wrapper/>, document.getElementById("container"));
