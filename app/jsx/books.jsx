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
          <Book book={book} />
        );
      });
    },
    render: function() {
      return (
        <section className="books">
          <h1>Books</h1>
          {this.bookListItems()}
        </section>
      );
    }
  });
});
