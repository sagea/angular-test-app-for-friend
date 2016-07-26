require('angular-route');

angular
	.module('App/Routes', [
		'ngAnimate',
		'ui.router',
		'ngRoute'
	])
	.config(RouteConfig);

function RouteConfig ($stateProvider, $routeProvider) {
	var ROUTES_PATH = 'app/routes/';

	$stateProvider.state('home', {
		url: '/',
		controller: 'HomeCtrl as $home',
		templateUrl: ROUTES_PATH + 'home/home.tpl.html'
	});

	$stateProvider.state('card-set', {
		url: '/card-set',
		controller: 'ClassicCardsCtrl as $card',
		templateUrl: ROUTES_PATH + 'classic-cards/classic-cards.tpl.html'
	});

	$stateProvider.state('rules', {
		url: '/rules',
		controller: 'RulesCtrl as $rules',
		templateUrl: ROUTES_PATH + 'rules/rules.tpl.html'
	});

	$routeProvider.otherwise('#/');
}