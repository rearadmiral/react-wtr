/** @jsx React.DOM */
'use strict';

require.config({
	baseUrl: 'scripts',
	paths: {
		almond: '../../bower_components/almond/almond',
		modernizr: '../../bower_components/modernizr/modernizr',
		requirejs: '../../bower_components/requirejs/require',
		underscore: '../../bower_components/underscore/underscore',
		jquery: '../../bower_components/jquery/dist/jquery',
		'backbone-associations': '../../bower_components/backbone-associations/backbone-associations',
		backbone: '../../bower_components/backbone/backbone',
		react: '../../bower_components/react/react',
		'react.backbone': '../../bower_components/react.backbone/react.backbone'
	},
	shim: {
		react: {
			exports: 'React'
		}
	}
});

require(['app', 'stats', 'dispatcher', 'backbone-associations', 'react.backbone'], function (App, Stats, Dispatcher) {

	React.dispatcher = Dispatcher;

	React.render(
		App(),
		document.getElementById('react-app')
	);
	React.render(
		Stats(),
		document.getElementById('react-stats')
	);

});
