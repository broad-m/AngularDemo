define(['angular'], function (angular) {

    angular
        .module('MainApp')
        .directive('bearNote', bearNote);

    bearNote.$inject = ['$rootScope','$timeout'];

    function bearNote($rootScope,$timeout) {

        return {
            restrict: 'E',
            replace: false,
            templateUrl:'views/bearNote.html',
            scope: {
                color: '@clickToChangeColor',
                name:'='
            },
            link: function (scope, ele, attrs, controller) {
                var index = 1;

                // 交换数组元素
                var swapItems = function (arr, index1, index2) {
                    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
                };

                scope.contentList=[];

                scope.fileUpload= function () {
                    $timeout(function () {
                        scope.contentList.push({
                            name:'tom'+index,
                            time:new Date().toJSON()
                        });
                        ++index;
                    },100)
                };

                //上移
                scope.toUp = function (index, $event) {
                    console.clear();
                    console.log(index);
                    console.log(scope.contentList);

                    $event.preventDefault();
                    if (index == 0) {
                        return false;
                    };

                    swapItems(scope.contentList, index, index - 1);
                }

                //下移
                scope.toDown = function (index, $event) {
                    console.clear();
                    console.log(index);
                    console.log(scope.contentList);

                    $event.preventDefault();
                    if (index >= scope.contentList.length - 1) {
                        return false;
                    };

                    swapItems(scope.contentList, index, index + 1);
                }

            }
        }

    }

})