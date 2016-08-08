(function() {
  'use strict';
  var mapStateToProps = function(state) {
    return {reducer: state.reducer};
  };
  var Wrapper = React.createClass({
    render: function() {
      return (
        <div>
          <p>{this.props.reducer.username}</p>
          <p>{this.props.reducer.message}</p>
        </div>
      );
    }
  });
  module.exports = connect()(Wrapper);
}());
