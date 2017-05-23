define(['angular'], function (angular) {

	angular
		.module('MainApp')
		.directive('clickToChangeColor',clickToChangeColor);

	function clickToChangeColor() {

		return{
			restrict:'A',
			replace:false,
			scope:{
				color:'@clickToChangeColor'
			},
			link: function (scope, ele, attrs, controller) {

				ele.bind('click', function () {
					ele.css('color',scope.color || 'red');
				});
			}
		}
		
	}

})