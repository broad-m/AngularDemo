define(["angular", "ui.router", 'ocLazyLoad', 'ngAnimate', 'ngTouch', 'ui.bootstrap'], function (angular) {

    var app = angular.module('MainApp', ['ui.router', 'oc.lazyLoad', 'ngAnimate', 'ngTouch', 'ui.bootstrap']);

    app.config(Config);
    app.constant('ocLazyLoadModules', {
        modules: [
            {
                name: 'AboutController',
                files: ['scripts/controllers/AboutController.js']
            },
            {
                name: 'ChartController',
                files: ['scripts/controllers/ChartController.js']
            },
            {
                name: 'MainController',
                files: ['scripts/controllers/MainController.js']
            },
            {
                name: 'MessageController',
                files: ['scripts/controllers/MessageController.js']
            },
            {
                name: 'ProfileController',
                files: ['scripts/controllers/ProfileController.js']
            },
            {
                name: 'ui.bootstrap',
                files: ['lib/angular/ui-bootstrap-tpls-2.5.0.min.js']
            },
            {
                name: 'ngAnimate',
                files: ['//cdn.bootcss.com/angular.js/1.5.11/angular-animate.min.js']
            },
            {
                name: 'ngTouch',
                files: ['//cdn.bootcss.com/angular.js/1.5.11/angular-touch.min.js']
            },
            {
                name: 'ngFileUpload',
                files: ['lib/angular/ng-file-upload/ng-file-upload-all.min.js']
            },
            {
                name: 'angularChart',
                files: ['lib/angular/angular-chart/angular-chart.js']
            },
            {
                name: 'chart',
                files: ['lib/chart.js/Chart.js']
            }

        ]
    });
    app.run(Run);
    app.factory('UserInfoFactory', function () {
        return {
            username: 'tom',
            age: 24
        }
    });
    app.provider('Noonger', function () {
        this.$get = function() {
            return{
                username:'noonger'
            }
        };
    });
    app.decorator('Noonger', function ($delegate) {
        $delegate.age=24;
        return $delegate;
    });


    //Run
    Run.$inject = ["$rootScope"];
    function Run($rootScope) {
        $rootScope.controllerName = "MainApp_$rootScope";

        //particleground
        require(['jquery', 'particleground'], function () {
            $(document.body).particleground && $(document.body).particleground({
                dotColor: '#05c69b',
                lineColor: '#05c69b'
            });
        });

        //perfectScrollbar
        require(['perfectScrollbar'], function (Ps) {
            var container = document.getElementById('containerBox');
            Ps.initialize(container);
            Ps.update(container);
        });


    }


    //Router Config
    Config.$inject = ["$stateProvider", "$urlRouterProvider", '$ocLazyLoadProvider', 'ocLazyLoadModules'];
    function Config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, ocLazyLoadModules) {


        $ocLazyLoadProvider.config({
            debug: true,
            modules: ocLazyLoadModules.modules
        });

        $stateProvider
            .state("app", {
                abstract: true,
                url: "/app",
                templateUrl: '/AngularDemo/views/app.html',
                controller: function ($scope) {
                    $scope.controllerName = 'AppController';
                    var vm = this;
                    vm.controllerName = 'AppController';
                },
                controllerAs: 'vm'
            })
            .state("app.main", {
                url: ".main",
                templateUrl: "/AngularDemo/views/main.html",
                resolve: {
                    MainController: function ($ocLazyLoad) {
                        return $ocLazyLoad.load('MainController');
                    }
                },
                controller: 'MainController',
                controllerAs: "vm"
            })
            .state("app.profile", {
                url: ".profile",
                templateUrl: "/AngularDemo/views/profile.html",
                resolve: {
                    ProfileController: function ($ocLazyLoad) {
                        return $ocLazyLoad.load('ProfileController');
                    }
                },
                controller: 'ProfileController',
                controllerAs: "vm"


            })
            .state("app.message", {
                url: ".message",
                templateUrl: "/AngularDemo/views/message.html",
                resolve: {
                    MessageController: function ($ocLazyLoad) {
                        return $ocLazyLoad.load('MessageController');
                    }
                },
                controller: 'MessageController',
                controllerAs: "vm"
            })
            .state("app.about", {
                url: ".about",
                templateUrl: "/AngularDemo/views/about.html",
                resolve: {
                    AboutController: function ($ocLazyLoad) {
                        return $ocLazyLoad.load('AboutController');
                    }
                },
                controller: 'AboutController',
                controllerAs: "vm"
            })
            .state("app.chart", {
                url: ".chart",
                templateUrl: "/AngularDemo/views/chart.html",
                resolve: {
                    AboutController: function ($ocLazyLoad) {
                        return $ocLazyLoad.load('ChartController');
                    }
                },
                controller: 'ChartController',
                controllerAs: "vm"
            });
        $urlRouterProvider.otherwise("/app.main");
    }


    //手动启动angular
    angular.element(document).ready(function () {
        angular.bootstrap(window.document, ['MainApp']);
        angular.element(document).find('html').attr('ng-app', 'MainApp');
    });


});




