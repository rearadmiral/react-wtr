/** @jsx React.DOM */
'use strict';
var Shelf = (function () {
  return React.createClass({
    onShelvingChange: function() {
      if (!this.props.shelved) {
        React.dispatcher.trigger('book:addedToShelf', this.props.book, this.props.shelf);
      } else {
        React.dispatcher.trigger('book:removedFromShelf', this.props.book, this.props.shelf);
      }
    },
    inputElement: function() {
      if (this.props.shelf.get('exclusive')) {
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
            {this.props.shelf.get('name')}
          </label>
        </div>
      );
    }
  });
})();
