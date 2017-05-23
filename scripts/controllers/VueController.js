

define(['angular'], function (angular) {

    angular
        .module('MainApp')
        .controller('VueController',VueController);

    VueController.$inject=['$scope'];
    function VueController($scope){

        $scope.controllerName="VueController";

        var vm=this;

        vm.showVue= function () {
            new Vue({
                el: '#vue',
                data: {
                    message: 'Hello Vue!'
                }
            });
            // require(['vue'], function (Vue) {
            //
            //
            // });
        };



    }
})