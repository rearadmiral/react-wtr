/** @jsx React.DOM */
'use strict';
define(['shelf-list', 'underscore', 'shelf-model'], function (ShelfList, _, ShelfModel) {
  return React.createClass({
    getInitialState: function() {
      return {
        shelvesVisible: false,
        shelves: ShelfModel.all(),
        shelfIds: this.props.book.shelves
      };
    },
    toggleShelvesVisibility: function() {
      this.setState({shelvesVisible: !this.state.shelvesVisible});
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
      if (_.isUndefined(shelf) || shelf.exclusive) {
        return;
      }

      this.setState({
        shelfIds: _(this.state.shelfIds).without(shelf.id)
      });
    },
    onShelve: function(shelf) {
      var shelfIds = this.state.shelfIds;

      if (shelf.exclusive && this.exclusiveShelf()) {
        shelfIds = _(shelfIds).without(this.exclusiveShelf().id);
      }
      this.setState({
        shelfIds: shelfIds.concat(shelf.id)
      });

    },
    onClearShelvings: function() {
      this.setState({
        shelfIds: [],
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
      return _(ShelfModel.all()).findWhere({name: 'Want to Read'});
    },
    primaryButtonName: function() {
      var exclusiveShelf = this.exclusiveShelf();
      if (exclusiveShelf) {
        return exclusiveShelf.name;
      }
      return this.primaryShelf().name;
    },
    renderShelfList: function() {
      return (
        ShelfList( {shelves:this.state.shelves, shelvings:this.shelves(), onUnshelve:this.onUnshelve, onShelve:this.onShelve, onClearShelvings:this.onClearShelvings} )
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

           this.state.shelvesVisible ? this.renderShelfList(this) : '' 
        )
      );
    }
  });
});
