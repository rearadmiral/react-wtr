/** @jsx React.DOM */
'use strict';
define(['shelf','underscore'], function (Shelf, _) {
  return React.createClass({
    mixins: ['events'],
    events: {
      'prop:shelves:change': 'onShelfChange'
    },
    onShelfChange: function(a, b) {
      console.log('[DEBUG] a: ' + JSON.stringify(a));
      console.log('[DEBUG] b: ' + JSON.stringify(b));
    },
    getInitialState: function() {
      return {
        groupName: 'shelfGroup' + new Date().getTime()
      };
    },
    hasAnyShelvings: function() {
      return !_(this.props.shelvings).isEmpty();
    },
    isOnShelf: function(shelf) {
      return _(this.props.shelvings).findWhere({ id: shelf.id }) !== undefined;
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
      return _(this.props.shelves).map(function(shelf){
        return (
          <Shelf shelf={shelf} shelved={self.isOnShelf(shelf)} groupName={self.state.groupName} />
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
