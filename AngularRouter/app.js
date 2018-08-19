// app.js

// define our application and pull in ngRoute and ngAnimate
angular.module('amarApp', ['ngRoute', 'ngAnimate'])

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
.config(function($routeProvider,$locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'pages/main-page.htm',
            controller: 'main-page-controller'
        })

        // about page
        .when('/first-page', {
            templateUrl: 'pages/first-page.htm',
            controller: 'first-page-controller'
        })

        // contact page
        .when('/second-page', {
            templateUrl: 'pages/second-page.htm',
            controller: 'second-page-controller'
        });

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
})

// CONTROLLERS ============================================
// home page controller
.controller('main-page-controller', function($scope) {
    $scope.pageClass = 'main-page';
})

// about page controller
.controller('first-page-controller', function($scope) {
    $scope.pageClass = 'first-page';
})

// contact page controller
.controller('second-page-controller', function($scope) {
    $scope.pageClass = 'second-page';
});