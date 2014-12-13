/** @jsx React.DOM */
'use strict';
define([], function () {
  return React.createClass({
    onShelvingChange: function() {
      if (!this.props.shelved) {
        this.props.onShelve();
      } else if (this.props.shelved) {
        this.props.onUnshelve();
      }
    },
    inputElement: function() {
      if (this.props.shelf.get('exclusive')) {
        return (
          React.DOM.input( {type:"radio", checked:this.props.shelved, name:this.props.groupName, value:this.props.shelf.get('id'), onChange:this.onShelvingChange} )
        );
      } else {
        return (
          React.DOM.input( {type:"checkbox", checked:this.props.shelved, value:this.props.shelf.get('id'), onChange:this.onShelvingChange} )
        );
      }
    },
    render: function() {
      return (
        React.DOM.div(null, 
          React.DOM.label(null, 
            this.inputElement(),
            this.props.shelf.get('name')
          )
        )
      );
    }
  });
});
