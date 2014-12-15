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
		'react.backbone': '../../bower_components/react.backbone/react.backbone',
		'backbone-react-component': '../../bower_components/backbone-react-component/lib/component',
		'react-events': '../../bower_components/react-events/react-events',
		'react-mixin-manager': '../../bower_components/react-mixin-manager/react-mixin-manager'
	},
	shim: {
		react: {
			exports: 'React'
		}
	}
});

require(['app', 'stats', 'react-mixin-manager', 'react-events', 'backbone-associations', 'backbone-react-component'], function (App, Stats) {

	React.renderComponent(
		App(null ),
		document.getElementById('react-app')
	);
	React.renderComponent(
		Stats(null ),
		document.getElementById('react-stats')
	);

});
