
define(['angular'], function (angular) {

    //var customModule=angular.module('customModule',[]);
    //
    //customModule.controller('CustomController',CustomController);

    CustomController.$inject=['$rootScope','$scope','$timeout'];

    function CustomController($rootScope,$scope,$timeout) {
        console.log($rootScope);
        $rootScope.appName='CustomApp';
        $scope.controllerName='CustomController';
    }

    return CustomController;

})