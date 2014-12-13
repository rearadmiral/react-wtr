/** @jsx React.DOM */
'use strict';
define(['book', 'stores', 'underscore'], function (Book, Stores, _) {
  return React.createClass({
    componentDidMount: function() {
      var self = this;
      var shelvesStore = Stores.shelves;
      var booksStore = Stores.books;
      shelvesStore.fetch().success(function() {
        self.setState({ shelves: shelvesStore });

        booksStore.fetch().success(function() {
          self.setState({ books: booksStore });
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
          Book( {book:book, shelves:shelves} )
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
