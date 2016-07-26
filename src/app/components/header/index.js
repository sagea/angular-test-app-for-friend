
angular
	.module('App/Components')
	.directive('saHeader', saHeader);

function saHeader ($window) {
	return {
		controller: Controller,
		controllerAs: '$header',
		templateUrl: 'app/components/header/header.tpl.html'
	};

	function Controller () {
		
	}
}
