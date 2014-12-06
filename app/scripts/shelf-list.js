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
      return false;
    },
    isOnShelf: function(shelf) {
      return _.chain(this.props.shelvings).pluck('id').contains(shelf.id).value();
    },
    unshelveButton: function() {
      return (
        React.DOM.button( {className:"btn wtr__deleteShelvingButton"} , 
          " Remove from all shelves "
        )
      );
    },

    shelfItems: function() {
      var self = this;
      return this.props.shelves.map(function(shelf){
        return (
          Shelf( {shelf:shelf, shelved:self.isOnShelf(shelf), groupName:self.state.groupName, onUnshelve:function() { self.props.onUnshelve(shelf); }, onShelve:function() { self.props.onShelve(shelf); } } )
        );
      });
    },
    render: function() {
      return (
        React.DOM.div( {className:"wtr__shelfList"}, 
           this.hasAnyShelvings() ? this.unshelveButton() : null, 
           this.shelfItems() 
        )
      );
    }
  });
});
