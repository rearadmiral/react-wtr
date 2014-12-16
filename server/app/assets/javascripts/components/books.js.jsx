/** @jsx React.DOM */
var Books = (function () {
  return React.createClass({
    bookListItems: function() {
      var shelves = this.props.shelves;
      return this.props.books.map(function(book) {
        return (
          <Book book={book} shelves={shelves} />
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
})();
