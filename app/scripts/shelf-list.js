/** @jsx React.DOM */
'use strict';
define(['shelf'], function (Shelf) {
  return React.createClass({
    getInitialState: function() {
      return {
        groupName: "shelfGroup" + new Date().getTime(),
        shelves: [
          {
            id: 1,
            name: 'Want to Read',
            exclusive: true
          },
          {
            id: 2,
            name: 'Read',
            exclusive: true
          },
          {
            id: 3,
            name: 'Currently Reading',
            exclusive: true
          },
          {
            id: 4,
            name: 'Fiction',
            exclusive: false
          },
          {
            id: 5,
            name: 'Non-Fiction',
            exclusive: false
          },
          {
            id: 6,
            name: 'Own',
            exclusive: false
          }
        ]
      };
    },
    isShelved: function() {
      return false;
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
      return this.state.shelves.map(function(shelf){
        return (
          Shelf( {shelf:shelf, groupName:self.state.groupName} )
        );
      });
    },
    render: function() {
      return (
        React.DOM.div( {class:"wtr__shelfList"}, 
           this.isShelved() ? this.unshelveButton() : null, 
           this.shelves() 
        )
      );
    }
  });
});
