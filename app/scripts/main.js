/** @jsx React.DOM */
'use strict';

require.config({
	baseUrl: 'scripts',
	paths: {
		react: '../bower_components/react/react',
		almond: '../bower_components/almond/almond',
		requirejs: '../bower_components/requirejs/require',
		underscore: '../bower_components/underscore/underscore'
	},
	shim: {
		react: {
			exports: 'React'
		}
	}
});

require(['app', 'stats'], function (App, Stats) {
	React.renderComponent(
		App(null ),
		document.getElementById('react-app')
	);
	React.renderComponent(
		Stats(null ),
		document.getElementById('react-stats')
	);

});
