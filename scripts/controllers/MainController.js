define(['angular'], function (angular) {
	//noinspection JSUnresolvedVariable
	angular
		.module('MainApp')
		.controller('MainController', MainController);

	MainController.$inject = ['$scope', '$ocLazyLoad', '$uibModal', '$injector', '$http'];
	function MainController($scope, $ocLazyLoad, $uibModal, $injector, $http) {

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
			$ocLazyLoad.load('').then(function () {

			});
		};


	}
})
