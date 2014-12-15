  'use strict';
define(['backbone', 'underscore', 'shelf-model'], function(Backbone, _, ShelfModel) {

  var modelClass = Backbone.AssociatedModel.extend({
    relations: [
      {
        type: Backbone.Many,
        key: 'shelves', 
        collectionType: ShelfModel.collectionClass,
        map: function(shelfIdOrIds) {

          console.log('[DEBUG] shelfIdOrIds: ' + JSON.stringify(shelfIdOrIds));

          var lookupById = function(shelfId) {
              return ShelfModel.all().findWhere({ id: shelfId });
          };

          if (_.isNumber(shelfIdOrIds)) {
            return lookupById(shelfIdOrIds);
          }

          if (_.isArray(shelfIdOrIds)) {
            return shelfIdOrIds.map(lookupById);
          }

          if (shelfIdOrIds.id !== undefined) {
            return lookupById(shelfIdOrIds.id);
          }

        }
      }
    ],

    removeFromShelf: function(shelf) {
      this.get('shelves').remove(shelf);
    }

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
