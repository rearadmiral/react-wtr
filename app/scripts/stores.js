'use strict';
define(['book-model', 'shelf-model'], function(BookModel, ShelfModel) {

	var booksStore = BookModel.all();
	var shelvesStore = ShelfModel.all();

	return {
		books: booksStore,
		shelves: shelvesStore
	};

});