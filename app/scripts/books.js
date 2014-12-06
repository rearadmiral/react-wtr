/** @jsx React.DOM */
'use strict';
define(['book', 'book-model'], function (Book, BookModel) {
  return React.createClass({
    getInitialState: function() {
      return {
        books: BookModel.all()
      };
    },
    bookListItems: function() {
      return this.state.books.map(function(book) {
        return (
          Book( {book:book} )
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
