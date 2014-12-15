/** @jsx React.DOM */
'use strict';
define(['shelf-list', 'underscore', 'stores'], function (ShelfList, _, Stores) {
  return React.createClass({
    getInitialState: function() {
      return {
        shelvesVisible: false
      };
    },
    toggleShelvesVisibility: function() {
      this.setState({shelvesVisible: !this.state.shelvesVisible});
    },
    isShelved: function() {
      return !this.state.shelfIds
    },
    exclusiveShelf: function() {
      return this.props.shelves.findWhere({ exclusive: true });
    },
    onClearShelvings: function() {
      this.setState({
        shelvesVisible: false
      });
    },
    onShelveOnPrimaryShelf: function() {
      if (this.exclusiveShelf()) {
        this.onClearShelvings();
        return;
      }

      this.onShelve(this.primaryShelf());
    },
    primaryShelf: function() {
      return this.props.shelves.findWhere({name: 'Want to Read'});
    },
    primaryButtonName: function() {
      var exclusiveShelf = this.exclusiveShelf();
      if (exclusiveShelf) {
        return exclusiveShelf.get('name');
      }
      return this.primaryShelf().get('name');
    },
    renderShelfList: function() {
      return (
        <ShelfList shelves={this.props.shelves} book={this.props.book} onClearShelvings={this.onClearShelvings} />
      );
    },
    render: function() {
      var book = this.props.book;
      return (
        <div>
          <button
            className={ this.isShelved() ? 'wtr__lhs--shelved' : 'wtr__lhs--unshelved' } onClick={this.onShelveOnPrimaryShelf} >
            {this.primaryButtonName()}
          </button>

          <button
              className='btn btn-success wtr__shelfDropdown'
              onClick={this.toggleShelvesVisibility} >
          </button>

          { this.state.shelvesVisible ? this.renderShelfList() : '' }
        </div>
      );
    }
  });
});
