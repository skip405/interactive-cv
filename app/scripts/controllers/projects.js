'use strict';

var cvApp = angular.module('cvApp');

cvApp.controller('ProjectsCtrl', function ($scope, Projects) {
    $scope.projects = Projects.projects;
});