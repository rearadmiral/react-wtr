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
        <ShelfList />
      );
    },
    render: function() {
      var book = this.props.book;
      return (
        <div>
          <button
            className={ book.shelved ? 'wtr__lhs--shelved' : 'wtr__lhs--unshelved' }>
            Want To Read
          </button>

          <button
              className='btn btn-success wtr__shelfDropdown'
              onClick={this.showShelves} >
          </button>
          
          { this.state.shelvesVisible ? this.shelfList() : '' }
        </div>
      );
    }
  });
});
