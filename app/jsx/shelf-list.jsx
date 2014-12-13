/** @jsx React.DOM */
'use strict';
define(['shelf','underscore'], function (Shelf, _) {
  return React.createClass({
    getInitialState: function() {
      return {
        groupName: 'shelfGroup' + new Date().getTime()
      };
    },
    hasAnyShelvings: function() {
      return !this.props.shelvings.isEmpty();
    },
    isOnShelf: function(shelf) {
      return this.props.shelvings.findWhere({ id: shelf.get('id') }) !== undefined;
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
          <Shelf shelf={shelf} shelved={self.isOnShelf(shelf)} groupName={self.state.groupName} onUnshelve={function() { self.props.onUnshelve(shelf); }} onShelve={function() { self.props.onShelve(shelf); } } />
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
