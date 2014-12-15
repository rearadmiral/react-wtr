/** @jsx React.DOM */
'use strict';
define([], function () {
  return React.createClass({
    onShelvingChange: function() {
      if (!this.props.shelved) {
        //
      } else if (this.props.shelved) {
        //
      }
    },
    inputElement: function() {
      if (this.props.shelf.exclusive) {
        return (
          <input type="radio" checked={this.props.shelved} name={this.props.groupName} value={this.props.shelf.id} onChange={this.onShelvingChange} />
        );
      } else {
        return (
          <input type="checkbox" checked={this.props.shelved} value={this.props.shelf.id} onChange={this.onShelvingChange} />
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
