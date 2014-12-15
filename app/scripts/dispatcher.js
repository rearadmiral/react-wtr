define(['backbone', 'underscore'], function(Backbone, _) {

	var dispatcher = _.clone(Backbone.Events)

	dispatcher.on('all', function(name, params) {
		console.log('Dispatcher received ' + name + ' with params: ' + JSON.stringify(params));
	});

	return dispatcher;

});