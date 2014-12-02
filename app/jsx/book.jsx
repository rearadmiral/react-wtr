/** @jsx React.DOM */
'use strict';
define([], function () {
  return React.createClass({
    render: function() {
      var book = this.props.book;
      return (
        <div className="book">
          <img src={book.coverImgUrl}></img>
          <a href="#">{book.title}</a>
          by <span className="author">{book.author}</span>
          <p className="firstLine">{book.firstLine}</p>
          <div className="clear"></div>
        </div>
      );
    }
  });
});
