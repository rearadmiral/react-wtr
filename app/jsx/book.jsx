/** @jsx React.DOM */
'use strict';
define(['want-to-read'], function (WantToRead) {
  return React.createClass({
    render: function() {
      var book = this.props.book;
      return (
        <div className="book">
          <img src={book.coverImgUrl}></img>
          <a href="#">{book.title}</a>
          by <span className="author">{book.author}</span>
          <WantToRead book={book} />
          <p className="firstLine">{book.firstLine}</p>
          <div className="clear"></div>
        </div>
      );
    }
  });
});
