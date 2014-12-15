/** @jsx React.DOM */
'use strict';
define(['books'], function (Books) {
	return React.createClass({
		mixins: [Backbone.React.Component.mixin],
		render: function() {
			return (
				<Books/>
			);
		}
	});
});
