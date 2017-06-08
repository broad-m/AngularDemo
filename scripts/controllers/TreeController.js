define(['angular'], function (angular) {

	angular
		.module('MainApp')
		.controller('TreeController', TreeController);

	TreeController.$inject = ['$scope', '$http', '$ocLazyLoad'];

	function TreeController($scope, $http, $ocLazyLoad) {

		$scope.controllerName = "TreeController";

		var vm = this;

		vm.outlineCatalogJsonTree = null;

		vm.getOutlineCatalogByOutlineId = getOutlineCatalogByOutlineId;//根据大纲ID获取章节信息


		function getOutlineCatalogByOutlineId(outlineId) {
			outlineId = outlineId || '64A2F3B4-2ED9-447B-900D-A73800F1EF17';
			var model = {
				OutlineId: outlineId
			};
			$http.post("http://LightSpeedDemo.my71.com/api/UploadToXBFromPersonalSpace/GetAllOutlineCatalogByOutlineId", model).then(function (data) {
				console.log(data);

				if (data.data && data.data.Model && angular.isArray(data.data.Model.OutlineCatlogList)) {

					$ocLazyLoad.load('GenerateOutlineCatalogTree').then(function () {
						var injector = angular.injector(['ng','MainApp']);
						var GenerateOutlineCatalogTree = injector.get('GenerateOutlineCatalogTree');
						vm.outlineCatalogJsonTree = GenerateOutlineCatalogTree.ToJsonTree(data.data.Model.OutlineCatlogList);
					});


				}

			}, function (error) {
				console.log(error);
			})
		}

        require(['Mediator'], function (Mediator) {
            Mediator.subscribe('nameChange', function (args) {
                console.log(args, 'TreeController subscribe');
            },10086);
        });

	}

})