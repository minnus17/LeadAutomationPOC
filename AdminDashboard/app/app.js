(function () {
    angular.module('samplespa', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngAria'])
    .config(function ($routeProvider) {
        $routeProvider           

        .when('/about', {
            templateUrl: '/app/pages/about/about.html',
            controller: 'aboutCtrl'
        })

        .when('/whitepapersubscription', {
            templateUrl: '/app/pages/whitepapersubscription/whitepapersubscription.html',
            controller: 'whitepapersubscriptionCtrl'
        })

        .when('/contact', {
            templateUrl: '/app/pages/contact/contact.html',
            controller: 'contactCtrl'
        })

        .when('/graph', {
            templateUrl: '/app/pages/graph/graph.html',
            controller: 'graphsCtrl'
        })
        .otherwise({ redirectTo: '/' });

    });
}());