'use strict';
// Vendor
require('angular');
require('angular-route');
require('angular-animate');
require('angular-ui-router');

// Project
require('./components');
require('./app.routes');
require('./routes');
require('./services');

angular
	.module ('App', [
		// Vendor
		'ngAnimate',
		'ui.router',

		// Project
		'App/Routes',
		'App/Components',
		'App/Services'
	]);

document.addEventListener('DOMContentLoaded', function () {
	angular.bootstrap(document.body, ['App']);
});
