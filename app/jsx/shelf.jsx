/** @jsx React.DOM */
'use strict';
define([], function () {
  return React.createClass({
    toggle: function() {
      if (!this.props.shelved) {
        this.props.onShelve();
      } else if (this.props.shelved) {
        this.props.onUnshelve();
      }
    },
    inputElement: function() {
      if (this.props.shelf.exclusive) {
        return (
          <input type="radio" checked={this.props.shelved} name={this.props.groupName} value={this.props.shelf.id} onChange={this.toggle} />
        );
      } else {
        return (
          <input type="checkbox" checked={this.props.shelved} value={this.props.shelf.id} onChange={this.toggle} />
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
