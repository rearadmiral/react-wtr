/** @jsx React.DOM */
'use strict';
define([], function () {
  return React.createClass({
    getInitialState: function() {
      return {userCount: 30000000, bookCount: 1000000000 };
    },
    randomIntegerFromOneTo: function(max) {
      return Math.floor(Math.random()*max+1);
    },
    componentDidMount: function() {
      var self = this;
      setInterval(function(){
        self.setState({
          userCount: self.state.userCount + self.randomIntegerFromOneTo(20000),
        });
      }, this.randomIntegerFromOneTo(500) + 500);
      setInterval(function() {
        self.setState({
          bookCount: self.state.bookCount + self.randomIntegerFromOneTo(3000000)
        });
      }, this.randomIntegerFromOneTo(500) + 500);
    },
    roundToNearestThreeDecimals: function(float) {
      return Math.round(float * 1000) / 1000;
    },
    render: function() {
      return (
        React.DOM.span(null, 
          " Goodreads has helped ",  this.roundToNearestThreeDecimals(this.state.userCount / 1000000.0),  " million readers discover ",  this.roundToNearestThreeDecimals(this.state.bookCount / 1000000000.0),  " BILLION books. "
        )
      );
    }
  });
});
