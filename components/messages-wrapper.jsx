
(function() {
	'use strict';
  var Message = require('./message.jsx');
	var Wrapper = React.createClass({
		render: function() {
			return (
        <div>

        </div>
      );
		}
	});
  module.exports = connect(mapStateToProps)(Wrapper);
}());
