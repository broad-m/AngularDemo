(function () {

    "use strict";

    require.config({
        baseUrl: "./",
        paths: {
            "jquery": ["//cdn.bootcss.com/jquery/1.12.4/jquery.min"],
            "jquery.form": ["//cdn.bootcss.com/jquery.form/4.2.1/jquery.form.min"],
            'particleground':['lib/particleground/jquery.particleground.min'],
            'perfectScrollbar':['lib/perfect-scrollbar/js/perfect-scrollbar.min'],
            "angular": ["//cdn.bootcss.com/angular.js/1.5.11/angular.min"],
            "ngAnimate":["//cdn.bootcss.com/angular.js/1.5.11/angular-animate.min"],
            "ngTouch":["//cdn.bootcss.com/angular.js/1.5.11/angular-touch.min"],
            'me-pageloading':['lib/angular/me-pageloading/me-pageloading.min'],
            'snap.svg':['lib/angular/Snap.svg/dist/snap.svg-min'],
            "ui.router": ["lib/angular/angular-ui-router"],
            "ui.bootstrap": ["lib/angular/ui-bootstrap-tpls-2.5.0.min"],
            "ocLazyLoad": ["lib/angular/ocLazyLoad/ocLazyLoad.require"],
            'app':['scripts/app'],
            'chart':['lib/chart.js/Chart'],
            'angularChart':['lib/angular/angular-chart/angular-chart'],
            'vue':['lib/vue/vue.min']
        },
        shim: {
            'jquery.form':['jquery'],
            'particleground':['jquery'],
            'angular':{
                exports:'angular'
            },
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




