

define(['angular'], function (angular) {

    angular
        .module('MainApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject=['$scope'];

    function ProfileController($scope){

        $scope.controllerName="ProfileController";

        var vm=this;
        vm.controllerName="ProfileController";
    }

})