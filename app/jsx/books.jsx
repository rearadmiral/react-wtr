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
          <p>Loading...</p>
        );
      }
      var shelves = this.state.shelves;
      return this.state.books.map(function(book) {

        var model = {
          book: book,
          shelves: shelves
        };

        return (
          <Book model={model} />
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
