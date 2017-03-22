define(['angular', 'require'], function (angular, require) {

    angular
        .module('MainApp')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope', '$ocLazyLoad'];

    function AboutController($scope, $ocLazyLoad) {

        var controllerName="AboutController";
        $scope.controllerName = controllerName;

        var vm = this;
        vm.controllerName = controllerName;

        vm.injectDemo= function () {

            //创建一个新的模块
            var app =angular.module('app',[]);
            app.controller('TempController', function ($scope) {
                $scope.controllerName='TempController';
            });

            var injector=angular.injector(['ng','app']),
                $controller=injector.get('$controller'),
                scope = injector.get('$rootScope').$new();
            $controller('TempController',{$scope:scope});

            require(['jquery'], function ($) {
                var $div = $('<div ng-controller="TempController">{{controllerName}}</div>');
                $('#containerBox').append($div);

                injector.invoke(function ($compile) {
                    $scope.$apply(function () {
                        var scope = angular.element($div).scope();
                        $compile($div)(scope);
                    })

                });
            });


        };
    }
})