(function() {
	'use strict';
  var ChatService = require('../libs/app-lib');
  var mapStateToProps = function(state) {
    return {reducer: state.reducer};
  };
	var Wrapper = React.createClass({
    handleClick: function() {
      var username = this.refs.username.value;
      ChatService.login(username);
    },
		render: function() {
			return (
				<div>
					<input ref="username"/>
					<button onClick={this.handleClick}>Login</button>
				</div>
			);
		}
	});
  module.exports = connect(mapStateToProps)(Wrapper);
}());
