

define(['angular'], function (angular) {

    angular
        .module('MainApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject=['$scope'];

    function ProfileController($scope){

        $scope.controllerName="ProfileController";

        var vm=this;

        require(['jquery','jquery.form'], function ($) {

            $(function () {
                var form = $('#jqueryFormDemo');
                $('#submitBtn').click(function () {
                    form.ajaxSubmit();
                    return false;
                });


            });

        });


    }

})