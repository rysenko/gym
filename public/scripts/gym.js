angular.module('gym', ['ngRoute', 'ngResource', 'ngGrid']).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/clients', {
            templateUrl: 'views/clients.html',
            controller: 'ClientsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});