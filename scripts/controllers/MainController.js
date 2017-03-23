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

			explicit.$inject = ['UserInfoFactory'];
			function explicit(UserInfoFactory) {
				console.log(UserInfoFactory);
			}
			if ($injector.has('UserInfoFactory')) {
				$injector.invoke(explicit);
			}
			if($injector.has('$q')){
				var $q=$injector.get('$q');
				var defer=$q.defer();
				var promise=defer.promise;
				promise.then(function (data) {
					console.log(data);
				}, function (error) {
					console.log(error);
				});
				setTimeout(function(){
					defer.reject({error:'something errors'});
					//defer.resolve('resolved data');
				},1200);
			}
		};
		vm.dynamicCompile= function () {

			//delay inject a controller manually
			var app = angular.module('MainApp');
			app.register.controller('DynamicController', function ($scope) {
				$scope.controllerName='DynamicController';
			});


			var $div = $('<div ng-controller="DynamicController">123 <hr>{{controllerName}}</div>');
			$('#containerBox').append($div);

			angular.element(document).injector().invoke(function($compile) {
				var scope = angular.element($div).scope();
				$compile($div)(scope);
			});

		};
		vm.promiseDemo= function () {
			var $injector = angular.injector(['ng', 'MainApp']);

			if($injector.has('$q') && $injector.has('$http')){
				var $q=$injector.get('$q'),
					$http=$injector.get('$http');

				var p1=$http.get('data/test.json',{params:{a:1}});
				var p2=$http.get('data/test1.json',{params:{a:2}});
				var all =$q.all([p1,p2]);

				all.then(function (data) {
					console.log(data);
				}, function (error) {
					console.log(error);
				});

				var p = $q.when(p1, function(data){return data},
					function(data){return data});
				p.then(
					function(data){console.log(data)},
					function(data){console.log('error, ' + data)}
				);
			}
		}




	}
})
