var Login = require('./login-wrapper.jsx');
(function() {
	'use strict';
  var mapStateToProps = function(state) {
    return {reducer: state.reducer};
  };
	var App = React.createClass({
		render: function() {
			return (
				<div>
          <Login />
          <h1>{this.props.reducer.username}</h1>
				</div>
			);
		}
	});
	module.exports = connect(mapStateToProps)(App);
}());
