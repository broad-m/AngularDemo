define(['angular'], function (angular) {
	//noinspection JSUnresolvedVariable
	angular
		.module('MainApp')
		.controller('MainController', MainController);

	MainController.$inject = ['$scope', '$ocLazyLoad', '$uibModal', '$injector', '$compile'];
	function MainController($scope, $ocLazyLoad, $uibModal, $injector, $compile) {

		$scope.controllerName = "MainController";

		var vm = this;

		vm.lazyLoadService = function () {
			$ocLazyLoad.load('GenerateOutlineCatalogTree').then(function () {
				try {
					var GenerateOutlineCatalogTree = $injector.get('GenerateOutlineCatalogTree');
					console.clear();
					console.log(GenerateOutlineCatalogTree);
				}
				catch (e) {
					console.log(e);
				}

			});
		}

		vm.lazyLoadDirective= function () {
			$ocLazyLoad.load('clickToChangeColorDirective').then(function () {
				var appendEle = angular.element('<p click-to-change-color="blue">dynamic directives</p>');
				var fatherNode = document.getElementById('TestSection');
				angular.element(fatherNode).append($compile(appendEle)($scope));
			});
		};


	}
})
