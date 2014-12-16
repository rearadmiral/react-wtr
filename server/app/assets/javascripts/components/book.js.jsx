/** @jsx React.DOM */
var Book = (function () {
  return React.createClass({
    render: function() {
      var book = this.props.book;
      var shelves = this.props.shelves;

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
            {book.get('firstLine')}
          </p>
          
          <div className="clear"></div>

        </div>
      );
    }
  });
})();
