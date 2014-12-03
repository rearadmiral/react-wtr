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
    isShelved: function(shelf) {
      return _.contains(this.props.shelvings, shelf.id);
    },
    unshelve: function() {
      this.setState({shelved: false});
    },
    unshelveButton: function() {
      return (
        React.DOM.button( {className:"btn wtr__deleteShelvingButton", click:this.unshelve} , 
          " Remove from all shelves "
        )
      );
    },

    shelves: function() {
      var self = this;
      return this.props.shelves.map(function(shelf){
        return (
          Shelf( {shelf:shelf, shelved:self.isShelved(shelf), groupName:self.state.groupName} )
        );
      });
    },
    render: function() {
      return (
        React.DOM.div( {className:"wtr__shelfList"}, 
           this.hasAnyShelvings() ? this.unshelveButton() : null, 
           this.shelves() 
        )
      );
    }
  });
});
