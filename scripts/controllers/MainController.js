define(['angular'], function (angular) {
	//noinspection JSUnresolvedVariable
	angular
		.module('MainApp')
		.controller('MainController', MainController);

	MainController.$inject = ['$scope', '$ocLazyLoad', '$uibModal', '$injector', '$compile', '$http'];

	function MainController($scope, $ocLazyLoad, $uibModal, $injector, $compile, $http) {

		$scope.controllerName = "MainController";

		var ws;


		var vm = this;

		vm.lazyLoadService = function () {
			$ocLazyLoad.load('GenerateOutlineCatalogTree').then(function () {
				try {
					var GenerateOutlineCatalogTree = $injector.get('GenerateOutlineCatalogTree');
					console.clear();
					console.log(GenerateOutlineCatalogTree);
				} catch (e) {
					console.log(e);
				}

			});
		};

		vm.lazyLoadDirective = function () {
			$ocLazyLoad.load('clickToChangeColorDirective').then(function () {
				var appendEle = angular.element('<p click-to-change-color="blue" name="name">dynamic directives</p>');
				var fatherNode = document.getElementById('TestSection');
				angular.element(fatherNode).append($compile(appendEle)($scope));
			});
		};

		vm.lazyLoadBearNote = function () {
			$ocLazyLoad.load('bearNoteDirective').then(function () {
				var bearNoteSection = angular.element(document.getElementById('bearNoteSection'));
				$compile(bearNoteSection)($scope);
			});
		};

		vm.webSocket = function () {
			ws = new WebSocket('ws://localhost:1818');
			window.ws = ws;
			ws.onopen = function () {
				console.log('open');


			};

			ws.onmessage = function (event) {
				var dataStr = event.data;

				var jsonData = JSON.parse(dataStr)

				console.log(jsonData);
			};
		};


		vm.sendMsgBySocket = function (msg) {
			if (!wx) {
				return false;
			}

			wx.send(msg);
		};


		vm.ResourceNumStatisticSaveAsExcel = function () {

			var model = {
				"SchoolIdList": ["BFBBA4E6-C98A-4160-BCA4-540087FB1D89", "F899B66D-B7A9-4575-8B5F-2D6E47D03483", "941F8AC4-F79E-4978-9666-9869D86EAAAE"],
				"StartTime": "2017-06-01 00:00:00",
				"EndTime": "2018-09-01 00:00:00",
				"Pager": {
					"PageIndex": 0,
					"PageSize": 2
				}
			};


			model = {
				"SchoolIdList": ["BFBBA4E6-C98A-4160-BCA4-540087FB1D89", "F899B66D-B7A9-4575-8B5F-2D6E47D03483", "941F8AC4-F79E-4978-9666-9869D86EAAAE"],
				"StartTime": "2017-09-01 00:00:00",
				"EndTime": "2018-09-01 00:00:00",
				"Pager": {
					"PageIndex": 0,
					"PageSize": 2
				},
				"KeyWord": "hft"
			};

			var url0 = 'http://platformtestop.lqwawa.com/NewApi/DataStatisticsForOMS/ResourceNumStatisticSaveAsExcel';
			var url = 'http://platformtestop.lqwawa.com/NewApi/DataStatisticsForOMS/SchoolActivityDetailStatisticSaveAsExcel';

			require(['jquery', 'jquery-blob'], function ($) {
				$.ajax({
					type: 'POST',
					contentType: "application/json; charset=utf-8",
					dataType: "blob",
					data: JSON.stringify(model),
					url: url,
					success: function (data) {
						var blob = new Blob([data], {
							type: "application/vnd.ms-excel"
						});
						var objectUrl = URL.createObjectURL(blob);
						var aForExcel = $("<a><span class='forExcel'>下载excel</span></a>").attr("href", objectUrl).attr("download", "统计.xls");
						$("body").append(aForExcel);
						$(".forExcel").click();
						aForExcel.remove();
					}
				});
			});


			// $http.post("http://platformtestop.lqwawa.com/NewApi/DataStatisticsForOMS/ResourceNumStatisticSaveAsExcel", model, {
			// 		responseType: 'arraybuffer',
			// 		headers: {
			// 			charset: 'utf-8'
			// 		}
			// 	})
			// 	.success(function (data) {
			// 		require(['jquery'], function ($) {
			// 			var blob = new Blob([data], {
			// 				type: "application/vnd.ms-excel"
			// 			});
			// 			var objectUrl = URL.createObjectURL(blob);
			// 			var aForExcel = $("<a><span class='forExcel'>下载excel</span></a>").attr("href", objectUrl).attr("download", "统计.xls");
			// 			$("body").append(aForExcel);
			// 			$(".forExcel").click();
			// 			aForExcel.remove();

			// 		});
			// 	})
			// 	.error(function (error) {
			// 		alert(error)
			// 	});
		};


	}
})