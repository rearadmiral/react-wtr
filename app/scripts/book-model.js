  'use strict';
define(['backbone', 'underscore', 'shelf-model'], function(Backbone, _, ShelfModel) {

  var modelClass = Backbone.AssociatedModel.extend({
    relations: [
      {
        type: Backbone.Many,
        key: 'shelves', 
        collectionType: ShelfModel.collectionClass,
        map: function(shelfIds) {
          return shelfIds.map(function(shelfId){
            return ShelfModel.all().findWhere({ id: shelfId });
          });
        }
      }
    ]

  });

  var collectionClass = Backbone.Collection.extend({
    model: modelClass,
    url: 'http://localhost:3000/books'
  });

  var instance = new collectionClass();

  return {
    all: function() {
      return instance;
    }
  };
});
