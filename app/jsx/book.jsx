/** @jsx React.DOM */
'use strict';
define(['want-to-read'], function (WantToRead) {
  return React.createClass({
    render: function() {
      var book = this.props.book;
      return (
        <div className="book">

          <img src={book.coverImgUrl}></img>

          <div>
            <a href="#">
              {book.title}
            </a>
          </div>

          <div>
            by <span className="author">{book.author}</span>
          </div>

          <WantToRead book={book} />

          <p className="firstLine">
            {book.firstLine}
          </p>
          
          <div className="clear"></div>

        </div>
      );
    }
  });
});
