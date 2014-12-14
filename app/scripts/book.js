/** @jsx React.DOM */
'use strict';
define(['react', 'want-to-read', 'backbone', 'react.backbone'], function (React, WantToRead, Backbone, ReactBackbone) {
  return React.createBackboneClass({

    render: function() {
      var shelves = this.props.shelves;
      var book = this.getModel();
      return (
        React.DOM.div( {className:"book"}, 

          React.DOM.img( {src:book.get('coverImgUrl')}),

          React.DOM.div(null, 
            React.DOM.a( {href:"#"}, 
              book.get('title')
            )
          ),

          React.DOM.div(null, 
            " by ", React.DOM.span( {className:"author"}, book.get('author'))
          ),

          WantToRead( {book:book, shelves:shelves} ),

          React.DOM.p( {className:"firstLine"}, 
            book.firstLine
          ),
          
          React.DOM.div( {className:"clear"})

        )
      );
    }
  });
});
