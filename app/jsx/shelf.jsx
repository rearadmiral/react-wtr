/** @jsx React.DOM */
'use strict';
define([], function () {
  return React.createClass({
    onShelvingChange: function() {
      if (!this.props.shelved) {
        this.props.onShelve();
      } else if (this.props.shelved) {
        this.props.onUnshelve();
      }
    },
    inputElement: function() {
      if (this.props.shelf.get('exclusive')) {
        return (
          <input type="radio" checked={this.props.shelved} name={this.props.groupName} value={this.props.shelf.get('id')} onChange={this.onShelvingChange} />
        );
      } else {
        return (
          <input type="checkbox" checked={this.props.shelved} value={this.props.shelf.get('id')} onChange={this.onShelvingChange} />
        );
      }
    },
    render: function() {
      return (
        <div>
          <label>
            {this.inputElement()}
            {this.props.shelf.get('name')}
          </label>
        </div>
      );
    }
  });
});
