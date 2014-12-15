'use strict';
define(['book-model', 'shelf-model', 'dispatcher'], function(BookModel, ShelfModel, Dispatcher) {

	var booksStore = BookModel.all();
	var shelvesStore = ShelfModel.all();

	return {
		books: booksStore,
		shelves: shelvesStore
	};

});