/** @jsx React.DOM */
'use strict';
define(['book', 'book-model', 'underscore'], function (Book, BookModel, _) {
  return React.createClass({
    componentDidMount: function() {
      var self = this;
      var all = new BookModel.collection();
      all.fetch().success(function(){
        self.setState({ books: all });
      });
    },
    getInitialState: function() {
      return {
        books: []
      };
    },
    bookListItems: function() {
      if (_(this.state.books).isEmpty()) {
        return (
          <p>Loading...</p>
        );
      }
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
