/** @jsx React.DOM */
'use strict';
define(['want-to-read'], function (WantToRead) {
  return React.createClass({
    render: function() {
      var book = this.props.book;
      return (
        <div className="book">

          <img src={book.get('coverImgUrl')}></img>

          <div>
            <a href="#">
              {book.get('title')}
            </a>
          </div>

          <div>
            by <span className="author">{book.get('author')}</span>
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
