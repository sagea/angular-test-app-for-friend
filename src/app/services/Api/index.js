
angular
	.module('App/Services')
	.factory('Api', Api);


function Api ($q) {
	return {
		getCards: getCards
	};

	function getCards () {
		// Pretend this is an api request
		return $q.resolve([{
			url: 'URL 1',
			champion: 'Azire'
		},{
			url: 'URL 2',
			champion: 'Teemo'
		},{
			url: 'URL 3',
			champion: 'Ashe'
		}]);
	}
}