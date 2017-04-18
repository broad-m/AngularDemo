define(['angular'], function (angular) {

	angular
		.module('MainApp')
		.directive('clickToChangeColor',clickToChangeColor);

	function clickToChangeColor() {
		return{
			replace:false,
			scope:{

			},
			link: function (scope, ele, attrs, controller) {

				ele.bind('click', function () {
					ele.css('color','red');
				});
			}
		}
	}

})