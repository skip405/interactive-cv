'use strict';

var cvApp = angular.module('cvApp');

cvApp.controller('cvNavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var path = $location.path().substring(1),
            currentRoute = 'home',
            slashIndex = path.indexOf('/');

        if ( path != '' ) {
            currentRoute = slashIndex === -1 ? path : path.substring(0, slashIndex);
        }

//        if( slashIndex === -1 && '' != path ) {
//            currentRoute = path;
//        } else if( slashIndex > 0 ) {
//            currentRoute = path.substring(0, slashIndex);
//        }

        return page === currentRoute ? 'nav__item--active' : '';
    };
}]);