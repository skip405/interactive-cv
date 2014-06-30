'use strict';

var cvApp = angular.module('cvApp');

cvApp.controller('TechnologiesCtrl', function ($scope, Projects) {
    $scope.projects = Projects.projects;
});