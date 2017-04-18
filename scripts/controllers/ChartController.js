define(['angular'], function (angular) {

	angular
		.module('MainApp')
		.controller('ChartController', ChartController);

	ChartController.$inject = ['$scope', '$ocLazyLoad', '$compile'];

	function ChartController($scope, $ocLazyLoad, $compile) {

		$scope.controllerName = "ChartController";

		var vm = this;

		vm.barChart = {chartDataInit: false};
		vm.horizontalChart = {chartDataInit: false};
		vm.lineChart = {chartDataInit: false};
		vm.pieChart = {chartDataInit: false};

		vm.showLineChart = function () {

			require(['chart'], function () {
				$ocLazyLoad.load('angularChart').then(function () {


					vm.lineChart.labels = ["一月", "二月", "三月", "四月", "五月", "六月", "七月"];
					vm.lineChart.series = ['A组', 'B组'];
					vm.lineChart.data = [
						[65, 59, 80, 81, 56, 55, 40],
						[28, 48, 40, 19, 86, 27, 90]
					];
					vm.lineChart.onClick = function (points, evt) {
						console.log(points, evt);
					};
					vm.lineChart.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
					vm.lineChart.options = {
						scales: {
							yAxes: [
								{
									id: 'y-axis-1',
									type: 'linear',
									display: true,
									position: 'left'
								},
								{
									id: 'y-axis-2',
									type: 'linear',
									display: true,
									position: 'right'
								}
							],
							lineTension: 0,
							tension: 0
						},
						lineTension: 0,
						tension: 0
					};
					vm.lineChart.chartDataInit = true;

					var line = angular.element(document.getElementById('line'));

					var scope = line.scope();
					$compile(line)(scope);


				});
			});
		};

		vm.showPieChart = function () {

			require(['chart'], function () {
				$ocLazyLoad.load('angularChart').then(function () {

					vm.pieChart.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
					vm.pieChart.data = [300, 500, 100];
					vm.pieChart.chartDataInit = true;
					vm.pieChart.options = {

						onClick: function (event, legendItem) {
							console.clear();
							console.log(event, legendItem);
						},
						hover: {
							timer: null,
							first: true,
							onHover: function (event, legendItem) {
								if (this.first == false) {
									return false;
								}
								console.clear();
								console.log(event, legendItem);
								//clearTimeout(this.timer);
								//this.timer = setTimeout(function () {
								//
								//}, 500);
								this.first = false;
							}
						}


					};

					var pie = angular.element(document.getElementById('pie'));
					$compile(pie)(pie.scope());


				});
			});
		};

		vm.showBarChart = function () {

			require(['chart'], function () {
				$ocLazyLoad.load('angularChart').then(function () {

					vm.barChart.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
					vm.barChart.series = ['Series A', 'Series B'];

					vm.barChart.data = [
						[65, 59, 80, 81, 56, 55, 40],
						[28, 48, 40, 19, 86, 27, 90]
					];

					vm.barChart.chartDataInit = true;
					var bar = angular.element(document.getElementById('bar'));
					$compile(bar)(bar.scope());


				});
			});
		};

		vm.showHorizontalBar = function () {

			require(['chart'], function () {
				$ocLazyLoad.load('angularChart').then(function () {

					//vm.horizontalChart
					vm.horizontalChart.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
					vm.horizontalChart.series = ['Series A', 'Series B'];

					vm.horizontalChart.data = [
						[65, 59, 80, 81, 56, 55, 40],
						[28, 48, 40, 19, 86, 27, 90]
					];
					vm.horizontalChart.chartDataInit = true;
					var base = angular.element(document.getElementById('base'));
					$compile(base)(base.scope());


				});
			});
		};
	}

})