/** @jsx React.DOM */
'use strict';
define([], function () {
  return React.createClass({
    render: function() {
      var book = this.props.book;
      return (
        React.DOM.div( {className:"book"}, 
          React.DOM.img( {src:book.coverImgUrl}),
          React.DOM.a( {href:"#"}, book.title),
          " by ", React.DOM.span( {className:"author"}, book.author),
          React.DOM.p( {className:"firstLine"}, book.firstLine),
          React.DOM.div( {className:"clear"})
        )
      );
    }
  });
});
