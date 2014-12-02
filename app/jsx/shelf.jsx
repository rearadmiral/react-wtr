/** @jsx React.DOM */
'use strict';
define([], function () {
  return React.createClass({
    getInitialState: function() {
      return {
        shelved: false
      };
    },
    inputElement: function() {
      if (this.props.shelf.exclusive) {
        return (
          <input type="radio" name={this.props.groupName} checked={this.state.shelved} />
        );
      } else {
        return (
          <input type="checkbox" checked={this.state.shelved} />
        );
      }
    },
    render: function() {
      return (
        <div>
          <label>
            {this.inputElement()}
            {this.props.shelf.name}
          </label>
        </div>
      );
    }
  });
});
