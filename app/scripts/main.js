/** @jsx React.DOM */
'use strict';

require.config({
	baseUrl: 'scripts',
	paths: {
		almond: '../bower_components/almond/almond',
		requirejs: '../bower_components/requirejs/require',
		underscore: '../bower_components/underscore/underscore',
		jquery: '../bower_components/jquery/dist/jquery',
		backbone: '../bower_components/backbone/backbone',
		react: '../bower_components/react/react',
		'backbone-associations': '../bower_components/backbone-associations/backbone-associations',
		'react-events': '../bower_components/react-events/react-events',
		'react-mixin-manager': '../bower_components/react-mixin-manager/react-mixin-manager',
		'react.backbone': '../bower_components/react.backbone/react.backbone'
	},
	shim: {
		react: {
			exports: 'React'
		}
	}
});

require(['app', 'stats', 'backbone-associations'], function (App, Stats, BackboneAssociations) {
	React.renderComponent(
		App(null ),
		document.getElementById('react-app')
	);
	React.renderComponent(
		Stats(null ),
		document.getElementById('react-stats')
	);

});
