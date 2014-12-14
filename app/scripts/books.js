/** @jsx React.DOM */
'use strict';
define(['book', 'stores', 'underscore'], function (Book, Stores, _) {
  return React.createClass({
    componentDidMount: function() {
      var self = this;
      var shelvesStore = Stores.shelves;
      var booksStore = Stores.books;
      shelvesStore.fetch().success(function() {
        booksStore.fetch().success(function() {
          self.setState({ books: booksStore, shelves: shelvesStore });
        });
      });
    },
    getInitialState: function() {
      return {
        books: [],
        shelves: []
      };
    },
    bookListItems: function() {
      if (_(this.state.books).isEmpty() || _(this.state.shelves).isEmpty()) {
        return (
          React.DOM.p(null, "Loading...")
        );
      }
      var shelves = this.state.shelves;
      return this.state.books.map(function(book) {
        return (
          Book( {model:book, shelves:shelves} )
        );
      });
    },
    render: function() {
      return (
        React.DOM.section( {className:"books"}, 
          React.DOM.h1(null, "Books"),
          this.bookListItems()
        )
      );
    }
  });
});
