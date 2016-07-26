
angular
	.module('App/Routes')
	.controller('ClassicCardsCtrl', ClassicCardsCtrl);


function ClassicCardsCtrl ($scope, Api) {
	var vm = this;
	vm.cardList = [];

	vm.$onInit = function () {
		console.log('HERE');
		Api.getCards()
			.then (function (res) {
				console.log('res', res);
				vm.cardList = res;
				$scope.$evalAsync();
			});
	}
}