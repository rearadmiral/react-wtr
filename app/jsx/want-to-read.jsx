/** @jsx React.DOM */
'use strict';
define(['shelf-list', 'underscore'], function (ShelfList, _) {
  return React.createClass({
    getInitialState: function() {
      return {
        shelvesVisible: false,
        shelves: this.cannedShelvesData(),
        shelvings: this.props.book.shelves
      };
    },
    showShelves: function() {
      this.setState({shelvesVisible: true});
    },
    shelfList: function() {
      return (
        <ShelfList shelves={this.state.shelves} shelvings={this.state.shelvings} />
      );
    },
    isShelved: function() {
      return !_.isEmpty(this.state.shelvings);
    },
    shelves: function() {
      var self = this;
      return _.map(this.state.shelvings, function(shelfId){
        return self.shelvesById()[shelfId];
      });
    },
    exclusiveShelf: function() {
      return _.findWhere(this.shelves(), { exclusive: true });
    },
    primaryButtonName: function() {
      var exclusiveShelf = this.exclusiveShelf();
      if (exclusiveShelf) {
        return exclusiveShelf.name;
      }
      return 'Want to Read';
    },
    render: function() {
      var book = this.props.book;
      return (
        <div>
          <button
            className={ this.isShelved() ? 'wtr__lhs--shelved' : 'wtr__lhs--unshelved' }>
            {this.primaryButtonName()}
          </button>

          <button
              className='btn btn-success wtr__shelfDropdown'
              onClick={this.showShelves} >
          </button>

          { this.state.shelvesVisible ? this.shelfList() : '' }
        </div>
      );
    },
    shelvesById: function() {
      return _.indexBy(this.cannedShelvesData(), 'id');
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
