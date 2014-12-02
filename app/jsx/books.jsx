/** @jsx React.DOM */
'use strict';
define(['book'], function (Book) {
  return React.createClass({
    getInitialState: function() {
      return {
        books: [
          {id: 1, title: 'Elsie\'s Turkey Tacos and Arroz con Pollo: More than 100 Latin-Flavored, Great-Tasting Recipes for Working Mommas', coverImgUrl: 'http://sd.keepcalm-o-matic.co.uk/i/keep-calm-its-taco-time.png', firstLine: 'It was the best of times. It was the blurst of times.', author: 'Elsie Ramos' },
          {id: 2, title: 'Tacos Anyone? An Autism Story', coverImgUrl: 'http://s3-ec.buzzfed.com/static/2014-07/30/12/enhanced/webdr11/grid-cell-16797-1406738146-4.jpg', firstLine: 'Congratulations for buying my book.', author: 'Señor Taco'},
          {id: 3, title: 'A Taco Testimony: Meditations on Family, Food and Culture', coverImgUrl: 'http://d.gr-assets.com/books/1171046794l/83720.jpg', firstLine: 'Ah, the universe. It\'s pretty big.', author: 'Stephen Hawking'}
        ]
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
