/** @jsx React.DOM */
'use strict';
define(['books'], function (Books) {
	return React.createClass({
		render: function() {
			return (
				Books(null)
			);
		}
	});
});
