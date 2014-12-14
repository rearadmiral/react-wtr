'use strict';

require.config({
	baseUrl: 'scripts',
	paths: {
		react: '../bower_components/react/react',
		almond: '../bower_components/almond/almond',
		requirejs: '../bower_components/requirejs/require',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
		backboneAssociations: '../bower_components/backbone-associations/backbone-associations',
		jquery: '../bower_components/jquery/dist/jquery'
	},
	shim: {
		react: {
			exports: 'React'
		}
	}
});

require(['app', 'stats', 'backboneAssociations'], function (App, Stats, BackboneAssociations) {
	React.renderComponent(
		App(null ),
		document.getElementById('react-app')
	);
	React.renderComponent(
		Stats(null ),
		document.getElementById('react-stats')
	);

});
