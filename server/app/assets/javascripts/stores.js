var Stores = (function() {

	var booksStore = BookModel.all();
	var shelvesStore = ShelfModel.all();

	return {
		books: booksStore,
		shelves: shelvesStore
	};

})();