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
      return _(this.cannedShelvesData()).findWhere({name: 'Want to Read'});
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
        <ShelfList shelves={this.state.shelves} shelvings={this.shelves()} onUnshelve={this.onUnshelve} onShelve={this.onShelve} onClearShelvings={this.onClearShelvings} />
      );
    },
    render: function() {
      var book = this.props.book;
      return (
        <div>
          <button
            className={ this.isShelved() ? 'wtr__lhs--shelved' : 'wtr__lhs--unshelved' } onClick={this.onShelveOnPrimaryShelf} >
            {this.primaryButtonName()}
          </button>

          <button
              className='btn btn-success wtr__shelfDropdown'
              onClick={this.toggleShelvesVisibility} >
          </button>

          { this.state.shelvesVisible ? this.renderShelfList(this) : '' }
        </div>
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
