/** @jsx React.DOM */
'use strict';
define(['want-to-read'], function (WantToRead) {
  return React.createClass({
    mixins: [Backbone.React.Component.mixin],
    render: function() {
      var book = this.props.book;
      var shelves = this.props.shelves;

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

          <WantToRead book={book} shelves={shelves} />

          <p className="firstLine">
            {book.firstLine}
          </p>
          
          <div className="clear"></div>

        </div>
      );
    }
  });
});
