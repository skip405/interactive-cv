'use strict';

var cvApp = angular.module('cvApp');

cvApp.directive('project', function () {
    return {
        restrict: 'E',
        scope: {
            project: '=projectInfo'
        },
        templateUrl: 'views/directives/project.html'
    };
});