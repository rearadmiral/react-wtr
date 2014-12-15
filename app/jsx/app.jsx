/** @jsx React.DOM */
'use strict';
define(['books', 'stores'], function (Books, Stores) {
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

	      React.dispatcher.on('book:removedFromShelf', function(bookJson, shelfJson) {
	        var backboneBook = self.state.books.findWhere({ id: bookJson.id });
	        backboneBook.removeFromShelf(shelfJson);
	      });
	    },

	    getInitialState: function() {
	      return {
	        books: [],
	        shelves: []
	      };
	    },

		render: function() {

			if (_(this.state.books).isEmpty() || _(this.state.shelves).isEmpty()) {
		        return (
		          <p>Loading...</p>
		        );
      		}

			return (
				<Books books={this.state.books} shelves={this.state.shelves} />
			);
		}
	});
});
