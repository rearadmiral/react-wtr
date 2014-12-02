/** @jsx React.DOM */
'use strict';
define([], function () {
  return React.createClass({
    getInitialState: function() {
      return {
        shelved: false
      };
    },
    inputElement: function() {
      if (this.props.shelf.exclusive) {
        return (
          React.DOM.input( {type:"radio", name:this.props.groupName, checked:this.state.shelved} )
        );
      } else {
        return (
          React.DOM.input( {type:"checkbox", checked:this.state.shelved} )
        );
      }
    },
    render: function() {
      return (
        React.DOM.div(null, 
          React.DOM.label(null, 
            this.inputElement(),
            this.props.shelf.name
          )
        )
      );
    }
  });
});
