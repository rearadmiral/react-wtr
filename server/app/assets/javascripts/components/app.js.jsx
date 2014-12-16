/** @jsx React.DOM */
var App = (function () {
	return React.createClass({
		componentDidMount: function() {
	      var self = this;
	      React.dispatcher.on('book:removedFromShelf', function(book, shelf) {
	        book.removeFromShelf(shelf);
	        self.setState({books: self.state.books});
	      });
	    },

	    getInitialState: function() {
	      return {
	        books: Stores.books,
	        shelves: Stores.shelves
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
})();
