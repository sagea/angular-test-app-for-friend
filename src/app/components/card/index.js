angular
	.module('App/Components')
	.directive('saCard', saCard);


function saCard () {
	return {
		scope: {
			url: '=',
			champion: '='
		},
		controller: angular.noop,
		controllerAs: '$card',
		bindToController: true,
		templateUrl: 'app/components/card/card.tpl.html',
		link: function (scope, elem, attrs) {
			elem.css({
				display: 'inline-block'
			});
			// elem.on('mouseover', handleMouseOver);
			// elem.on('mouseout', handleMouseOut);
			//
			// function handleMouseOver (e) {
			// 	elem.removeClass('hover');
			// }
			//
			// function handleMouseOut () {
			// 	elem.addClass('hover');
			// }
		}
	}
}