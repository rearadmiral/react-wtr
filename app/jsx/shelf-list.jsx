/** @jsx React.DOM */
'use strict';
define(['shelf','underscore'], function (Shelf, _) {
  return React.createClass({
    getInitialState: function() {
      return {
        groupName: 'shelfGroup' + new Date().getTime()
      };
    },
    getShelvings: function() {
      return this.props.book.get('shelves');
    },
    hasAnyShelvings: function() {
      return !this.getShelvings().isEmpty();
    },
    isOnShelf: function(shelf) {
      return this.getShelvings().findWhere({ id: shelf.get('id') }) !== undefined;
    },
    unshelveButton: function() {
      return (
        <button className='btn wtr__deleteShelvingButton' onClick={this.props.onClearShelvings} >
          Remove from all shelves
        </button>
      );
    },

    shelfItems: function() {
      var self = this;
      return this.props.shelves.map(function(shelf){
        return (
          <Shelf shelf={shelf} book={self.props.book} shelved={self.isOnShelf(shelf)} groupName={self.state.groupName} />
        );
      });
    },
    render: function() {
      return (
        <div className='wtr__shelfList'>
          { this.hasAnyShelvings() ? this.unshelveButton() : null }
          { this.shelfItems() }
        </div>
      );
    }
  });
});
