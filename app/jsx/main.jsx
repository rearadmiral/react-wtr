/** @jsx React.DOM */
'use strict';

require.config({
	baseUrl: 'scripts',
	paths: {
		react: 'script/react.min'
	},
	shim: {
		react: {
			exports: 'React'
		}
	}
});

require(['app', 'stats'], function (App, Stats) {
	React.renderComponent(
		<App />,
		document.getElementById('react-app')
	);
	React.renderComponent(
		<Stats />,
		document.getElementById('react-stats')
	);

});
