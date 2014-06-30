'use strict';

var cvApp = angular.module('cvApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
]);

cvApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'views/main.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html'
        })
        .state('technologies', {
            url: '/technologies',
            templateUrl: 'views/technologies.html'
        })
        .state('technologies.item', {
            url: '/:item',
            templateUrl: 'views/technologies.item.html',
            controller: ['$scope', '$stateParams', 'Projects', function($scope, $stateParams, Projects){
                $scope.item = $stateParams.item;
                $scope.projects = Projects.getProjectsByTechnology( $stateParams.item );
            }]
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'views/projects.html'
        })
        .state('projects.item', {
            url: '/:item',
            templateUrl: 'views/projects.item.html',
            controller: ['$scope', '$stateParams', 'Projects', function($scope, $stateParams, Projects){
                $scope.item = Projects.getProjectBySlug( $stateParams.item );
            }]
        });
});