/** @jsx React.DOM */
'use strict';
define(['want-to-read'], function (WantToRead) {
  return React.createClass({
    render: function() {
      var book = this.props.book;
      return (
        React.DOM.div( {className:"book"}, 

          React.DOM.img( {src:book.coverImgUrl}),

          React.DOM.div(null, 
            React.DOM.a( {href:"#"}, 
              book.title
            )
          ),

          React.DOM.div(null, 
            " by ", React.DOM.span( {className:"author"}, book.author)
          ),

          WantToRead( {book:book} ),

          React.DOM.p( {className:"firstLine"}, 
            book.firstLine
          ),
          
          React.DOM.div( {className:"clear"})

        )
      );
    }
  });
});
