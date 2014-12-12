'use strict';
define(['backbone', 'underscore'], function(Backbone, _) {

  var modelClass = Backbone.Model.extend({

  });

  var collectionClass = Backbone.Collection.extend({
    model: modelClass,
    url: 'http://localhost:3000/books'
  });

  return {
    model: modelClass,
    collection: collectionClass
  };
});
