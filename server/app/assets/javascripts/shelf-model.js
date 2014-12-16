var ShelfModel = (function() {
  
  var modelClass = Backbone.AssociatedModel.extend({});

  var collectionClass = Backbone.Collection.extend({
    model: modelClass,
    url: 'http://localhost:3000/shelves'
  });

  var instance = new collectionClass();

  return {
    modelClass: modelClass,
    collectionClass: collectionClass,
    all: function() {
      return instance;
    }
  };

})();
