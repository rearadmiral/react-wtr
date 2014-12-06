/** @jsx React.DOM */
'use strict';
define(['shelf-list', 'underscore'], function (ShelfList, _) {
  return React.createClass({
    getInitialState: function() {
      return {
        shelvesVisible: false,
        shelves: this.cannedShelvesData(),
        shelfIds: this.props.book.shelves
      };
    },
    showShelves: function() {
      this.setState({shelvesVisible: true});
    },
    isShelved: function() {
      return !_.isEmpty(this.state.shelfIds);
    },
    shelves: function() {
      var shelves = this.state.shelves
      return _(this.state.shelfIds).map(function(shelvingShelfId){
        return _(shelves).findWhere({ id: shelvingShelfId });
      });
    },
    exclusiveShelf: function() {
      return _(this.shelves()).findWhere({ exclusive: true });
    },
    onUnshelve: function(shelf) {
      console.log('[DEBUG]: unshelving shelf ' + JSON.stringify(shelf));
      if (shelf.exclusive) {
        return false;
      }

      this.setState({
        shelfIds: _(this.state.shelfIds).without(shelf.id)
      });
    },
    onShelve: function(shelf) {
      this.setState({
        shelfIds: this.state.shelfIds.concat(shelf.id)
      });
    },
    primaryButtonName: function() {
      var exclusiveShelf = this.exclusiveShelf();
      if (exclusiveShelf) {
        return exclusiveShelf.name;
      }
      return 'Want to Read';
    },
    renderShelfList: function() {
      return (
        ShelfList( {shelves:this.state.shelves, shelvings:this.shelves(), onUnshelve:this.onUnshelve, onShelve:this.onShelve} )
      );
    },
    render: function() {
      var book = this.props.book;
      return (
        React.DOM.div(null, 
          React.DOM.button(
            {className: this.isShelved() ? 'wtr__lhs--shelved' : 'wtr__lhs--unshelved' }, 
            this.primaryButtonName()
          ),

          React.DOM.button(
              {className:"btn btn-success wtr__shelfDropdown",
              onClick:this.showShelves} 
          ),

           this.state.shelvesVisible ? this.renderShelfList(this) : '' 
        )
      );
    },
    cannedShelvesData: function() {
      return [
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
      ];
    }
  });
});
