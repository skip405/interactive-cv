'use strict';

var cvApp = angular.module('cvApp');

cvApp.controller('MainCtrl', function ($scope) {
    $scope.toggleTechDetails = function(){
        $scope.showTech = !$scope.showTech;
    };
});