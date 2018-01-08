define(['angular'], function (angular) {

    angular
        .module('MainApp')
        .directive('clickToChangeColor', clickToChangeColor);

    clickToChangeColor.$inject = ['$rootScope'];

    function clickToChangeColor($rootScope) {

        return {
            restrict: 'A',
            replace: false,
            scope: {
                color: '@clickToChangeColor',
                name:'='
            },
            link: function (scope, ele, attrs, controller) {

                ele.bind('click', function () {
                    ele.css('color', scope.color || 'red');

                    scope.name='tom';
                    scope.$apply();
                    console.log(scope);
                });
            }
        }

    }

})