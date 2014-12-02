/** @jsx React.DOM */
'use strict';
define(['shelf-list'], function (ShelfList) {
  return React.createClass({
    getInitialState: function() {
      return {
        shelvesVisible: false
      };
    },
    showShelves: function() {
      this.setState({shelvesVisible: true});
    },
    shelfList: function() {
      return (
        ShelfList(null )
      );
    },
    render: function() {
      var book = this.props.book;
      return (
        React.DOM.div(null, 
          React.DOM.button(
            {className: book.shelved ? 'wtr__lhs--shelved' : 'wtr__lhs--unshelved' }, 
            " Want To Read "
          ),

          React.DOM.button(
              {className:"btn btn-success wtr__shelfDropdown",
              onClick:this.showShelves} 
          ),
          
           this.state.shelvesVisible ? this.shelfList() : '' 
        )
      );
    }
  });
});
