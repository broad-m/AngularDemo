

define(['angular'], function (angular) {

    angular
        .module('MainApp')
        .controller('MessageController',MessageController);

    MessageController.$inject=['$scope'];

    return MessageController;

    function MessageController($scope){

        $scope.controllerName="MessageController";

        var vm=this;
        vm.controllerName="MessageController";
    }
})