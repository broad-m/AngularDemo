(function () {

    "use strict";

    require.config({
        baseUrl: "./",
        paths: {
            "jquery": ["lib/jquery/jquery.1.12.4.min"],
            "jquery.form": ["//cdn.bootcss.com/jquery.form/4.2.1/jquery.form.min"],
            'particleground':['lib/particleground/jquery.particleground.min'],
            'perfectScrollbar':['lib/perfect-scrollbar/js/perfect-scrollbar.min'],
            "angular": ["lib/angular/angular.1.5.11.min"],
            "ngAnimate":["lib/angular/angular-animate.min"],
            "ngTouch":["lib/angular/angular-touch.min"],
            'me-pageloading':['lib/angular/me-pageloading/me-pageloading.min'],
            'snap.svg':['lib/angular/Snap.svg/dist/snap.svg-min'],
            "ui.router": ["lib/angular/angular-ui-router"],
            "ui.bootstrap": ["lib/angular/ui-bootstrap-tpls-2.5.0.min"],
            "ocLazyLoad": ["lib/angular/ocLazyLoad/ocLazyLoad.require"],
            'app':['scripts/app'],
            'chart':['lib/chart.js/Chart'],
            'angularChart':['lib/angular/angular-chart/angular-chart'],
            'vue':['lib/vue/vue.min'],
            'createjs':['lib/createjs/easeljs-0.8.2.min'],
            'tweenjs':['lib/createjs/tweenjs-0.6.2.min'],
            'preloadjs':['lib/createjs/preloadjs-0.6.2.min'],
            'soundjs':['lib/createjs/soundjs-0.6.2.min'],
            'Utility':['scripts/common/utility']
        },
        shim: {
            'jquery.form':['jquery'],
            'particleground':['jquery'],
            'angular':{
                exports:'angular'
            },
            'createjs':{
                exports:'createjs'
            },
            'tweenjs':['createjs'],
            'preloadjs':['createjs'],
            'soundjs':['createjs'],
            'vue':{exports:'Vue'},
            'angularChart':['angular','chart'],
            'ngAnimate':['angular'],
            'ngTouch':['angular'],
            'ocLazyLoad':['angular'],
            "ui.router": ['angular'],
            "ui.bootstrap": ['angular','ngAnimate','ngTouch'],
            "me-pageloading": ['ui.router','snap.svg']
        }
    });

    require(['app']);

})();




