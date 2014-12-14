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
      return !_.isEmpty(this.state.shelfIds);
    },
    shelves: function() {
      return this.props.book.get('shelves');
    },
    exclusiveShelf: function() {
      return this.props.shelves.findWhere({ exclusive: true });
    },
    onUnshelve: function(shelf) {
      this.props.book.removeFromShelf(shelf);
    },
    onShelve: function(shelf) {
      this.props.book.addToShelf(shelf);
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
        ShelfList( {shelves:this.props.shelves, shelvings:this.shelves(), onUnshelve:this.onUnshelve, onShelve:this.onShelve, onClearShelvings:this.onClearShelvings} )
      );
    },
    render: function() {
      var book = this.props.book;
      return (
        React.DOM.div(null, 
          React.DOM.button(
            {className: this.isShelved() ? 'wtr__lhs--shelved' : 'wtr__lhs--unshelved',  onClick:this.onShelveOnPrimaryShelf} , 
            this.primaryButtonName()
          ),

          React.DOM.button(
              {className:"btn btn-success wtr__shelfDropdown",
              onClick:this.toggleShelvesVisibility} 
          ),

           this.state.shelvesVisible ? this.renderShelfList() : '' 
        )
      );
    }
  });
});
