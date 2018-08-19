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
        })
        .otherwise({
          redirectTo: '/'
      });

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
})

// CONTROLLERS ============================================
// Main-page controller
.controller('main-page-controller', function($scope) {
    $scope.pageClass = 'main-page';
})

// First-page controller
.controller('first-page-controller', function($scope) {
    $scope.pageClass = 'first-page';
})

// Second-page controller
.controller('second-page-controller', function($scope) {
    $scope.pageClass = 'second-page';
})
// Nav menu
.controller('nav', function($scope, $location, $route) {

    $scope.links = [
        {source:'',title:'Main'},
        {source:'first-page',title:'First-page'},
        {source:'second-page',title:'Second-page'}
    ];

    //Nav menu .active class
    $scope.activePath = null;
    $scope.$on('$routeChangeSuccess', function(){
    $scope.activePath = $location.path();
  });

});


