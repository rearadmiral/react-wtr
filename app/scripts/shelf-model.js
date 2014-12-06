'use strict';
define([], function() {

  var all = function() {
    return [
    {
      id: 1,
      name: 'Want to Read',
      exclusive: true
    },
    {
      id: 2,
      name: 'Read',
      exclusive: true
    },
    {
      id: 3,
      name: 'Currently Reading',
      exclusive: true
    },
    {
      id: 4,
      name: 'Fiction',
      exclusive: false
    },
    {
      id: 5,
      name: 'Non-Fiction',
      exclusive: false
    },
    {
      id: 6,
      name: 'Own',
      exclusive: false
    }
    ];
    
  };

  return {
    all: all
  };

});
