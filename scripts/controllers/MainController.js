define(['angular'], function (angular) {
	//noinspection JSUnresolvedVariable
	angular
		.module('MainApp')
		.controller('MainController', MainController);

	MainController.$inject = ['$scope', '$ocLazyLoad', '$uibModal', '$timeout', '$http'];

	return MainController;

	function MainController($scope, $ocLazyLoad, $uibModal, $timeout, $http) {

		$scope.controllerName = "MainController";
		$scope.file = null;

		var vm = this;
		vm.name = 'MainController';
		vm.userInfo = null;
		vm.uploadedImagePath = null;

		vm.openModal = function (templateUrl, controllerFunc, size) {

			var modalInstance = $uibModal.open({
				templateUrl: templateUrl || 'views/modals/main_modal.html',
				controller: controllerFunc || function ($scope, $uibModalInstance) {
					$scope.controllerName = 'ModalController';
					var vm = this;
					vm.items = (function () {
						var items = [];
						for (var i = 0; i < 5; i++) {
							items.push('item' + i);
						}
						return items;
					}());
					vm.selected = {item: null};

					vm.ok = function () {
						$uibModalInstance.close({
							name: 'tom', age: 23
						});
					};

					vm.cancel = function () {
						$uibModalInstance.dismiss();
					};
				},
				controllerAs: 'vm',
				size: size || 'lg'
			});

			modalInstance.result.then(function (obj) {
				console.clear();
				console.log(obj);
				vm.userInfo = obj;
			}, function () {
				//console.log('Modal dismissed at: ' + new Date());
			});


		};

		vm.loadNgFileUpload = function () {
			$ocLazyLoad.load('ngFileUpload').then(function () {

			});
		};

		vm.upload = function (file, Upload) {
			//if(!file){return false;}
			file = file || {};
			file.upload = Upload.upload({
				url: '/WebApp/Upload/FileUpload',
				data: {username: 'tom', file: file},
			});

			file.upload.then(function (response) {
				$timeout(function () {
					console.log(response.data);
					vm.uploadedImagePath = response.data;

				});
			}, function (response) {
				if (response.status > 0)
					$scope.errorMsg = response.status + ': ' + response.data;
			}, function (evt) {
				// Math.min is to fix IE which reports 200% sometimes
				file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});
		};

		vm.startUpload = function (event) {
			event.preventDefault();

			$ocLazyLoad.load('ngFileUpload').then(function () {

				var UploadController = function ($scope, $uibModalInstance) {
					$scope.controllerName = 'FileUploadController';

					$scope.uploadPic = function (file) {
						console.log(file);

						var injector = angular.injector(['ng', 'ngFileUpload']);
						var uploadService = injector.get('Upload');
						vm.upload(file, uploadService);
					}


					$scope.ok = function () {
						$uibModalInstance.close({
							name: 'tom', age: 23
						});
					};

					$scope.cancel = function () {
						$uibModalInstance.dismiss();
					};


				};
				vm.openModal('views/ngFileUpload.html', UploadController);
			});


		};


		vm.localPostDemo = function () {
			$http.post('/WebApp/Upload/FileUpload', {username: 'tom', age: 24}).then(function (obj) {
				console.log(obj);
			}, function (error) {
				console.log('err', error);
			})
		}


		vm.injectDemo = function () {


			var $injector = angular.injector(['ng', 'MainApp']);



			function explicit(UserInfoFactory) {
				console.log(UserInfoFactory);
			}

			explicit.$inject = ['UserInfoFactory'];

			var hasUserInfoFactory = $injector.has('UserInfoFactory');
			if (hasUserInfoFactory) {
				$injector.invoke(explicit);
				console.log($injector.annotate(explicit));
			}


		};


	}
})
