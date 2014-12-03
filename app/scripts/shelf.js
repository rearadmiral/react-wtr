/** @jsx React.DOM */
'use strict';
define([], function () {
  return React.createClass({
    toggle: function() {
      // var currentState = this.state.shelved;
      // this.setState({shelved: !currentState});
    },
    inputElement: function() {
      if (this.props.shelf.exclusive) {
        return (
          React.DOM.input( {type:"radio", checked:this.props.shelved, name:this.props.groupName, value:this.props.shelf.id, onChange:this.toggle} )
        );
      } else {
        return (
          React.DOM.input( {type:"checkbox", checked:this.props.shelved, value:this.props.shelf.id, onChange:this.toggle} )
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
