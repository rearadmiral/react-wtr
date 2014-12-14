/** @jsx React.DOM */
'use strict';
define(['react', 'want-to-read', 'backbone', 'react.backbone'], function (React, WantToRead, Backbone, ReactBackbone) {
  return React.createBackboneClass({

    render: function() {
      var shelves = this.props.shelves;
      var book = this.getModel();
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
