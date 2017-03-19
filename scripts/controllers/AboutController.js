define(['angular', 'require'], function (angular, require) {

    angular
        .module('MainApp')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope', '$ocLazyLoad'];

    function AboutController($scope, $ocLazyLoad) {

        $scope.controllerName = "AboutController";

        var vm = this;
        vm.controllerName = "AboutController";
    }
})